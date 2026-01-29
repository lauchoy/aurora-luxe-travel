'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Gem, Sparkles, Star, Zap } from 'lucide-react';

interface Tier {
  id: number;
  name: string;
  tagline: string;
  price: string;
  priceAmount: number;
  gradient: string;
  borderGradient: string;
  icon: React.ReactNode;
  features: string[];
  exclusivePerks: string[];
  accentColor: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    id: 1,
    name: 'Silver',
    tagline: 'Entry to Luxury',
    price: '€25,000',
    priceAmount: 25000,
    gradient: 'from-slate-400 via-slate-300 to-slate-400',
    borderGradient: 'from-slate-500/50 to-slate-400/50',
    accentColor: 'slate',
    icon: <Star className="w-8 h-8" />,
    features: [
      '24/7 Concierge Service',
      'Priority Booking Access',
      '10% Discount on Experiences',
      'Quarterly Travel Magazine',
      'Exclusive Member Events',
      'Complimentary Travel Insurance',
      'Airport Lounge Access',
      'Personal Travel Consultant',
    ],
    exclusivePerks: [
      'Welcome Gift Package',
      'Birthday Celebration Bonus',
      'Referral Rewards Program',
    ],
  },
  {
    id: 2,
    name: 'Black',
    tagline: 'Premium Benefits',
    price: '€75,000',
    priceAmount: 75000,
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    borderGradient: 'from-purple-500/70 to-pink-500/70',
    accentColor: 'purple',
    icon: <Crown className="w-8 h-8" />,
    popular: true,
    features: [
      'Dedicated Senior Concierge',
      'Unlimited Priority Booking',
      '20% Discount on All Services',
      'Monthly Luxury Lifestyle Magazine',
      'Exclusive Private Events Access',
      'Premium Travel & Medical Insurance',
      'Private Airport Transfers',
      'Personal Travel Design Team',
      'Complimentary Room Upgrades',
      'Late Checkout Privileges',
      'Spa & Wellness Credits (€5,000)',
      'Private Jet Discounts',
    ],
    exclusivePerks: [
      'Annual Luxury Gift Collection',
      'VIP Access to Fashion Week',
      'Private Concert & Event Tickets',
      'Exclusive Partner Discounts',
    ],
  },
  {
    id: 3,
    name: 'Obsidian',
    tagline: 'Ultra-Exclusive',
    price: '€150,000',
    priceAmount: 150000,
    gradient: 'from-amber-500 via-yellow-400 to-amber-500',
    borderGradient: 'from-amber-400/80 to-yellow-300/80',
    accentColor: 'amber',
    icon: <Gem className="w-8 h-8" />,
    features: [
      'Personal Executive Concierge Team',
      'Unlimited Access & Priority',
      '30% Discount + Exclusive Rates',
      'Weekly Curated Experience Report',
      'Private Member-Only Events',
      'Comprehensive Elite Insurance',
      'Private Aviation & Yacht Access',
      'Bespoke Journey Architects',
      'Guaranteed Suite Upgrades',
      'Flexible Check-in/out Anytime',
      'Annual Spa & Wellness Package (€15,000)',
      'Complimentary Private Jet Hours (10hrs)',
      'Yacht Charter Discounts (30%)',
      'Michelin Restaurant Priority Access',
      'Personal Shopping & Styling',
    ],
    exclusivePerks: [
      'Bespoke Luxury Gift Experiences',
      'Front Row Fashion & Art Events',
      'Private Performance Bookings',
      'Global Elite Network Access',
      'Family Legacy Membership Transfer',
      'Annual Destination Villa Access',
    ],
  },
];

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        scale: tier.popular ? 1.05 : 1.03,
        y: -10,
      }}
      className={`relative h-full group ${tier.popular ? 'md:scale-105' : ''}`}
    >
      {/* Popular badge */}
      {tier.popular && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-gradient-to-r from-purple-600 to-pink-600 border border-white/30 shadow-lg">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Most Popular</span>
          </div>
        </motion.div>
      )}

      {/* Gradient border glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-b ${tier.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}></div>
      
      {/* Card container */}
      <div className={`relative h-full backdrop-blur-xl bg-black/60 border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
        tier.popular 
          ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
          : 'border-white/10 group-hover:border-white/20'
      }`}>
        {/* Header gradient */}
        <div className={`relative p-8 bg-gradient-to-br ${tier.gradient} overflow-hidden`}>
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '20px 20px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-white"
            >
              {tier.icon}
            </motion.div>

            {/* Tier name */}
            <h3 className="text-4xl font-bold text-white mb-2">
              {tier.name}
            </h3>
            <p className="text-white/90 text-sm font-medium mb-6">
              {tier.tagline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">
                {tier.price}
              </span>
              <span className="text-white/80 text-lg">/year</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-full font-semibold text-white transition-all ${
              tier.popular
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                : 'backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20'
            }`}
          >
            {tier.popular ? 'Start Your Journey' : 'Apply Now'}
          </motion.button>

          {/* Features list */}
          <div>
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
              Core Benefits
            </h4>
            <ul className="space-y-3">
              {tier.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx }}
                  className="flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.gradient} flex items-center justify-center mt-0.5`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Exclusive perks */}
          {tier.exclusivePerks.length > 0 && (
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Zap className={`w-4 h-4 text-${tier.accentColor}-400`} />
                <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                  Exclusive Perks
                </h4>
              </div>
              <ul className="space-y-2">
                {tier.exclusivePerks.map((perk, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * idx }}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <Sparkles className={`w-3.5 h-3.5 text-${tier.accentColor}-400 flex-shrink-0`} />
                    {perk}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
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

export default function MembershipTiers() {
  return (
    <section id="membership" className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
            left: '5%',
            top: '20%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)',
            right: '5%',
            bottom: '20%',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
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
            <Crown className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200">Membership Tiers</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-amber-200 via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Join the Elite Circle
            </span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Experience unprecedented luxury with our exclusive membership program. Each tier unlocks a world of privileges, personalized service, and access to extraordinary experiences.
          </p>
        </motion.div>

        {/* Tiers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <TierCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Tier is Right for You?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Our membership specialists are here to help you choose the perfect tier based on your travel preferences and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold text-white backdrop-blur-md bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
            >
              Compare Benefits
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
