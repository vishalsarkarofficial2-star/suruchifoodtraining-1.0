import { Course, Workshop, GalleryItem, StudentStory, CookingReel, RecipeArticle, TrainerProfile, ContactSettings, Enquiry } from '../types';

export const INITIAL_TRAINER: TrainerProfile = {
  name: "Suruchi",
  title: "Head Culinary Educator & Founder",
  tagline: "Dedicated to simplifying the culinary science behind every pan and pastry.",
  specialization: "Artisanal Baking, Authentic Indian Regional Flavours & Commercial Kitchen Techniques",
  experience: "Over a decade of hands-on culinary instruction & workshop facilitation",
  trainingPhilosophy: "Cooking is never about blind memory or strictly mimicking a video. It is about understanding how heat transforms moisture, how fat carries aroma, and how seasoning balances texture. When you master the technique, every recipe becomes effortless.",
  bioStory: "Suruchi began her culinary journey with an insatiable curiosity for what makes food truly soulful and consistently delicious. Frustrated by vague online tutorials and cookie-cutter cooking classes that skip the 'why' behind the methods, she established Suruchi Food Training as an intimate, technique-driven culinary space.\n\nFrom guiding complete beginners who had never ignited a flame to mentoring passionate home bakers launching their boutique cloud kitchens, her teaching approach is patient, practical, and deeply rooted in hands-on practice. Every workshop is conducted in small batches to ensure personal attention and sensory learning.",
  portraitUrl: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85",
  actionPhotoUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85",
  quote: "Cooking is easier when you understand the technique behind the recipe."
};

export const INITIAL_CONTACT: ContactSettings = {
  address: "Suruchi Culinary Studio, Near Central Avenue, Culinary Arts District",
  city: "Mumbai / Navi Mumbai",
  phone: "+91 98200 12345",
  whatsapp: "+919820012345",
  whatsappDisplay: "+91 98200 12345",
  email: "connect@suruchifoodtraining.com",
  instagram: "https://www.instagram.com/suruchifoodtraining",
  instagramHandle: "@suruchifoodtraining",
  classHours: "Tuesday – Sunday: 9:30 AM – 6:30 PM (Mondays Studio Rest & Prep)",
  googleMapsUrl: "https://maps.google.com/?q=Culinary+Studio"
};

