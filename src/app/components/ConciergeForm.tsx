'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Loader2,
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
  Mail,
  User
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  travelStartDate: string;
  travelEndDate: string;
  numberOfTravelers: string;
  interests: string[];
  budgetRange: string;
  specialRequests: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  travelStartDate?: string;
  travelEndDate?: string;
  numberOfTravelers?: string;
  interests?: string;
  budgetRange?: string;
  specialRequests?: string;
}

const interestOptions = [
  'Private Jets',
  'Yacht Charters',
  'Fine Dining',
  'Cultural Experiences',
  'Adventure',
  'Wellness & Spa',
];

const travelerOptions = [
  { value: '1', label: '1 Traveler' },
  { value: '2', label: '2 Travelers' },
  { value: '3-5', label: '3-5 Travelers' },
  { value: '6-10', label: '6-10 Travelers' },
  { value: '11+', label: '11+ Travelers' },
];

const budgetOptions = [
  { value: '10000-25000', label: '€10,000 - €25,000' },
  { value: '25000-50000', label: '€25,000 - €50,000' },
  { value: '50000-100000', label: '€50,000 - €100,000' },
  { value: '100000+', label: '€100,000+' },
];

export default function ConciergeForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    travelStartDate: '',
    travelEndDate: '',
    numberOfTravelers: '',
    interests: [],
    budgetRange: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation functions
  const validateField = (name: keyof FormData, value: any): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value || value.trim().length < 2) {
          return 'Please enter your full name (minimum 2 characters)';
        }
        if (value.length > 50) {
          return 'Name must be less than 50 characters';
        }
        break;

      case 'email':
        if (!value) {
          return 'Email address is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address';
        }
        break;

      case 'travelStartDate':
        if (!value) {
          return 'Please select your travel start date';
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const startDate = new Date(value);
        if (startDate < today) {
          return 'Travel date must be in the future';
        }
        break;

      case 'travelEndDate':
        if (!value) {
          return 'Please select your travel end date';
        }
        if (formData.travelStartDate && value < formData.travelStartDate) {
          return 'End date must be after start date';
        }
        break;

      case 'numberOfTravelers':
        if (!value) {
          return 'Please select number of travelers';
        }
        break;

      case 'interests':
        if (!value || value.length === 0) {
          return 'Please select at least one interest';
        }
        break;

      case 'budgetRange':
        if (!value) {
          return 'Please select your budget range';
        }
        break;

      case 'specialRequests':
        if (value && value.length > 500) {
          return 'Special requests must be less than 500 characters';
        }
        break;
    }
    return undefined;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate on change if already touched
    if (touched.has(name)) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => new Set(prev).add(name));
    const error = validateField(name as keyof FormData, formData[name as keyof FormData]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));

    // Validate interests if touched
    if (touched.has('interests')) {
      const newInterests = formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest];
      const error = validateField('interests', newInterests);
      setErrors((prev) => ({ ...prev, interests: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched(new Set(Object.keys(formData)));

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Submit form
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        travelStartDate: '',
        travelEndDate: '',
        numberOfTravelers: '',
        interests: [],
        budgetRange: '',
        specialRequests: '',
      });
      setErrors({});
      setTouched(new Set());
      setIsSuccess(false);
    }, 5000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      travelStartDate: '',
      travelEndDate: '',
      numberOfTravelers: '',
      interests: [],
      budgetRange: '',
      specialRequests: '',
    });
    setErrors({});
    setTouched(new Set());
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
            left: '10%',
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
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
            right: '10%',
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200">Luxury Concierge</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Design Your Extraordinary Journey
            </span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our luxury concierge team is ready to craft your bespoke experience
          </p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-12 backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/50 rounded-3xl p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-4"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Request Received. Your Journey Begins Now.
              </h3>
              <p className="text-white/80 mb-4">
                Our concierge team will contact you within 24-48 hours
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetForm}
                className="px-6 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
              >
                Submit Another Request
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-500 ${
            isSuccess ? 'opacity-50 pointer-events-none' : ''
          }`}
        >
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <User className="w-6 h-6 text-purple-400" />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('fullName')}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName && touched.has('fullName')
                          ? 'border-red-500/50 focus:ring-red-500/50'
                          : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.fullName && touched.has('fullName') && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs mt-2"
                      >
                        {errors.fullName}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="relative"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                        errors.email && touched.has('email')
                          ? 'border-red-500/50 focus:ring-red-500/50'
                          : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                      }`}
                      placeholder="your@email.com"
                    />
                  </div>
                  <AnimatePresence>
                    {errors.email && touched.has('email') && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs mt-2"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Travel Details Section */}
            <div className="space-y-6 pt-6 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-400" />
                Travel Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Travel Start Date */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="travelStartDate" className="block text-sm font-medium text-white/80 mb-2">
                    Travel Start Date *
                  </label>
                  <input
                    type="date"
                    id="travelStartDate"
                    name="travelStartDate"
                    value={formData.travelStartDate}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('travelStartDate')}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all ${
                      errors.travelStartDate && touched.has('travelStartDate')
                        ? 'border-red-500/50 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.travelStartDate && touched.has('travelStartDate') && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs mt-2"
                      >
                        {errors.travelStartDate}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Travel End Date */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="travelEndDate" className="block text-sm font-medium text-white/80 mb-2">
                    Travel End Date *
                  </label>
                  <input
                    type="date"
                    id="travelEndDate"
                    name="travelEndDate"
                    value={formData.travelEndDate}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('travelEndDate')}
                    min={formData.travelStartDate || new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all ${
                      errors.travelEndDate && touched.has('travelEndDate')
                        ? 'border-red-500/50 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.travelEndDate && touched.has('travelEndDate') && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs mt-2"
                      >
                        {errors.travelEndDate}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Number of Travelers */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    Number of Travelers *
                  </label>
                  <select
                    id="numberOfTravelers"
                    name="numberOfTravelers"
                    value={formData.numberOfTravelers}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('numberOfTravelers')}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.numberOfTravelers && touched.has('numberOfTravelers')
                        ? 'border-red-500/50 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                  >
                    <option value="" className="bg-black">Select travelers</option>
                    {travelerOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-black">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <AnimatePresence>
                    {errors.numberOfTravelers && touched.has('numberOfTravelers') && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs mt-2"
                      >
                        {errors.numberOfTravelers}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Budget Range */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-purple-400" />
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('budgetRange')}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.budgetRange && touched.has('budgetRange')
                        ? 'border-red-500/50 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                    }`}
                  >
                    <option value="" className="bg-black">Select budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-black">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <AnimatePresence>
                    {errors.budgetRange && touched.has('budgetRange') && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-xs mt-2"
                      >
                        {errors.budgetRange}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Interests Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 pt-6 border-t border-white/10"
            >
              <label className="block text-sm font-medium text-white/80 mb-3">
                Interests * <span className="text-white/50 text-xs">(Select at least one)</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {interestOptions.map((interest, index) => {
                  const isSelected = formData.interests.includes(interest);
                  return (
                    <motion.button
                      key={interest}
                      type="button"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * index }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        toggleInterest(interest);
                        if (!touched.has('interests')) {
                          setTouched((prev) => new Set(prev).add('interests'));
                        }
                      }}
                      className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-purple-500/50 shadow-lg shadow-purple-500/30'
                          : 'backdrop-blur-md bg-white/10 border border-white/20 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {interest}
                    </motion.button>
                  );
                })}
              </div>
              <AnimatePresence>
                {errors.interests && touched.has('interests') && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs"
                  >
                    {errors.interests}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Special Requests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="space-y-4 pt-6 border-t border-white/10"
            >
              <label htmlFor="specialRequests" className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                Special Requests or Notes
                <span className="text-white/50 text-xs">(Optional)</span>
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                onBlur={() => handleBlur('specialRequests')}
                rows={4}
                maxLength={500}
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.specialRequests && touched.has('specialRequests')
                    ? 'border-red-500/50 focus:ring-red-500/50'
                    : 'border-white/20 focus:border-purple-500/50 focus:ring-purple-500/50'
                }`}
                placeholder="Tell us about your dream journey, dietary requirements, special occasions, or any specific preferences..."
              />
              <div className="flex justify-between items-center">
                <AnimatePresence>
                  {errors.specialRequests && touched.has('specialRequests') && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-400 text-xs"
                    >
                      {errors.specialRequests}
                    </motion.p>
                  )}
                </AnimatePresence>
                <span className="text-xs text-white/40 ml-auto">
                  {formData.specialRequests.length}/500
                </span>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-4 rounded-full font-semibold text-lg text-white relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_100%] animate-gradient"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing Your Request...
                    </>
                  ) : (
                    <>
                      Request Your Journey
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </motion.button>
            </motion.div>

            {/* Privacy Notice */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xs text-white/50 text-center leading-relaxed"
            >
              Your information is protected with bank-level encryption. We never share your details with third parties. 
              By submitting this form, you agree to our{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                Privacy Policy
              </a>
              .
            </motion.p>
          </form>
        </motion.div>

        {/* Service Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-white/60">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm">Premium concierge service · Bespoke experiences · 24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
