export interface Course {
  id: string;
  slug: string;
  name: string;
  category: string; // e.g. "01 — Everyday Cooking", "03 — Cakes & Baking"
  categoryCode: string; // "everyday", "baking", etc.
  shortDescription: string;
  image: string;
  difficulty: 'Beginner Friendly' | 'Intermediate' | 'Advanced' | 'All Skill Levels';
  duration: string; // e.g. "2 Days (8 Hours)"
  trainingMode: 'Offline Studio' | 'Online Live' | 'Hybrid (Offline & Online)';
  upcomingBatch: string; // e.g. "Starts Oct 24, 2026"
  startingFee: number; // in INR
  originalFee?: number;
  seatsTotal: number;
  seatsAvailable: number;
  badge?: string; // "Bestseller", "Signature", "Weekend Special"

  // Detailed Course Experience fields
  introDetailed: string;
  learningOutcomes: {
    number: string;
    title: string;
    description: string;
  }[];
  recipesCovered: string[];
  requiredMaterials: string[];
  batchSchedule: string;
  location: string;
  skillLevel: string;
  whoCanJoin: string;
  trainingLanguage: string;
  certificateNote: string;
}

export interface Workshop {
  id: string;
  title: string;
  dayOfWeek: string;
  dateBadge: string; // e.g. "18 OCT"
  fullDate: string;
  timeSlot: string;
  trainingMode: 'Offline' | 'Online' | 'Offline & Online';
  fee: number;
  seatsAvailable: number;
  seatsTotal: number;
  instructor: string;
  image: string;
  description: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'baking' | 'main-course' | 'snacks' | 'desserts' | 'traditional' | 'student-creations';
  imageUrl: string;
  author: string; // "Trainer Studio" or Student name
  description: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface StudentStory {
  id: string;
  studentName: string;
  studentRole: string;
  studentPhoto: string;
  dishName: string;
  dishPhoto: string;
  trainingAttended: string;
  review: string;
  date: string;
}

export interface CookingReel {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  videoUrl?: string;
  views: string;
  duration: string;
  caption: string;
  instagramUrl: string;
}

export interface RecipeArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Recipes' | 'Cooking Tips' | 'Baking' | 'Kitchen Knowledge' | 'Ingredients' | 'Food Business' | 'Student Stories';
  imageUrl: string;
  shortIntro: string;
  readingTime: string;
  author: string;
  publishedDate: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  ingredients?: string[];
  instructions?: string[];
  chefTips?: string[];
}

export interface Enquiry {
  id: string;
  name: string;
  whatsappNumber: string;
  city: string;
  courseName: string;
  preferredBatch: string;
  message: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Closed';
}

export interface TrainerProfile {
  name: string;
  title: string;
  tagline: string;
  specialization: string;
  experience: string;
  trainingPhilosophy: string;
  bioStory: string;
  portraitUrl: string;
  actionPhotoUrl: string;
  quote: string;
}

export interface ContactSettings {
  address: string;
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  classHours: string;
  googleMapsUrl: string;
  city: string;
}
