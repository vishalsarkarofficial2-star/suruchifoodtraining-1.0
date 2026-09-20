import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Course,
  Workshop,
  GalleryItem,
  StudentStory,
  CookingReel,
  RecipeArticle,
  TrainerProfile,
  ContactSettings,
  Enquiry
} from '../types';
import {
  INITIAL_COURSES,
  INITIAL_WORKSHOPS,
  INITIAL_GALLERY,
  INITIAL_STUDENT_STORIES,
  INITIAL_REELS,
  INITIAL_RECIPES,
  INITIAL_TRAINER,
  INITIAL_CONTACT,
  INITIAL_ENQUIRIES
} from '../data/initialData';

interface DataContextType {
  courses: Course[];
  workshops: Workshop[];
  gallery: GalleryItem[];
  studentStories: StudentStory[];
  reels: CookingReel[];
  recipes: RecipeArticle[];
  trainer: TrainerProfile;
  contact: ContactSettings;
  enquiries: Enquiry[];

  // Modals & Navigation state
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  selectedArticle: RecipeArticle | null;
  setSelectedArticle: (article: RecipeArticle | null) => void;
  lightboxImage: GalleryItem | null;
  setLightboxImage: (item: GalleryItem | null) => void;
  
  isEnquiryModalOpen: boolean;
  enquiryPrefilledCourse: string;
  openEnquiryModal: (courseName?: string) => void;
  closeEnquiryModal: () => void;

  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAdminModalOpen: boolean;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;

  // Course Actions
  addCourse: (course: Omit<Course, 'id' | 'slug'>) => void;
  updateCourse: (id: string, updated: Partial<Course>) => void;
  deleteCourse: (id: string) => void;

  // Workshop Actions
  addWorkshop: (workshop: Omit<Workshop, 'id'>) => void;
  updateWorkshop: (id: string, updated: Partial<Workshop>) => void;
  deleteWorkshop: (id: string) => void;

  // Gallery Actions
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;

  // Student Story Actions
  addStudentStory: (story: Omit<StudentStory, 'id'>) => void;
  deleteStudentStory: (id: string) => void;

  // Reel Actions
  addReel: (reel: Omit<CookingReel, 'id'>) => void;
  deleteReel: (id: string) => void;

  // Recipe Actions
  addRecipe: (recipe: Omit<RecipeArticle, 'id' | 'slug'>) => void;
  updateRecipe: (id: string, updated: Partial<RecipeArticle>) => void;
  deleteRecipe: (id: string) => void;

