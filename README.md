# Narendrapurapu Bala Sri Rajesh - Personal Portfolio Website

A fully responsive, animated personal portfolio website built from scratch using React, Vite, Three.js, and Vanilla CSS. It showcases my experience as an App Developer and Full-Stack Software Engineer.

## Live Project Link
🔗 **Live Deployed URL:** [https://bala-sri-rajesh-portfolio.vercel.app](https://bala-sri-rajesh-portfolio.vercel.app) *(Note: Connect your Vercel project to deploy)*

## Features
- **Responsive Grid System:** Adapts flawlessly across Mobile (375px), Tablet (768px), and Desktop (1280px) viewports with no overflow.
- **3D Background Canvas:** Powered by Three.js (React Three Fiber & Drei), featuring Fibonacci sphere distribution particles, orbiting planets, and a scroll-tracked Dart Fighter flight indicator.
- **On-Scroll Animations:** Lightweight, custom Intersection Observer-based entrance animations (`ScrollReveal`) animating only `transform` and `opacity` for peak performance.
- **Parallax Scrolling Effect:** Subtle multi-layered background orbs moving at different rates relative to the user's scroll speed.
- **Bento Box Skill Categories:** Visual presentation of programming languages, frameworks, databases, and DevOps tools.
- **Optimal Assets:** Optimized hero and portrait images (`me.webp`) scaled and compressed under 50KB to maximize load times and Lighthouse performance.
- **A11y/Accessibility Compliant:** Fully respects the operating system's `prefers-reduced-motion` settings, immediately showing static content and disabling transitions.
- **SEO Ready:** Includes proper semantic HTML structure, headings hierarchy, viewport meta tags, and descriptive meta tags.

## Tech Stack
- **Frontend Core:** React 19, Vite
- **Styling:** Custom Vanilla CSS (with responsive grid layouts, custom cursors, and blur backdrops)
- **3D Rendering & Animation:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons:** `react-icons`

---

## Getting Started Locally

Follow these steps to run the portfolio on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (Node 18+ recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/balasrirajesh/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will start locally. Open the URL shown in your terminal (typically `http://localhost:5173`).

### 4. Build for Production
To bundle the project and inspect the production asset sizes:
```bash
npm run build
```
The output will be built inside the `/dist` directory.

### 5. Preview the Production Build
```bash
npm run preview
```

---

## Deployment to Vercel (Recommended)

1. Sign in to your [Vercel Account](https://vercel.com).
2. Click **Add New** > **Project** and import your public GitHub repository.
3. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