export const COURSE_CATEGORIES = [
  { id: 'all', label: 'All Experiences', count: 8 },
  { id: '01', label: '01 — Everyday Cooking', code: 'everyday' },
  { id: '02', label: '02 — Traditional & Regional Cuisine', code: 'regional' },
  { id: '03', label: '03 — Cakes & Baking', code: 'baking' },
  { id: '04', label: '04 — Snacks & Quick Bites', code: 'snacks' },
  { id: '05', label: '05 — Restaurant-Style Cooking', code: 'restaurant' },
  { id: '06', label: '06 — Desserts & Sweets', code: 'desserts' },
  { id: '07', label: '07 — Special Workshops', code: 'workshops' },
  { id: '08', label: '08 — Food Business Training', code: 'business' },
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'c1',
    slug: 'artisanal-cakes-and-modern-baking',
    name: 'Artisanal Cakes & Modern Baking Masterclass',
    category: '03 — Cakes & Baking',
    categoryCode: 'baking',
    shortDescription: 'Master sponge science, whipped ganache, structural layering, and professional crumb finishing without chemical preservatives.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'All Skill Levels',
    duration: '2 Days (10 Hours Intensive)',
    trainingMode: 'Offline Studio',
    upcomingBatch: 'Starts Saturday, 24 Oct 2026',
    startingFee: 4999,
    originalFee: 6500,
    seatsTotal: 8,
    seatsAvailable: 3,
    badge: 'Signature Masterclass',
    introDetailed: 'An intensive, hands-on bakery masterclass designed to take you from uncertain measurements to producing bakery-grade tea cakes, tiered party cakes, and silky-smooth buttercreams with complete consistency.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Core Flour & Fat Emulsification',
        description: 'Understand how creaming, aeration, and gluten relaxation dictate crumb softness and rise without sinking.'
      },
      {
        number: '02',
        title: 'Ingredient Preparation & Temperature Balance',
        description: 'Precision measuring by weight (grams), egg vs. eggless substitutes, and optimum ingredient temperatures.'
      },
      {
        number: '03',
        title: 'Oven Calibration & Baking Chemistry',
        description: 'Managing top/bottom heat, hot-spots, convection airflow, and moisture retention in domestic and OTG ovens.'
      },
      {
        number: '04',
        title: 'Sharp Edges & Flawless Presentation',
        description: 'Leveling cakes, crumb coating, masking with whipped ganache, and piping elegant contemporary borders.'
      },
      {
        number: '05',
        title: 'Recipe Customization & Flavor Pairing',
        description: 'Developing your own sponge flavors (citrus, spiced carrot, Belgian chocolate) from one robust master formula.'
      }
    ],
    recipesCovered: [
      'Velvety Belgian Dark Chocolate Truffle Cake',
      'Fluffy Madagascar Vanilla Bean Sponge (Egg & 100% Eggless formula)',
      'Silky Dark Chocolate Whipped Ganache',
      'Tangy Raspberry Compote & Salted Caramel Center Filling',
      'Artisanal Earl Grey Citrus Tea Loaf with Lemon Glaze'
    ],
    requiredMaterials: [
      'All premium baking ingredients provided at the studio kitchen',
      'Take-home custom stainless steel turntable tips guide',
      'Hardcover printed formula book and recipe handbook',
      'Carrying boxes to transport your completed full-sized cake home'
    ],
    batchSchedule: 'Saturday & Sunday | 10:00 AM – 3:30 PM with working lunch & tasting',
    location: 'Suruchi Culinary Studio, Main Teaching Kitchen, Station 2',
    skillLevel: 'Complete beginners to home bakers looking to elevate crumb quality',
    whoCanJoin: 'Anyone aged 16+ passionate about understanding baking science',
    trainingLanguage: 'Bilingual (Hindi & English explained comfortably)',
    certificateNote: 'Course Completion Participation Certificate issued upon finishing hands-on project.'
  },
  {
    id: 'c2',
    slug: 'authentic-regional-north-indian-gravies',
    name: 'North Indian Regional & Mughlai Gravy Mastery',
    category: '02 — Traditional & Regional Cuisine',
    categoryCode: 'regional',
    shortDescription: 'Unpack the secrets of 5 quintessential base gravies, whole spice tempering, smoked dum infusion, and velvety textures.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'Beginner Friendly',
    duration: '1 Full Day (6 Hours)',
    trainingMode: 'Offline Studio',
    upcomingBatch: 'Sunday, 1 Nov 2026',
    startingFee: 3499,
    originalFee: 4500,
    seatsTotal: 10,
    seatsAvailable: 2,
    badge: 'Popular',
    introDetailed: 'Forget heavy, greasy restaurant curries made with artificial food colors. Learn how royal kitchens and authentic regional homes extract natural sweetness from slow-caramelized onions, nuts, and hand-ground spices.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Whole Spice Blooming (Bhunai)',
        description: 'Activating volatile aromatic oils in mustard oil and desi ghee without burning delicate spices.'
      },
      {
        number: '02',
        title: '5 Fundamental Gravy Bases',
        description: 'Yellow cashew gravy, red makhani, brown bhuna onion masala, white shahi korma, and rustic green saag base.'
      },
      {
        number: '03',
        title: 'Traditional Dhungar Technique',
        description: 'Smoking curries with red-hot lump charcoal and whole clove infused ghee for authentic tandoor aroma.'
      },
      {
        number: '04',
        title: 'Acid & Fat Balancing',
        description: 'Using kasuri methi, khoya, whipped curd, and slow-reduced tomatoes to create velvety harmony.'
      },
      {
        number: '05',
        title: 'Batch Prep & Freezer Storing',
        description: 'How to prepare large batches of base masalas that last 3 weeks for rapid 10-minute weekday dinners.'
      }
    ],
    recipesCovered: [
      'Restaurant-Style Paneer Lababdar with Roasted Capsicum',
      'Rich Shahi Kaju Paneer in White Silken Gravy',
      'Smoked Dal Makhani (Slow-cooked black lentils overnight)',
      'Authentic Amritsari Chole with Secret Spiced Tea Bag Infusion',
      'Crisp Cast-Iron Garlic Naan & Laccha Paratha Techniques'
    ],
    requiredMaterials: [
      'All spices, dairy, and produce sourced fresh for student stations',
      'Comprehensive Masala Ratio Chart (printable & laminated)',
      'Take-home tasting samples for your family'
    ],
    batchSchedule: 'Sunday | 10:30 AM – 4:30 PM',
    location: 'Suruchi Culinary Studio, Stovetop Island 1',
    skillLevel: 'Beginner to Intermediate',
    whoCanJoin: 'Home cooks wanting to eliminate restaurant takeout and master signature curries',
    trainingLanguage: 'Hindi & English',
    certificateNote: 'Studio Participation Certificate awarded.'
  },
  {
    id: 'c3',
    slug: 'everyday-smart-cooking-foundation',
    name: 'Everyday Smart Cooking & Kitchen Workflow',
    category: '01 — Everyday Cooking',
    categoryCode: 'everyday',
    shortDescription: 'Master knife skills, daily nutritional meal prep, 15-minute rotis, and balanced homestyle meals for busy professionals.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'Beginner Friendly',
    duration: '3 Sessions (2 Hours Each)',
    trainingMode: 'Hybrid (Offline & Online)',
    upcomingBatch: 'Starts Tuesday, 27 Oct 2026',
    startingFee: 2999,
    originalFee: 3999,
    seatsTotal: 12,
    seatsAvailable: 5,
    badge: 'Beginner Essential',
    introDetailed: 'Ideal for young adults, newlyweds, students traveling abroad, and busy professionals who want to feed themselves wholesome, energetic home food without spending hours stressed in the kitchen.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Ergonomic Knife Skills & Mis-en-place',
        description: 'Claw grip, julienne, fine dice, and rapid vegetable prep that saves 50% of cooking time.'
      },
      {
        number: '02',
        title: 'Puffing Soft Rotis & Parathas Every Time',
        description: 'Dough hydration science, gentle resting, pressure rolling, and flame puffing without hard edges.'
      },
      {
        number: '03',
        title: 'Tadka Fundamentals (Tempering)',
        description: 'Correct oil temperatures for cumin, mustard, asafoetida (hing), curry leaves, and dried chilies.'
      },
      {
        number: '04',
        title: 'One-Pot Balanced Grain Bowls & Khichdi',
        description: 'Nutritious lentil, millet, and vegetable ratios for comforting, wholesome weekday meals.'
      },
      {
        number: '05',
        title: 'Pantry Organization & Zero-Waste Cooking',
        description: 'Extending fresh herb life, smart refrigerator zoning, and transforming vegetable scraps.'
      }
    ],
    recipesCovered: [
      'Guaranteed Soft Phulkas with Homemade Desi Ghee Finish',
      'Homestyle Yellow Tadka Dal & Panchmel Dal',
      'Crispy Spiced Bhindi & Jeera Aloo (Non-sticky secret)',
      'Nutritious Vegetable Pulao in Under 20 Minutes',
      'Quick Homestyle Tomato-Mint Chutney & Raita Variations'
    ],
    requiredMaterials: [
      'Chef knife handling guide',
      'Weekly grocery shopping checklist and pantry staple starter guide',
      'Access to private student video replay recordings'
    ],
    batchSchedule: 'Tuesday, Thursday, Saturday | 6:00 PM – 8:00 PM',
    location: 'Suruchi Studio or Live Zoom Interactive Broadcast',
    skillLevel: 'Absolute Beginners welcome',
    whoCanJoin: 'Students moving into their own homes, working professionals, beginner couples',
    trainingLanguage: 'Hindi / English',
    certificateNote: 'Foundation Cooking Badge & Certificate provided.'
  },
  {
    id: 'c4',
    slug: 'gourmet-snacks-and-street-style-bites',
    name: 'Gourmet Snacks & High-Street Style Bites',
    category: '04 — Snacks & Quick Bites',
    categoryCode: 'snacks',
    shortDescription: 'Master party appetizers, authentic chaat reductions, crispy pastry envelopes, and crowd-pleasing finger foods.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'Intermediate',
    duration: '1 Day (5 Hours)',
    trainingMode: 'Offline Studio',
    upcomingBatch: 'Saturday, 7 Nov 2026',
    startingFee: 3200,
    originalFee: 4200,
    seatsTotal: 10,
    seatsAvailable: 4,
    badge: 'Party Special',
    introDetailed: 'Turn your festive gatherings and family evenings into culinary celebrations. Learn the authentic texture secrets of flaky samosa pastry, sizzling street-style kebabs, and sweet-sour tamarind reductions.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Moin & Shortcrust Chemistry for Crispiness',
        description: 'Rubbing fat into flour properly for crunch that remains crisp for 48 hours without sogging.'
      },
      {
        number: '02',
        title: 'Temperature Oil Regulation for Deep Frying',
        description: 'Avoiding greasy absorption by identifying smoke points and dual-temperature flash frying.'
      },
      {
        number: '03',
        title: 'Signature Chutney Crafting',
        description: 'Classic dates-tamarind saunth, spicy coriander-mint, and fiery garlic emulsion.'
      },
      {
        number: '04',
        title: 'Contemporary Plating & Canapé Assembly',
        description: 'Modern restaurant presentation for high-tea tables and festive cocktail parties.'
      },
      {
        number: '05',
        title: 'Pre-Prep and Freezer Strategies',
        description: 'Freezing unbaked snacks to pop straight into an air fryer or hot oil when guests arrive.'
      }
    ],
    recipesCovered: [
      'Artisanal Halwai-Style Samosa with spiced potato-pea filling',
      'Crisp Dahi Ke Kebab with hung curd and roasted spices',
      'Kolkata Style Kathi Roll with flaky layered paratha and tang',
      'Golden Corn & Cheese Cigar Rolls with herb dip',
      'Signature Street Pani Puri Pani and Masala Reductions'
    ],
    requiredMaterials: [
      'All frying stations and equipment supplied',
      'Takeaway appetizer box',
      'Step-by-step dough folding illustrated sheet'
    ],
    batchSchedule: 'Saturday | 11:00 AM – 4:00 PM',
    location: 'Suruchi Studio Kitchen',
    skillLevel: 'Beginner to Intermediate',
    whoCanJoin: 'Home party hosts, foodies, cafe menu developers',
    trainingLanguage: 'English / Hindi',
    certificateNote: 'Studio Participation Certificate included.'
  },
  {
    id: 'c5',
    slug: 'pan-asian-and-chinese-wok-skills',
    name: 'Pan-Asian Flavours & Cast-Iron Wok Skills',
    category: '05 — Restaurant-Style Cooking',
    categoryCode: 'restaurant',
    shortDescription: 'Master Wok Hei (breath of the wok), balanced umami sauces, crispy dim sums, and fiery restaurant noodles.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'Intermediate',
    duration: '1 Full Day (6 Hours)',
    trainingMode: 'Offline Studio',
    upcomingBatch: 'Sunday, 8 Nov 2026',
    startingFee: 3800,
    originalFee: 4800,
    seatsTotal: 8,
    seatsAvailable: 3,
    badge: 'High Demand',
    introDetailed: 'Demystify Chinese and Southeast Asian wok cooking. Learn the art of high-flame cooking, authentic starch thickening, fermented chili oils, and translucent crystal dumpling pleating.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Understanding Wok Hei & Heat Transfer',
        description: 'How high heat vaporizes oil droplets to create that elusive smoky restaurant signature.'
      },
      {
        number: '02',
        title: 'Mastering the 4-Sauce Umami Matrix',
        description: 'Balancing dark soy, light soy, shaoxing/vinegar substitute, sesame oil, and chili oils.'
      },
      {
        number: '03',
        title: 'Dumpling & Momos Dough & Pleating',
        description: 'Elastic dough rolling and 4 classic pleating folds: money bag, half-moon, wheat leaf, and pleated pouch.'
      },
      {
        number: '04',
        title: 'Velveting & Texture Retention',
        description: 'Keeping vegetables intensely crunchy and tofu or proteins meltingly succulent.'
      },
      {
        number: '05',
        title: 'Non-Mushy Noodles & Fried Rice',
        description: 'Cooking, draining, oiling, and tossing noodles without clumping or breaking.'
      }
    ],
    recipesCovered: [
      'Smoky Hakka Street Chowmein with Crisp Greens',
      'Burnt Garlic & Scallion Fried Rice',
      'Crispy Paneer Chilli Dry with Wok-charred Peppers',
      'Steamed Crystal Veg Dim Sum with Homemade Fiery Dip',
      'Thai Red Curry from Scratch with Aromatic Coconut Broth'
    ],
    requiredMaterials: [
      'Commercial grade high-heat induction & cast iron wok stations',
      'Bamboo steamer baskets provided for practice',
      'Specialty Asian ingredient pantry guide'
    ],
    batchSchedule: 'Sunday | 10:30 AM – 4:30 PM',
    location: 'Suruchi Studio Hot Station',
    skillLevel: 'Intermediate',
    whoCanJoin: 'Cooking enthusiasts wanting authentic restaurant-grade Asian meals',
    trainingLanguage: 'English / Hindi',
    certificateNote: 'Studio Participation Certificate included.'
  },
  {
    id: 'c6',
    slug: 'artisanal-mithai-and-festive-confections',
    name: 'Artisanal Mithai & Modern Festive Confections',
    category: '06 — Desserts & Sweets',
    categoryCode: 'desserts',
    shortDescription: 'Sugar syrup stages (taar), pure ghee roasting, saffron infusions, and modern low-sugar artisanal packaging.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'Intermediate',
    duration: '2 Days (8 Hours)',
    trainingMode: 'Offline Studio',
    upcomingBatch: 'Friday & Saturday, 13–14 Nov 2026',
    startingFee: 4200,
    originalFee: 5500,
    seatsTotal: 8,
    seatsAvailable: 2,
    badge: 'Festive Special',
    introDetailed: 'Learn traditional Indian sweet-making with the precision of pastry science. We break down the sugar syrup stages, moisture monitoring, and delicate nut paste crafting for pristine festive gifting.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Sugar Syrup Science (1-Taar to Hard Ball)',
        description: 'Reading candy thermometers and the cold-water test for consistent sweet texture.'
      },
      {
        number: '02',
        title: 'Khoya Preparation & Shelf-Life Extension',
        description: 'Achieving fine grain structure and natural preservation techniques for gifting.'
      },
      {
        number: '03',
        title: 'Natural Coloring & Infusion',
        description: 'Using Persian saffron, pistachios, rose petals, and beet reductions instead of artificial chemicals.'
      },
      {
        number: '04',
        title: 'Precision Shaping & Modern Garnishing',
        description: 'Silicone molds, clean square knife cuts, and edible silver leaf (vark) application.'
      },
      {
        number: '05',
        title: 'Commercial Festive Packaging Rules',
        description: 'Moisture-proof wrapping, butter paper liners, and ambient storage recommendations.'
      }
    ],
    recipesCovered: [
      'Silky Smooth Kaju Katli (Guaranteed non-chewy melt-in-mouth)',
      'Rich Motichoor Ladoo with fine droplets and aromatic cardamom',
      'Artisanal Pistachio & Cranberry Fudge Bites',
      'Classic Saffron Rasmalai with airy chenna discs',
      'Contemporary Rose-Petal Gulkand Peda'
    ],
    requiredMaterials: [
      'Heavy-bottomed brass and copper kadhais for traditional heat distribution',
      'Festive gift box to take home 1.5kg of sweets prepared by you',
      'Complete printed temperature & syrup reference chart'
    ],
    batchSchedule: 'Friday & Saturday | 1:00 PM – 5:00 PM',
    location: 'Suruchi Studio Sweets Atelier',
    skillLevel: 'All Skill Levels',
    whoCanJoin: 'Home confectioners, festive gifters, boutique sweet shop aspirants',
    trainingLanguage: 'Hindi / English',
    certificateNote: 'Confectionery Training Certificate awarded.'
  },
  {
    id: 'c7',
    slug: 'weekend-breads-and-sourdough-foundations',
    name: 'Artisanal Yeasted Breads & Sourdough Foundations',
    category: '07 — Special Workshops',
    categoryCode: 'workshops',
    shortDescription: 'Gluten development, windowpane test, yeast fermentation, shaping baguettes, and maintaining a wild sourdough starter.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'Intermediate',
    duration: '1 Full Weekend (8 Hours)',
    trainingMode: 'Offline Studio',
    upcomingBatch: 'Saturday & Sunday, 21–22 Nov 2026',
    startingFee: 4600,
    originalFee: 5800,
    seatsTotal: 6,
    seatsAvailable: 1,
    badge: 'Intimate Masterclass (6 Seats Only)',
    introDetailed: 'Nothing compares to the aroma of crackling, freshly baked artisan bread. In this tactile workshop, learn hydration ratios, stretch-and-folds, scoring patterns, and cast-iron Dutch oven baking.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Flour Protein Content & Water Absorption',
        description: 'Understanding ash levels, bread flour vs. all-purpose, and 65% to 75% hydration doughs.'
      },
      {
        number: '02',
        title: 'Fermentation & Gas Retention',
        description: 'Controlling bulk fermentation times with ambient temperature, poke test, and cold retarding.'
      },
      {
        number: '03',
        title: 'Dough Shaping & Surface Tension',
        description: 'Shaping tight boules, batards, and focaccia with gentle degas handling.'
      },
      {
        number: '04',
        title: 'Razor Scoring & Steam Generation',
        description: 'Creating beautiful ear cuts and using steam for a blistered, thin, crispy crust.'
      },
      {
        number: '05',
        title: 'Maintaining Your Sourdough Starter',
        description: 'Feeding schedules, microbial health, and saving an inactive starter.'
      }
    ],
    recipesCovered: [
      'Rustic Rosemary & Roasted Garlic Focaccia with Extra Virgin Olive Oil',
      'Crusty Country Sourdough Loaf (Baked in Cast Iron Dutch Oven)',
      'Soft Japanese Milk Bread (Hokkaido Tangzhong method)',
      'Cinnamon Swirl Brioche Rolls with Vanilla Glaze',
      'Artisanal Stuffed Pizza Bianca'
    ],
    requiredMaterials: [
      'Live mature sourdough starter in a glass jar to take home',
      'Professional baker lame blade for scoring',
      'Banneton proofing basket (included with kit)'
    ],
    batchSchedule: 'Saturday & Sunday | 9:30 AM – 1:30 PM',
    location: 'Suruchi Studio Bakery Lab',
    skillLevel: 'Passionate beginners to intermediate home bakers',
    whoCanJoin: 'Bread lovers wanting real artisan crust and open crumb',
    trainingLanguage: 'English & Hindi',
    certificateNote: 'Artisan Breadmaking Master Certificate.'
  },
  {
    id: 'c8',
    slug: 'culinary-entrepreneurship-and-cloud-kitchen',
    name: 'Food Entrepreneurship & Home Kitchen Business Blueprint',
    category: '08 — Food Business Training',
    categoryCode: 'business',
    shortDescription: 'Food costing, menu engineering, packaging selection, FSSAI compliance, and scaling home orders to cloud kitchens.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    difficulty: 'All Skill Levels',
    duration: '2 Days Weekend Intensive (8 Hours)',
    trainingMode: 'Hybrid (Offline & Online)',
    upcomingBatch: 'Starts Saturday, 28 Nov 2026',
    startingFee: 5999,
    originalFee: 7999,
    seatsTotal: 15,
    seatsAvailable: 6,
    badge: 'Business Accelerator',
    introDetailed: 'For passionate home chefs and bakers ready to monetize their craft. We take you through recipe standardization, realistic food margins, delivery packaging tests, pricing psychology, and statutory food licensing.',
    learningOutcomes: [
      {
        number: '01',
        title: 'Recipe Standardization & Gram Yields',
        description: 'Writing foolproof standard operating recipe cards so batches taste identical every single day.'
      },
      {
        number: '02',
        title: 'Food Costing & Margin Calculations',
        description: 'Direct raw material costs, packaging overheads, utility allocation, and healthy 60%+ gross margins.'
      },
      {
        number: '03',
        title: 'Delivery-Proof Packaging Testing',
        description: 'Selecting greaseproof, temperature-stable eco-packaging that survives 45-minute bike transits.'
      },
      {
        number: '04',
        title: 'FSSAI Registration & Kitchen Hygiene Norms',
        description: 'Statutory compliance, temperature logs, allergen labeling, and pest control guidelines.'
      },
      {
        number: '05',
        title: 'Instagram Marketing & WhatsApp Ordering Funnels',
        description: 'Creating high-converting menus, taking advance orders, and retaining repeat customers.'
      }
    ],
    recipesCovered: [
      'Practical Case Study: Scaling a Signature Tea Cake for 50 Daily Deliveries',
      'Practical Case Study: Meal Bowl Assembly Line Workflow for 30 Lunches',
      'Recipe Yield Calculation Spreadsheet & Live Costing Template'
    ],
    requiredMaterials: [
      'Commercial Food Costing & Pricing Excel/Sheets Calculator template',
      'Comprehensive Vendor Contact Directory for packaging & wholesale raw materials',
      '1-on-1 30-minute private business roadmap review session with Suruchi'
    ],
    batchSchedule: 'Saturday & Sunday | 2:00 PM – 6:00 PM',
    location: 'Suruchi Studio Conference Room + Zoom Broadcast',
    skillLevel: 'Entrepreneurs, Home Bakers, Cloud Kitchen Starters',
    whoCanJoin: 'Anyone planning to launch or professionalize a home-based food enterprise',
    trainingLanguage: 'English & Hindi',
    certificateNote: 'Culinary Business Strategy Certificate awarded.'
  }
];

