import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from './lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aurora Luxe Travel | Luxury Travel Experiences',
    template: '%s | Aurora Luxe Travel',
  },
  description:
    'Discover extraordinary luxury travel experiences around the world. Curated destinations, exclusive accommodations, and personalized itineraries for discerning travelers.',
  keywords: [
    'luxury travel',
    'premium destinations',
    'exclusive travel',
    'luxury vacations',
    'high-end travel',
    'bespoke travel experiences',
  ],
  authors: [{ name: 'Aurora Luxe Travel' }],
  creator: 'Jimmy Lauchoy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auroraluxetravel.com',
    title: 'Aurora Luxe Travel | Luxury Travel Experiences',
    description:
      'Discover extraordinary luxury travel experiences around the world. Curated destinations, exclusive accommodations, and personalized itineraries.',
    siteName: 'Aurora Luxe Travel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Luxe Travel | Luxury Travel Experiences',
    description: 'Discover extraordinary luxury travel experiences around the world.',
    creator: '@auroraluxetravel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}