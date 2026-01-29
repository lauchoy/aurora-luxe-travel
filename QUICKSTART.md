# Quick Start Guide

Get Aurora Luxe Travel up and running in 5 minutes!

## 🚀 One-Command Setup

```bash
# Clone, install, and run
git clone https://github.com/lauchoy/aurora-luxe-travel.git && \
cd aurora-luxe-travel && \
npm install && \
cp .env.example .env.local && \
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🎉

## 📄 What You Get

- ✅ Next.js 14 with App Router
- ✅ TypeScript configured
- ✅ Tailwind CSS with luxury theme
- ✅ Framer Motion animations
- ✅ ESLint + Prettier
- ✅ Responsive homepage
- ✅ Custom hooks and utilities
- ✅ Type-safe development

## 🛠️ Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
```

## 🎨 Customize Your Site

### 1. Update Site Information

Edit `src/app/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Travel Company',
  email: 'your-email@example.com',
  phone: '+1 (555) 123-4567',
  // ...
};
```

### 2. Customize Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ },
    },
  },
}
```

### 3. Add Your Content

Edit `src/app/page.tsx` to update:
- Hero section text
- Featured destinations
- Feature highlights

## 📚 Next Steps

1. **Add More Pages**
   - Create `src/app/destinations/page.tsx`
   - Create `src/app/about/page.tsx`
   - Create `src/app/contact/page.tsx`

2. **Add Navigation**
   - Create a `Navbar` component
   - Create a `Footer` component

3. **Integrate a CMS**
   - Consider Sanity, Contentful, or Strapi
   - Manage destinations and content dynamically

4. **Deploy**
   - Push to GitHub
   - Deploy to [Vercel](https://vercel.com) (recommended)
   - Or use Netlify, AWS, etc.

## 🐛 Common Issues

**Port already in use?**
```bash
PORT=3001 npm run dev
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json && npm install
```

**TypeScript errors?**
```bash
npm run type-check
```

## 📝 Documentation

- [Full Setup Guide](SETUP.md)
- [Contributing Guide](CONTRIBUTING.md)
- [README](README.md)

## ❓ Need Help?

Open an issue on [GitHub](https://github.com/lauchoy/aurora-luxe-travel/issues)

Happy building! 🌟