export const INITIAL_WORKSHOPS: Workshop[] = [
  {
    id: 'w1',
    title: 'French Patisserie & Choux Pastry Masterclass',
    dayOfWeek: 'Saturday',
    dateBadge: '18 OCT',
    fullDate: 'Saturday, 18 Oct 2026',
    timeSlot: '10:00 AM – 2:00 PM',
    trainingMode: 'Offline',
    fee: 2800,
    seatsAvailable: 3,
    seatsTotal: 8,
    instructor: 'Suruchi',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Learn hollow, crisp choux buns, craquelin topping, vanilla bean diplomatic cream, and glossy chocolate glaze.',
    featured: true
  },
  {
    id: 'w2',
    title: 'Sizzling Chinese & Dim Sum Street Express',
    dayOfWeek: 'Sunday',
    dateBadge: '25 OCT',
    fullDate: 'Sunday, 25 Oct 2026',
    timeSlot: '11:00 AM – 3:30 PM',
    trainingMode: 'Offline & Online',
    fee: 2500,
    seatsAvailable: 4,
    seatsTotal: 10,
    instructor: 'Suruchi',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic wok-tossed Hakka noodles, crispy scallion pancakes, crystal dim sums, and fiery schezwan sauce from scratch.'
  },
  {
    id: 'w3',
    title: 'Rich Mughlai Gravies & Dum Biryani Secrets',
    dayOfWeek: 'Saturday',
    dateBadge: '07 NOV',
    fullDate: 'Saturday, 7 Nov 2026',
    timeSlot: '10:30 AM – 3:30 PM',
    trainingMode: 'Offline',
    fee: 3200,
    seatsAvailable: 2,
    seatsTotal: 8,
    instructor: 'Suruchi',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Layering long-grain basmati, saffron dum sealing, caramelized onions (birista), and velvety shahi gravies.'
  },
  {
    id: 'w4',
    title: '100% Eggless Gourmet Brownies & Tea Cakes',
    dayOfWeek: 'Sunday',
    dateBadge: '15 NOV',
    fullDate: 'Sunday, 15 Nov 2026',
    timeSlot: '2:00 PM – 6:00 PM',
    trainingMode: 'Offline & Online',
    fee: 2200,
    seatsAvailable: 5,
    seatsTotal: 12,
    instructor: 'Suruchi',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description: 'Achieve that coveted paper-thin crinkly crust on eggless fudge brownies, pistachio tea cakes, and banana walnut bread.'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Layered Dark Belgian Chocolate Truffle Cake',
    category: 'baking',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    author: 'Class Showcase',
    description: 'Finished with sharp edge whipped dark chocolate ganache and gold leaf accents by batch participants.',
    aspect: 'tall'
  },
  {
    id: 'g2',
    title: 'Slow-Simmered Dal Makhani with Desi Makhan',
    category: 'main-course',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85',
    author: 'Kitchen Stovetop',
    description: 'Simmered for 8 hours over slow coal flame with whole spices and dollops of fresh white butter.',
    aspect: 'wide'
  },
  {
    id: 'g3',
    title: 'Golden Saffron Rasmalai with Crushed Pistachio',
    category: 'desserts',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=85',
    author: 'Festive Batch',
    description: 'Melt-in-mouth cottage cheese patties soaked in saffron-cardamom thickened milk.',
    aspect: 'square'
  },
  {
    id: 'g4',
    title: 'High-Heat Wok Tossed Schezwan Noodles',
    category: 'snacks',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=85',
    author: 'Student Creation',
    description: 'Crisp julienned vegetables tossed at smoking wok temperatures for signature charred smoky aroma.',
    aspect: 'square'
  },
  {
    id: 'g5',
    title: 'Artisanal Rosemary & Cherry Tomato Focaccia',
    category: 'baking',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    author: 'Weekend Workshop',
    description: '78% hydration sourdough focaccia with deep finger dimples, Kalamata olives, and sea salt.',
    aspect: 'tall'
  },
  {
    id: 'g6',
    title: 'Amritsari Kulcha with Chole Masala',
    category: 'traditional',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=85',
    author: 'Regional Heritage Batch',
    description: 'Crushed flaky tandoori bread filled with spiced potato, onion, and pomegranate seeds.',
    aspect: 'wide'
  },
  {
    id: 'g7',
    title: 'Hand-Pleated Crystal Vegetable Dim Sums',
    category: 'student-creations',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1200&q=85',
    author: 'Student: Neha K.',
    description: 'First attempt at translucent wheat starch dough folding by student during Asian masterclass.',
    aspect: 'square'
  },
  {
    id: 'g8',
    title: 'Flaky Halwai Samosa with Saunth Chutney',
    category: 'snacks',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
    author: 'Student: Rahul M.',
    description: 'Pristine triangular folding with zero oil absorption achieved after learning temperature control.',
    aspect: 'tall'
  }
];

