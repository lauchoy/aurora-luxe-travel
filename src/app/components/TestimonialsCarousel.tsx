'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  location: string;
  tripType: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Victoria Sterling',
    title: 'CEO',
    location: 'London',
    tripType: 'Private Jet Mediterranean Tour',
    quote: 'Aurora Luxe transformed what could have been a standard Mediterranean tour into an extraordinary journey of discovery. The seamless coordination of private aviation, exclusive villa access, and personal concierge service exceeded even my highest expectations. This is luxury travel redefined.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2676&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Alexander Rothschild',
    title: 'Investment Banker',
    location: 'New York',
    tripType: 'African Safari Experience',
    quote: 'In my years of global travel, I have never encountered such meticulous attention to detail. The Aurora Luxe team orchestrated a Serengeti experience that felt both authentically wild and impeccably luxurious. Their conservation partnerships and private access made this truly once-in-a-lifetime.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia Chen',
    title: 'Tech Entrepreneur',
    location: 'Singapore',
    tripType: 'Swiss Alpine Retreat',
    quote: 'As someone who values both privacy and perfection, Aurora Luxe delivered on every front. The helicopter transfer to our secluded chalet, the private ski instruction, and the thoughtfully curated wellness experiences created the perfect sanctuary. They understand that true luxury is in the details.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Marcus Webb',
    title: 'Real Estate Mogul',
    location: 'Dubai',
    tripType: 'Yacht Week Mediterranean',
    quote: 'The superyacht experience curated by Aurora Luxe was nothing short of spectacular. From the professional crew to the Michelin-starred chef on board, every element was world-class. Their ability to secure exclusive mooring in Portofino during peak season demonstrated their unmatched connections.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 5,
    name: 'Isabella Montenegro',
    title: 'Fashion Executive',
    location: 'Milan',
    tripType: 'Michelin Star Culinary Journey',
    quote: 'Aurora Luxe crafted a gastronomic tour of Europe that was simply exquisite. Private tastings at legendary vineyards, intimate dinners with celebrated chefs, and reservations at restaurants where others wait months. They elevated dining from mere sustenance to high art.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2574&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 6,
    name: 'James Montgomery',
    title: 'Hedge Fund Manager',
    location: 'Monaco',
    tripType: 'Desert Stargazing Morocco',
    quote: 'I have stayed at the finest properties worldwide, yet nothing compares to the magic Aurora Luxe created in the Sahara. The combination of Bedouin luxury, a private astronomer, and the profound silence of the desert was transformative. They curate experiences, not just trips.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop',
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="relative h-full"
    >
      {/* Glassmorphism card */}
      <div className="relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-10 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>

        {/* Quote icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <Quote className="w-24 h-24 text-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Profile section */}
          <div className="flex items-start gap-6 mb-6">
            {/* Profile image */}
            <div className="relative flex-shrink-0">
              {/* Gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75"></div>
              
              {/* Image container */}
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80px, 96px"
                />
              </div>
            </div>

            {/* Client info */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">
                {testimonial.name}
              </h3>
              <p className="text-white/70 text-sm mb-2">
                {testimonial.title} · {testimonial.location}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-purple-500/20 border border-purple-500/30">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span className="text-xs font-medium text-purple-200">
                  {testimonial.tripType}
                </span>
              </div>
            </div>
          </div>

          {/* Star rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="flex-1">
            <p className="text-white/90 text-lg leading-relaxed italic">
              "{testimonial.quote}"
            </p>
          </blockquote>

          {/* Verified badge */}
          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/10">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-white/60">Verified Aurora Luxe Member</span>
          </div>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < testimonials.length) {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    }
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  // Get current testimonial with safety check
  const currentTestimonial = testimonials[currentIndex];
  if (!currentTestimonial) {
    return null;
  }

  return (
    <section 
      id="testimonials" 
      className="relative py-24 px-4 bg-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '30%',
            left: '10%',
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '20%',
            right: '10%',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full backdrop-blur-md bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30"
          >
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span className="text-sm font-medium text-amber-200">Client Testimonials</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Trusted by the Elite
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Discover why the world's most discerning travelers choose Aurora Luxe for their extraordinary journeys
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main carousel area */}
          <div className="relative h-[600px] lg:h-[500px] mb-8">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0"
              >
                {currentTestimonial && (
                  <TestimonialCard testimonial={currentTestimonial} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </motion.button>

            {/* Dot indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative group"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {/* Background glow */}
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Dot */}
                  <div
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110'
                        : 'bg-white/30 group-hover:bg-white/50'
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="p-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Counter */}
          <div className="text-center">
            <p className="text-white/50 text-sm">
              <span className="text-white font-semibold">{currentIndex + 1}</span>
              {' / '}
              <span>{testimonials.length}</span>
            </p>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '500+', label: 'Elite Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '50+', label: 'Countries Served' },
            { number: '24/7', label: 'Concierge Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
