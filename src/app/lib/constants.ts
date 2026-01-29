/**
 * Application-wide constants for Aurora Luxe Travel
 */

export const SITE_CONFIG = {
  name: 'Aurora Luxe Travel',
  description: 'Premium luxury travel website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://auroraluxetravel.com',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@auroraluxetravel.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567',
  social: {
    twitter: '@auroraluxetravel',
    facebook: 'auroraluxetravel',
    instagram: '@auroraluxetravel',
    linkedin: 'aurora-luxe-travel',
  },
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Travel Insurance', href: '/insurance' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Refund Policy', href: '/refunds' },
  ],
} as const;

export const REGIONS = [
  'Europe',
  'Asia',
  'Africa',
  'North America',
  'South America',
  'Oceania',
  'Middle East',
  'Caribbean',
] as const;

export const TRAVEL_STYLES = [
  'Luxury',
  'Adventure',
  'Cultural',
  'Romantic',
  'Family',
  'Beach',
  'Safari',
  'Wellness',
  'Food & Wine',
  'Photography',
] as const;

export const PRICE_RANGES = [
  { value: '$', label: 'Budget-Friendly', min: 0, max: 1000 },
  { value: '$$', label: 'Moderate', min: 1000, max: 3000 },
  { value: '$$$', label: 'Luxury', min: 3000, max: Infinity },
] as const;

export const AMENITIES = [
  'Free WiFi',
  'Pool',
  'Spa',
  'Fitness Center',
  'Restaurant',
  'Bar',
  'Room Service',
  'Concierge',
  'Airport Transfer',
  'Private Beach',
  'Ocean View',
  'Balcony',
  'Air Conditioning',
  'Mini Bar',
  'Safe',
  'Parking',
] as const;

export const MEAL_PLANS = ['Breakfast', 'Half Board', 'Full Board', 'All Inclusive'] as const;

export const BOOKING_STATUS = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  CANCELLED: 'Cancelled',
  COMPLETED: 'Completed',
} as const;

export const PAYMENT_STATUS = {
  UNPAID: 'Unpaid',
  PARTIAL: 'Partial',
  PAID: 'Paid',
  REFUNDED: 'Refunded',
} as const;

export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 100;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  card: { width: 400, height: 300 },
  hero: { width: 1920, height: 1080 },
  gallery: { width: 800, height: 600 },
} as const;

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Aurora Luxe Travel',
  defaultTitle: 'Aurora Luxe Travel | Luxury Travel Experiences',
  description:
    'Discover extraordinary luxury travel experiences around the world. Curated destinations, exclusive accommodations, and personalized itineraries for discerning travelers.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Aurora Luxe Travel',
  },
} as const;