export const INITIAL_STUDENT_STORIES: StudentStory[] = [
  {
    id: 'ss1',
    studentName: 'Pooja Verma',
    studentRole: 'Home Baker & Studio Alum',
    studentPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    dishName: 'Boutique Belgian Chocolate Wedding Cake',
    dishPhoto: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    trainingAttended: 'Artisanal Cakes & Modern Baking Masterclass',
    review: 'Before Suruchi’s class, my sponges either sank in the center or turned rubbery. Suruchi ma’am showed us the exact science of emulsification and oven airflow. Last weekend, I delivered my first 2-tier wedding cake for a client and received endless compliments!',
    date: 'September 2026'
  },
  {
    id: 'ss2',
    studentName: 'Amit Saxena',
    studentRole: 'IT Consultant & Cooking Enthusiast',
    studentPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    dishName: 'Smoked Dal Makhani & Tandoori Kulcha',
    dishPhoto: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    trainingAttended: 'North Indian Regional & Mughlai Gravy Mastery',
    review: 'I used to dump powdered spices into cold tomato puree and wonder why my gravies tasted raw. Learning whole-spice bhunai, the dhungar charcoal smoking technique, and timing the fat release completely transformed my cooking. My family hasn’t ordered restaurant curries since.',
    date: 'August 2026'
  },
  {
    id: 'ss3',
    studentName: 'Dr. Radhika Nair',
    studentRole: 'Pediatrician & Weekend Cook',
    studentPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    dishName: 'Artisanal Seeded Sourdough Boule',
    dishPhoto: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    trainingAttended: 'Weekend Breads & Sourdough Foundations',
    review: 'The patience and clarity with which Suruchi explains wild yeast activity and gluten strands makes bread baking meditative rather than intimidating. The starter she gifted us is thriving on my counter!',
    date: 'July 2026'
  }
];

