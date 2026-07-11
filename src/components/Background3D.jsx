import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Torus, Icosahedron, Box, Sphere } from '@react-three/drei';

const ParticleSun = ({ mouse }) => {
  const pointsRef = useRef();
  
  // Generate 800 perfectly aligned points on a sphere surface
  const { positions, originalPositions } = useMemo(() => {
    const count = 1000;
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Perfect Fibonacci sphere distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const r = 1.5; // Fixed radius for perfect alignment
      
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return { positions: pos, originalPositions: orig };
  }, []);

  const previousMousePos = useRef(new THREE.Vector3());
  const mouseVelocity = useRef(new THREE.Vector3());

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Slowly rotate the entire sun
    pointsRef.current.rotation.y = time * 0.1;
    pointsRef.current.rotation.x = time * 0.05;

    // Convert mouse NDC to 3D world position at Z=0 plane
    const vec = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
    vec.unproject(state.camera);
    const dir = vec.sub(state.camera.position).normalize();
    const distance = -state.camera.position.z / dir.z;
    const mousePos = state.camera.position.clone().add(dir.multiplyScalar(distance));

    const positions = pointsRef.current.geometry.attributes.position.array;
    
    // Local mouse position relative to the rotating sun
    const localMousePos = mousePos.clone().applyEuler(new THREE.Euler(-pointsRef.current.rotation.x, -pointsRef.current.rotation.y, 0));

    for (let i = 0; i < positions.length; i += 3) {
      const origX = originalPositions[i];
      const origY = originalPositions[i + 1];
      const origZ = originalPositions[i + 2];
      
      // Calculate distance from local mouse position to this particle
      const dx = origX - localMousePos.x;
      const dy = origY - localMousePos.y;
      const dz = origZ - localMousePos.z;
      const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
      
      // Disturbance logic: repel particles away from cursor
      const disturbanceRadius = 2.5;
      let targetX = origX;
      let targetY = origY;
      let targetZ = origZ;

      if (dist < disturbanceRadius) {
        // Push outward away from mouse (repel)
        const force = (disturbanceRadius - dist) * 0.8;
        targetX += (dx / dist) * force;
        targetY += (dy / dist) * force;
        targetZ += (dz / dist) * force;
      }
      
      // Lerp particle to target
      positions[i] = THREE.MathUtils.lerp(positions[i], targetX, 0.1);
      positions[i + 1] = THREE.MathUtils.lerp(positions[i + 1], targetY, 0.1);
      positions[i + 2] = THREE.MathUtils.lerp(positions[i + 2], targetZ, 0.1);
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ff5722" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
};

const OrbitingPlanet = ({ children, radius, speed, yOffset }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime * speed;
      // Orbit in a circle around Y axis
      ref.current.position.x = Math.cos(time) * radius;
      ref.current.position.z = Math.sin(time) * radius;
      ref.current.position.y = yOffset + Math.sin(time * 2) * 0.5; // slight bobbing
      
      // Self rotation
      ref.current.rotation.x = time;
      ref.current.rotation.y = time * 1.5;
    }
  });

  return <group ref={ref}>{children}</group>;
};

