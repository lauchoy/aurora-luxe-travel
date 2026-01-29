'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Plane, Ship, ChefHat, Telescope, Mountain, Sparkles, ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  highlights: string[];
  image: string;
  icon: LucideIcon;
  gradient: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Private Jet Hops',
    subtitle: 'Luxury Aviation Experiences',
    description: 'Soar above the ordinary with bespoke private jet itineraries connecting the world\'s most coveted destinations.',
    price: '€45,000',
    duration: '7 days',
    highlights: ['Gulfstream G650', 'Personal Flight Crew', 'Multi-City Routes'],
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2671&auto=format&fit=crop',
    icon: Plane,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Yacht Week',
    subtitle: 'Mediterranean Yacht Charters',
    description: 'Experience the French Riviera aboard a 150-foot superyacht with a dedicated crew and Michelin-starred chef.',
    price: '€50,000',
    duration: '7 days',
    highlights: ['150ft Superyacht', 'Crew of 15', 'Private Chef'],
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2644&auto=format&fit=crop',
    icon: Ship,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    title: 'Michelin Trails',
    subtitle: 'Culinary Journeys',
    description: 'A gastronomic odyssey through Europe\'s finest three-star restaurants with private wine tastings and chef encounters.',
    price: '€35,000',
    duration: '10 days',
    highlights: ['10 Michelin ★★★', 'Private Tastings', 'Chef Encounters'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop',
    icon: ChefHat,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    title: 'Desert Stargazing',
    subtitle: 'Luxury Desert Camps',
    description: 'Sleep under the Arabian stars in an ultra-luxury desert camp with private astronomers and Bedouin-inspired opulence.',
    price: '€25,000',
    duration: '5 days',
    highlights: ['Private Observatory', 'Expert Astronomer', 'Royal Suite'],
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2676&auto=format&fit=crop',
    icon: Telescope,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 5,
    title: 'Alpine Retreat',
    subtitle: 'Exclusive Mountain Lodges',
    description: 'Secluded Swiss chalets with helicopter access, private ski instructors, and world-class spa treatments.',
    price: '€40,000',
    duration: '7 days',
    highlights: ['Helicopter Access', 'Private Instructor', 'Alpine Spa'],
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2670&auto=format&fit=crop',
    icon: Mountain,
    gradient: 'from-emerald-500 to-teal-600',
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const Icon = experience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
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
      className="group relative h-full"
    >
      {/* Gradient border effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${experience.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}></div>
      
      {/* Card container */}
      <div className="relative h-full backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl overflow-hidden">
        {/* Image section */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
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

          {/* Icon badge */}
          <div className="absolute top-6 left-6">
            <div className={`p-3 rounded-2xl backdrop-blur-md bg-gradient-to-br ${experience.gradient} shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Premium badge */}
          <div className="absolute top-6 right-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/20 border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span className="text-xs font-semibold text-white">Signature</span>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-pink-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {experience.title}
            </h3>
            <p className="text-sm text-white/60">{experience.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md bg-white/10 border border-white/20 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/50 mb-1">Starting from</p>
              <p className="text-2xl font-bold text-white">{experience.price}</p>
              <p className="text-xs text-white/60 mt-1">{experience.duration}</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-full backdrop-blur-md bg-gradient-to-br ${experience.gradient} shadow-lg group/btn`}
            >
              <ArrowUpRight className="w-5 h-5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SignatureExperiences() {
  return (
    <section id="experiences" className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '10%',
            right: '10%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200">Signature Experiences</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Curated for the Extraordinary
            </span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Immersive journeys crafted by our team of luxury travel experts. Each experience is a masterpiece of elegance, exclusivity, and unforgettable moments.
          </p>
        </motion.div>

        {/* Experiences grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-6">
            Each experience can be customized to your exact preferences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 font-semibold text-lg text-white overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_100%] animate-gradient"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Customize Your Journey
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
