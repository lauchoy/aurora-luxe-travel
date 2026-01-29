# Aurora Luxe Travel - Project Structure

Complete overview of the project architecture and file organization.

## 📊 Technology Stack

### Core Framework
- **Next.js 14.2.0** - React framework with App Router
- **React 18.3.0** - UI library
- **TypeScript 5.3.0** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library
- **@tailwindcss/forms** - Form styling plugin
- **@tailwindcss/typography** - Typography plugin

### Development Tools
- **ESLint 8.57.0** - Code linting
- **Prettier 3.2.5** - Code formatting
- **TypeScript ESLint** - TypeScript linting

### Utilities
- **clsx** - Conditional class names
- **lucide-react** - Icon library

## 📁 Directory Structure

```
aurora-luxe-travel/
│
├── .vscode/                      # VS Code workspace settings
│   ├── settings.json            # Editor configuration
│   └── extensions.json          # Recommended extensions
│
├── public/                       # Static assets
│   ├── robots.txt               # SEO robots file
│   └── favicon.ico              # Site favicon (placeholder)
│
├── src/                         # Source code
│   └── app/                     # Next.js App Router
│       ├── components/          # Reusable UI components
│       │   ├── Button.tsx       # Button component with variants
│       │   ├── Card.tsx         # Card component system
│       │   ├── Container.tsx    # Layout container
│       │   └── Section.tsx      # Section wrapper
│       │
│       ├── hooks/               # Custom React hooks
│       │   ├── useLocalStorage.ts    # LocalStorage hook
│       │   ├── useMediaQuery.ts      # Media query hook
│       │   └── useScrollPosition.ts  # Scroll position hook
│       │
│       ├── lib/                 # Utilities and configurations
│       │   ├── constants.ts     # App-wide constants
│       │   ├── types.ts         # TypeScript type definitions
│       │   └── utils.ts         # Utility functions
│       │
│       ├── styles/              # Global styles
│       │   └── globals.css      # Global CSS with Tailwind
│       │
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Home page
│
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── CONTRIBUTING.md              # Contribution guidelines
├── eslint.config.js             # ESLint configuration
├── LICENSE                      # MIT License
├── next.config.js               # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.js            # PostCSS configuration
├── prettier.config.js           # Prettier configuration
├── PROJECT_STRUCTURE.md         # This file
├── QUICKSTART.md                # Quick start guide
├── README.md                    # Main documentation
├── SETUP.md                     # Detailed setup guide
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🎯 Key Files Explained

### Configuration Files

#### `next.config.js`
- Image optimization settings
- Security headers
- Performance optimizations
- Remote image patterns for Unsplash and CDNs

#### `tailwind.config.ts`
- Custom luxury color palette
- Extended spacing and typography
- Custom animations and keyframes
- Font family configuration
- Plugin configurations

#### `tsconfig.json`
- Strict TypeScript settings
- Path aliases (@/* shortcuts)
- Module resolution configuration
- Compiler options

#### `eslint.config.js`
- Next.js recommended rules
- Prettier integration
- Custom React and TypeScript rules

#### `prettier.config.js`
- Code formatting rules
- Tailwind CSS class sorting
- Consistent code style

### Application Files

#### `src/app/layout.tsx`
Root layout component featuring:
- Font optimization (Inter, Playfair Display)
- SEO metadata configuration
- Global HTML structure
- OpenGraph and Twitter card setup

#### `src/app/page.tsx`
Home page with:
- Hero section with animations
- Features showcase
- Featured destinations
- Call-to-action sections
- Framer Motion animations

#### `src/app/globals.css`
Global styles including:
- Tailwind directives
- Custom component classes
- Utility classes
- Custom scrollbar styling
- Focus and selection styles

### Library Files

#### `src/app/lib/types.ts`
Complete TypeScript definitions for:
- Destination
- Package
- Accommodation
- Booking
- User
- Review
- And more...

#### `src/app/lib/utils.ts`
Utility functions:
- `cn()` - Class name merging
- `formatCurrency()` - Currency formatting
- `formatDate()` - Date formatting
- `truncate()` - Text truncation
- `slugify()` - URL slug generation
- `debounce()` / `throttle()` - Performance utilities
- Form validation helpers

#### `src/app/lib/constants.ts`
Application constants:
- Site configuration
- Navigation items
- Footer links
- Regions and travel styles
- Price ranges
- Amenities
- Animation durations
- Breakpoints
- SEO defaults

### Component Files

#### `src/app/components/Button.tsx`
Reusable button component with:
- Three variants (primary, secondary, ghost)
- Three sizes (sm, md, lg)
- Full-width option
- Accessibility features

#### `src/app/components/Card.tsx`
Card component system:
- Card container
- CardHeader, CardTitle, CardDescription
- CardContent, CardFooter
- Hover effects

#### `src/app/components/Container.tsx`
Layout container with:
- Responsive max-widths
- Configurable sizes
- Consistent padding

#### `src/app/components/Section.tsx`
Section wrapper with:
- Optional container
- Vertical padding
- Flexible sizing

### Custom Hooks

#### `src/app/hooks/useMediaQuery.ts`
Responsive design hook for detecting viewport sizes

#### `src/app/hooks/useScrollPosition.ts`
Track scroll position for animations and effects

#### `src/app/hooks/useLocalStorage.ts`
Sync state with localStorage

## 🎨 Design System

### Color Palette

```typescript
primary   // Orange/Gold tones (luxury warmth)
secondary // Blue tones (trust, stability)
accent    // Purple tones (luxury, sophistication)
gold      // Yellow tones (premium feel)
neutral   // Gray scale (UI elements)
```

### Typography

- **Display Font**: Playfair Display (serif) - Headings
- **Body Font**: Inter (sans-serif) - Body text
- **Display Sizes**: 2xl, xl, lg, md, sm

### Spacing Scale

Custom spacing values for luxury layouts:
- Standard: 0.25rem increments
- Extended: 18, 88, 100, 112, 128

### Animations

Pre-defined animations:
- `fade-in` - Opacity transition
- `fade-in-up` - Opacity + transform
- `slide-in` - Horizontal slide
- `scale-in` - Scale + opacity
- `float` - Floating effect

## 🚀 Development Workflow

### 1. Development
```bash
npm run dev          # Start dev server on :3000
```

### 2. Code Quality
```bash
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run type-check   # TypeScript validation
```

### 3. Production
```bash
npm run build        # Create production build
npm run start        # Start production server
```

## 📦 Dependencies Overview

### Production Dependencies
- **next**: Framework
- **react** / **react-dom**: UI library
- **framer-motion**: Animations
- **clsx**: Class utilities
- **lucide-react**: Icons

### Development Dependencies
- **typescript**: Type checking
- **@types/***: Type definitions
- **eslint**: Code linting
- **prettier**: Code formatting
- **tailwindcss**: Styling
- **autoprefixer**: CSS processing
- **postcss**: CSS processing

## 🔐 Environment Variables

Required variables (see `.env.example`):
```env
NEXT_PUBLIC_SITE_URL           # Site URL
NEXT_PUBLIC_SITE_NAME          # Site name
NEXT_PUBLIC_CONTACT_EMAIL      # Contact email
NEXT_PUBLIC_CONTACT_PHONE      # Contact phone
```

Optional variables:
```env
NEXT_PUBLIC_GA_TRACKING_ID     # Google Analytics
SANITY_PROJECT_ID              # CMS integration
SENDGRID_API_KEY               # Email service
```

## 🎯 Next Development Steps

### Immediate
1. Add navigation and footer components
2. Create destination listing page
3. Implement search and filtering
4. Add contact form

### Short-term
1. Integrate headless CMS
2. Add booking system
3. Implement user authentication
4. Create admin dashboard

### Long-term
1. Payment integration
2. Email notifications
3. Review system
4. Mobile app

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

**Last Updated**: January 2026
