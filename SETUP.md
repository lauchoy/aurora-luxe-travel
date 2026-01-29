# Aurora Luxe Travel - Setup Guide

Complete setup instructions for getting Aurora Luxe Travel running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17.0 or higher
- **npm** 9.0.0 or higher (or yarn/pnpm)
- **Git**
- A code editor (VS Code recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/lauchoy/aurora-luxe-travel.git
cd aurora-luxe-travel
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- And all development dependencies

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Aurora Luxe Travel"

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
NEXT_PUBLIC_CONTACT_PHONE="+1 (555) 123-4567"

# Add other variables as needed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
aurora-luxe-travel/
├── src/
│   └── app/
│       ├── components/      # Reusable UI components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities, types, constants
│       ├── styles/         # Global styles
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global CSS
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── postcss.config.js     # PostCSS configuration
├── prettier.config.js    # Prettier configuration
├── README.md            # Project documentation
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Type check TypeScript
npm run type-check
```

## IDE Setup

### VS Code (Recommended)

Install these extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

#### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Troubleshooting

### Port 3000 already in use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

```bash
# Run type check
npm run type-check
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Next Steps

1. **Customize the design** - Edit `tailwind.config.ts` for colors and styling
2. **Add content** - Create destination pages and add travel content
3. **Implement features** - Add booking system, search, filters, etc.
4. **Optimize images** - Add real images to `/public` directory
5. **Set up CMS** - Integrate a headless CMS (Sanity, Contentful, etc.)
6. **Add analytics** - Integrate Google Analytics or similar
7. **Deploy** - Deploy to Vercel, Netlify, or your preferred platform

## Getting Help

- Check the [README.md](README.md) for general documentation
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Open an issue on GitHub for bugs or questions

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

Happy coding! 🚀
