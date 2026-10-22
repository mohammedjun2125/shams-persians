export interface LocationSEO {
  slug: string;
  name: string;
  region: string;
  headline: string;
  subheadline: string;
  deliveryTime: string;
  popularSearchKeywords: string[];
  landmarks: string[];
  metaTitle: string;
  metaDescription: string;
  overview: string;
  localPerks: string[];
  faqs: { question: string; answer: string }[];
}

export const HYDERABAD_LOCATIONS: LocationSEO[] = [
  {
    slug: "banjara-hills",
    name: "Banjara Hills",
    region: "Central Hyderabad",
    headline: "Premium Persian Kittens in Banjara Hills | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Safe Doorstep Delivery Across Road No. 1 to 14",
    deliveryTime: "Within 60 - 90 Minutes",
    popularSearchKeywords: [
      "persian cats near me banjara hills",
      "buy persian kittens banjara hills hyderabad",
      "punch face persian cat price banjara hills",
      "doll face persian kitten banjara hills",
      "white persian cats banjara hills hyderabad",
      "shams persians banjara hills",
      "best cattery in hyderabad near banjara hills",
      "himalayan cat breeders banjara hills"
    ],
    landmarks: ["Road No. 1", "Road No. 10", "Road No. 12", "Taj Krishna area", "Care Hospital lane", "Park Hyatt vicinity"],
    metaTitle: "Persian Cats in Banjara Hills Hyderabad | Shams Persians 5.0★",
    metaDescription: "Looking for Persian cats near me in Banjara Hills, Hyderabad? Shams Persians offers all type of Persian kittens (doll face, punch face) with safe doorstep delivery. Call 078424 96805.",
    overview: "Residents of Banjara Hills trust Shams Persians for healthy, pedigreed, and fully socialized Persian kittens. Whether you are looking for an affectionate doll-face companion or an exquisite punch-face kitten, we provide swift, climate-controlled home delivery directly to your doorstep in Banjara Hills.",
    localPerks: [
      "Express 60-90 min air-conditioned pet taxi delivery to Banjara Hills",
      "Live WhatsApp video-call preview of kittens before booking",
      "Complimentary kitten starter guidance & veterinary diet schedule",
      "100% cage-free, loving domestic environment guaranteed"
    ],
    faqs: [
      {
        question: "Can I get a Persian kitten delivered to Banjara Hills today?",
        answer: "Yes! Shams Persians provides same-day, temperature-regulated pet delivery across all roads of Banjara Hills. Simply WhatsApp 078424 96805 to pick your kitten."
      },
      {
        question: "What types of Persian cats are available in Banjara Hills?",
        answer: "All types of Persian cats are available, including Doll Face Persian, Punch Face (Flat-face), Semi-Punch, Himalayan Seal Point, Pure Snow White, and Golden Shaded."
      },
      {
        question: "Are kittens vaccinated and de-wormed before delivery?",
        answer: "Every single kitten from Shams Persians is thoroughly vet-checked, de-wormed, and given primary vaccinations with an official health record."
      }
    ]
  },
  {
    slug: "jubilee-hills",
    name: "Jubilee Hills",
    region: "West Hyderabad",
    headline: "Luxury Persian Kittens in Jubilee Hills | Shams Persians",
    subheadline: "Hyderabad's Top 5.0 Rated Cattery • Doorstep Delivery to Checkpost, Road 36 & 45",
    deliveryTime: "Within 60 - 90 Minutes",
    popularSearchKeywords: [
      "persian cat shop jubilee hills hyderabad",
      "persian kittens near me jubilee hills",
      "punch face persian cat jubilee hills",
      "white persian kitten price jubilee hills",
      "shams persians jubilee hills",
      "doll face kitten breeders jubilee hills",
      "pedigree cat cattery jubilee hills hyderabad"
    ],
    landmarks: ["Road No. 36", "Road No. 45", "Jubilee Hills Checkpost", "Peddamma Temple road", "Film Nagar border", "Journalist Colony"],
    metaTitle: "Persian Cats in Jubilee Hills Hyderabad | Shams Persians Cattery",
    metaDescription: "Buy purebred Persian kittens in Jubilee Hills, Hyderabad from Shams Persians. All type of Persian cats available. 5.0 Google rating. Doorstep delivery. Ring 078424 96805.",
    overview: "Looking for royal Persian or Himalayan kittens in Jubilee Hills? Shams Persians is celebrated for elite pedigree lineages, serene temperaments, and spotless hygiene. We cater to feline lovers across Jubilee Hills with express pet-friendly delivery.",
    localPerks: [
      "Priority same-day delivery to Road 36, 45, and Film Nagar",
      "Full breed authenticity and veterinary certification",
      "WhatsApp kitten selection via HD live video",
      "Lifetime post-adoption care and diet consultation"
    ],
    faqs: [
      {
        question: "How do I choose and adopt a Persian kitten in Jubilee Hills?",
        answer: "Browse our available kittens, connect on WhatsApp 078424 96805 for video inspection, and we will safely deliver your kitten to your Jubilee Hills residence."
      },
      {
        question: "Do you have flat-face punch Persian kittens available for Jubilee Hills?",
        answer: "Yes, we have high-quality Punch Face Persians, Semi-Punch, and Traditional Doll Face Persians in white, golden, calico, and silver shades."
      }
    ]
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    region: "Twin Cities / Secunderabad",
    headline: "Purebred Persian Cats in Secunderabad | Shams Persians",
    subheadline: "5.0 Google Reviews • Fast Delivery Across Paradise, Marredpally, Cantonment & Clock Tower",
    deliveryTime: "Within 1 - 2 Hours",
    popularSearchKeywords: [
      "persian cats in secunderabad",
      "persian cat price in secunderabad",
      "cattery in secunderabad",
      "buy persian kitten west marredpally",
      "persian cats near me secunderabad",
      "shams persians secunderabad hyderabad",
      "kitten shop secunderabad cantonment",
      "doll face persian kitten secunderabad"
    ],
    landmarks: ["East & West Marredpally", "Paradise Circle", "Clock Tower", "Secunderabad Station area", "Karkhana", "Sainikpuri border"],
    metaTitle: "Persian Cats in Secunderabad | Persian Kittens Near Me | Shams Persians",
    metaDescription: "Adopt healthy Persian kittens in Secunderabad from Shams Persians. All types of Persian cats available with 5.0 Google reviews. Safe delivery across Marredpally & Secunderabad.",
    overview: "For cat enthusiasts throughout Secunderabad and the Cantonment area, Shams Persians brings genuine Persian and Himalayan kittens raised in warm, cage-free home settings. Enjoy peaceful, loving pets with verified health records delivered right to your home.",
    localPerks: [
      "Safe, quick delivery throughout East/West Marredpally and Secunderabad",
      "Transparent pricing with no hidden charges",
      "Dewormed and first-dose vaccinated kittens",
      "24-hour guidance available for all new cat parents"
    ],
    faqs: [
      {
        question: "What is the Persian cat price in Secunderabad?",
        answer: "Persian cat prices vary depending on coat type (Doll Face, Semi-Punch, Punch Face) and color shade. Call or WhatsApp 078424 96805 for instant photos and quotes."
      },
      {
        question: "Can I inspect the kittens before delivery in Secunderabad?",
        answer: "Yes, we arrange live WhatsApp video calls showing the kittens playing, feeding, and interacting so you can pick your favourite with complete peace of mind."
      }
    ]
  },
  {
    slug: "begumpet",
    name: "Begumpet",
    region: "Central Hyderabad",
    headline: "Persian Cats in Begumpet Hyderabad | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Instant Home Delivery to Begumpet, Prakash Nagar & Mayur Marg",
    deliveryTime: "Within 30 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats near me begumpet",
      "shams persians begumpet hyderabad",
      "buy persian cat begumpet prakash nagar",
      "persian kittens for sale begumpet",
      "cattery near begumpet hyderabad",
      "persian cat shop near me begumpet"
    ],
    landmarks: ["Prakash Nagar", "Begumpet Airport road", "Mayur Marg", "Shoppers Stop circle", "Rasoolpura border", "Kundanbagh"],
    metaTitle: "Persian Cats in Begumpet Hyderabad | Shams Persians Cattery 5.0★",
    metaDescription: "Find Persian kittens near me in Begumpet, Hyderabad. Shams Persians provides all type of Persian cats, doll face & punch face, with 5.0 Google rating. Call 078424 96805.",
    overview: "Begumpet residents looking for affectionate, fluffy Persian kittens can rely on Shams Persians. With super-fast delivery to Begumpet, Prakash Nagar, and surrounding localities, your new furry family member arrives safe, calm, and ready to cuddle.",
    localPerks: [
      "Super-fast delivery within 30-60 minutes to Begumpet & Prakash Nagar",
      "5.0 Google verified rating based on authentic customer reviews",
      "Full initial health checkup, deworming, and vaccination papers",
      "Owner quote: 'All type of Persian cats available'"
    ],
    faqs: [
      {
        question: "How soon can a kitten be delivered to Begumpet?",
        answer: "Deliveries to Begumpet and Prakash Nagar typically take just 30 to 60 minutes in an air-conditioned pet carrier."
      },
      {
        question: "What breeds and colors do you have available for Begumpet?",
        answer: "We carry Snow White, Cream, Calico, Seal Point Himalayan, and Golden Shaded in both Doll Face and Punch Face Persian lines."
      }
    ]
  },
  {
    slug: "old-city",
    name: "Old City & Charminar",
    region: "South Hyderabad",
    headline: "Persian Cats in Old City Hyderabad | Shams Persians",
    subheadline: "All Type of Persian Cats Available • Delivery to Charminar, Bahadurpura, Chandrayangutta & Moghalpura",
    deliveryTime: "Within 1 - 2 Hours",
    popularSearchKeywords: [
      "persian cats near me old city hyderabad",
      "buy persian cat charminar",
      "persian cat price old city hyderabad",
      "punch face persian cat old city",
      "shams persians old city hyderabad",
      "persian kittens bahadurpura hyderabad",
      "cat cattery near charminar hyderabad"
    ],
    landmarks: ["Charminar", "Moghalpura", "Bahadurpura", "Chandrayangutta", "Madina Circle", "Nayapul", "Santosh Nagar"],
    metaTitle: "Persian Cats in Old City Hyderabad | Charminar | Shams Persians",
    metaDescription: "Adopt purebred Persian cats in Old City Hyderabad from Shams Persians. 5.0 Google rating. Punch face & doll face kittens delivered to Charminar & Moghalpura. Call 078424 96805.",
    overview: "Feline lovers across Old City, Charminar, Moghalpura, and Chandrayangutta count on Shams Persians for healthy, purebred Persian kittens. We ensure high-safety doorstep delivery in specialized pet carriers with all necessary vaccination records.",
    localPerks: [
      "Doorstep delivery across Charminar, Nayapul, and all Old City areas",
      "Affordable pricing for authentic pedigree Persian kittens",
      "Detailed diet manual and kitten food guidelines provided",
      "5.0 Google rating with verified customer testimonials"
    ],
    faqs: [
      {
        question: "Do you deliver Persian kittens to Old City and Charminar?",
        answer: "Yes, Shams Persians delivers directly to your door anywhere in Old City, Bahadurpura, Santosh Nagar, and Chandrayangutta."
      },
      {
        question: "Can I get punch-face Persian kittens in Old City?",
        answer: "Yes! We specialize in top-quality punch face and doll face Persian kittens. Contact us on WhatsApp 078424 96805 to see current litters."
      }
    ]
  },
  {
    slug: "gachibowli",
    name: "Gachibowli",
    region: "West Hyderabad (IT Corridor)",
    headline: "Persian Cats in Gachibowli Hyderabad | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Fast Delivery to Financial District, DLF & Telecom Nagar",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats near me gachibowli",
      "buy persian kitten gachibowli",
      "persian cat shop financial district hyderabad",
      "punch face persian kittens gachibowli",
      "shams persians gachibowli",
      "cattery in gachibowli hyderabad"
    ],
    landmarks: ["DLF Cyber City", "Telecom Nagar", "Gachibowli Stadium", "Financial District", "ORR Junction", "Gowlidoddy"],
    metaTitle: "Persian Cats in Gachibowli Hyderabad | Shams Persians Cattery",
    metaDescription: "Buy healthy Persian kittens in Gachibowli & Financial District from Shams Persians. 5.0 Google reviews. All type of Persian cats available. Call 078424 96805.",
    overview: "For IT professionals and families living in Gachibowli and the Financial District, a Persian kitten is the ultimate calm, apartment-friendly pet. Shams Persians provides healthy, litter-trained kittens that adjust effortlessly to modern apartment life.",
    localPerks: [
      "Litter-trained and apartment-friendly Persian kittens",
      "Swift AC pet-taxi delivery across Gachibowli and Financial District",
      "24/7 post-adoption WhatsApp care assistance",
      "Vaccinated, vet-screened, and de-wormed kittens"
    ],
    faqs: [
      {
        question: "Are Persian cats suitable for apartments in Gachibowli?",
        answer: "Persian cats are known as the quietest, calmest indoor cats, making them ideal companions for gated communities and apartments in Gachibowli."
      }
    ]
  },
  {
    slug: "hitec-city",
    name: "Hitec City & Madhapur",
    region: "West Hyderabad (Cyberabad)",
    headline: "Persian Kittens in Hitec City & Madhapur | Shams Persians",
    subheadline: "Hyderabad's Premier 5.0 Rated Cattery • Express Delivery to Cyber Towers, Inorbit & Kavuri Hills",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats hitec city hyderabad",
      "persian kitten for sale madhapur",
      "persian cat shop near cyber towers",
      "shams persians hitec city",
      "cattery near me madhapur",
      "buy white persian cat hitec city"
    ],
    landmarks: ["Cyber Towers", "Inorbit Mall area", "Kavuri Hills", "Durgam Cheruvu", "Mindspace IT Park", "Ayyappa Society"],
    metaTitle: "Persian Cats in Hitec City & Madhapur | Shams Persians Hyderabad",
    metaDescription: "Premium Persian kittens for sale in Hitec City & Madhapur Hyderabad. Shams Persians has all type of Persian cats available with 5.0 Google rating. Call 078424 96805.",
    overview: "Shams Persians brings top-tier doll face, punch face, and Himalayan kittens directly to pet parents in Hitec City, Madhapur, and Kavuri Hills. Enjoy peaceful companionship backed by a verified 5.0 Google rating.",
    localPerks: [
      "Quick AC delivery to Mindspace, Cyber Towers, and Madhapur",
      "Cage-free, gentle kittens raised with utmost affection",
      "Health warranty and veterinary verification included",
      "Video-call kitten reservations with zero hassle"
    ],
    faqs: [
      {
        question: "How do I book a kitten for delivery in Madhapur / Hitec City?",
        answer: "Message us on WhatsApp 078424 96805, inspect live videos of current litters, select your favorite, and receive your kitten at your door today."
      }
    ]
  },
  {
    slug: "kondapur",
    name: "Kondapur",
    region: "West Hyderabad",
    headline: "Persian Cats in Kondapur Hyderabad | Shams Persians",
    subheadline: "5.0 Google Verified Cattery • Safe Delivery to Botanical Garden, Chirec & Raghavendra Colony",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats near me kondapur",
      "buy persian kittens kondapur hyderabad",
      "persian cat shop kondapur",
      "punch face persian cat kondapur",
      "shams persians kondapur"
    ],
    landmarks: ["Botanical Garden road", "Chirec Public School road", "Raghavendra Colony", "Kothaguda Junction", "Hafeezpet border"],
    metaTitle: "Persian Cats in Kondapur Hyderabad | Shams Persians 5.0★ Cattery",
    metaDescription: "Find purebred Persian kittens in Kondapur, Hyderabad. Shams Persians provides healthy, vaccinated kittens with same-day doorstep delivery. Call 078424 96805.",
    overview: "Kondapur pet parents choose Shams Persians for beautiful, healthy Persian and Himalayan kittens. We provide fast doorstep delivery and complete support on kitten nutrition, grooming, and veterinary care.",
    localPerks: [
      "Doorstep delivery to all apartments in Kondapur and Kothaguda",
      "Starter diet checklist and transition food provided",
      "Healthy, vaccinated, and playful kittens guaranteed"
    ],
    faqs: [
      {
        question: "Can I get home delivery of a Persian kitten in Kondapur?",
        answer: "Yes, we deliver safely across Kondapur within 45 to 60 minutes in an air-conditioned vehicle."
      }
    ]
  },
  {
    slug: "kukatpally",
    name: "Kukatpally & KPHB",
    region: "North-West Hyderabad",
    headline: "Persian Cats in Kukatpally & KPHB | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Express Delivery across KPHB Colony Phases 1 to 9 & JNTU",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats in kukatpally",
      "persian kittens for sale kphb colony",
      "persian cat shop near jntu hyderabad",
      "punch face persian cat price kukatpally",
      "shams persians kukatpally",
      "buy doll face persian kitten kphb"
    ],
    landmarks: ["KPHB Phase 1-9", "JNTU", "Forum Sujana Mall vicinity", "Vivekananda Nagar", "Y Junction Kukatpally"],
    metaTitle: "Persian Cats in Kukatpally & KPHB Hyderabad | Shams Persians",
    metaDescription: "Buy healthy Persian kittens in Kukatpally and KPHB Colony. Shams Persians offers all type of Persian cats with 5.0 Google reviews. Call 078424 96805.",
    overview: "Looking for a Persian cat near Kukatpally or KPHB? Shams Persians brings premium doll-face and punch-face Persian kittens directly to your residence. All kittens are raised cage-free, friendly, and fully de-wormed.",
    localPerks: [
      "Express delivery across KPHB Colony and Kukatpally",
      "All type of Persian cats available (white, golden, point colors)",
      "5.0 Google review track record"
    ],
    faqs: [
      {
        question: "What is the delivery procedure for KPHB Kukatpally?",
        answer: "Select your kitten via WhatsApp video call on 078424 96805, confirm your address, and our driver will deliver your kitten in a safe pet crate."
      }
    ]
  },
  {
    slug: "mehdipatnam",
    name: "Mehdipatnam & Tolichowki",
    region: "South-West Hyderabad",
    headline: "Persian Cats in Mehdipatnam & Tolichowki | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Safe Delivery to Mehdipatnam, Tolichowki, Rethibowli & Attapur",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats near me mehdipatnam",
      "buy persian kittens tolichowki",
      "persian cat price mehdipatnam hyderabad",
      "shams persians tolichowki",
      "cattery in mehdipatnam hyderabad"
    ],
    landmarks: ["Rethibowli", "Tolichowki Flyover", "Seven Tombs road", "Attapur border", "Murad Nagar", "Gudimalkapur"],
    metaTitle: "Persian Cats in Mehdipatnam & Tolichowki | Shams Persians 5.0★",
    metaDescription: "Adopt purebred Persian kittens in Mehdipatnam and Tolichowki from Shams Persians. All type of Persian cats available. 5.0 Google reviews. Ring 078424 96805.",
    overview: "Shams Persians serves pet lovers across Mehdipatnam, Tolichowki, and Attapur with top-quality Persian and Himalayan kittens. Every kitten is health-checked, litter-trained, and delivered with genuine care.",
    localPerks: [
      "Fast delivery to Tolichowki, Mehdipatnam, and Attapur",
      "All type of Persian cats available with verified vaccination records",
      "Ongoing grooming and nutrition advice on WhatsApp"
    ],
    faqs: [
      {
        question: "Are punch face Persian cats available for Tolichowki?",
        answer: "Yes, we have authentic punch face and doll face Persian kittens in pure white, calico, cream, and seal point."
      }
    ]
  },
  {
    slug: "ameerpet",
    name: "Ameerpet & SR Nagar",
    region: "Central Hyderabad",
    headline: "Persian Cats in Ameerpet & SR Nagar | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Rapid Delivery to Ameerpet, SR Nagar, Panjagutta & Sanjeeva Reddy Nagar",
    deliveryTime: "Within 30 - 45 Minutes",
    popularSearchKeywords: [
      "persian cats in ameerpet",
      "persian kitten for sale sr nagar hyderabad",
      "buy persian cat ameerpet",
      "shams persians ameerpet",
      "cattery near me panjagutta"
    ],
    landmarks: ["Ameerpet Metro Junction", "SR Nagar main road", "Panjagutta Circle", "Balkampet", "Mytrivanam"],
    metaTitle: "Persian Cats in Ameerpet & SR Nagar Hyderabad | Shams Persians",
    metaDescription: "Find Persian kittens for sale in Ameerpet and SR Nagar Hyderabad. Shams Persians provides healthy, vaccinated pedigree cats. 5.0 Google rating. Call 078424 96805.",
    overview: "Centrally located families in Ameerpet and SR Nagar can adopt their dream Persian kitten with ease. Shams Persians delivers within 45 minutes with all vaccination and deworming paperwork ready.",
    localPerks: [
      "Quick delivery within 30-45 minutes to Ameerpet & SR Nagar",
      "5.0 Google rated service with verified owner testimonials",
      "Complete kitten care manual provided"
    ],
    faqs: [
      {
        question: "Can I inspect the kittens before adopting?",
        answer: "Yes, we offer HD video inspection on WhatsApp 078424 96805 so you can see their activity, temperament, and health."
      }
    ]
  },
  {
    slug: "dilsukhnagar",
    name: "Dilsukhnagar & LB Nagar",
    region: "East Hyderabad",
    headline: "Persian Cats in Dilsukhnagar & LB Nagar | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Safe Doorstep Delivery Across Chaitanyapuri, Kothapet & LB Nagar Ring Road",
    deliveryTime: "Within 1 - 2 Hours",
    popularSearchKeywords: [
      "persian cats in dilsukhnagar",
      "persian kitten price lb nagar hyderabad",
      "buy persian cat kothapet",
      "shams persians dilsukhnagar",
      "cattery near lb nagar hyderabad"
    ],
    landmarks: ["Dilsukhnagar Metro", "Chaitanyapuri", "Kothapet Fruit Market road", "LB Nagar Ring Road", "Nagole border"],
    metaTitle: "Persian Cats in Dilsukhnagar & LB Nagar | Shams Persians Hyderabad",
    metaDescription: "Buy purebred Persian kittens in Dilsukhnagar and LB Nagar Hyderabad from Shams Persians. All type of Persian cats available. 5.0 Google rated. Call 078424 96805.",
    overview: "Pet enthusiasts in East Hyderabad, Dilsukhnagar, and LB Nagar can adopt healthy, beautiful Persian kittens from Shams Persians with guaranteed safe, air-conditioned doorstep delivery.",
    localPerks: [
      "Safe pet taxi delivery directly to your door in Dilsukhnagar and LB Nagar",
      "Vaccinated, dewormed, and vet-certified kittens",
      "Transparent quotes and complete post-adoption care support"
    ],
    faqs: [
      {
        question: "How are kittens transported to LB Nagar / Dilsukhnagar?",
        answer: "We use air-conditioned, secured pet carriers to ensure your kitten arrives calm, unstressed, and happy."
      }
    ]
  },
  {
    slug: "uppal",
    name: "Uppal & Tarnaka",
    region: "East / North-East Hyderabad",
    headline: "Persian Cats in Uppal & Tarnaka | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Safe Delivery to Uppal Stadium, Habsiguda & Tarnaka",
    deliveryTime: "Within 1 - 2 Hours",
    popularSearchKeywords: [
      "persian cats near me uppal",
      "persian kitten for sale tarnaka hyderabad",
      "buy persian cat habsiguda",
      "shams persians uppal hyderabad",
      "cat cattery near tarnaka"
    ],
    landmarks: ["Uppal Stadium", "Habsiguda main road", "Tarnaka Junction", "Nacharam border", "Ramanthapur"],
    metaTitle: "Persian Cats in Uppal & Tarnaka Hyderabad | Shams Persians",
    metaDescription: "Adopt purebred Persian kittens in Uppal & Tarnaka, Hyderabad. Shams Persians has all type of Persian cats available. 5.0 Google rating. Call 078424 96805.",
    overview: "Families in Uppal, Habsiguda, and Tarnaka trust Shams Persians for purebred doll-face and punch-face Persian kittens. We guarantee clean, healthy, and happy companions.",
    localPerks: [
      "Reliable delivery across Uppal, Habsiguda, and Tarnaka",
      "Pedigree lineage and 100% cage-free home rearing",
      "Comprehensive diet and grooming guide provided"
    ],
    faqs: [
      {
        question: "What care guidance is provided with the kitten?",
        answer: "We provide a complete welcome kit list covering premium food, litter training, vitamins, and coat brushing routines."
      }
    ]
  },
  {
    slug: "manikonda",
    name: "Manikonda & Financial District",
    region: "West Hyderabad",
    headline: "Persian Cats in Manikonda & Puppalguda | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Express Delivery to Lanco Hills, Puppalguda & Narsingi",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats in manikonda",
      "buy persian kittens puppalguda hyderabad",
      "punch face persian cat lanco hills",
      "shams persians manikonda",
      "persian cat shop narsingi hyderabad"
    ],
    landmarks: ["Lanco Hills", "Puppalguda", "Narsingi Junction", "Alkapur Township", "Secretariat Colony Manikonda"],
    metaTitle: "Persian Cats in Manikonda & Puppalguda | Shams Persians Hyderabad",
    metaDescription: "Buy healthy Persian kittens in Manikonda & Puppalguda Hyderabad from Shams Persians. All type of Persian cats available. 5.0 Google rated. Call 078424 96805.",
    overview: "Residents of Lanco Hills, Puppalguda, and Manikonda love the tranquil companionship of our Persian kittens. Shams Persians provides healthy, playful companions with same-day home delivery.",
    localPerks: [
      "Prompt delivery to Lanco Hills, Puppalguda, and Alkapur Township",
      "Litter-box trained, friendly, and docile kittens",
      "Direct WhatsApp contact with the breeder on 078424 96805"
    ],
    faqs: [
      {
        question: "Can I receive a kitten at Lanco Hills today?",
        answer: "Yes, we deliver to gated communities in Manikonda and Lanco Hills within 45 to 60 minutes."
      }
    ]
  },
  {
    slug: "miyapur",
    name: "Miyapur & Chandanagar",
    region: "North-West Hyderabad",
    headline: "Persian Cats in Miyapur & Chandanagar | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Fast Delivery to Miyapur Metro, Allwyn Colony & Chandanagar",
    deliveryTime: "Within 45 - 60 Minutes",
    popularSearchKeywords: [
      "persian cats in miyapur",
      "persian kittens for sale chandanagar",
      "buy persian cat allwyn colony hyderabad",
      "shams persians miyapur",
      "cattery near miyapur hyderabad"
    ],
    landmarks: ["Miyapur Metro Station", "Allwyn Colony", "Chandanagar Railway Station road", "Madinaguda", "BHEL circle"],
    metaTitle: "Persian Cats in Miyapur & Chandanagar | Shams Persians Hyderabad",
    metaDescription: "Purebred Persian kittens in Miyapur and Chandanagar Hyderabad. Shams Persians has all type of Persian cats available. 5.0 Google rating. Call 078424 96805.",
    overview: "Pet lovers in Miyapur, Madinaguda, and Chandanagar enjoy smooth adoption through Shams Persians. Choose your kitten via live video and receive same-day home delivery.",
    localPerks: [
      "Same-day delivery to Miyapur, Madinaguda, and Chandanagar",
      "All type of Persian cats available in multiple coat colors",
      "Vet-screened and de-wormed kittens"
    ],
    faqs: [
      {
        question: "Are your kittens vaccinated?",
        answer: "Yes, all our kittens receive their primary vaccinations and thorough de-worming before rehoming."
      }
    ]
  },
  {
    slug: "kompally",
    name: "Kompally & Alwal",
    region: "North Hyderabad",
    headline: "Persian Cats in Kompally & Alwal | Shams Persians",
    subheadline: "5.0 Google Rated Cattery • Safe Doorstep Delivery across Suchitra, Kompally & Alwal",
    deliveryTime: "Within 1 - 2 Hours",
    popularSearchKeywords: [
      "persian cats in kompally",
      "persian kittens for sale alwal hyderabad",
      "buy persian cat suchitra circle",
      "shams persians kompally",
      "cattery in north hyderabad"
    ],
    landmarks: ["Suchitra Circle", "Kompally Highway", "Alwal Hills", "Bolarum", "Dulapally road"],
    metaTitle: "Persian Cats in Kompally & Alwal Hyderabad | Shams Persians 5.0★",
    metaDescription: "Adopt purebred Persian kittens in Kompally, Alwal, and Suchitra from Shams Persians. All type of Persian cats available. 5.0 Google reviews. Call 078424 96805.",
    overview: "For families in North Hyderabad, Kompally, Suchitra, and Alwal, Shams Persians provides purebred Persian cats with safe, temperature-regulated vehicle delivery right to your door.",
    localPerks: [
      "Safe transport to Kompally, Alwal, and Suchitra Circle",
      "Cage-free, loving nursery upbringing",
      "5.0 Google rated service with ongoing WhatsApp support"
    ],
    faqs: [
      {
        question: "How do I order a Persian kitten to Kompally?",
        answer: "Contact us on WhatsApp 078424 96805, pick your kitten on live video, and we will dispatch our driver to your address."
      }
    ]
  }
];
