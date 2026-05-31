import { Service, Doctor, Testimonial, TechnologyItem, GalleryItem, FAQItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    shortDescription: 'Comprehensive oral examinations, advanced digital hygiene, and state-of-the-art preventative therapies.',
    longDescription: 'Our general dental procedures are designed to protect, maintain, and strengthen your natural smile. Using ultrasonic scalers for gentle, thorough surface cleanings and high-definition intraoral cameras, we detect micro-lesions long before they become painful issues.',
    duration: '45 - 60 min',
    iconName: 'Shield',
    benefits: [
      'Diagnostic standard using ultra-low radiation X-rays',
      'Ultrasonic plaque and calculus removal (pain-free)',
      'Fluoride varnish and advanced cavity prevention',
      'Intraoral camera tours of your dental health'
    ]
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Artistic smile makeovers, biomimetic bonding, and handcrafted aesthetic porcelain restorations.',
    longDescription: 'We merge medical science with natural artistry. Whether you desire subtle alignment corrections or a complete smile transformation, our custom porcelain work mimics the translucent, light-reflecting properties of organic enamel for a stunning, authentic result.',
    duration: '60 - 120 min',
    iconName: 'Sparkles',
    benefits: [
      'Digital Smile Design (DSD) preview before starting',
      'Ultra-thin custom porcelain veneers',
      'Biomimetic tooth-colored composite restorations',
      'Chipped, stained, or uneven teeth correction'
    ]
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDescription: 'Computer-guided titanium implants for lifelong, strong, and natural-feeling tooth replacements.',
    longDescription: 'Regain 100% of your chewing force and phonetic clarity. Dr. Thorne utilizes advanced 3D Cone Beam computed tomography (CBCT) to virtually map your bone density, ensuring precision-guided implant placement with minimal swelling and rapid healing.',
    duration: '90 - 150 min',
    iconName: 'Activity',
    benefits: [
      '3D computer-guided surgical precision',
      'Same-Day "Teeth-Express" temporary crowns available',
      'Highest grade biocompatible titanium implants',
      'Preservation of adjacent natural teeth structure'
    ]
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    shortDescription: 'Enlighten and Zoom Laser LED systems delivering up to 8 shades of bright, pain-free whitening.',
    longDescription: 'Forget sensitive teeth. Our professional laser teeth-whitening combined with custom desensitizing prep gels target deep systemic coffee, wine, and tobacco stains within the enamel safely and comfortably in a single relaxed couch session.',
    duration: '60 min',
    iconName: 'Sun',
    benefits: [
      'Up to 8 shades lighter guaranteed in one session',
      'Advanced laser cooling LED to eliminate tooth sensitivity',
      'Bespoken take-home preservation touch-up kits',
      '100% enamel-safe medical-grade whitening compounds'
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics & Invisalign',
    shortDescription: 'Virtually microscopic clear aligners and modern aesthetic ceramic braces customized for all ages.',
    longDescription: 'Straighten your smile discreetly. As Gold-Preferred Invisalign Providers, we use the iTero 5D digital scanner to project your finished smile alignment in 3D right during your initial consultation, mapping gentle, predictable orthodontic transformations.',
    duration: '30 - 45 min',
    iconName: 'Layers',
    benefits: [
      'Completely removable transparent alignment trays',
      'No restricted foods or complex metal wire pain',
      '3D interactive visual progress tracker apps',
      'Fewer clinic check-ins required (ideal for busy lives)'
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    shortDescription: 'Pain-free, microscopic endodontics to save natural teeth and eliminate persistent nerve pain.',
    longDescription: 'Root canals do not cause pain—they relieve it. Under heavy magnification of our Carl Zeiss dental microscope, our endodontic specialists gently clean microscopic root channels, eradicating infections softly and sealing teeth permanently.',
    duration: '60 - 90 min',
    iconName: 'FlameKindling',
    benefits: [
      'Completely pain-free under computerized local numbing',
      'Zeiss dental microscope precision to prevent reinfection',
      'Avoids the high cost and surgical disruption of extraction',
      'Strengthened with custom color-matched aesthetic crowns'
    ]
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-sarah',
    name: 'Dr. Sarah Jenkins, DDS',
    role: 'Chief Cosmetic Dentist & Practice Owner',
    qualification: 'DDS, New York University College of Dentistry',
    experience: '15+ Years Experience',
    specialization: 'Cosmetic Dentistry & Smile Makeovers',
    bio: 'Dr. Jenkins is a recognized authority in Digital Smile Design. Her aesthetic philosophy centers on biological authenticity—crafting smiles that harmonize perfectly with a patient\'s facial structure, skin tone, and dynamic expressions.',
    imageUrl: 'https://images.unsplash.com/photo-1594824813573-246434ded83f?auto=format&fit=crop&q=80&w=500',
    socials: {
      linkedin: 'https://linkedin.com/in/smilecraft-jenkins',
      twitter: 'https://twitter.com/dr_sarah_smile',
      email: 'dr.jenkins@smilecraft.com'
    }
  },
  {
    id: 'dr-alex',
    name: 'Dr. Alexander Thorne, DDS, PhD',
    role: 'Senior Implantologist & Oral Surgeon',
    qualification: 'DDS, Columbia University; PhD in Biomaterials',
    experience: '18+ Years Experience',
    specialization: 'Dental Implants & Reconstructive Surgery',
    bio: 'Specializing in computer-guided implant surgeries and full-arch immediate loading (All-on-4), Dr. Thorne has successfully placed over 4,500 implants. He regularly conducts national seminars on biological bone regeneration.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500',
    socials: {
      linkedin: 'https://linkedin.com/in/smilecraft-thorne',
      email: 'dr.thorne@smilecraft.com'
    }
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Vance, MS',
    role: 'Director of Orthodontics',
    qualification: 'MS in Orthodontics, Harvard School of Dental Medicine',
    experience: '12+ Years Experience',
    specialization: 'Invisalign & Modern Orthodontics',
    bio: 'An educator and highly certified orthodontist, Dr. Vance focuses on invisible treatment paths for both executives and children. He is a key opinion leader in optimizing modern aligner tray sequencing tech.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500',
    socials: {
      linkedin: 'https://linkedin.com/in/smilecraft-vance',
      twitter: 'https://twitter.com/vance_ortho'
    }
  },
  {
    id: 'dr-elena',
    name: 'Dr. Elena Rostova, DDS',
    role: 'Lead Endodontist',
    qualification: 'DDS, University of Pennsylvania School of Dental Medicine',
    experience: '10+ Years Experience',
    specialization: 'Microscopic Endodontics & Root Canals',
    bio: 'Dr. Rostova is dedicated to preserving your natural dentition using advanced biomechanics. Her micro-surgical techniques allow her to navigate extremely complex anatomical root curvatures safely and comfortably.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500',
    socials: {
      linkedin: 'https://linkedin.com/in/smilecraft-rostova',
      email: 'dr.rostova@smilecraft.com'
    }
  }
];

export const TECHNOLOGY_DATA: TechnologyItem[] = [
  {
    id: 'scanner',
    title: 'iTero® 5D Oral Scanner',
    tagline: 'No More Sticky Gel Molds',
    description: 'Captures 6,000 detailed 3D optical frames per second to construct a highly accurate, digital replica of your teeth. Lets you preview orthodontic smile outcomes instantly on a touchscreen.',
    glowColor: 'from-cyan-500/20 to-teal-500/20'
  },
  {
    id: 'xray',
    title: 'Green CT Low-Radiation X-Ray',
    tagline: '70% Radiation Reduction',
    description: 'Ultra-low radiation diagnostic scanner that produces razor-sharp 3D digital skull morphology in just 4.9 seconds, protecting you while giving surgeons unparalleled bone-structure data.',
    glowColor: 'from-sky-500/20 to-cyan-400/20'
  },
  {
    id: 'ai',
    title: 'Overjet® AI Diagnostic Engine',
    tagline: 'Clinical Machine Learning',
    description: 'Our proprietary cloud AI scans diagnostic radiographs in real-time, objectively color-coding and measuring bone levels and enamel thickness to catch cavities long before standard human eyes do.',
    glowColor: 'from-blue-600/20 to-cyan-500/20'
  },
  {
    id: 'laser',
    title: 'WaterLase® iPlus Laser',
    tagline: 'Anesthesia-Free Drilling',
    description: 'Engineered with premium laser photonics and water micro-jets to remove decayed structure without the high-pitched vibrations, micro-fractures, or standard pain of mechanical drills.',
    glowColor: 'from-teal-600/20 to-emerald-400/20'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'whitening',
    title: 'Teeth Whitening Power',
    subtitle: '1-Hour In-Office Laser Whitening Treatment',
    beforeUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=40&w=600&blur=3', // Simulates dull
    afterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600' // Super bright and beautiful
  },
  {
    id: 'makeover',
    title: 'Premium Smile Makeover',
    subtitle: '8 Custom Handcrafted Porcelain Veneers',
    beforeUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=40&w=600&blur=4', // Slightly compromised smile portrait
    afterUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=600' // Spectacular happy teeth smile
  },
  {
    id: 'ortho',
    title: 'Invisalign Alignment',
    subtitle: '14-Month Discreet Comprehensive Orthodontics',
    beforeUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=30&w=600&blur=3',
    afterUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers Restore',
    subtitle: 'Replaced fractured teeth with custom biomimetic dental veneers',
    beforeUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=30&w=600&blur=4',
    afterUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    location: 'Metropolitan Executive',
    review: 'My experience at SmileCraft was absolutely transformative. The 3D scanning and computer-guided Invisalign treatment plan was so cool! I could see my finish line before we even started. Dr. Jenkins is a true visual artist.',
    rating: 5,
    treatment: 'Invisalign Clear Aligners',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    location: 'Tech Venture Associate',
    review: 'I dreaded dentist appointments because of previous bad experiences, but Dr. Thorne made my complete dental implant surgery absolutely painless. From digital treatment planning to same-day teeth, the precision here is state-of-the-art.',
    rating: 5,
    treatment: 'Dental Implant Surgery',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Sophia Rodriguez',
    location: 'Creative Director',
    review: 'The clinic interior feels more like a 5-star premier lounge than a clinic! It was my first time getting laser dental treatment: zero numbing required and completely vibration-free. SmileCraft is in a league of its own.',
    rating: 5,
    treatment: 'Laser Tooth Filling',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'f1',
    question: 'How often should I visit SmileCraft Dental for a routine checkup and cleaning?',
    answer: 'To maintain peak preventative care, we recommend visiting our clinic twice a year (every 6 months) for an advanced medical cleaning and full-spectrum examination. Regular cleanings remove stubborn calculus build-up and screen for potential tooth decay or periodontal issues.'
  },
  {
    id: 'f2',
    question: 'Are dental implants painful, and how long does the recovery process take?',
    answer: 'Under our customized computerized local anesthesia and minimally invasive computer-guided placement, patient discomfort during surgery is virtually zero. Post-operative recovery is very quick, with minor pressure resolving inside 48-72 hours. Bone integration takes 3 to 6 months to form a long-lasting anchor.'
  },
  {
    id: 'f3',
    question: 'What makes Zoom laser teeth whitening better than standard over-the-counter kits?',
    answer: 'Over-the-counter trays use weak whitening content that can damage tooth enamel or burn delicate gum tissues. Our medical-grade Zoom Laser LED whitening is applied by dentists using precise gum isolation barriers and advanced cooling lights, delivering up to 8 shades lighter in just 60 minutes with zero pain.'
  },
  {
    id: 'f4',
    question: 'Am I a suitable candidate for orthodontic alignment using Invisalign clear aligners?',
    answer: 'Invisalign successfully resolves over 92% of dental alignment cases, including overbites, underbites, crowding, and wide gaps. Our interactive iTero 5D scanning maps your physical movement path and provides a real visual simulation of your orthodontic finish. Dr. Vance will verify your clinical eligibility during your consult.'
  },
  {
    id: 'f5',
    question: 'What is the structural difference between a dental crown and a porcelain veneer?',
    answer: 'A veneer is a micro-thin shell of high-translucency porcelain bonded onto the front surface of your tooth, used primarily for cosmetic redesigns. A crown is a robust ceramic cap that fully encases the entire natural tooth structure down to the gumline, ideal for restoring heavily decayed, cracked, or root-treated teeth.'
  },
  {
    id: 'f6',
    question: 'How does SmileCraft Dental manage urgent dental emergencies?',
    answer: 'We provide priority same-day scheduling slots for urgent clinical events, such as knocked-out teeth, fracture pain, jaw swelling, or high-level crown damage. If you suffer a severe dental emergency, contact our dedicated hotline immediately. Our concierge team is on-duty to safely guide you to relief.'
  },
  {
    id: 'f7',
    question: 'Do you offer comfortable financing options for cosmetic or restorative plans?',
    answer: 'Absolutely. We believe that premium care should match your personal finance preferences. We offer interest-free in-house financing, along with trusted third-party options like CareCredit. We provide completely itemized dental plans prior to booking, so you have absolute safety and clarity with no hidden fees.'
  },
  {
    id: 'f8',
    question: 'What state-of-the-art technology is used in physical pain prevention?',
    answer: 'We use premium clinical advancements to make discomfort obsolete. This includes computerized local anesthetics that deliver exact, comfortable numbing dose-delivery, Zeiss operating dental microscopes, and high-frequency WaterLase laser systems that cleanly separate decayed structure without standard drills.'
  }
];
