# Aurora Luxe Travel ✈️

Premium luxury travel website built with modern web technologies to deliver an exceptional user experience for discerning travelers.

## 🌟 Overview

Aurora Luxe Travel is a sophisticated luxury travel platform designed to showcase exclusive destinations, curated experiences, and premium travel services. The website combines elegant design with cutting-edge technology to create an immersive browsing experience that reflects the luxury travel lifestyle.

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Package Manager**: npm/yarn/pnpm

## ✨ Key Features

- 🎨 Stunning, responsive UI with smooth animations
- 🌍 Interactive destination showcases
- 📱 Mobile-first, fully responsive design
- ⚡ Optimized performance and SEO
- 🎭 Immersive visual storytelling
- 🔍 Advanced search and filtering
- 💼 Curated luxury travel packages
- 🎫 Booking inquiry system
- 📸 High-quality image galleries
- 🌙 Dark mode support (optional)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git**

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/lauchoy/aurora-luxe-travel.git
cd aurora-luxe-travel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

## 🏃‍♂️ Running the Project

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

## 📁 Project Structure

```
aurora-luxe-travel/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ...                # Other pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
│   ├── images/          # Images
│   └── fonts/           # Custom fonts
├── styles/              # Global styles
├── types/               # TypeScript type definitions
├── .env.example         # Environment variables example
├── .gitignore          # Git ignore rules
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🎨 Design Philosophy

Aurora Luxe Travel embraces a design philosophy that emphasizes:

- **Elegance**: Clean, sophisticated layouts with ample white space
- **Performance**: Lightning-fast loading with optimized assets
- **Accessibility**: WCAG compliant with semantic HTML
- **Interactivity**: Smooth, purposeful animations that enhance UX
- **Responsiveness**: Seamless experience across all devices

## 🧪 Testing

```bash
# Run tests (when configured)
npm run test

# Run tests in watch mode
npm run test:watch

# Run test coverage
npm run test:coverage
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Azure
- Self-hosted with Docker

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project follows:
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode
- Conventional Commits

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jimmy Lauchoy**

- GitHub: [@lauchoy](https://github.com/lauchoy)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- The open-source community

## 📞 Support

For support, questions, or feedback:
- Open an issue on GitHub
- Contact via email
- Join our community discussions

---

**Built with ❤️ for luxury travelers around the world**