const DartShipProgressIndicator = () => {
  const ref = useRef();
  const flipRef = useRef();
  const shipRef = useRef();
  const scrollProgress = useRef(0);
  const previousScroll = useRef(0);
  const scrollDirection = useRef(1); // 1 for down/right, -1 for up/left
  const { viewport } = useThree();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress.current = scrollY / maxScroll;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const currentScroll = scrollProgress.current;
      const scrollDelta = currentScroll - previousScroll.current;
      
      // Determine direction (require a tiny threshold to prevent jitter)
      if (scrollDelta > 0.001) scrollDirection.current = 1;
      else if (scrollDelta < -0.001) scrollDirection.current = -1;
      
      previousScroll.current = currentScroll;

      // Calculate horizontal bounds using viewport
      const leftX = -(viewport.width / 2) + 1.5;
      const rightX = (viewport.width / 2) - 1.5;
      
      // Target position based on scroll (Horizontal movement)
      const targetX = leftX + (currentScroll * (rightX - leftX));
      
      // Create a beautiful sweeping flight trajectory (Parabola)
      const arc = Math.sin(currentScroll * Math.PI);
      
      // Starts at the bottom, jumps UP by 4 units in the middle, goes back down
      const baseY = -(viewport.height / 2) + 1.5;
      const targetY = baseY + (arc * 4); 
      
      // Smooth lerp for flying feel
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, targetY, 0.1);
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, 0.1);
      
      // Calculate the slope of the trajectory to physically pitch the nose of the ship
      const slope = Math.cos(currentScroll * Math.PI);
      
      // Pitch the entire group UP or DOWN based on the slope of the trajectory
      ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, slope * 0.6, 0.1);
      
      // Floating bobbing effect
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 3) * 0.005;
      
      if (flipRef.current) {
        // Smoothly flip the ship 180 degrees if flying backwards
        const targetFlip = scrollDirection.current === 1 ? 0 : Math.PI;
        flipRef.current.rotation.y = THREE.MathUtils.lerp(flipRef.current.rotation.y, targetFlip, 0.1);
      }

      if (shipRef.current) {
        // Roll/Bank the ship into the turn based on the trajectory arc + gentle bobbing
        shipRef.current.rotation.x = (-slope * 0.5) + (Math.sin(state.clock.elapsedTime * 2) * 0.1);
      }
    }
  });

  return (
    <group ref={ref} position={[0, 0, 0]} scale={0.25}>
      {/* Wrapper group to handle flipping the ship's direction */}
      <group ref={flipRef}>
        {/* Ship container rotated to face RIGHT (+X axis) */}
        <group ref={shipRef} rotation={[0, 0, -Math.PI / 2]}>
        
        {/* Main Fuselage (Sleek aerodynamic cone) */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[0.25, 3.5, 32]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Dark Glass Cockpit */}
        <mesh position={[0, 0.8, 0.15]} rotation={[-Math.PI / 32, 0, 0]}>
          <capsuleGeometry args={[0.12, 1, 16, 16]} />
          <meshStandardMaterial color="#0a192f" metalness={1} roughness={0.1} transparent opacity={0.9} />
        </mesh>
        
        {/* Swept Delta Wings (Stealth Bomber style) */}
        <mesh position={[0, -0.6, 0]} scale={[1, 1.2, 0.05]} rotation={[0, Math.PI / 4, 0]}>
          {/* A 4-sided cone scaled flat on Z axis makes a perfect aerodynamic diamond/delta wing! */}
          <coneGeometry args={[1.5, 1.5, 4]} />
          <meshStandardMaterial color="#121619" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Glowing Thruster Engine Core */}
        <mesh position={[0, -1.2, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#ff5722" emissive="#ff5722" emissiveIntensity={4} />
        </mesh>
        
        {/* Engine Exhaust Plume */}
        <mesh position={[0, -2, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.3, 1.5, 16]} />
          <meshStandardMaterial color="#ff5722" emissive="#ff5722" emissiveIntensity={2} transparent opacity={0.7} />
        </mesh>
        
        {/* Side Wing Tip Lasers/Lights */}
        <mesh position={[1.05, -1, 0.1]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={3} />
        </mesh>
        <mesh position={[-1.05, -1, 0.1]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={3} />
        </mesh>

      </group>
      </group>
    </group>
  );
};

const Background3D = () => {
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Layer: Behind all text and content */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <fog attach="fog" args={['#0a192f', 5, 50]} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ff5722" />
          <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#94a3b8" />
          
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          
          {/* Central Particle Sun */}
          <ParticleSun mouse={mouse} />
          
          {/* Orbiting Planets */}
          <OrbitingPlanet radius={4} speed={0.3} yOffset={1}>
            <Icosahedron args={[0.8, 0]}>
              <meshStandardMaterial color="#ff5722" wireframe />
            </Icosahedron>
          </OrbitingPlanet>
          
          <OrbitingPlanet radius={5.5} speed={-0.2} yOffset={-1}>
            <Torus args={[0.8, 0.2, 16, 50]}>
              <meshStandardMaterial color="#121619" metalness={0.9} roughness={0.1} />
            </Torus>
          </OrbitingPlanet>
          
          <OrbitingPlanet radius={3.5} speed={0.4} yOffset={-1.5}>
            <Box args={[0.6, 0.6, 0.6]}>
              <meshStandardMaterial color="#e2e8f0" wireframe opacity={0.3} transparent />
            </Box>
          </OrbitingPlanet>
          
          <OrbitingPlanet radius={6} speed={0.15} yOffset={2}>
            <Icosahedron args={[0.5, 0]}>
              <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.4} />
            </Icosahedron>
          </OrbitingPlanet>
          
          {/* Sleek Dart Fighter Progress Indicator (Now flies behind text) */}
          <DartShipProgressIndicator />
        </Canvas>
      </div>
    </>
  );
};

export default Background3D;
