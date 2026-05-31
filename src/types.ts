/**
 * SmileCraft Dental Website Types
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  iconName: string; // Used to dynamically map Lucide Icons
  benefits: string[];
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialization: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  treatment: string;
  imageUrl: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  glowColor: string; // e.g., 'cyan', 'teal'
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
