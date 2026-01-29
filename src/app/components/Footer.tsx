'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@auroraluxetravel',
    url: 'https://instagram.com/auroraluxetravel',
    icon: Instagram,
    ariaLabel: 'Visit our Instagram profile',
  },
  {
    name: 'Twitter',
    handle: '@auroraluxe',
    url: 'https://twitter.com/auroraluxe',
    icon: Twitter,
    ariaLabel: 'Follow us on Twitter',
  },
  {
    name: 'Facebook',
    handle: 'Aurora Luxe Travel',
    url: 'https://facebook.com/auroraluxetravel',
    icon: Facebook,
    ariaLabel: 'Like our Facebook page',
  },
  {
    name: 'LinkedIn',
    handle: 'Aurora Luxe Travel',
    url: 'https://linkedin.com/company/aurora-luxe-travel',
    icon: Linkedin,
    ariaLabel: 'Connect with us on LinkedIn',
  },
];

const legalLinks = [
  {
    name: 'Privacy Policy',
    url: '#privacy',
    description: 'Protecting your privacy is our priority',
  },
  {
    name: 'Terms of Service',
    url: '#terms',
    description: 'Our commitment to exceptional service',
  },
];

const photographerCredits = [
  'Karsten Winegeart',
  'Shifaaz Shamoon',
  'Luca Bravo',
  'Christoph Schulz',
  'Syd Wachs',
  'Sergey Pesterev',
  'Ussama Azam',
  'Raimond Klavins',
  'Michael Fousert',
  'Amy Humphries',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/5 to-black"></div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            left: '20%',
            bottom: '0%',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
            right: '20%',
            bottom: '0%',
          }}
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 space-y-12">
          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative p-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    {/* Gradient glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                    
                    <Icon className="relative z-10 w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Links Section */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
            aria-label="Footer navigation"
          >
            {legalLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ scale: 1.05 }}
                className="text-white/70 hover:text-white font-medium relative group transition-colors"
                title={link.description}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            
            {/* Contact Email */}
            <motion.a
              href="mailto:contact@auroraluxe.travel"
              whileHover={{ scale: 1.05 }}
              className="text-white/70 hover:text-white font-medium relative group transition-colors flex items-center gap-2"
              aria-label="Send email to contact@auroraluxe.travel"
            >
              <Mail className="w-4 h-4" />
              contact@auroraluxe.travel
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </motion.nav>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center items-center gap-2 text-white/60 text-sm"
          >
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>Monaco · London · New York</span>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10"></div>

          {/* Copyright & Credits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-center"
          >
            {/* Copyright */}
            <div className="space-y-2">
              <p className="text-white/80 font-medium">
                © {currentYear} Aurora Luxe Travel. All rights reserved.
              </p>
              <p className="text-white/50 text-sm italic">
                Beyond First Class
              </p>
            </div>

            {/* Image Credits */}
            <div className="pt-4 border-t border-white/5">
              <p className="text-white/40 text-xs leading-relaxed max-w-3xl mx-auto">
                Photography by {photographerCredits.slice(0, 5).join(', ')}, and others via{' '}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400/70 hover:text-purple-400 transition-colors underline"
                >
                  Unsplash
                </a>
                . All images used with proper licensing.
              </p>
            </div>

            {/* Built with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/40 text-xs"
            >
              Built with{' '}
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-block text-pink-500"
              >
                ❤️
              </motion.span>{' '}
              for luxury travelers around the world
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