export const INITIAL_REELS: CookingReel[] = [
  {
    id: 'r1',
    title: 'The Secret to Sharp Cake Edges with Ganache',
    category: 'Baking Tips',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    views: '48.5K',
    duration: '0:42',
    caption: 'Why warm ganache ruins your edges and the 2-minute chill rule we teach in class. Save for your next cake! #SuruchiFoodTraining #BakingTechnique',
    instagramUrl: 'https://www.instagram.com/suruchifoodtraining'
  },
  {
    id: 'r2',
    title: 'Stop Burning Your Whole Spices: The 160°C Rule',
    category: 'Cooking Science',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    views: '82.1K',
    duration: '0:55',
    caption: 'Tadka shouldn’t smell burnt. Watch how we test ghee temperature before the jeera goes in! #CookingTips #CulinarySchool',
    instagramUrl: 'https://www.instagram.com/suruchifoodtraining'
  },
  {
    id: 'r3',
    title: 'Inside Our Studio: Student Samosa Folding Day',
    category: 'Class Moments',
    thumbnailUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    views: '34.2K',
    duration: '0:38',
    caption: 'Hands covered in flour, big smiles, and the crispiest afternoon tea samosas. This is what weekends look like at Suruchi Studio.',
    instagramUrl: 'https://www.instagram.com/suruchifoodtraining'
  },
  {
    id: 'r4',
    title: '5 Signs Your Dough Has Kneaded Enough (Windowpane Test)',
    category: 'Bread Craft',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    views: '61.9K',
    duration: '0:48',
    caption: 'Don’t rely on a timer. Learn how to pull and read the dough membrane. #BreadBaking #CulinaryTechnique',
    instagramUrl: 'https://www.instagram.com/suruchifoodtraining'
  }
];

