# Launcher Website

A modern, fully-functional website for the Launcher application built with Next.js 16, React 19, and Tailwind CSS.

## Features

- **Modern Design**: Clean black/white/gray theme matching the launcher application
- **Fully Functional**: All buttons and forms are working
- **Responsive**: Mobile-first design that works on all devices
- **5 Pages**:
  - Home: Landing page with hero and features
  - Features: Detailed feature showcase
  - Download: Download options for all platforms with versions
  - Docs: Comprehensive documentation with expandable sections
  - Support: Support channels and working contact form

## Project Structure

```
web/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── page.tsx            # Home page
│   ├── features/
│   │   └── page.tsx        # Features page
│   ├── download/
│   │   └── page.tsx        # Download page
│   ├── docs/
│   │   └── page.tsx        # Documentation page
│   └── support/
│       └── page.tsx        # Support page
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   └── Footer.tsx          # Footer with links and social icons
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── next.config.mjs
```

## Getting Started

### Prerequisites

- Node.js 18+ or bun
- npm, yarn, pnpm, or bun

### Installation

```bash
cd web
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm run start
```

## Design System

### Colors
- Primary: #030303 (Almost black background)
- Secondary: #0a0a0a (Slightly lighter sections)
- Tertiary: #111111 (Card hover state)
- Border: #1a1a1a (Border color)
- Text: #ffffff (White text)
- Text Secondary: #999999 (Gray text)

### Typography
- Font: system-ui (system default fonts)
- No decorative fonts or glow effects
- Clean, minimal aesthetic

## Features Implemented

### Navbar
- Fixed header with logo
- Navigation links to all pages
- Mobile hamburger menu
- Download button in header

### Footer
- Links organized by sections (Product, Community, Legal)
- Social media icons (GitHub, Twitter, Email)
- Copyright information

### Home Page
- Hero section with CTA buttons
- Feature grid (6 features)
- System requirements box
- Call-to-action section

### Features Page
- Main features grid
- Detailed feature sections
- Benefits and points for each feature
- Alternating layout for visual interest

### Download Page
- Platform cards (Windows, macOS, Linux)
- Multiple version options per platform
- Installation guide (3 steps)
- System requirements (minimum & recommended)
- Additional downloads (source code, release notes)

### Docs Page
- Expandable accordion sections
- 6 documentation topics
- Quick help links
- GitHub issues link

### Support Page
- 3 support channels (Email, Discord, GitHub)
- Fully functional contact form
- Form submission handling
- 6 FAQs
- Form validation

## Styling

The website uses Tailwind CSS with a custom configuration matching the launcher's theme. All components are responsive and mobile-first.

### Key Style Features
- No glow effects or decorative shadows
- Clean borders with opacity changes on hover
- Smooth transitions (0.2s ease)
- Consistent spacing and sizing
- Accessible color contrasts

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Deployment

The website is ready to be deployed on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd web
vercel
```

## License

MIT License - Same as the main Launcher project
