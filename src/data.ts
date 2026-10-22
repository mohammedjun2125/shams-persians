import { Kitten, Review, FAQ, GalleryItem, ServiceItem, BreedProfile } from "./types";
import persianImg from "./assets/images/persian_kitten_1780744925029.png";
import himalayanImg from "./assets/images/himalayan_kitten_1780744940674.png";
import catteryRoomImg from "./assets/images/cattery_room_1780744957819.png";

export const BUSINESS_INFO = {
  name: "Shams Persians",
  category: "Cattery",
  phone: "078424 96805",
  phoneFormatted: "+91 78424 96805",
  phoneRaw: "07842496805",
  phoneInternational: "+917842496805",
  tagline: "All type of Persian cats available",
  location: "Hyderabad, Telangana",
  googleRating: "5.0",
  reviewCount: "3",
  googleProfileLabel: "5.0 ★ (3 Google Reviews)",
  hours: [
    { day: "Monday", time: "Open 24 hours", isOpenNow: true },
    { day: "Tuesday", time: "Open 24 hours", isOpenNow: true },
    { day: "Wednesday", time: "Open 24 hours", isOpenNow: true },
    { day: "Thursday", time: "Open 24 hours", isOpenNow: true },
    { day: "Friday", time: "Open 24 hours", isOpenNow: true },
    { day: "Saturday", time: "Open 24 hours", isOpenNow: true },
    { day: "Sunday", time: "Open 24 hours", isOpenNow: true }
  ],
  openStatus: "Open 24 Hours • 7 Days a Week",
  deliveryStatus: "24/7 Safe Home Delivery Across All Hyderabad"
};

export const KITTENS_DATA: Kitten[] = [
  {
    id: "br-persian-doll",
    name: "Pure White Doll Face Persian",
    breed: "Persian",
    gender: "Males & Females Available",
    age: "8 - 12 Weeks",
    color: "Pure Snow White",
    vaccinationStatus: "1st Dose Done & De-wormed",
    availability: "Available Litters",
    image: persianImg,
    features: ["Pristine Triple Coat", "Cute Sweet Doll Face", "Expressive Copper / Blue Eyes", "Docile & Loving Temperament"],
    description: "Our Pure White Doll Face Persian is Hyderabad's classic favorite. Raised cage-free in a clean, domestic Hyderabad home, these kittens are extraordinarily calm, litter-box trained, and love human affection.",
    temperament: "Serene, quiet, extraordinarily affectionate, and loves cuddles. Perfect for peaceful Hyderabad homes and apartments.",
    careNeeds: "Requires daily gentle brushing of their long fluffy coat to keep it spotless, and routine eye wipes."
  },
  {
    id: "br-persian-punch",
    name: "Golden Punch Face Persian",
    breed: "Persian",
    gender: "Males & Females Available",
    age: "9 - 12 Weeks",
    color: "Royal Golden & Cream",
    vaccinationStatus: "Vaccinated & Health Checked",
    availability: "Available Litters",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
    features: ["Authentic Punch / Flat Profile", "Deep Copper Gaze", "Thick Lion-Ruff Collar", "Heavy Bone Structure"],
    description: "True show-quality Punch Face Persian kittens with a short muzzle, dense double coat, and heavy structure. All types of Persian cats available at Shams Persians Hyderabad.",
    temperament: "Calm, regal, playful in bursts, and deeply attached to family members.",
    careNeeds: "Daily face cleaning and regular coat combing with a stainless steel comb."
  },
  {
    id: "br-himalayan-point",
    name: "Sapphire-Eyed Himalayan Point",
    breed: "Himalayan",
    gender: "Males & Females Available",
    age: "8 - 10 Weeks",
    color: "Seal Point & Blue Point",
    vaccinationStatus: "Fully Vaccinated Option",
    availability: "Reservation Open",
    image: himalayanImg,
    features: ["Intense Sapphire Blue Eyes", "Contrasting Seal Points", "Plush Fluffy Fur", "Champion Lineage"],
    description: "Combining the flowing royal fur of the Persian cat with the deep blue eyes and point colors of Siamese ancestry. Incredibly loving, vocal with soft purrs, and loves attention.",
    temperament: "Playful, friendly, loyal, and communicative with gentle chirps.",
    careNeeds: "Coat combing every other day, quality nutrition, and interactive toys."
  },
  {
    id: "br-persian-calico",
    name: "Tri-Color Calico Persian",
    breed: "Persian",
    gender: "Female Available",
    age: "8 - 11 Weeks",
    color: "Calico (White, Black & Red)",
    vaccinationStatus: "Dewormed & 1st Vaccination",
    availability: "Available Litters",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
    features: ["Striking Patchwork Fur", "Doll Face Sweet Expression", "Ultra-Silky Texture", "Active & Friendly"],
    description: "A rare and lucky three-color Persian kitten with an endearing personality. Healthy, playful, and completely cage-free from Shams Persians Hyderabad.",
    temperament: "Sweet, curious, enjoys chasing feather toys, and settles warmly on your lap.",
    careNeeds: "Regular coat brushing, quality cat food, and clean water daily."
  },
  {
    id: "br-persian-chinchilla",
    name: "Silver Chinchilla Persian",
    breed: "Persian",
    gender: "Males Available",
    age: "10 - 12 Weeks",
    color: "Silver Shaded / Chinchilla",
    vaccinationStatus: "Vetted & Certified",
    availability: "Pre-Booking Open",
    image: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?q=80&w=800&auto=format&fit=crop",
    features: ["Emerald Green / Sea Blue Eyes", "Silver-Tipped White Coat", "Black Eyeliner Rim", "Gentle Temperament"],
    description: "One of the most photogenic Persian cat varieties in the world. Features black eyeliner rims around emerald eyes with a shimmering silver coat.",
    temperament: "Gentle, calm, quiet, and friendly with children and other household pets.",
    careNeeds: "Weekly brushing, clean litter box, and high-protein diet."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Aditya Verma",
    rating: 5,
    text: "Got my female Persian kitten from them, she is healthy and perfect. They explained everything from food to grooming habits and vaccine timeline. Best cattery in Hyderabad!",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: true
  },
  {
    id: "rev-2",
    name: "Sowmya Reddy",
    rating: 5,
    text: "Healthy Persian kitten at a reasonable price. Shams Persians is highly professional. They guided us on cat food, and provided home delivery directly to our door with high safety.",
    date: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: true
  },
  {
    id: "rev-3",
    name: "Major Praveen Kumar",
    rating: 5,
    text: "Quality is top notch and very friendly. The owners really care for their pets. I bought a Himalayan dual-color kitten who is the center of our lives now. 100% recommended for everyone in Hyderabad.",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    isGoogleReview: true
  }
];