export const INITIAL_RECIPES: RecipeArticle[] = [
  {
    id: 'rec1',
    slug: 'science-of-soft-rotis-phulka-hydration',
    title: 'The Real Science of Soft Phulkas: Why Water Temperature and Resting Time Matter',
    category: 'Kitchen Knowledge',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    shortIntro: 'Most beginners blame their rolling pin, but the real secret to phulkas that stay pillowy for 8 hours is hot water hydration and enzymatic resting.',
    readingTime: '5 min read',
    author: 'Suruchi',
    publishedDate: '12 October 2026',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: '10–12 Phulkas',
    ingredients: [
      '2 cups stone-ground whole wheat flour (atta)',
      '3/4 to 1 cup lukewarm water (around 45°C)',
      '1 teaspoon cold-pressed oil or pure desi ghee',
      'Pinch of Himalayan pink salt (optional)',
      'Desi ghee for final brushing'
    ],
    instructions: [
      'Aerate the Flour: Sieve the whole wheat flour into a wide parat or bowl to loosen compacted particles.',
      'Lukewarm Water Addition: Gradually pour the warm water while incorporating with circular finger motions. The warmth accelerates gluten relaxation.',
      'The 5-Minute Stretch & Fold: Knead until the dough absorbs all loose flour. Do not overwork dry spots; add a teaspoon of water at a time.',
      'The Mandatory 20-Minute Rest: Cover with a damp muslin cloth. During this rest, starch molecules hydrate fully, making rolling effortless.',
      'Uniform Rolling & Heat Control: Roll with light, even perimeter pressure. Cook on a hot cast-iron tawa until bubbles form, then flip directly onto the flame.'
    ],
    chefTips: [
      'Never press hard with your rolling pin in the center; let the edges rotate naturally.',
      'Keep your tawa at medium-high. A lukewarm tawa draws out moisture, turning the roti papery and dry.'
    ]
  },
  {
    id: 'rec2',
    slug: 'mastering-the-whipped-chocolate-ganache',
    title: 'Mastering Silky Whipped Dark Chocolate Ganache Without Butter Separation',
    category: 'Baking',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    shortIntro: 'Understanding fat-in-water emulsions is the key to a velvety ganache that pipes like velvet and holds its structure at room temperature.',
    readingTime: '6 min read',
    author: 'Suruchi',
    publishedDate: '4 October 2026',
    prepTime: '15 mins',
    cookTime: '10 mins + chill',
    servings: 'Covers one 8-inch cake',
    ingredients: [
      '250g premium 55% couverture dark chocolate, finely chopped',
      '250g dairy fresh cream (minimum 25-30% fat)',
      '20g liquid glucose or honey (for satin sheen)',
      'Pinch of sea salt'
    ],
    instructions: [
      'Chop your chocolate into uniform pea-sized shards so it melts evenly without scorching.',
      'Bring cream and glucose just to a gentle simmer (small bubbles along the edge of the saucepan, approx 85°C). Never boil vigorously.',
      'Pour the hot cream over the chocolate in a heatproof bowl. Let it sit undisturbed for 3 full minutes to let ambient heat penetrate.',
      'Using a silicone spatula, begin gentle circular stirs from the center outwards until a glossy, deep dark emulsion forms.',
      'Cool to room temperature, then chill for 2 hours before whipping on medium-low speed for 90 seconds until soft peaks emerge.'
    ],
    chefTips: [
      'Do not overwhip on high speed, or the cocoa butter will separate into grainy butterfat.',
      'If your ganache splits, add 1 tablespoon of lukewarm milk and vigorously whisk to re-emulsify.'
    ]
  },
  {
    id: 'rec3',
    slug: 'essential-spices-how-heat-transforms-flavour',
    title: 'The Spice Spectrum: How Heat Temperature Unlocks or Destroys Aromas',
    category: 'Cooking Tips',
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    shortIntro: 'Spices are oil-soluble compounds. Learn why throwing coriander powder into sizzling hot oil burns its delicate floral sweetness.',
    readingTime: '4 min read',
    author: 'Suruchi',
    publishedDate: '28 September 2026',
    prepTime: '5 mins',
    cookTime: '10 mins',
    servings: 'Universal Kitchen Guide',
    ingredients: [
      'Whole spices (Cumin, Black Mustard, Fenugreek)',
      'Bark & Leaf spices (Cassia bark, Bay leaf, Black cardamom)',
      'Powdered spices (Turmeric, Coriander, Kashmiri Chili, Garam Masala)',
      'Carrier fats (Mustard oil, Desi ghee, Peanut oil)'
    ],
    instructions: [
      'First Wave: Whole tough spices go into medium-hot fat (170°C) where crackling indicates water vapor escape.',
      'Second Wave: Aromatics like ginger, garlic, and onions are added to lower the fat temperature to around 120°C.',
      'Third Wave: Powdered spices are introduced ONLY when moisture is present (or mixed in a slurry with 2 tablespoons of water) to prevent burning.',
      'Final Wave: Delicate finishing spices like roasted cumin, kasuri methi, and garam masala are added in the last 60 seconds off the flame.'
    ],
    chefTips: [
      'Always crush dried kasuri methi between dry palms right before sprinkling to release fragrant menthol oils.'
    ]
  }
];

