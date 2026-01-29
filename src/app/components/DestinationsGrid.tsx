'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Star, ArrowRight } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  quickFacts: string[];
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Maldives',
    location: 'Indian Ocean',
    description: 'Overwater villas with private infinity pools',
    price: '€12,500',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2565&auto=format&fit=crop',
    quickFacts: ['Private Island', 'Butler Service', 'Michelin Dining'],
  },
  {
    id: 2,
    name: 'Tokyo',
    location: 'Japan',
    description: 'Traditional luxury meets modern elegance',
    price: '€8,900',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2594&auto=format&fit=crop',
    quickFacts: ['Ryokan Stay', 'Private Chef', 'Cultural Tours'],
  },
  {
    id: 3,
    name: 'Switzerland',
    location: 'Swiss Alps',
    description: 'Alpine chalets with panoramic mountain views',
    price: '€15,200',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2670&auto=format&fit=crop',
    quickFacts: ['Ski Concierge', 'Spa Retreat', 'Helicopter Tours'],
  },
  {
    id: 4,
    name: 'Dubai',
    location: 'UAE',
    description: 'Opulent desert oasis and futuristic cityscapes',
    price: '€10,800',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop',
    quickFacts: ['Royal Suite', 'Private Jet', 'Desert Safari'],
  },
  {
    id: 5,
    name: 'African Safari',
    location: 'Tanzania',
    description: 'Luxury tented camps in the Serengeti',
    price: '€18,500',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop',
    quickFacts: ['Big Five', 'Private Guide', 'Conservation'],
  },
  {
    id: 6,
    name: 'Mediterranean Yacht',
    location: 'French Riviera',
    description: 'Private superyacht cruising azure waters',
    price: '€25,000',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2670&auto=format&fit=crop',
    quickFacts: ['Crew of 12', 'Michelin Chef', 'Water Sports'],
  },
];

function DestinationCard({ destination }: { destination: Destination }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Card Container with Glassmorphism */}
      <div className="relative h-[500px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 z-10">
          {/* Top Section - Rating */}
          <div className="flex justify-between items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/20 border border-white/30"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-white">{destination.rating}</span>
            </motion.div>
          </div>

          {/* Bottom Section - Details */}
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{destination.location}</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-bold text-white">
              {destination.name}
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed">
              {destination.description}
            </p>

            {/* Quick Facts - Hidden, revealed on hover */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 'auto', opacity: 1 }}
              className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.quickFacts.map((fact, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md bg-white/10 border border-white/20 rounded-full"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div>
                <p className="text-xs text-white/60 mb-1">Starting from</p>
                <p className="text-2xl font-bold text-white">{destination.price}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full backdrop-blur-md bg-white/20 border border-white/30 hover:bg-white/30 transition-colors group/btn"
              >
                <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DestinationsGrid() {
  return (
    <section id="destinations" className="relative py-24 px-4 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-purple-300 backdrop-blur-md bg-purple-500/10 border border-purple-500/20 rounded-full"
          >
            Exclusive Destinations
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Where Will You Go?
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Discover handpicked destinations that redefine luxury travel
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