export const GOOGLE_HIGHLIGHTS = [
  {
    quote: "Got my female Persian kitten from them, she is healthy and perfect.",
    author: "Aditya Verma",
    rating: 5
  },
  {
    quote: "Healthy Persian kitten at a reasonable price. Highly professional.",
    author: "Sowmya Reddy",
    rating: 5
  },
  {
    quote: "Quality is top notch and very friendly. 100% recommended.",
    author: "Major Praveen Kumar",
    rating: 5
  }
];

export const FAQS_DATA: FAQ[] = [
  {
    id: "faq-1",
    question: "What types of Persian cats are available at Shams Persians?",
    answer: "As our Google profile states: 'All type of Persian cats available'. We specialize in Traditional Doll Face Persians, Punch Face (Flat Face) Persians, Semi-Punch, Himalayan Points (Seal Point, Blue Point), Pure Snow White, Golden Shaded, Calico, and Chinchilla Persians.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you deliver Persian kittens all over Hyderabad?",
    answer: "Yes! We provide safe, air-conditioned home delivery across every location in Hyderabad, including Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, Gachibowli, Kukatpally, Mehdipatnam, Dilsukhnagar, and beyond.",
    category: "Delivery & Reservation"
  },
  {
    id: "faq-3",
    question: "What are your business hours and delivery availability?",
    answer: "Shams Persians is open 24 Hours, 7 days a week (Monday through Sunday) with 24/7 safe, air-conditioned doorstep delivery across all Hyderabad areas. You can call or WhatsApp us anytime at 078424 96805.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "Are your kittens vaccinated and de-wormed?",
    answer: "Yes, every single kitten receives its age-appropriate de-worming and primary vaccinations. We hand over an authentic health record card with dietary guidelines upon adoption.",
    category: "Health & Vaccination"
  },
  {
    id: "faq-5",
    question: "Can I inspect the kittens on video call before buying?",
    answer: "Absolutely! We encourage live WhatsApp video calls on 078424 96805 so you can watch your chosen kitten playing, feeding, and interacting in real-time.",
    category: "Delivery & Reservation"
  },
  {
    id: "faq-6",
    question: "Do you provide guidance for first-time cat owners?",
    answer: "Yes, we provide 24/7 post-adoption care guidance on WhatsApp covering kitten food brands, toilet litter training, grooming routines, and vet check schedules.",
    category: "Care & Diet"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g-1",
    category: "Kittens",
    imageUrl: persianImg,
    title: "Pure White Doll Face Persian",
    description: "Fluffy kitten playing in our domestic nursery"
  },
  {
    id: "g-2",
    category: "Kittens",
    imageUrl: himalayanImg,
    title: "Sapphire Blue-Eyed Himalayan",
    description: "Seal-point coloration with deep sapphire eyes"
  },
  {
    id: "g-3",
    category: "Facility",
    imageUrl: catteryRoomImg,
    title: "Shams Persians Play Room",
    description: "Spacious, clean, cage-free climbing and play space"
  },
  {
    id: "g-4",
    category: "Happy Customers",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    title: "Happy Customer Adoption",
    description: "Delighted pet parent with her new Persian kitten in Hyderabad"
  },
  {
    id: "g-5",
    category: "Parents",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
    title: "Royal Stud Parent",
    description: "Our triple-coated pure white Persian with deep amber eyes"
  },
  {
    id: "g-6",
    category: "Happy Customers",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    title: "Doorstep Home Delivery",
    description: "Kitten arrival in Banjara Hills, Hyderabad"
  },
  {
    id: "g-7",
    category: "Parents",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
    title: "Golden Punch Face Stud",
    description: "Exquisite bone structure and short muzzle profile"
  },
  {
    id: "g-8",
    category: "Kittens",
    imageUrl: "https://images.unsplash.com/photo-1574158622643-69d34d72650a?q=80&w=800&auto=format&fit=crop",
    title: "Chinchilla Silver Persian",
    description: "Emerald green eyes with pure silver-tipped coat"
  }
];

