'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury travel destination"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-purple-900/30 via-transparent to-black/50 animate-pulse-slow"></div>

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-10 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Aurora Animation Effect */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['-50%', '150%', '-50%'],
            y: ['-50%', '100%', '-50%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['150%', '-50%', '150%'],
            y: ['100%', '-50%', '100%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-white/90">
              Curated Luxury Travel Experiences
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6"
          >
            <span className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent leading-tight">
              Beyond
            </span>
            <span className="block bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent leading-tight">
              First Class.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Your personal gateway to extraordinary journeys. We craft bespoke
            travel experiences that transcend expectations, where every moment
            is meticulously designed for the discerning traveler.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 font-semibold text-lg text-white overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_100%] animate-gradient"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Design My Trip
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 font-semibold text-lg text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
            >
              <span className="flex items-center gap-2">
                Explore Destinations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-white"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
