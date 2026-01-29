# Aurora Luxe Travel ✨

> **Beyond First Class** - A premium luxury travel website featuring glassmorphism, aurora animations, and sophisticated design.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-ff69b4?logo=framer)](https://www.framer.com/motion/)

---

## 🌟 Overview

Aurora Luxe Travel is a cutting-edge luxury travel website that combines dark luxury aesthetics with modern web technologies. It features glassmorphism effects, stunning aurora animations, and an immersive user experience designed for discerning travelers seeking extraordinary journeys.

**Live Demo:** [View Repository](https://github.com/lauchoy/aurora-luxe-travel)

---

## ✅ All Sections (6 Complete)

### 🎯 Core Sections

#### 1. **Sticky Glass Navbar**
- Glassmorphism effect with `backdrop-blur-lg` and `bg-white/30`
- Aurora Luxe logo with animated glow
- Smooth scroll-triggered transitions
- Responsive mobile menu with slide animations
- "Request Itinerary" CTA with gradient animation

#### 2. **Hero Section**
- **Headline:** "Beyond First Class" with gradient text
- **Subtext:** Luxury concierge pitch
- **CTAs:** "Design My Trip" (primary) + "Explore Destinations" (secondary)
- Cinematic background with Next.js Image optimization
- Animated gradient overlay with pulse effect
- SVG noise texture for added depth
- Aurora animation (floating purple/pink orbs)
- Animated scroll indicator

#### 3. **Destinations Grid**
Six premium destination cards:

| Destination | Location | Price | Highlights |
|------------|----------|-------|------------|
| 🏝️ **Maldives** | Indian Ocean | €12,500 | Private Island, Butler Service, Michelin Dining |
| 🗼 **Tokyo** | Japan | €8,900 | Ryokan Stay, Private Chef, Cultural Tours |
| ⛰️ **Switzerland** | Swiss Alps | €15,200 | Ski Concierge, Spa Retreat, Helicopter Tours |
| 🏙️ **Dubai** | UAE | €10,800 | Royal Suite, Private Jet, Desert Safari |
| 🦁 **African Safari** | Tanzania | €18,500 | Big Five, Private Guide, Conservation |
| 🛥️ **Mediterranean Yacht** | French Riviera | €25,000 | Crew of 12, Michelin Chef, Water Sports |

#### 4. **Signature Experiences** ✨
Five ultra-premium curated experiences:

| Experience | Price | Duration | Highlights |
|-----------|-------|----------|------------|
| ✈️ **Private Jet Hops** | €45,000 | 7 days | Gulfstream G650, Personal Crew, Multi-City |
| 🛥️ **Yacht Week** | €50,000 | 7 days | 150ft Superyacht, Crew of 15, Private Chef |
| 👨‍🍳 **Michelin Trails** | €35,000 | 10 days | 10 Three-Star Restaurants, Wine Tastings |
| 🔭 **Desert Stargazing** | €25,000 | 5 days | Private Observatory, Expert Astronomer |
| ⛷️ **Alpine Retreat** | €40,000 | 7 days | Helicopter Access, Private Instructor, Spa |

#### 5. **Membership Tiers** 👑
Three exclusive membership levels:

| Tier | Annual Fee | Benefits | Perks |
|------|-----------|----------|-------|
| 🥈 **Silver** | €25,000 | 8 core benefits | 3 exclusive perks |
| 👑 **Black** ⭐ | €75,000 | 12 core benefits | 4 exclusive perks |
| 💎 **Obsidian** | €150,000 | 15 core benefits | 6 exclusive perks |

#### 6. **Testimonials Carousel** 💬 LATEST
Premium carousel with 6 ultra-wealthy client reviews:

| Client | Title | Location | Experience |
|--------|-------|----------|------------|
| **Victoria Sterling** | CEO | London | Private Jet Mediterranean |
| **Alexander Rothschild** | Investment Banker | New York | African Safari |
| **Sophia Chen** | Tech Entrepreneur | Singapore | Swiss Alpine Retreat |
| **Marcus Webb** | Real Estate Mogul | Dubai | Yacht Week |
| **Isabella Montenegro** | Fashion Executive | Milan | Michelin Culinary Journey |
| **James Montgomery** | Hedge Fund Manager | Monaco | Desert Stargazing |

**Features:**
- Auto-play carousel (6-second intervals)
- Manual navigation with arrows & dots
- Pause on hover functionality
- 5-star ratings with amber colors
- Glassmorphism cards with profile photos
- Verified member badges
- Statistics section (500+ clients, 98% satisfaction)

---

## 🎨 Technical Highlights

### **Glassmorphism**
```css
backdrop-blur-lg bg-white/30 border border-white/20
```
Applied throughout navbar, cards, and overlays for a premium frosted glass effect.

### **Aurora Animations**
Two floating gradient orbs with:
- 20-25 second animation loops
- Purple (#a78bfa) and pink (#ec4899) radial gradients
- 60px blur filters
- Complex motion paths using Framer Motion

### **Carousel System**
- Spring-based slide transitions
- AnimatePresence for smooth exits
- Auto-play with pause on hover
- Keyboard navigation support
- Responsive dot indicators

### **Responsive Design**
- **Mobile** (< 640px): Hamburger menu, single column
- **Tablet** (640px - 1024px): 2-column grid
- **Desktop** (> 1024px): 3-column grid, full nav
- **4K** (> 2560px): Constrained containers

### **Performance Optimizations**
- Next.js Image with WebP/AVIF conversion
- Lazy loading for cards below the fold
- Priority loading for hero image
- GPU-accelerated transforms
- Framer Motion `whileInView` with `once: true`

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14.2.0** | React framework with App Router |
| **TypeScript 5.3.0** | Type-safe development |
| **Tailwind CSS 3.4.1** | Utility-first styling |
| **Framer Motion 11.0.0** | Advanced animations |
| **Lucide React** | Icon library |
| **clsx** | Conditional classes |

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/lauchoy/aurora-luxe-travel.git
cd aurora-luxe-travel

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

---

## 📁 Project Structure

```
aurora-luxe-travel/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Navbar.tsx                  ✅ Sticky glass nav
│       │   ├── HeroSection.tsx             ✅ Aurora hero
│       │   ├── DestinationsGrid.tsx        ✅ 6 luxury cards
│       │   ├── SignatureExperiences.tsx    ✨ 5 premium experiences
│       │   ├── MembershipTiers.tsx         👑 3 exclusive tiers
│       │   └── TestimonialsCarousel.tsx    💬 6 client reviews
│       ├── globals.css                     ✅ Dark theme + animations
│       ├── layout.tsx                      ✅ Root layout
│       └── page.tsx                        ✅ Main page
├── public/                                 # Static assets
├── next.config.js                          ✅ Image optimization
├── tailwind.config.ts                      ✅ Custom config
├── package.json                            ✅ Dependencies
├── IMPLEMENTATION.md                       📖 Original guide
├── NEW_FEATURES.md                         ✨ Experiences & Membership
├── TESTIMONIALS_GUIDE.md                  💬 Carousel guide
├── FEATURES_CHECKLIST.md                  ✅ Complete checklist
└── README.md                              📄 This file
```

---

## 🎯 Design Philosophy

### Dark Luxury Aesthetic
- **Black background** (#000000)
- **Purple accents** (#a78bfa)
- **Pink neon** (#ec4899)
- **Gold highlights** (#fbbf24) for premium elements
- **Amber ratings** (#fbbf24) for stars
- **White text** with opacity variants
- Elegant spacing and typography

### Animation Principles
- **Purposeful**: Every animation serves UX
- **Smooth**: 60fps with GPU acceleration
- **Subtle**: Enhances without overwhelming
- **Responsive**: Works on all devices

### Accessibility
- Semantic HTML elements
- Focus-visible states
- Alt text for images
- Keyboard navigation
- ARIA labels for interactive elements
- WCAG compliant

---

## 📊 Git Commit History

The project was built in logical, atomic commits:

### Original Implementation
1. ✅ `feat: add sticky glass navbar with glassmorphism and mobile menu`
2. ✅ `feat: add hero section with aurora animations and cinematic background`
3. ✅ `feat: add destinations grid with 6 luxury cards and hover effects`
4. ✅ `feat: integrate navbar, hero, and destinations into main page`
5. ✅ `style: update globals.css with dark luxury theme and custom animations`
6. ✅ `docs: add comprehensive implementation guide`
7. ✅ `docs: add comprehensive features checklist`
8. ✅ `docs: update README with complete feature overview and badges`

### Phase 2: Experiences & Membership
9. ✨ `feat: add signature experiences section with 5 luxury experiences`
10. 👑 `feat: add membership tiers section with 3 premium tiers`
11. 🔗 `feat: integrate signature experiences and membership tiers into main page`
12. 🎨 `style: update navbar links to include experiences and membership sections`
13. 📖 `docs: add comprehensive documentation for new signature experiences and membership tiers`
14. 📚 `docs: update README with new sections and complete commit history`

### Phase 3: Testimonials
15. 💬 `feat: add premium testimonials carousel with 6 ultra-wealthy client reviews`
16. 🔗 `feat: integrate testimonials carousel into main page flow`
17. 📖 `docs: add comprehensive testimonials carousel implementation guide`

---

## 📖 Documentation

- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Original technical implementation guide
- **[NEW_FEATURES.md](./NEW_FEATURES.md)** - Experiences & Membership sections
- **[TESTIMONIALS_GUIDE.md](./TESTIMONIALS_GUIDE.md)** - Carousel implementation details
- **[FEATURES_CHECKLIST.md](./FEATURES_CHECKLIST.md)** - Complete feature checklist
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick start guide
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Project structure details

---

## 🎨 Custom Animations

### Defined in `globals.css`:
```css
@keyframes gradient          # 3s gradient shift
@keyframes pulse-slow        # 4s pulse effect
@keyframes shimmer           # 2s shimmer sweep
```

### Framer Motion Animations:
- Aurora orbs (20-25s loops)
- 3D card tilt (motion values)
- Staggered text reveals
- Scroll-triggered entrances
- Button hover states
- Mobile menu slides
- Tier elevation effects
- Icon rotations
- Carousel slide transitions
- Star rating reveals

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Deploy via Vercel CLI
vercel --prod
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

### Other Platforms
- **Netlify**: Supports Next.js SSR
- **AWS Amplify**: Full Next.js support
- **Self-hosted**: Use Docker with node:18-alpine

---

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Code Quality

- ✅ **ESLint** - Code linting
- ✅ **Prettier** - Code formatting
- ✅ **TypeScript** - Type safety
- ✅ **Conventional Commits** - Commit messages
- ✅ **Component-based** - Modular architecture

---

## 📄 License

MIT License - See [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Jimmy Lauchoy**
- GitHub: [@lauchoy](https://github.com/lauchoy)
- Website: [lauchoy.com](https://www.lauchoy.com)
- Location: Los Angeles 🌴

---

## 🙏 Acknowledgments

- Next.js team for the incredible framework
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling
- Unsplash for stunning imagery
- Open source community

---

## 📞 Support

For questions, issues, or feedback:
- 🐛 [Open an issue](https://github.com/lauchoy/aurora-luxe-travel/issues)
- 💬 [Discussions](https://github.com/lauchoy/aurora-luxe-travel/discussions)
- 📧 Contact via GitHub profile

---

<div align="center">

**Built with ❤️ for luxury travelers around the world**

⭐ Star this repo if you found it helpful!

</div>
