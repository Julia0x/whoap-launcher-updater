# Components Documentation

Complete guide to all reusable components in the Launcher website.

## Overview

Components are located in `components/` directory and are used throughout the pages.

## Available Components

### 1. Navbar

**Location:** `components/Navbar.tsx`

**Features:**
- Fixed header navigation
- Logo with branding
- Navigation links to all pages
- Mobile hamburger menu
- Download button
- Responsive design

**Usage:**
```tsx
import Navbar from '@/components/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* content */}
    </>
  )
}
```

**Props:** None (uses internal state)

**Customization:**
- Logo: Edit the logo div
- Links: Edit `navLinks` array
- Colors: Uses Tailwind classes

---

### 2. Footer

**Location:** `components/Footer.tsx`

**Features:**
- Multi-column layout
- Organized link sections
- Social media icons
- Copyright information
- Auto-updating year

**Usage:**
```tsx
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <>
      {/* content */}
      <Footer />
    </>
  )
}
```

**Props:** None

**Customization:**
- Add/remove sections in `sections` array
- Update social links
- Change company name in copyright

---

### 3. Newsletter

**Location:** `components/Newsletter.tsx`

**Features:**
- Email input field
- Subscribe button
- Form validation
- Success message
- Auto-reset after submission
- Loading state

**Usage:**
```tsx
import Newsletter from '@/components/Newsletter'

export default function Page() {
  return (
    <>
      {/* other content */}
      <Newsletter />
    </>
  )
}
```

**Props:** None (uses internal state)

**Customization:**
- Email validation logic
- Success message text
- Auto-reset timeout (currently 3 seconds)
- Button text

---

## Component Patterns

### Form Components

All form components follow this pattern:

```tsx
'use client'

import { useState } from 'react'

export default function FormComponent() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 800))
    
    console.log('[v0] Form submitted:', formData)
    setSubmitted(true)
    setLoading(false)
    
    // Reset after delay
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ field1: '', field2: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    // JSX here
  )
}
```

### Interactive Components

Use `'use client'` directive for components with:
- Event handlers
- State management
- Effects
- Hooks

### Layout Components

No directive needed for:
- Static content
- Navigation
- Layout wrapper
- Simple display components

---

## Styling System

### Using Tailwind Classes

All components use Tailwind CSS classes:

```tsx
// Text styling
className="text-xl font-bold"
className="text-text-secondary text-sm"

// Layout
className="flex gap-4"
className="grid grid-cols-1 md:grid-cols-2"

// Backgrounds
className="bg-primary"
className="bg-secondary"
className="bg-tertiary"

// Borders
className="border border-border rounded"

// Responsive
className="hidden md:flex"
className="grid-cols-1 md:grid-cols-2"

// Hover states
className="hover:bg-tertiary transition"
className="hover:border-opacity-50"
```

### Color Variables

Defined in `tailwind.config.ts`:
- `primary`: #030303 (main background)
- `secondary`: #0a0a0a (cards)
- `tertiary`: #111111 (hover)
- `border`: #1a1a1a (borders)
- `text`: #ffffff (white)
- `text-secondary`: #999999 (gray)

---

## Icons

All icons are from **Lucide React**.

**Installation:**
```bash
npm install lucide-react
```

**Usage:**
```tsx
import { Download, Menu, X, Mail } from 'lucide-react'

<Download size={20} />
<Menu size={24} />
<X size={24} className="text-text-secondary" />
```

**Common Icon Sizes:**
- `16` - Small inline icons
- `20` - Standard icons
- `24` - Large icons
- `32` - Section icons
- `40+` - Hero icons

---

## Creating New Components

### Step 1: Create File

Create `components/MyComponent.tsx`:

```tsx
'use client' // Only if using hooks/state

export default function MyComponent() {
  return (
    <div className="p-6 bg-secondary border border-border rounded">
      {/* content */}
    </div>
  )
}
```

### Step 2: Use in Page

```tsx
import MyComponent from '@/components/MyComponent'

export default function Page() {
  return (
    <MyComponent />
  )
}
```

### Step 3: Add to Other Pages

```tsx
import MyComponent from '@/components/MyComponent'

// Use in any page
<MyComponent />
```

---

## Component Examples

### Button Component

```tsx
<button className="px-6 py-3 bg-text text-primary rounded font-semibold hover:bg-opacity-90 transition">
  Click Me
</button>
```

### Card Component

```tsx
<div className="p-6 bg-secondary border border-border rounded-lg hover:border-opacity-50 hover:bg-tertiary transition">
  <h3 className="font-semibold mb-2">Title</h3>
  <p className="text-text-secondary">Description</p>
</div>
```

### Form Input

```tsx
<input
  type="text"
  className="w-full px-4 py-3 bg-primary border border-border rounded text-text placeholder-text-secondary focus:outline-none focus:border-opacity-50"
  placeholder="Enter text..."
/>
```

### Section Container

```tsx
<section className="py-20 px-4 bg-primary">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</section>
```

---

## Best Practices

### 1. Component Organization
- Keep components small and focused
- One responsibility per component
- Use descriptive names

### 2. Styling
- Use Tailwind classes exclusively
- Follow the color system
- Use consistent spacing

### 3. Accessibility
- Use semantic HTML
- Add alt text to images
- Use proper heading hierarchy
- Include aria-labels where needed

### 4. Performance
- Use `'use client'` only when necessary
- Keep state minimal
- Avoid unnecessary re-renders
- Use next/image for images

### 5. Type Safety
- Use TypeScript
- Define prop interfaces
- Avoid `any` type

---

## Common Patterns

### Conditional Rendering

```tsx
{isOpen && <Menu />}
{submitted ? <SuccessMessage /> : <Form />}
```

### Event Handling

```tsx
const handleClick = () => {
  console.log('[v0] Button clicked')
}

<button onClick={handleClick}>Click</button>
```

### Form Handling

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

<input name="field" onChange={handleChange} />
```

### Responsive Classes

```tsx
// Hidden on mobile, visible on medium screens
className="hidden md:block"

// Different grid on different sizes
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## Debugging

### Console Logging

```tsx
console.log('[v0] Debug message:', value)
```

### Browser DevTools

- **Inspect Element**: Right-click, select "Inspect"
- **Console**: Check for errors and logs
- **Network**: Check for failed requests
- **Performance**: Check page load time

---

## Testing Components

### Manual Testing

1. Check rendering on desktop
2. Check on mobile (Chrome DevTools)
3. Test all interactions
4. Check keyboard navigation
5. Test with dark mode

### Lighthouse Audit

```bash
# Using browser DevTools
# Right-click → Inspect → Lighthouse tab
```

---

## Component Library

All components are fully reusable. Feel free to:
- Copy components to other projects
- Modify them as needed
- Share with your team
- Build a design system

---

## Need Help?

- Check component source code
- Review usage examples on pages
- Check Tailwind documentation
- Check Lucide icons documentation
- Check Next.js documentation

---

That's everything! You have all the components you need to build any page. 🚀