export const INITIAL_REVIEWS = [
  {
    quote: "I finally understood why my recipes weren't giving consistent results. Suruchi doesn't just recite ingredients; she teaches you the sensory cues—the sizzle, the aroma change, the shine.",
    author: "Shalini Mehra",
    course: "Signature Baking & Regional Curries",
    location: "Thane"
  },
  {
    quote: "As someone who had never stepped into a kitchen before marriage, this academy gave me genuine confidence. Within two weeks, I was preparing 4-course dinners for my in-laws without panic.",
    author: "Kavita Singhal",
    course: "Everyday Smart Cooking Foundation",
    location: "Vashi"
  },
  {
    quote: "The business and food costing module alone saved me from making costly mistakes in my boutique cupcake business. Her insights on packaging and margins are unmatched.",
    author: "Deepak Patel",
    course: "Culinary Entrepreneurship",
    location: "Mumbai"
  }
];

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Ananya Sharma',
    whatsappNumber: '+91 98334 11223',
    city: 'Mumbai',
    courseName: 'Artisanal Cakes & Modern Baking Masterclass',
    preferredBatch: 'Weekend Batch (Oct 24)',
    message: 'Looking to join the baking class. Can you confirm if all materials are provided at the studio?',
    createdAt: '2026-09-18 14:32',
    status: 'New'
  },
  {
    id: 'enq-2',
    name: 'Vikas Rao',
    whatsappNumber: '+91 99201 88765',
    city: 'Navi Mumbai',
    courseName: 'North Indian Regional & Mughlai Gravy Mastery',
    preferredBatch: 'Sunday, 1 Nov',
    message: 'Interested in mastering gravies for personal family dinners. Are slots still available?',
    createdAt: '2026-09-19 11:15',
    status: 'Contacted'
  }
];
