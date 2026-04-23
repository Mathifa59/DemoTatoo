/** Navigation link for Navbar */
export interface NavLink {
  label: string;
  href: string; // e.g., "#portfolio"
}

/** Value proposition card data */
export interface ValueItem {
  icon: string; // lucide-react icon name key, e.g., "Palette", "Shield"
  title: string;
  description: string;
}

/** Portfolio work sample */
export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  gradient: string; // CSS gradient used as fallback / overlay
  image?: string; // Optional image URL
  kanji?: string; // Small kanji accent
}

export type PortfolioCategory =
  | "Irezumi"
  | "Blackwork"
  | "Sumi-e"
  | "Neo-tradicional"
  | "Minimalista";

/** Process step */
export interface ProcessStep {
  number: number;
  icon: string; // lucide-react icon name key
  title: string;
  description: string;
}

/** Client testimonial */
export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 4 or 5
  text: string;
}

/** FAQ item */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Booking form field data */
export interface BookingFormData {
  name: string;
  whatsapp: string;
  tattooType: string;
  size: string;
  bodyArea: string;
  description: string;
  budget: string;
}

/** Select option for form dropdowns */
export interface SelectOption {
  value: string;
  label: string;
}

/** Booking form select options */
export interface BookingOptions {
  tattooTypes: SelectOption[];
  sizes: SelectOption[];
  budgets: SelectOption[];
}

/** Site-wide information */
export interface SiteInfo {
  studioName: string;
  tagline: string;
  address: string;
  hours: string;
  phone: string;
  whatsappUrl: string;
  instagramUrl: string;
}

/** Artist biography */
export interface ArtistBio {
  name: string;
  title: string;
  bio: string[]; // Array of paragraphs
  philosophy: string; // Quote or philosophy statement
  yearsExperience: number;
}
