'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Plane, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import type { Destination } from './lib/types';

const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'White-washed villages perched on dramatic cliffs overlooking the Aegean Sea',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    featured: true,
    priceRange: '$$$',
  },
  {
    id: '2',
    name: 'Bora Bora',
    country: 'French Polynesia',
    description: 'Paradise on earth with turquoise lagoons and overwater bungalows',
    imageUrl: 'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3',
    featured: true,
    priceRange: '$$$',
  },
  {
    id: '3',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Ancient temples, zen gardens, and timeless Japanese elegance',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    featured: true,
    priceRange: '$$',
  },
];

const features = [
  {
    icon: Globe,
    title: 'Curated Destinations',
    description: 'Hand-picked luxury destinations across the globe',
  },
  {
    icon: Star,
    title: 'Premium Experiences',
    description: 'Exclusive access to world-class accommodations',
  },
  {
    icon: Sparkles,
    title: 'Personalized Service',
    description: 'Tailored itineraries designed just for you',
  },
  {
    icon: Plane,
    title: 'Seamless Travel',
    description: 'End-to-end travel management and support',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-display-xl font-bold tracking-tight text-neutral-900 md:text-display-2xl">
              Experience the World
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                in Luxury
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover extraordinary destinations and create unforgettable memories with
            Aurora Luxe Travel. Where every journey becomes a masterpiece.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/destinations"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-4 font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              Explore Destinations
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-300 px-8 py-4 font-semibold text-neutral-900 transition-all hover:border-neutral-400 hover:bg-neutral-50"
            >
              Plan Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-display-md font-bold text-neutral-900">
              Why Choose Aurora Luxe
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
              We redefine luxury travel with unparalleled service and attention to detail
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 transition-all hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-gradient-to-b from-neutral-50 to-white px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-display-md font-bold text-neutral-900">
              Featured Destinations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
              Explore our handpicked collection of the world's most extraordinary places
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                  <div className="h-full w-full bg-gradient-to-br from-primary-200 to-accent-200" />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-neutral-900">{destination.name}</h3>
                    <span className="text-sm font-semibold text-primary-600">
                      {destination.priceRange}
                    </span>
                  </div>
                  <p className="mb-1 text-sm font-medium text-neutral-500">
                    {destination.country}
                  </p>
                  <p className="text-neutral-600">{destination.description}</p>
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="mt-4 inline-flex items-center gap-1 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 px-4 py-24">
        <motion.div
          className="mx-auto max-w-4xl text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-display-md font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Let our expert travel consultants create a bespoke itinerary tailored to your dreams
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-600 transition-all hover:shadow-2xl"
          >
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}