/**
 * Form Validation Utilities for Aurora Luxe Travel
 * Provides comprehensive validation functions for the concierge form
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate full name field
 */
export const validateFullName = (name: string): ValidationResult => {
  const trimmedName = name.trim();
  
  if (!trimmedName) {
    return { isValid: false, error: 'Please enter your full name' };
  }
  
  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }
  
  if (trimmedName.length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }
  
  // Check for valid characters (letters, spaces, hyphens, apostrophes)
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, error: 'Name contains invalid characters' };
  }
  
  return { isValid: true };
};

/**
 * Validate email address
 */
export const validateEmail = (email: string): ValidationResult => {
  const trimmedEmail = email.trim();
  
  if (!trimmedEmail) {
    return { isValid: false, error: 'Email address is required' };
  }
  
  // Comprehensive email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

/**
 * Validate travel start date
 */
export const validateTravelStartDate = (dateString: string): ValidationResult => {
  if (!dateString) {
    return { isValid: false, error: 'Please select your travel start date' };
  }
  
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    return { isValid: false, error: 'Travel date must be in the future' };
  }
  
  // Check if date is too far in future (e.g., more than 2 years)
  const twoYearsFromNow = new Date();
  twoYearsFromNow.setFullYear(twoYearsFromNow.getFullYear() + 2);
  
  if (selectedDate > twoYearsFromNow) {
    return { isValid: false, error: 'Please contact us for bookings beyond 2 years' };
  }
  
  return { isValid: true };
};

/**
 * Validate travel end date
 */
export const validateTravelEndDate = (
  endDateString: string,
  startDateString: string
): ValidationResult => {
  if (!endDateString) {
    return { isValid: false, error: 'Please select your travel end date' };
  }
  
  if (!startDateString) {
    return { isValid: false, error: 'Please select start date first' };
  }
  
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  
  if (endDate <= startDate) {
    return { isValid: false, error: 'End date must be after start date' };
  }
  
  // Check for reasonable trip duration (e.g., max 90 days)
  const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff > 90) {
    return { isValid: false, error: 'For trips longer than 90 days, please contact us directly' };
  }
  
  return { isValid: true };
};

/**
 * Validate number of travelers
 */
export const validateNumberOfTravelers = (value: string): ValidationResult => {
  if (!value) {
    return { isValid: false, error: 'Please select number of travelers' };
  }
  
  return { isValid: true };
};

/**
 * Validate interests selection
 */
export const validateInterests = (interests: string[]): ValidationResult => {
  if (!interests || interests.length === 0) {
    return { isValid: false, error: 'Please select at least one interest' };
  }
  
  if (interests.length > 6) {
    return { isValid: false, error: 'Please select a maximum of 6 interests' };
  }
  
  return { isValid: true };
};

/**
 * Validate budget range
 */
export const validateBudgetRange = (value: string): ValidationResult => {
  if (!value) {
    return { isValid: false, error: 'Please select your budget range' };
  }
  
  return { isValid: true };
};

/**
 * Validate special requests
 */
export const validateSpecialRequests = (text: string): ValidationResult => {
  if (text && text.length > 500) {
    return { isValid: false, error: 'Special requests must be less than 500 characters' };
  }
  
  return { isValid: true };
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Calculate trip duration in days
 */
export const calculateTripDuration = (
  startDate: string,
  endDate: string
): number | null => {
  if (!startDate || !endDate) return null;
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};
