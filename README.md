# 🚀 Haywood Technologies

A modern, high-performance landing page built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Features a full-stack marketing site with sections for features, pricing, testimonials, integrations, security, infrastructure, and more.

---

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.0.10 | React framework (App Router) |
| [React](https://react.dev/) | 19.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.1.9 | Utility-first styling |
| [Radix UI](https://www.radix-ui.com/) | Various | Accessible headless components |
| [Lucide React](https://lucide.dev/) | ^0.454.0 | Icon library |
| [Recharts](https://recharts.org/) | 2.15.4 | Data visualization |
| [Three.js / R3F](https://threejs.org/) | 0.183.2 / 9.5.0 | 3D graphics |
| [React Hook Form](https://react-hook-form.com/) | ^7.60.0 | Form management |
| [Zod](https://zod.dev/) | 3.25.76 | Schema validation |
| [next-themes](https://github.com/pacocoursey/next-themes) | ^0.4.6 | Dark/light mode |
| [Vercel Analytics](https://vercel.com/analytics) | 1.3.1 | Site analytics |
| [pnpm](https://pnpm.io/) | Latest | Package manager |

---

## 📁 Project Structure

```
haywood-technologies/
├── app/                        # Next.js App Router
│   ├── globals.css             # Global styles & CSS variables
│   ├── layout.tsx              # Root layout (fonts, theme, analytics)
│   └── page.tsx                # Home page (assembles all sections)
├── components/
│   ├── landing/                # Landing page section components
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── infrastructure-section.tsx
│   │   ├── metrics-section.tsx
│   │   ├── integrations-section.tsx
│   │   ├── security-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer-section.tsx
│   ├── ui/                     # Reusable shadcn/ui components
│   └── theme-provider.tsx      # Theme context provider
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── styles/                     # Additional stylesheets
├── public/                     # Static assets
├── .gitignore
├── components.json             # shadcn/ui configuration
├── next.config.mjs             # Next.js configuration
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── requirements.txt            # Human-readable dependency reference
└── tsconfig.json               # TypeScript configuration
```

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `>= 18.17.0` — [Download](https://nodejs.org/)
- **pnpm** `>= 8.0.0` — This project uses `pnpm` as its package manager

### Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

Verify your versions:

```bash
node -v
pnpm -v
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/haywood-technologies.git
cd haywood-technologies
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server with hot-reload at `localhost:3000` |
| `pnpm build` | Build the optimized production bundle |
| `pnpm start` | Start the production server (requires `pnpm build` first) |
| `pnpm lint` | Run ESLint to check for code issues |

---

## 🔧 Environment Variables

This project does not currently require any environment variables for local development.

If you add integrations (e.g., CMS, email, database), create a `.env.local` file in the root:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add your keys below
```

> ⚠️ **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment:

1. Push your code to GitHub / GitLab / Bitbucket.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — click **Deploy**.

### Build for self-hosting

```bash
pnpm build
pnpm start
```

The production server starts at **[http://localhost:3000](http://localhost:3000)**.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary and confidential. © 2026 Haywood Technologies. All rights reserved.
