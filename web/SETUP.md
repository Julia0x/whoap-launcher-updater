# Launcher Website Setup Guide

This guide will help you set up and run the Launcher website locally.

## Prerequisites

Make sure you have the following installed:
- Node.js 18.0.0 or higher
- npm, pnpm, yarn, or bun (node package manager)

Check your versions:
```bash
node --version
npm --version
```

## Installation Steps

### 1. Navigate to the Web Directory

```bash
cd web
```

### 2. Install Dependencies

Choose one of the following based on your preferred package manager:

**Using npm:**
```bash
npm install
```

**Using pnpm:**
```bash
pnpm install
```

**Using yarn:**
```bash
yarn install
```

**Using bun:**
```bash
bun install
```

### 3. Create Environment File

Copy the example environment file and update it if needed:

```bash
cp .env.example .env.local
```

The `.env.local` file is for local development. You can leave it as-is for basic development.

## Development

### Start Development Server

**Using npm:**
```bash
npm run dev
```

**Using pnpm:**
```bash
pnpm dev
```

**Using yarn:**
```bash
yarn dev
```

**Using bun:**
```bash
bun run dev
```

The website will be available at: **http://localhost:3000**

Hot Module Replacement (HMR) is enabled, so changes to your code will reflect immediately in the browser.

## Building for Production

### Create Production Build

**Using npm:**
```bash
npm run build
```

**Using pnpm:**
```bash
pnpm build
```

**Using yarn:**
```bash
yarn build
```

**Using bun:**
```bash
bun run build
```

### Run Production Build Locally

**Using npm:**
```bash
npm run start
```

**Using pnpm:**
```bash
pnpm start
```

**Using yarn:**
```bash
yarn start
```

**Using bun:**
```bash
bun start
```

The production build will be available at: **http://localhost:3000**

## Project Structure

```
web/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout (navbar, footer)
│   ├── globals.css          # Global styles
│   ├── page.tsx             # Home page
│   ├── features/page.tsx    # Features page
│   ├── download/page.tsx    # Download page
│   ├── docs/page.tsx        # Documentation page
│   └── support/page.tsx     # Support page
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── Newsletter.tsx      # Newsletter subscription
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── README.md               # Project documentation
```

## Pages Overview

### Home Page (/)
- Hero section with CTA buttons
- Feature showcase grid
- System requirements
- Newsletter subscription
- Call-to-action section

### Features Page (/features)
- Main features overview
- Detailed feature sections
- Benefits and capabilities

### Download Page (/download)
- Platform-specific download cards
- Multiple version options
- Installation guide
- System requirements
- Additional downloads

### Docs Page (/docs)
- Expandable documentation sections
- Getting started guide
- Instance management
- Mod management
- Account management
- Troubleshooting

### Support Page (/support)
- Support channels
- Fully functional contact form
- Frequently Asked Questions
- Community links

## Features

### Fully Functional Components
- **Navbar**: Mobile-responsive navigation with hamburger menu
- **Footer**: Multi-column footer with links and social icons
- **Forms**: Working contact form with validation
- **Newsletter**: Email subscription form
- **Accordion**: Expandable documentation sections
- **Dropdown**: Mobile menu in navbar

### Design System
- **Colors**: Black (#030303), whites, and grays
- **No glow effects**: Clean, minimal aesthetic
- **Responsive**: Mobile-first design
- **Smooth transitions**: 0.2s ease for all interactive elements

## Customization

### Update Logo
Edit the logo in `components/Navbar.tsx` and `components/Footer.tsx`:
```tsx
<div className="w-8 h-8 bg-secondary border border-border rounded flex items-center justify-center text-sm font-bold">
  L
</div>
```

### Update Colors
Modify `tailwind.config.ts`:
```ts
colors: {
  primary: '#030303',
  secondary: '#0a0a0a',
  // ... other colors
}
```

### Add New Pages
1. Create a new folder in `app/` with a `page.tsx` file
2. The file will automatically become a route based on the folder name

### Update Content
All content is in the individual page files. You can easily update text, links, and images.

## Testing

### Check for TypeScript Errors
```bash
npm run build
```

### Test Links
All navigation links are functional and point to the correct pages:
- Home: `/`
- Features: `/features`
- Download: `/download`
- Docs: `/docs`
- Support: `/support`

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts** to connect your GitHub account and deploy

### Deploy to Other Platforms

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**Other Hosts:**
The site can be deployed to any Node.js hosting platform (Heroku, AWS, DigitalOcean, etc.)

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear the Next.js cache:
```bash
rm -rf .next
npm run build
```

### Module Not Found Errors
Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

## Performance

The website is optimized for performance:
- Next.js static generation
- CSS optimization with Tailwind
- Minimal JavaScript bundle
- Responsive images
- Fast page load times

## Support

For issues or questions:
1. Check the README.md
2. Review the Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com/docs
4. Create an issue on GitHub

## License

MIT License - Same as the main Launcher project
