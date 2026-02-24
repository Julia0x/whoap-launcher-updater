# Launcher Website - Complete UI Specification

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography System](#typography-system)
3. [Component Library](#component-library)
4. [Layout System](#layout-system)
5. [Interactive Elements](#interactive-elements)
6. [Spacing & Dimensions](#spacing--dimensions)
7. [Theme Details](#theme-details)
8. [Page Components](#page-components)
9. [Responsive Design](#responsive-design)
10. [Animation & Transitions](#animation--transitions)

---

## Color Palette

### Primary Colors
```
Primary Background:    #030303 (Darkest Black)
Secondary Background:  #0a0a0a (Dark Black)
Tertiary Background:   #111111 (Slightly Lighter Black)
Border Color:          #1a1a1a (Dark Gray)
```

### Text Colors
```
Primary Text:          #ffffff (White)
Secondary Text:        #999999 (Medium Gray)
```

### Usage Guidelines
- **Primary (#030303)**: Main page backgrounds, main content areas
- **Secondary (#0a0a0a)**: Cards, sections, elevated surfaces
- **Tertiary (#111111)**: Hover states, active states, nested elements
- **Border (#1a1a1a)**: All borders, dividers, separators
- **Text (#ffffff)**: Headings, primary content
- **Text Secondary (#999999)**: Descriptions, metadata, helper text

### Color Combinations
| Element | Background | Text | Border |
|---------|-----------|------|--------|
| Card | Secondary (#0a0a0a) | Text (#fff) | Border (#1a1a1a) |
| Button Primary | Text (#fff) | Primary (#030303) | N/A |
| Button Secondary | Secondary (#0a0a0a) | Text (#fff) | Border (#1a1a1a) |
| Hover State | Tertiary (#111111) | Text (#fff) | Border (#1a1a1a) |
| Input | Secondary (#0a0a0a) | Text (#fff) | Border (#1a1a1a) |

---

## Typography System

### Font Family
```css
Font Stack: system-ui, -apple-system, sans-serif
```

### Font Sizes & Weights

| Size | Usage | Weight | Line Height |
|------|-------|--------|------------|
| 12px | Caption, small text | 400 | 1.4 |
| 14px | Body, labels | 400 | 1.6 |
| 16px | Body, default text | 400 | 1.6 |
| 18px | Subheading | 500 | 1.5 |
| 24px | Section heading | 700 | 1.3 |
| 32px | Page heading | 700 | 1.2 |
| 48px | Major heading | 700 | 1.1 |
| 56px | Hero title | 700 | 1.0 |
| 64px | Large hero | 700 | 1.0 |

### Font Weights
```
Normal (400): Body text, descriptions
Medium (500): Subheadings, labels
Semibold (600): Buttons, highlights
Bold (700): Headings, titles
```

### Text Styles
```css
/* Headings */
h1 { font-size: 56px; font-weight: 700; line-height: 1 }
h2 { font-size: 48px; font-weight: 700; line-height: 1.1 }
h3 { font-size: 32px; font-weight: 700; line-height: 1.2 }
h4 { font-size: 24px; font-weight: 700; line-height: 1.3 }

/* Body Text */
body { font-size: 16px; font-weight: 400; line-height: 1.6 }
p { font-size: 16px; color: #999999; line-height: 1.6 }
small { font-size: 14px; color: #999999 }

/* Links */
a { color: #ffffff; transition: all 0.2s ease }
a:hover { color: #999999 }
```

---

## Component Library

### 1. Navigation Bar (Navbar)

#### Component Structure
```jsx
<nav className="fixed top-0 w-full bg-primary border-b border-border z-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header content */}
  </div>
</nav>
```

#### Logo
- **Size**: 32x32px
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Border Radius**: 4px
- **Text**: White, 12px, bold
- **Gap with text**: 8px

#### Navigation Links
- **Desktop**: Hidden below 768px (md breakpoint)
- **Spacing**: 32px gap between links
- **Color**: Secondary Text (#999999)
- **Hover Color**: Primary Text (#ffffff)
- **Font**: 14px, 500 weight
- **Transition**: 0.2s ease

#### Download Button
- **Background**: Primary Text (#ffffff)
- **Text Color**: Primary (#030303)
- **Padding**: 8px 16px (py-2 px-4)
- **Border Radius**: 4px
- **Font**: 14px, semibold
- **Hover**: Opacity 90%
- **Transition**: 0.2s ease

#### Mobile Menu
- **Trigger**: Below 768px
- **Toggle**: Menu/X icons from lucide-react
- **Menu Background**: Primary (#030303)
- **Menu Border**: 1px solid Border (#1a1a1a)
- **Padding**: 16px (pb-4)

---

### 2. Hero Section

#### Desktop Layout
```jsx
<section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-12 bg-gradient-to-b from-secondary to-primary">
```

#### Gradient
- **Direction**: Top to bottom
- **From Color**: Secondary (#0a0a0a)
- **To Color**: Primary (#030303)

#### Title
- **Size**: 48px (md), 112px (lg)
- **Weight**: 700 (bold)
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 24px (mb-6)
- **Line Height**: 1.2
- **Max Width**: 56rem (max-w-4xl)

#### Description
- **Size**: 18px (md), 20px (lg)
- **Color**: Secondary Text (#999999)
- **Margin Bottom**: 32px (mb-8)
- **Max Width**: 32rem (max-w-2xl)

#### CTA Buttons
- **Layout**: Flex, column on mobile, row on sm+
- **Gap**: 16px
- **Alignment**: Center

##### Primary Button
- **Background**: Primary Text (#ffffff)
- **Text Color**: Primary (#030303)
- **Padding**: 12px 32px
- **Border Radius**: 4px
- **Font**: Semibold
- **Icons**: 20px from lucide-react
- **Icon Gap**: 8px
- **Hover**: Opacity 90%

##### Secondary Button
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Text Color**: Primary Text (#ffffff)
- **Padding**: 12px 32px
- **Border Radius**: 4px
- **Font**: Semibold
- **Hover**: Background becomes Tertiary (#111111)

#### System Requirements Box
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Border Radius**: 8px
- **Padding**: 24px
- **Max Width**: 28rem (max-w-xl)
- **Margin Top**: 48px
- **Label Size**: 12px
- **Label Color**: Secondary Text (#999999)
- **Items Gap**: 16px
- **Item Size**: 14px

---

### 3. Feature Cards

#### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Card Structure
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Border Radius**: 8px
- **Padding**: 24px
- **Gap**: 16px
- **Hover State**: 
  - Border becomes Border at 50% opacity
  - Background becomes Tertiary (#111111)
- **Transition**: 0.2s ease

#### Icon
- **Size**: 32px
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 16px
- **Icon Library**: lucide-react

#### Title
- **Size**: 20px
- **Weight**: 700
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 8px

#### Description
- **Size**: 14px
- **Color**: Secondary Text (#999999)
- **Line Height**: 1.6

---

### 4. Buttons

#### Button Types

##### Primary Button
```css
background: #ffffff;
color: #030303;
padding: 12px 32px;
border-radius: 4px;
font-weight: 600;
border: none;
cursor: pointer;
transition: all 0.2s ease;
```
- **Hover**: `background-color: rgba(255, 255, 255, 0.9)`

##### Secondary Button
```css
background: #0a0a0a;
color: #ffffff;
border: 1px solid #1a1a1a;
padding: 12px 32px;
border-radius: 4px;
font-weight: 600;
cursor: pointer;
transition: all 0.2s ease;
```
- **Hover**: `background-color: #111111`

##### Button Sizes
| Size | Padding | Font |
|------|---------|------|
| Small | 8px 16px | 12px |
| Medium | 12px 32px | 14px |
| Large | 16px 40px | 16px |

---

### 5. Cards

#### Basic Card
```css
background: #0a0a0a;
border: 1px solid #1a1a1a;
border-radius: 8px;
padding: 24px;
transition: all 0.2s ease;
```

#### Card Hover State
```css
border-color: rgba(26, 26, 26, 0.5);
background-color: #111111;
```

#### Card Padding Variants
| Variant | Padding |
|---------|---------|
| Compact | 12px | 
| Normal | 24px |
| Large | 32px |

---

### 6. Forms

#### Input Fields
```css
background: #0a0a0a;
border: 1px solid #1a1a1a;
color: #ffffff;
padding: 12px 16px;
border-radius: 6px;
font-size: 14px;
transition: all 0.2s ease;
```

#### Input Focus State
```css
border-color: rgba(26, 26, 26, 0.8);
outline: none;
```

#### Input Placeholder
```css
color: #666666;
```

#### Label
- **Font Size**: 14px
- **Font Weight**: 500
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 8px

#### Select Dropdown
```css
background: #0a0a0a;
border: 1px solid #1a1a1a;
color: #ffffff;
padding: 12px 16px;
border-radius: 6px;
font-size: 14px;
cursor: pointer;
```

#### Form Error
- **Color**: #ff6b6b
- **Font Size**: 12px
- **Margin Top**: 4px

#### Form Success
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Icon**: Check from lucide-react
- **Text**: "Message sent successfully!"

---

### 7. Accordion (Collapsible)

#### Container
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Border Radius**: 8px
- **Margin Bottom**: 12px
- **Overflow**: Hidden

#### Header
- **Padding**: 16px 20px
- **Cursor**: Pointer
- **Display**: Flex
- **Justify**: Space-between
- **Align**: Center
- **Transition**: 0.2s ease
- **Hover Background**: Tertiary (#111111)

#### Title
- **Font Size**: 16px
- **Font Weight**: 600
- **Color**: Primary Text (#ffffff)

#### Icon (Chevron)
- **Size**: 20px
- **Color**: Secondary Text (#999999)
- **Rotation**: 0deg (closed), 180deg (open)
- **Transition**: 0.2s ease

#### Content
- **Padding**: 16px 20px
- **Background**: Tertiary (#111111)
- **Font Size**: 14px
- **Color**: Secondary Text (#999999)
- **Max Height**: 0 (closed), auto (open)
- **Overflow**: Hidden
- **Transition**: max-height 0.3s ease

---

### 8. Download Cards

#### Card Structure
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Border Radius**: 8px
- **Padding**: 32px
- **Text Align**: Center
- **Hover**: Border opacity 50%, background becomes Tertiary

#### Icon
- **Size**: 64px
- **Display**: Emoji or icon
- **Margin Bottom**: 16px

#### Title
- **Size**: 24px
- **Weight**: 700
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 24px

#### Version List
- **Display**: Flex column
- **Gap**: 12px

##### Version Item
- **Background**: Primary (#030303) or Tertiary (#111111) if latest
- **Border**: 1px solid Border (#1a1a1a)
- **Padding**: 16px
- **Border Radius**: 6px
- **Hover**: Border opacity 50%

##### Version Badge (Latest)
- **Background**: Tertiary (#111111)
- **Font Size**: 11px
- **Padding**: 4px 8px
- **Border Radius**: 4px
- **Margin Bottom**: 12px

---

### 9. Footer

#### Container
- **Background**: Primary (#030303)
- **Border Top**: 1px solid Border (#1a1a1a)
- **Padding**: 60px 20px

#### Grid
- **Grid Columns**: 1 (mobile), 2 (md), 5 (lg)
- **Gap**: 32px
- **Max Width**: 80rem (max-w-6xl)

#### Section Title
- **Font Size**: 14px
- **Weight**: 700
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 20px
- **Text Transform**: Uppercase
- **Letter Spacing**: 0.1em

#### Links
- **Font Size**: 14px
- **Color**: Secondary Text (#999999)
- **Margin Bottom**: 12px
- **Hover**: Color becomes Primary Text (#ffffff)

#### Divider
- **Height**: 1px
- **Background**: Border (#1a1a1a)
- **Margin**: 40px 0

#### Copyright
- **Font Size**: 12px
- **Color**: Secondary Text (#999999)
- **Text Align**: Center

---

### 10. Newsletter Section

#### Container
- **Background**: Secondary (#0a0a0a)
- **Border**: 1px solid Border (#1a1a1a)
- **Border Radius**: 12px
- **Padding**: 40px
- **Text Align**: Center
- **Margin**: 80px auto
- **Max Width**: 40rem

#### Title
- **Size**: 32px
- **Weight**: 700
- **Color**: Primary Text (#ffffff)
- **Margin Bottom**: 16px

#### Description
- **Size**: 16px
- **Color**: Secondary Text (#999999)
- **Margin Bottom**: 24px

#### Form
- **Display**: Flex
- **Gap**: 12px
- **Direction**: Column (md: row)

##### Input
- **Background**: Primary (#030303)
- **Flex**: 1
- **Padding**: 12px 16px
- **Font Size**: 14px

##### Button
- **Min Width**: 120px
- **Background**: Primary Text (#ffffff)
- **Text Color**: Primary (#030303)
- **Hover**: Opacity 90%

#### Success Message
- **Background**: Green (rgba style)
- **Border**: Green
- **Color**: Light green
- **Icon**: Check
- **Padding**: 12px 16px
- **Border Radius**: 6px

---

## Layout System

### Maximum Width Container
```jsx
<div className="max-w-6xl mx-auto">
```
- **Max Width**: 80rem (1280px)
- **Margin**: 0 auto
- **Padding**: 0 16px (responsive)

### Padding Scale
| Class | Value |
|-------|-------|
| px-4 | 16px (mobile) |
| sm:px-6 | 24px |
| lg:px-8 | 32px |

### Section Padding
- **Vertical**: 60px-80px (py-20)
- **Horizontal**: 16px-32px (px-4 to px-8)

### Grid Systems

#### 3-Column Layout
```jsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **Gap**: 24px

#### 2-Column Layout
```jsx
grid grid-cols-1 md:grid-cols-2 gap-8
```
- **Mobile**: 1 column
- **Desktop**: 2 columns
- **Gap**: 32px

---

## Interactive Elements

### Hover Effects

#### Link Hover
- **Color Change**: Secondary Text (#999999) → Primary Text (#ffffff)
- **Duration**: 0.2s
- **Timing**: ease

#### Button Hover
- **Primary**: Opacity becomes 0.9 (90%)
- **Secondary**: Background becomes Tertiary (#111111)
- **Duration**: 0.2s
- **Timing**: ease

#### Card Hover
- **Border**: Changes to Border at 50% opacity
- **Background**: Changes to Tertiary (#111111)
- **Transform**: None (no translateY)
- **Duration**: 0.2s
- **Timing**: ease

### Focus States
- **Outline**: None (removed)
- **Indicate**: Via border color or background change
- **Duration**: 0.2s

### Active States
- **Button**: `active:scale-95` or opacity change
- **Link**: Current page indicator (optional)
- **Form**: Green border or checkmark on success

---

## Spacing & Dimensions

### Spacing Scale
```
0.5rem = 8px   → gap-2, p-2, m-2
1rem = 16px    → gap-4, p-4, m-4
1.5rem = 24px  → gap-6, p-6, m-6
2rem = 32px    → gap-8, p-8, m-8
2.5rem = 40px  → gap-10, p-10, m-10
3rem = 48px    → gap-12, p-12, m-12
3.5rem = 56px  → gap-14, p-14, m-14
4rem = 64px    → gap-16, p-16, m-16
5rem = 80px    → gap-20, p-20, m-20
6rem = 96px    → gap-24, p-24, m-24
```

### Component Dimensions

| Component | Width | Height |
|-----------|-------|--------|
| Logo | 32px | 32px |
| Icon (small) | 16px | 16px |
| Icon (normal) | 20px | 20px |
| Icon (large) | 32px | 32px |
| Icon (feature) | 32px | 32px |
| Input | 100% | 44px |
| Button (small) | auto | 32px |
| Button (medium) | auto | 44px |
| Navbar Height | 100% | 64px |

### Border Radius Scale
```
2px   = rounded-sm
4px   = rounded (default)
6px   = rounded-md
8px   = rounded-lg
12px  = rounded-xl
```

### Border Width
```
1px = border (default)
2px = border-2
```

---

## Theme Details

### Dark Theme (Active)

#### Background Hierarchy
1. **Primary (#030303)**: Main background
2. **Secondary (#0a0a0a)**: Elevated surfaces, cards
3. **Tertiary (#111111)**: Hover states, nested elements

#### Text Hierarchy
1. **Primary (#ffffff)**: Headlines, important text
2. **Secondary (#999999)**: Body, descriptions

#### Contrast Ratios
| Foreground | Background | Ratio |
|-----------|-----------|-------|
| #ffffff | #030303 | 20:1 ✓ WCAG AAA |
| #ffffff | #0a0a0a | 19:1 ✓ WCAG AAA |
| #999999 | #030303 | 6.8:1 ✓ WCAG AA |
| #999999 | #0a0a0a | 6.5:1 ✓ WCAG AA |

### Light/Alternative Theme (Not Implemented)
Currently, the site uses only the dark theme. For future light theme:
```
Primary: #ffffff
Secondary: #f5f5f5
Tertiary: #eeeeee
Border: #e0e0e0
Text: #030303
Text-Secondary: #666666
```

---

## Page Components

### Home Page
- **Hero Section**: Full screen, gradient background
- **Features Grid**: 3-column layout with 6 features
- **Newsletter Section**: Email signup
- **CTA Section**: Download prompt
- **Components Used**: Hero, Feature Cards, Newsletter, CTA Buttons

### Features Page
- **Hero Section**: Page title
- **Feature Showcase**: Detailed features with descriptions
- **Benefits Grid**: Benefits and highlights
- **Components Used**: Hero, Cards, Icons, Typography

### Download Page
- **Hero Section**: Download page title
- **Platform Cards**: Windows, macOS, Linux
- **Version List**: Multiple versions per platform
- **Download Buttons**: Action buttons with feedback
- **Components Used**: Cards, Buttons, Forms

### Docs Page
- **Hero Section**: Documentation title
- **Documentation Grid**: Expandable documentation items
- **Accordion Components**: Detailed docs with Q&A
- **Components Used**: Accordion, Cards, Typography

### Support Page
- **Hero Section**: Support title
- **Support Channels**: 3 support methods
- **Contact Form**: Email form with validation
- **FAQ Section**: Expandable Q&A
- **Newsletter**: Email signup
- **Components Used**: Forms, Accordion, Buttons, Cards

### Footer (Global)
- **Link Sections**: Product, Resources, Community, Company
- **Copyright**: Legal information
- **Social Links**: GitHub, Discord, Twitter (optional)

---

## Responsive Design

### Breakpoints
```
Mobile:     < 640px (default)
Tablet:     >= 768px (md:)
Desktop:    >= 1024px (lg:)
Large:      >= 1280px (xl:)
```

### Mobile-First Approach

#### Navigation
- **Mobile**: Hamburger menu (hidden on lg+)
- **Desktop**: Horizontal menu + download button

#### Grid Layouts
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3-4 columns

#### Typography
- **Mobile**: Smaller (h1: 48px)
- **Desktop**: Larger (h1: 112px)

#### Padding
- **Mobile**: 16px (px-4)
- **Tablet**: 24px (sm:px-6)
- **Desktop**: 32px (lg:px-8)

### Touch Targets
- **Minimum Height**: 44px for touch
- **Minimum Width**: 44px for touch
- **Spacing**: 8px minimum between interactive elements

---

## Animation & Transitions

### Transition Properties
```css
transition: all 0.2s ease;
```

### Transition Timings
| Duration | Usage |
|----------|-------|
| 0.2s | Hover states, color changes |
| 0.3s | Accordion expand/collapse |
| 0.4s | Modal open/close |
| 0.6s | Page transitions |

### Easing Functions
```
ease: Default easing
ease-in: Acceleration from zero velocity
ease-out: Deceleration to zero velocity
ease-in-out: Acceleration until halfway, then deceleration
linear: Constant speed
```

### Scroll Behavior
```css
scroll-behavior: smooth;
```

### Animation Effects

#### Fade In
```css
opacity: 0 → 1
transition: opacity 0.3s ease
```

#### Slide In
```css
transform: translateX(-20px) → translateX(0)
opacity: 0 → 1
transition: all 0.3s ease
```

#### Scale Hover
```css
transform: scale(1) → scale(1.02)
transition: all 0.2s ease
```

### No Glow Effects
- **Box Shadow**: Minimal/none for performance
- **Blur Effects**: Not used
- **Drop Shadow**: Subtle when needed

---

## Accessibility (a11y)

### Color Contrast
- All text meets WCAG AA standards
- Primary text (#fff) on dark backgrounds: 20:1 contrast
- Secondary text (#999) on dark backgrounds: 6.5-6.8:1 contrast

### Focus Management
- Focus indicators visible on all interactive elements
- Focus outline color: Border (#1a1a1a) with clear visibility

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3, etc.)
- Form labels associated with inputs
- Button elements for actions
- Navigation landmarks

### Keyboard Navigation
- All interactive elements reachable via Tab
- Menu toggle accessible via keyboard
- Form submission via Enter key
- Mobile menu closes with Escape key

### Screen Reader Support
- Alt text on images (emojis replaced with descriptions)
- Aria labels on icon-only buttons
- Form fields have associated labels
- Status messages announced

---

## Performance Optimization

### Image Optimization
- System icons via lucide-react (SVG)
- No large background images
- Lazy loading for below-the-fold content

### CSS Optimization
- Tailwind CSS with PurgeCSS
- Only used classes included in production build
- Critical CSS inline in head

### JavaScript Optimization
- Minimal client-side JavaScript
- Code splitting at page level
- Event delegation for event handlers

### Rendering
- No layout shifts (CLS = 0)
- Fast First Contentful Paint (FCP)
- Optimized CSS animations (uses transform/opacity)

---

## Browser Support

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Mobile

### Fallbacks
- CSS Grid with fallbacks
- Flexbox where appropriate
- Linear gradients supported

---

## Design System Summary

### Core Principles
1. **Minimalist**: Clean, simple, distraction-free design
2. **Dark-Themed**: Suitable for technical audience
3. **Performance**: Optimized for speed and accessibility
4. **Responsive**: Works perfectly on all devices
5. **Accessible**: WCAG AA compliant throughout

### Visual Hierarchy
1. **Primary**: Large, bold, white text
2. **Secondary**: Medium, gray text
3. **Tertiary**: Small, lighter gray text

### Interaction Model
1. **Subtle Hover**: Color changes, border adjustments
2. **Smooth Transitions**: 0.2s ease on all interactive elements
3. **Clear Feedback**: Form validation, success messages
4. **No Distractions**: Focus on content and functionality

### Component Consistency
- Uniform padding and spacing
- Consistent border radius and colors
- Predictable hover and active states
- Reusable component patterns

---

## Export & Implementation

### CSS Variables (Optional Enhancement)
```css
:root {
  --color-primary: #030303;
  --color-secondary: #0a0a0a;
  --color-tertiary: #111111;
  --color-border: #1a1a1a;
  --color-text: #ffffff;
  --color-text-secondary: #999999;
  
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

### Tailwind Configuration
```typescript
theme: {
  extend: {
    colors: {
      primary: '#030303',
      secondary: '#0a0a0a',
      tertiary: '#111111',
      border: '#1a1a1a',
      text: '#ffffff',
      'text-secondary': '#999999',
    },
  },
}
```

---

## Changelog

### Version 1.0.0 (Current)
- Initial design system
- Dark theme implementation
- 10 core components
- 5 pages (Home, Features, Download, Docs, Support)
- Responsive design (mobile, tablet, desktop)
- Accessibility compliance (WCAG AA)

---

**Last Updated**: 2024  
**Created For**: Launcher Website  
**Design System Version**: 1.0.0  
**Status**: Production Ready ✓
