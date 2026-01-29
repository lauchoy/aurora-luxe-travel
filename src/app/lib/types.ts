/**
 * Type definitions for Aurora Luxe Travel
 */

export interface Destination {
  id: string;
  name: string;
  country: string;
  region?: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  gallery?: string[];
  featured: boolean;
  priceRange: '$' | '$$' | '$$$';
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  climate?: string;
  bestTimeToVisit?: string;
  highlights?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  destinationId: string;
  destination?: Destination;
  duration: number; // in days
  price: number;
  currency: string;
  imageUrl: string;
  gallery?: string[];
  included: string[];
  excluded?: string[];
  itinerary?: ItineraryDay[];
  maxGroupSize?: number;
  difficulty?: 'Easy' | 'Moderate' | 'Challenging';
  category: 'Luxury' | 'Adventure' | 'Cultural' | 'Romantic' | 'Family';
  featured: boolean;
  availableDates?: Date[];
  rating?: number;
  reviewCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: ('Breakfast' | 'Lunch' | 'Dinner')[];
  accommodation?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'Hotel' | 'Resort' | 'Villa' | 'Lodge' | 'Boutique';
  destinationId: string;
  destination?: Destination;
  description: string;
  imageUrl: string;
  gallery?: string[];
  rating: number;
  pricePerNight: number;
  currency: string;
  amenities: string[];
  roomTypes?: RoomType[];
  location: Location;
  featured: boolean;
  reviewCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  maxOccupancy: number;
  pricePerNight: number;
  imageUrl: string;
  amenities: string[];
}

export interface Location {
  address: string;
  city: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: Date;
  verified: boolean;
  helpful?: number;
  images?: string[];
}

export interface Booking {
  id: string;
  userId: string;
  packageId?: string;
  accommodationId?: string;
  startDate: Date;
  endDate: Date;
  guests: number;
  totalPrice: number;
  currency: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
  paymentStatus: 'Unpaid' | 'Partial' | 'Paid' | 'Refunded';
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  preferences?: TravelPreferences;
  bookings?: Booking[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TravelPreferences {
  favoriteDestinations?: string[];
  travelStyle?: string[];
  budget?: '$' | '$$' | '$$$';
  interests?: string[];
  dietaryRestrictions?: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContactMethod?: 'email' | 'phone';
  destination?: string;
  travelDates?: {
    start: Date;
    end: Date;
  };
  guests?: number;
}

export interface NewsletterSubscription {
  email: string;
  preferences?: string[];
  subscribedAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}

// Filter and Sort types
export interface DestinationFilters {
  region?: string;
  priceRange?: string;
  tags?: string[];
  featured?: boolean;
  search?: string;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}