  // Enquiry Actions
  submitEnquiry: (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => boolean;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  deleteEnquiry: (id: string) => void;

  // Settings Actions
  updateTrainer: (profile: TrainerProfile) => void;
  updateContact: (settings: ContactSettings) => void;
  
  // Storage operations
  resetToDefaults: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;

  // WhatsApp helper
  getWhatsAppUrl: (courseName?: string, customNote?: string) => string;
}

const STORAGE_KEY = 'suruchi_food_training_data_v1';
const ADMIN_AUTH_KEY = 'suruchi_admin_auth_session';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Core state with local storage fallback
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_courses`);
      return saved ? JSON.parse(saved) : INITIAL_COURSES;
    } catch {
      return INITIAL_COURSES;
    }
  });

  const [workshops, setWorkshops] = useState<Workshop[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_workshops`);
      return saved ? JSON.parse(saved) : INITIAL_WORKSHOPS;
    } catch {
      return INITIAL_WORKSHOPS;
    }
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_gallery`);
      return saved ? JSON.parse(saved) : INITIAL_GALLERY;
    } catch {
      return INITIAL_GALLERY;
    }
  });

  const [studentStories, setStudentStories] = useState<StudentStory[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_studentStories`);
      return saved ? JSON.parse(saved) : INITIAL_STUDENT_STORIES;
    } catch {
      return INITIAL_STUDENT_STORIES;
    }
  });

  const [reels, setReels] = useState<CookingReel[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_reels`);
      return saved ? JSON.parse(saved) : INITIAL_REELS;
    } catch {
      return INITIAL_REELS;
    }
  });

  const [recipes, setRecipes] = useState<RecipeArticle[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_recipes`);
      return saved ? JSON.parse(saved) : INITIAL_RECIPES;
    } catch {
      return INITIAL_RECIPES;
    }
  });

  const [trainer, setTrainer] = useState<TrainerProfile>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_trainer`);
      return saved ? JSON.parse(saved) : INITIAL_TRAINER;
    } catch {
      return INITIAL_TRAINER;
    }
  });

  const [contact, setContact] = useState<ContactSettings>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_contact`);
      return saved ? JSON.parse(saved) : INITIAL_CONTACT;
    } catch {
      return INITIAL_CONTACT;
    }
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_enquiries`);
      return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
    } catch {
      return INITIAL_ENQUIRIES;
    }
  });

  // Modals
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<RecipeArticle | null>(null);
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryPrefilledCourse, setEnquiryPrefilledCourse] = useState('');

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  });

  // Persist whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_courses`, JSON.stringify(courses));
      localStorage.setItem(`${STORAGE_KEY}_workshops`, JSON.stringify(workshops));
      localStorage.setItem(`${STORAGE_KEY}_gallery`, JSON.stringify(gallery));
      localStorage.setItem(`${STORAGE_KEY}_studentStories`, JSON.stringify(studentStories));
      localStorage.setItem(`${STORAGE_KEY}_reels`, JSON.stringify(reels));
      localStorage.setItem(`${STORAGE_KEY}_recipes`, JSON.stringify(recipes));
      localStorage.setItem(`${STORAGE_KEY}_trainer`, JSON.stringify(trainer));
      localStorage.setItem(`${STORAGE_KEY}_contact`, JSON.stringify(contact));
      localStorage.setItem(`${STORAGE_KEY}_enquiries`, JSON.stringify(enquiries));
    } catch (e) {
      console.error("Storage sync failed", e);
    }
  }, [courses, workshops, gallery, studentStories, reels, recipes, trainer, contact, enquiries]);

  // Admin auth
  const loginAdmin = (password: string): boolean => {
    if (password === 'suruchi2026' || password === 'admin') {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    setIsAdminOpen(false);
  };

  // Enquiry modal triggers
  const openEnquiryModal = (courseName?: string) => {
    setEnquiryPrefilledCourse(courseName || '');
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryPrefilledCourse('');
  };

  // WhatsApp contextual link generator
  const getWhatsAppUrl = (courseName?: string, customNote?: string): string => {
    const rawNumber = contact.whatsapp.replace(/\D/g, '');
    let text = '';
    if (courseName) {
      text = `Hi Suruchi Food Training, I'm interested in "${courseName}". Please share the upcoming batch, fees and registration details.`;
    } else if (customNote) {
      text = `Hi Suruchi Food Training, ${customNote}`;
    } else {
      text = `Hi Suruchi Food Training, I would like to inquire about your upcoming cooking classes and workshops.`;
    }
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  // CRUD Implementations
  const addCourse = (data: Omit<Course, 'id' | 'slug'>) => {
    const slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newCourse: Course = {
      ...data,
      id: `c-${Date.now()}`,
      slug
    };
    setCourses(prev => [newCourse, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
    if (selectedCourse && selectedCourse.id === id) {
      setSelectedCourse(prev => prev ? { ...prev, ...updated } : null);
    }
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
    if (selectedCourse && selectedCourse.id === id) {
      setSelectedCourse(null);
    }
  };

  const addWorkshop = (data: Omit<Workshop, 'id'>) => {
    const newWorkshop: Workshop = {
      ...data,
      id: `w-${Date.now()}`
    };
    setWorkshops(prev => [newWorkshop, ...prev]);
  };

  const updateWorkshop = (id: string, updated: Partial<Workshop>) => {
    setWorkshops(prev => prev.map(w => w.id === id ? { ...w, ...updated } : w));
  };

  const deleteWorkshop = (id: string) => {
    setWorkshops(prev => prev.filter(w => w.id !== id));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `g-${Date.now()}`
    };
    setGallery(prev => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery(prev => prev.filter(g => g.id !== id));
    if (lightboxImage && lightboxImage.id === id) {
      setLightboxImage(null);
    }
  };

  const addStudentStory = (story: Omit<StudentStory, 'id'>) => {
    const newStory: StudentStory = {
      ...story,
      id: `ss-${Date.now()}`
    };
    setStudentStories(prev => [newStory, ...prev]);
  };

  const deleteStudentStory = (id: string) => {
    setStudentStories(prev => prev.filter(s => s.id !== id));
  };

  const addReel = (reel: Omit<CookingReel, 'id'>) => {
    const newReel: CookingReel = {
      ...reel,
      id: `r-${Date.now()}`
    };
    setReels(prev => [newReel, ...prev]);
  };

  const deleteReel = (id: string) => {
    setReels(prev => prev.filter(r => r.id !== id));
  };

  const addRecipe = (data: Omit<RecipeArticle, 'id' | 'slug'>) => {
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newArticle: RecipeArticle = {
      ...data,
      id: `rec-${Date.now()}`,
      slug
    };
    setRecipes(prev => [newArticle, ...prev]);
  };

  const updateRecipe = (id: string, updated: Partial<RecipeArticle>) => {
    setRecipes(prev => prev.map(r => r.id === id ? { ...r, ...updated } : r));
    if (selectedArticle && selectedArticle.id === id) {
      setSelectedArticle(prev => prev ? { ...prev, ...updated } : null);
    }
  };

  const deleteRecipe = (id: string) => {
    setRecipes(prev => prev.filter(r => r.id !== id));
    if (selectedArticle && selectedArticle.id === id) {
      setSelectedArticle(null);
    }
  };

  const submitEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): boolean => {
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      createdAt: new Date().toLocaleString(),
      status: 'New'
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
    return true;
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  const updateTrainer = (profile: TrainerProfile) => {
    setTrainer(profile);
  };

  const updateContact = (settings: ContactSettings) => {
    setContact(settings);
  };

  const resetToDefaults = () => {
    setCourses(INITIAL_COURSES);
    setWorkshops(INITIAL_WORKSHOPS);
    setGallery(INITIAL_GALLERY);
    setStudentStories(INITIAL_STUDENT_STORIES);
    setReels(INITIAL_REELS);
    setRecipes(INITIAL_RECIPES);
    setTrainer(INITIAL_TRAINER);
    setContact(INITIAL_CONTACT);
    setEnquiries(INITIAL_ENQUIRIES);
  };

  const exportDataJSON = (): string => {
    const payload = {
      courses,
      workshops,
      gallery,
      studentStories,
      reels,
      recipes,
      trainer,
      contact,
      enquiries,
      exportedAt: new Date().toISOString()
    };
    return JSON.stringify(payload, null, 2);
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.courses) setCourses(data.courses);
      if (data.workshops) setWorkshops(data.workshops);
      if (data.gallery) setGallery(data.gallery);
      if (data.studentStories) setStudentStories(data.studentStories);
      if (data.reels) setReels(data.reels);
      if (data.recipes) setRecipes(data.recipes);
      if (data.trainer) setTrainer(data.trainer);
      if (data.contact) setContact(data.contact);
      return true;
    } catch (e) {
      console.error("Invalid JSON for import", e);
      return false;
    }
  };

  return (
    <DataContext.Provider
      value={{
        courses,
        workshops,
        gallery,
        studentStories,
        reels,
        recipes,
        trainer,
        contact,
        enquiries,

        selectedCourse,
        setSelectedCourse,
        selectedArticle,
        setSelectedArticle,
        lightboxImage,
        setLightboxImage,

        isEnquiryModalOpen,
        enquiryPrefilledCourse,
        openEnquiryModal,
        closeEnquiryModal,

        isAdminOpen,
        setIsAdminOpen,
        isAdminModalOpen: isAdminOpen,
        openAdminModal: () => setIsAdminOpen(true),
        closeAdminModal: () => setIsAdminOpen(false),
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,

        addCourse,
        updateCourse,
        deleteCourse,

        addWorkshop,
        updateWorkshop,
        deleteWorkshop,

        addGalleryItem,
        deleteGalleryItem,

        addStudentStory,
        deleteStudentStory,

        addReel,
        deleteReel,

        addRecipe,
        updateRecipe,
        deleteRecipe,

        submitEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,

        updateTrainer,
        updateContact,

        resetToDefaults,
        exportDataJSON,
        importDataJSON,

        getWhatsAppUrl
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