export const BREED_PROFILES: BreedProfile[] = [
  {
    id: "br-1",
    name: "Persian Cats (Doll & Punch Face)",
    description: "Celebrated for their luxurious triple coat, round eyes, sweet temperament, and calm apartment-friendly nature.",
    temperament: "Quiet, gentle, cuddly, and deeply content indoors. Exceptional companions for families in Hyderabad.",
    traits: ["Flowing Triple Coat", "Sweet Doll Face / Extreme Punch Face", "Vibrant Eyes", "Soft Sweet Voice"],
    careRequirement: "Daily brushing with a metal comb, gentle eye-care wipes, and high-protein dry & wet meals.",
    image: persianImg
  },
  {
    id: "br-2",
    name: "Himalayan Pointed Cats",
    description: "A gorgeous cross between Persian long hair and Siamese point colors with striking sapphire blue gaze.",
    temperament: "Curious, playful, vocal, and extremely bonded to their human family.",
    traits: ["Striking Blue Eyes", "Dark Point Coloration", "Plush Long Fur", "Highly Interactive"],
    careRequirement: "Regular brushing, interactive playtime, and high-quality kitten kibbles.",
    image: himalayanImg
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "serv-1",
    title: "All Type of Persian Cats",
    description: "Healthy, verified, and well-socialized Doll Face, Punch Face, and Himalayan kittens raised cage-free.",
    iconName: "Cat"
  },
  {
    id: "serv-2",
    title: "All-Hyderabad Doorstep Delivery",
    description: "Safe, air-conditioned vehicle delivery to your doorstep in Banjara Hills, Jubilee Hills, Secunderabad, and all areas.",
    iconName: "Truck"
  },
  {
    id: "serv-3",
    title: "Vaccination & De-worming",
    description: "Every kitten comes de-wormed and with first vaccination doses, plus full health record schedule.",
    iconName: "ShieldCheck"
  },
  {
    id: "serv-4",
    title: "24/7 Feline Consultation",
    description: "Lifetime support on WhatsApp for diet recipes, litter training, grooming tips, and vet advice.",
    iconName: "PhoneCall"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "All Type of Persian Cats",
    desc: "From classic Doll Face to extreme Punch Face, Snow White to Golden and Seal Point Himalayans.",
    icon: "Sparkles"
  },
  {
    title: "5.0 Google Rated Cattery",
    desc: "100% 5.0 rating on Google from satisfied cat owners across Hyderabad.",
    icon: "Heart"
  },
  {
    title: "All Over Hyderabad Delivery",
    desc: "Doorstep delivery in temperature-regulated pet carriers across all Hyderabad neighborhoods.",
    icon: "MapPin"
  },
  {
    title: "100% Cage-Free & Socialized",
    desc: "Raised inside loving rooms with gentle human contact so they grow up peaceful and friendly.",
    icon: "Cat"
  },
  {
    title: "Vaccinated & Health Checked",
    desc: "Complete de-worming and primary vaccination with transparent medical records.",
    icon: "Syringe"
  },
  {
    title: "24/7 WhatsApp Support",
    desc: "Direct guidance anytime on food, grooming, and kitten care from the breeder at 078424 96805.",
    icon: "Phone"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Choose Your Kitten",
    desc: "Browse our available Persian litters online or request current photos and videos."
  },
  {
    step: "02",
    title: "Live WhatsApp Video Call",
    desc: "Call or message 078424 96805 for a live video inspection to see your kitten playing and interacting."
  },
  {
    step: "03",
    title: "Confirm Your Reservation",
    desc: "Lock in your kitten with ease. We finalize health paperwork and delivery timing immediately."
  },
  {
    step: "04",
    title: "Safe Home Delivery in Hyderabad",
    desc: "Relax as we bring your healthy kitten directly to your doorstep anywhere in Hyderabad."
  }
];
