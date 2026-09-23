/**
 * ============================================================
 * PEACE MAHAL — SITE CONFIGURATION & BILINGUAL DATA
 * ============================================================
 * 
 * Centralized business configuration for Peace Mahal.
 * Update these values to customize details across the entire site.
 * No need to hard-code details in multiple places.
 * ============================================================
 */

const SITE_CONFIG = {

  // ── Business Identity ──────────────────────────────────────
  businessName: "Peace Mahal",
  businessTagline: "Where Every Celebration Becomes a Memory",
  businessDescription: "A welcoming venue in Kilakarai for weddings, receptions, family functions and special occasions.",
  businessType: "Functional Hall / Wedding Venue / Event Hall",

  // ── Address ────────────────────────────────────────────────
  address: {
    line1: "12/620, Vallal Seethakathi Salai",
    line2: "Behind Best Mummy Bakery",
    area: "Keelakarai",
    district: "Ramanathapuram",
    state: "Tamil Nadu",
    pin: "623517",
    country: "India",
    full: "12/620, Vallal Seethakathi Salai, Behind Best Mummy Bakery, Keelakarai, Tamil Nadu 623517, India"
  },

  // ── Contact Details ────────────────────────────────────────
  // Non-negotiable updated numbers for Peace Mahal V2
  phone: "8883555249",              // Primary contact
  phoneSecondary: "9003433443",     // Secondary contact
  whatsapp: "918883555249",         // WhatsApp international format (without +)
  email: "",                        // Kept empty per privacy & requirement

  // ── Business Hours ─────────────────────────────────────────
  businessHours: "Monday – Sunday: 9:00 AM – 7:00 PM",
  businessHoursShort: "9:00 AM – 7:00 PM Daily",

  // ── Google Maps ────────────────────────────────────────────
  googleMapsSearchQuery: "Peace Mahal, 12/620 Vallal Seethakathi Salai, Behind Best Mummy Bakery, Keelakarai, Tamil Nadu 623517",
  googleMapsDirectionsURL: "https://www.google.com/maps/dir/?api=1&destination=Peace+Mahal,+12/620+Vallal+Seethakathi+Salai,+Behind+Best+Mummy+Bakery,+Keelakarai,+Tamil+Nadu+623517",
  googleMapsEmbedURL: "https://www.google.com/maps?q=Peace+Mahal+12%2F620+Vallal+Seethakathi+Salai+Behind+Best+Mummy+Bakery+Keelakarai+Tamil+Nadu+623517&output=embed",

  // ── WhatsApp Message Templates ─────────────────────────────
  whatsappDefaultMessage: "Hello Peace Mahal, I would like to know more about the venue and booking availability.",

  // Dynamic message generator for enquiry buttons
  getWhatsAppEnquiryMessage: function(eventType, date, guests, name) {
    eventType = eventType || "an event";
    var greeting = name ? `Hello Peace Mahal, I am ${name}.` : "Hello Peace Mahal,";
    var dateStr = date ? ` on ${date}` : "";
    var guestStr = guests ? ` for approximately ${guests} guests` : "";
    return `${greeting} I would like to enquire about ${eventType}${dateStr}${guestStr}. Please share the availability and booking details.`;
  },

  // ── Social Media ───────────────────────────────────────────
  socialMedia: {
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: ""
  },

  // ── Facilities ─────────────────────────────────────────────
  facilities: [
    { 
      name: "Spacious Function Hall",
      nameTa: "விசாலமான பிரதான அரங்கம்",
      icon: "🏛️",
      description: "Expansive hall designed for weddings, receptions and grand family gatherings.",
      descriptionTa: "திருமணங்கள், வரவேற்புகள் மற்றும் குடும்ப கொண்டாட்டங்களுக்கான விசாலமான பிரதான அரங்கம்.",
      enabled: true 
    },
    { 
      name: "Decorated Stage",
      nameTa: "அலங்கரிக்கப்பட்ட மேடை",
      icon: "🎭",
      description: "Elevated, beautifully styled ceremonial stage with backdrop illumination.",
      descriptionTa: "அழகிய பின்னணி விளக்குகள் மற்றும் வசதியான இருக்கைகள் கொண்ட பிரம்மாண்ட மேடை.",
      enabled: true 
    },
    { 
      name: "Grand Entrance & Canopy",
      nameTa: "பிரமாண்ட நுழைவாயில் பந்தல்",
      icon: "✨",
      description: "Impressive entrance gateway with dedicated driveway and festive lighting canopy.",
      descriptionTa: "சிறப்பு விளக்கு அலங்காரத்துடன் கூடிய நுழைவாயில் மற்றும் கார் வழிப்பாதை.",
      enabled: true 
    },
    { 
      name: "Dining Facility",
      nameTa: "உணவு அருந்தும் கூடம்",
      icon: "🍽️",
      description: "Dedicated dining space to serve guests comfortably during events.",
      descriptionTa: "அனைத்து விருந்தினர்களுக்கும் வசதியாக உணவு பரிமாறும் தனி உணவுக்கூடம்.",
      enabled: true 
    },
    { 
      name: "Parking Area",
      nameTa: "வாகன நிறுத்துமிடம்",
      icon: "🅿️",
      description: "Convenient vehicle parking and easy access directly from the main road.",
      descriptionTa: "முக்கிய சாலையில் இருந்து நேரடி அணுகலுடன் கூடிய பாதுகாப்பான வாகன நிறுத்துமிடம்.",
      enabled: true 
    },
    { 
      name: "Ventilation & Cooling",
      nameTa: "காற்றோட்டம் & ஏசி வசதி",
      icon: "❄️",
      description: "High-capacity air ventilation, ceiling fans and cooling units.",
      descriptionTa: "விருந்தினர்கள் சௌகரியமாக இருக்க உயர்தர காற்றோட்டம் மற்றும் குளிரூட்டும் வசதிகள்.",
      enabled: true 
    },
    { 
      name: "Dressing Rooms",
      nameTa: "மணமக்கள் ஒப்பனை அறைகள்",
      icon: "👗",
      description: "Comfortable private rooms for bride and groom preparations.",
      descriptionTa: "மணமகன் மற்றும் மணமகள் ஆயத்தமாக அனைத்து வசதிகளும் கொண்ட தனி அறைகள்.",
      enabled: true 
    },
    { 
      name: "Guest Amenities",
      nameTa: "விருந்தினர் வசதிகள்",
      icon: "🚻",
      description: "Well-maintained restrooms and essential facilities for visitors.",
      descriptionTa: "தூய்மையான கழிவறைகள் மற்றும் அடிப்படைத் தேவைகளுக்கான சிறந்த பராமரிப்பு.",
      enabled: true 
    }
  ],

  // ── Event Types ────────────────────────────────────────────
  eventTypes: [
    {
      name: "Weddings",
      nameTa: "திருமணங்கள்",
      description: "A dedicated, welcoming venue for memorable wedding celebrations.",
      descriptionTa: "உங்கள் வாழ்வின் மிக முக்கியமான திருமண விழாவிற்கு அமைதியான மற்றும் கம்பீரமான அரங்கம்.",
      icon: "💒"
    },
    {
      name: "Wedding Receptions",
      nameTa: "வரவேற்பு நிகழ்ச்சிகள்",
      description: "A warm and spacious setting to celebrate with family and guests.",
      descriptionTa: "குடும்பத்தினருடனும் நண்பர்களுடனும் மகிழ்ச்சியைப் பகிர்ந்து கொள்ளும் சிறந்த வரவேற்பு மண்டபம்.",
      icon: "💍"
    },
    {
      name: "Engagements",
      nameTa: "நிச்சயதார்த்தம்",
      description: "A suitable setting for engagement and pre-wedding celebrations.",
      descriptionTa: "புதிய பந்தத்தின் தொடக்கத்தை அழகாக கொண்டாட உகந்த சூழல்.",
      icon: "💝"
    },
    {
      name: "Nikah & Family Functions",
      nameTa: "நிக்காஹ் & குடும்ப விழாக்கள்",
      description: "A respected venue for important family and community occasions.",
      descriptionTa: "நிக்காஹ் மற்றும் அனைத்து ஆன்மீக, பாரம்பரிய குடும்ப விழாக்களுக்கான மதிப்பிற்குரிய தளம்.",
      icon: "🌙"
    },
    {
      name: "Birthday & Anniversary Celebrations",
      nameTa: "பிறந்தநாள் & ஆண்டு விழாக்கள்",
      description: "Celebrate milestones with loved ones in comfort.",
      descriptionTa: "வாழ்க்கையின் இனிய மைல்கற்களை நேசத்திற்குரியவர்களுடன் உற்சாகமாக கொண்டாடுங்கள்.",
      icon: "🎂"
    },
    {
      name: "Community & Social Events",
      nameTa: "சமூக & பொது நிகழ்ச்சிகள்",
      description: "Suitable for gatherings, exhibitions and organized social occasions.",
      descriptionTa: "கண்காட்சிகள், சந்திப்புகள் மற்றும் பொதுக் கூட்டங்களை நடத்த ஏற்ற இடவசதி.",
      icon: "🤝"
    }
  ],

  // ── Genuine Peace Mahal Photographs ────────────────────────
  galleryImages: [
    {
      src: "images/peace-mahal-night-entrance.jpg",
      alt: "Peace Mahal illuminated grand entrance canopy in Kilakarai",
      altTa: "பீஸ் மஹால் கீழக்கரை ஒளிமயமான நுழைவாயில் பந்தல்",
      category: "exterior",
      caption: "Peace Mahal — Grand Entrance & Festive Light Canopy",
      captionTa: "பீஸ் மஹால் — வண்ண விளக்குகள் நிறைந்த கம்பீர நுழைவாயில்"
    },
    {
      src: "images/peace-mahal-exterior.jpg",
      alt: "Peace Mahal venue exterior and driveway behind Best Mummy Bakery",
      altTa: "பீஸ் மஹால் வெளித்தோற்றம் மற்றும் பிரத்யேக வழிப்பாதை",
      category: "exterior",
      caption: "Peace Mahal — Exterior View & Dedicated Driveway",
      captionTa: "பீஸ் மஹால் — வெளித்தோற்றம் மற்றும் கார் வழிப்பாதை"
    },
    {
      src: "images/peace-mahal-stage.jpg",
      alt: "Peace Mahal decorated wedding stage with floral backdrop and royal couch",
      altTa: "பீஸ் மஹால் மலர் அலங்கார திருமண மேடை",
      category: "stage",
      caption: "Peace Mahal — Decorated Wedding & Reception Stage",
      captionTa: "பீஸ் மஹால் — கண்கவர் திருமண மேடை அலங்காரம்"
    },
    {
      src: "images/peace-mahal-interior.jpg",
      alt: "Peace Mahal spacious functional hall interior seating view in Keelakarai",
      altTa: "பீஸ் மஹால் பிரதான அரங்கம் இருக்கை அமைப்பு",
      category: "hall",
      caption: "Peace Mahal — Main Hall Seating & Stage View",
      captionTa: "பீஸ் மஹால் — விசாலமான மண்டப உள் தோற்றம்"
    },
    {
      src: "images/peace-mahal-event.jpg",
      alt: "Peace Mahal live event celebration with guests in Kilakarai",
      altTa: "பீஸ் மஹாலில் நடைபெறும் சுப நிகழ்ச்சி கொண்டாட்டம்",
      category: "events",
      caption: "Peace Mahal — Event Celebration in Progress",
      captionTa: "பீஸ் மஹால் — சிறப்பு நிகழ்வு கொண்டாட்டம்"
    }
  ],

  // ── Complete Bilingual Translations Dictionary ─────────────
  translations: {
    en: {
      // Nav
      navHome: "Home",
      navAbout: "About",
      navEvents: "Events",
      navFacilities: "Facilities",
      navGallery: "Gallery",
      navReviews: "Reviews",
      navLocation: "Location",
      navContact: "Contact",
      navCallCTA: "Call: 8883555249",
      
      // Hero
      heroBadge: "KILAKARAI'S PREMIER WEDDING & EVENT DESTINATION",
      heroTitlePrefix: "Where Every Celebration Becomes A",
      heroTitleHighlight: "Timeless Memory",
      heroDescription: "Experience an elegant, spacious, and fully equipped event venue in Keelakarai. Designed for grand weddings, receptions, family gatherings, and community celebrations.",
      heroBtnExplore: "Explore Venue",
      heroBtnBook: "Book on WhatsApp",
      heroBtnCall: "Call Now",

      // Quick Info
      infoLocationLabel: "Prime Location",
      infoLocationVal: "Vallal Seethakathi Salai, Keelakarai",
      infoCapacityLabel: "Guest Capacity",
      infoCapacityVal: "500+ Guests Comfortably",
      infoParkingLabel: "Parking Facility",
      infoParkingVal: "Dedicated Driveway & Parking",
      infoContactLabel: "Direct Booking",
      infoContactVal: "8883555249 / 9003433443",

      // About
      aboutBadge: "ABOUT PEACE MAHAL",
      aboutTitle: "A Welcoming Venue Designed for Unforgettable Occasions",
      aboutP1: "Peace Mahal is one of Keelakarai's most distinguished wedding and event destinations, located conveniently on Vallal Seethakathi Salai behind Best Mummy Bakery. Offering an expansive, well-ventilated hall, a royal ceremonial stage, and a scenic canopy entrance, it provides an exquisite setting for your milestone celebrations.",
      aboutP2: "From traditional weddings and nikahs to elegant receptions, birthday parties, and corporate exhibitions, our facility blends traditional grandeur with modern comforts. We take pride in delivering a seamless hosting experience for families across Ramanathapuram district.",
      aboutFeat1Title: "Grand Celebrations",
      aboutFeat1Desc: "Ample seating capacity with clear stage sightlines for every attendee.",
      aboutFeat2Title: "Prime Accessibility",
      aboutFeat2Desc: "Conveniently situated right in Keelakarai with dedicated driveway access.",
      aboutFeat3Title: "Personalized Support",
      aboutFeat3Desc: "Attentive venue coordination to ensure your special day runs without worry.",
      aboutCta: "Check Availability on WhatsApp",

      // Events
      eventsBadge: "OUR VENUE CAPABILITIES",
      eventsTitle: "Perfect for Every Special Occasion",
      eventsSubtitle: "Explore how Peace Mahal accommodates diverse gatherings with style, comfort, and distinction.",
      
      // Facilities
      facBadge: "PREMIUM AMENITIES",
      facTitle: "Thoughtfully Designed Facilities",
      facSubtitle: "Everything needed to host your guests in complete comfort and dignity.",

      // Why Choose
      whyBadge: "WHY CHOOSE PEACE MAHAL",
      whyTitle: "The Preferred Event Destination in Keelakarai",
      whySubtitle: "Trusted by families for warm hospitality, prime accessibility, and dignified spaces.",
      whyCard1Title: "Spacious & Airy Interiors",
      whyCard1Desc: "High ceiling design with ample natural light, high-capacity ventilation fans, and comfortable guest circulation.",
      whyCard2Title: "Convenient Parking & Access",
      whyCard2Desc: "Located directly off Vallal Seethakathi Salai with dedicated vehicular driveway and easy guest drop-off.",
      whyCard3Title: "Decorated Ceremonial Stage",
      whyCard3Desc: "A wide elevated stage ready for beautiful floral decorations, royal thrones, and photography backdrops.",
      whyCard4Title: "Transparent & Friendly Service",
      whyCard4Desc: "Direct communication with venue management without hidden booking hassles or confusing policies.",

      // Gallery
      galleryBadge: "GENUINE VENUE PHOTOGRAPHS",
      galleryTitle: "A Glimpse into Peace Mahal",
      gallerySubtitle: "Browse genuine photos of our grand entrance canopy, decorated wedding stage, and expansive functional hall.",
      galleryFilterAll: "All Views",
      galleryFilterExterior: "Exterior & Canopy",
      galleryFilterStage: "Stage & Decor",
      galleryFilterHall: "Interior Hall",
      galleryFilterEvents: "Live Celebrations",
      gallerySlideHint: "Swipe or use arrows to view photos",

      // Testimonials
      testBadge: "GUEST EXPERIENCES",
      testTitle: "What Families Say About Peace Mahal",
      testSubtitle: "Real feedback from hosts and guests who celebrated their milestone moments with us.",
      testPlaceholderTitle: "Testimonials Coming Soon",
      testPlaceholderDesc: "We invite our recent hosts to share their valuable feedback. Contact us on WhatsApp to leave your review of Peace Mahal!",
      testCtaBtn: "Share Your Experience",

      // Location
      locBadge: "FIND PEACE MAHAL",
      locTitle: "Conveniently Located in Keelakarai",
      locSubtitle: "Easy to find and accessible for your guests traveling from within Kilakarai and surrounding regions.",
      locAddressTitle: "Our Venue Address",
      locAddressText: "12/620, Vallal Seethakathi Salai, Behind Best Mummy Bakery, Keelakarai, Ramanathapuram Dist, Tamil Nadu – 623517",
      locLandmarkText: "Landmark: Directly Behind Best Mummy Bakery",
      locHoursTitle: "Visiting & Booking Hours",
      locHoursText: "Monday – Sunday: 9:00 AM – 7:00 PM Daily",
      locQrTitle: "Scan for GPS Directions",
      locQrSubtitle: "Scan with your smartphone camera to navigate directly via Google Maps.",
      locBtnDirections: "Get Google Maps Directions",
      locBtnCall: "Call for Assistance",

      // Contact
      contactBadge: "GET IN TOUCH",
      contactTitle: "Plan Your Event at Peace Mahal",
      contactSubtitle: "Reach out to us directly via phone or WhatsApp for hall availability, rental details, and venue visits.",
      contactCardCallTitle: "Direct Phone Inquiries",
      contactCardCallDesc: "Speak directly with our venue booking team.",
      contactCardCallBtn: "Call Primary: 8883555249",
      contactCardCallAltBtn: "Call Alt: 9003433443",
      contactCardWaTitle: "Instant WhatsApp Chat",
      contactCardWaDesc: "Fastest response for dates, pricing, and hall visits.",
      contactCardWaBtn: "Chat on WhatsApp (8883555249)",
      contactCardVisitTitle: "Visit the Venue",
      contactCardVisitDesc: "Walk in between 9:00 AM – 7:00 PM to inspect the facilities in person.",
      contactCardVisitBtn: "Get Venue Directions",

      // Footer
      footerTagline: "Kilakarai's premier wedding, reception, and event venue. Providing spacious interiors, royal stages, and warm hospitality.",
      footerQuickLinks: "Quick Links",
      footerContactTitle: "Venue Contacts",
      footerCallPrimary: "Primary: +91 88835 55249",
      footerCallSecondary: "Secondary: +91 90034 33443",
      footerWhatsAppText: "WhatsApp: +91 88835 55249",
      footerAddressText: "12/620, Vallal Seethakathi Salai, Keelakarai, Tamil Nadu 623517",
      footerHoursText: "Daily 9:00 AM – 7:00 PM",
      footerRights: "Peace Mahal, Keelakarai. All rights reserved.",
      footerLangSelect: "Language / மொழி:",

      // Mobile Bottom Bar
      mobCall: "Call Now",
      mobWhatsApp: "WhatsApp",
      mobDirections: "Directions",

      // Language Modal
      langModalTitle: "Welcome to Peace Mahal",
      langModalSubtitle: "Please select your preferred language / உங்கள் விருப்ப மொழியைத் தேர்ந்தெடுக்கவும்",
      langModalEnBtn: "English",
      langModalTaBtn: "தமிழ் (Tamil)",
      langModalRemember: "You can change this anytime from the top bar"
    },

    ta: {
      // Nav
      navHome: "முகப்பு",
      navAbout: "எங்களை பற்றி",
      navEvents: "நிகழ்வுகள்",
      navFacilities: "வசதிகள்",
      navGallery: "புகைப்படங்கள்",
      navReviews: "மதிப்புரைகள்",
      navLocation: "இருப்பிடம்",
      navContact: "தொடர்பு",
      navCallCTA: "அழைக்க: 8883555249",

      // Hero
      heroBadge: "கீழக்கரையின் பிரம்மாண்ட திருமண மற்றும் நிகழ்வு அரங்கம்",
      heroTitlePrefix: "அமைதியும் கம்பீரமும் நிறைந்த உங்கள்",
      heroTitleHighlight: "மகிழ்ச்சியான தருணங்கள்",
      heroDescription: "கீழக்கரையில் திருமணங்கள், வரவேற்புகள், சுப நிகழ்ச்சிகள், கண்காட்சிகள் மற்றும் குடும்ப விழாக்களுக்கு ஏற்ற விசாலமான, அனைத்து வசதிகளும் கொண்ட பிரீமியம் அரங்கம்.",
      heroBtnExplore: "அரங்கை காணுங்கள்",
      heroBtnBook: "வாட்ஸ்அப்பில் பதிவு செய்ய",
      heroBtnCall: "உடனே அழைக்கவும்",

      // Quick Info
      infoLocationLabel: "முக்கிய அமைவிடம்",
      infoLocationVal: "வள்ளல் சீதக்காதி சாலை, கீழக்கரை",
      infoCapacityLabel: "விருந்தினர் கொள்ளளவு",
      infoCapacityVal: "500+ விருந்தினர்கள் வசதியாக",
      infoParkingLabel: "வாகன நிறுத்துமிடம்",
      infoParkingVal: "பிரத்யேக கார் வழிப்பாதை & பார்க்கிங்",
      infoContactLabel: "நேரடி முன்பதிவு",
      infoContactVal: "8883555249 / 9003433443",

      // About
      aboutBadge: "பீஸ் மஹால் பற்றி",
      aboutTitle: "மறக்க முடியாத சிறப்பு தருணங்களுக்கான கம்பீரமான அரங்கம்",
      aboutP1: "பீஸ் மஹால் கீழக்கரையில் வள்ளல் சீதக்காதி சாலையில் (பெஸ்ட் மம்மி பேக்கரி பின்புறம்) அமைந்துள்ள ஒரு பிரம்மாண்ட திருமண மற்றும் சுப நிகழ்ச்சி மண்டபமாகும். விசாலமான காற்றோட்டமான அரங்கம், ராஜரீக அலங்கார மேடை, மற்றும் வண்ண விளக்குகளால் ஜொலிக்கும் முகப்பு பந்தல் ஆகியவை உங்கள் நிகழ்வை மெருகேற்றுகின்றன.",
      aboutP2: "பாரம்பரிய நிக்காஹ், திருமணங்கள், வரவேற்புகள் முதல் பிறந்தநாள் விழாக்கள் மற்றும் சமூகக் கண்காட்சிகள் வரை அனைத்து வகையான நிகழ்வுகளுக்கும் கீழக்கரை மற்றும் ராமநாதபுரம் மாவட்ட மக்களுக்கு தலைசிறந்த சேவையை வழங்கி வருகிறோம்.",
      aboutFeat1Title: "பிரம்மாண்ட கொண்டாட்டம்",
      aboutFeat1Desc: "அனைத்து விருந்தினர்களும் மேடையை தெளிவாக காணக்கூடிய விசாலமான இருக்கை வசதி.",
      aboutFeat2Title: "எளிதான அணுகுமுறை",
      aboutFeat2Desc: "கீழக்கரையின் முக்கிய சாலையில் அமைந்துள்ளதால் எளிதாக வந்து சேரலாம்.",
      aboutFeat3Title: "நேரடி ஒருங்கிணைப்பு",
      aboutFeat3Desc: "உங்கள் விசேஷம் சிறப்பாக நடைபெற நிர்வாகத்தின் உடனடி உதவி மற்றும் வழிகாட்டல்.",
      aboutCta: "வாட்ஸ்அப்பில் தேதி மற்றும் விவரம் அறிய",

      // Events
      eventsBadge: "நிகழ்ச்சி வகைகள்",
      eventsTitle: "அனைத்து சுப நிகழ்வுகளுக்கும் ஏற்ற தளம்",
      eventsSubtitle: "பீஸ் மஹாலில் உங்கள் விருப்பப்படி நடத்தக்கூடிய பல்வேறு விழாக்கள் மற்றும் நிகழ்வுகள்.",

      // Facilities
      facBadge: "உயர்தர வசதிகள்",
      facTitle: "விருந்தினர்களுக்கான சிறப்பம்சங்கள்",
      facSubtitle: "உங்கள் நிகழ்வில் பங்கேற்கும் அனைவருக்கும் முழுமையான வசதியும் பாதுகாப்பும்.",

      // Why Choose
      whyBadge: "ஏன் பீஸ் மஹால்?",
      whyTitle: "கீழக்கரையில் பல குடும்பங்களின் முதல் தேர்வு",
      whySubtitle: "சிறந்த உபசரிப்பு, தூய்மையான சூழல் மற்றும் எளிய போக்குவரத்து வசதிக்காக நம்பப்படும் அரங்கம்.",
      whyCard1Title: "விசாலமான & காற்றோட்டமான அரங்கம்",
      whyCard1Desc: "உயர்ந்த கூரை, சிறந்த இயற்கை வெளிச்சம், சக்திவாய்ந்த காற்றாடிகள் மற்றும் சௌகரியமான இடவசதி.",
      whyCard2Title: "பாதுகாப்பான வாகன நிறுத்துமிடம்",
      whyCard2Desc: "வள்ளல் சீதக்காதி சாலையில் இருந்து நேரடியாக வாகனங்கள் உள்ளே வர பிரத்யேக பாதை வசதி.",
      whyCard3Title: "அலங்கரிக்கப்பட்ட கண்கவர் மேடை",
      whyCard3Desc: "மலர் அலங்காரங்கள், புகைப்பட பின்னணிகள் மற்றும் மணமக்கள் அமர வசதியான பிரம்மாண்ட மேடை.",
      whyCard4Title: "நேர்மையான நேரடி முன்பதிவு",
      whyCard4Desc: "எந்தவித மறைமுக கட்டணங்களும் இன்றி நிர்வாகத்துடன் நேரடியாக பேசி பதிவு செய்யும் வசதி.",

      // Gallery
      galleryBadge: "உண்மையான புகைப்படங்கள்",
      galleryTitle: "பீஸ் மஹாலின் அழகிய தோற்றம்",
      gallerySubtitle: "எங்கள் பிரம்மாண்ட நுழைவாயில் பந்தல், அலங்கார மேடை மற்றும் விசாலமான அரங்கத்தின் புகைப்படங்கள்.",
      galleryFilterAll: "அனைத்தும்",
      galleryFilterExterior: "வெளித்தோற்றம் & பந்தல்",
      galleryFilterStage: "மேடை அலங்காரம்",
      galleryFilterHall: "உள் அரங்கம்",
      galleryFilterEvents: "நிகழ்வுகள்",
      gallerySlideHint: "படங்களை நகர்த்திப் பார்க்க விரலால் இழுக்கவும் அல்லது அம்புக்குறியை அழுத்தவும்",

      // Testimonials
      testBadge: "வாடிக்கையாளர் கருத்துக்கள்",
      testTitle: "விருந்தினர்களின் அனுபவங்கள்",
      testSubtitle: "பீஸ் மஹாலில் தங்கள் குடும்ப விழாவை கொண்டாடிய விருந்தினர்களின் உண்மையான கருத்துக்கள்.",
      testPlaceholderTitle: "கருத்துக்கள் விரைவில் பதிவேற்றப்படும்",
      testPlaceholderDesc: "எங்கள் மண்டபத்தில் விழா நடத்தியவர்கள் தங்கள் அனுபவங்களைப் பகிர்ந்து கொள்ள அழைக்கிறோம். வாட்ஸ்அப் மூலம் உங்கள் கருத்தைப் பகிருங்கள்!",
      testCtaBtn: "உங்கள் அனுபவத்தைப் பகிருங்கள்",

      // Location
      locBadge: "பீஸ் மஹால் இருப்பிடம்",
      locTitle: "கீழக்கரையில் எளிதாக அடையக்கூடிய இடம்",
      locSubtitle: "கீழக்கரை மற்றும் சுற்றியுள்ள ஊர்களில் இருந்து வரும் விருந்தினர்கள் சுலபமாக வந்து சேரும் இடம்.",
      locAddressTitle: "அரங்க முகவரி",
      locAddressText: "12/620, வள்ளல் சீதக்காதி சாலை, பெஸ்ட் மம்மி பேக்கரி பின்புறம், கீழக்கரை, ராமநாதபுரம் மாவட்டம், தமிழ்நாடு – 623517",
      locLandmarkText: "அடையாளம்: பெஸ்ட் மம்மி பேக்கரி பின்புறம்",
      locHoursTitle: "பார்வையிடும் நேரம்",
      locHoursText: "திங்கள் – ஞாயிறு: காலை 9:00 முதல் இரவு 7:00 வரை",
      locQrTitle: "கூகுள் மேப்ஸ் வழி அறிய QR குறியீடு",
      locQrSubtitle: "உங்கள் ஸ்மார்ட்போனில் ஸ்கேன் செய்து கூகுள் மேப்ஸ் மூலம் எளிதாக வழிகாட்டல் பெறுங்கள்.",
      locBtnDirections: "கூகுள் மேப்ஸில் வழி பார்க்க",
      locBtnCall: "வழிகாட்டலுக்கு அழைக்க",

      // Contact
      contactBadge: "தொடர்பு கொள்ள",
      contactTitle: "பீஸ் மஹாலில் உங்கள் நிகழ்வை திட்டமிடுங்கள்",
      contactSubtitle: "தேதி முன்பதிவு, மண்டப வாடகை விவரங்கள் மற்றும் அரங்கை நேரில் பார்வையிட எங்களை தொடர்பு கொள்ளுங்கள்.",
      contactCardCallTitle: "தொலைபேசி அழைப்பு",
      contactCardCallDesc: "எங்கள் முன்பதிவு நிர்வாகத்துடன் நேரடியாக பேசவும்.",
      contactCardCallBtn: "முதன்மை எண்: 8883555249",
      contactCardCallAltBtn: "கூடுதல் எண்: 9003433443",
      contactCardWaTitle: "வாட்ஸ்அப் உடனடி தகவல்",
      contactCardWaDesc: "தேதி மற்றும் கட்டண விவரங்களை உடனுக்குடன் அறிய வாட்ஸ்அப்பில் மெசேஜ் செய்யுங்கள்.",
      contactCardWaBtn: "வாட்ஸ்அப் சாட் (8883555249)",
      contactCardVisitTitle: "நேரில் பார்வையிட",
      contactCardVisitDesc: "காலை 9:00 மணி முதல் இரவு 7:00 மணி வரை நேரில் வந்து மண்டபத்தை பார்வையிடலாம்.",
      contactCardVisitBtn: "மண்டபத்திற்கு வழி பார்க்க",

      // Footer
      footerTagline: "கீழக்கரையின் தலைசிறந்த திருமண மற்றும் சுப நிகழ்ச்சி அரங்கம். விசாலமான மண்டபம், பிரம்மாண்ட மேடை மற்றும் சிறந்த உபசரிப்பு.",
      footerQuickLinks: "முக்கிய இணைப்புகள்",
      footerContactTitle: "தொடர்பு எண்கள்",
      footerCallPrimary: "முதன்மை: +91 88835 55249",
      footerCallSecondary: "கூடுதல்: +91 90034 33443",
      footerWhatsAppText: "வாட்ஸ்அப்: +91 88835 55249",
      footerAddressText: "12/620, வள்ளல் சீதக்காதி சாலை, கீழக்கரை, தமிழ்நாடு 623517",
      footerHoursText: "தினமும் காலை 9:00 – இரவு 7:00",
      footerRights: "பீஸ் மஹால், கீழக்கரை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      footerLangSelect: "மொழி / Language:",

      // Mobile Bottom Bar
      mobCall: "அழைக்க",
      mobWhatsApp: "வாட்ஸ்அப்",
      mobDirections: "வழிகாட்டல்",

      // Language Modal
      langModalTitle: "பீஸ் மஹாலிற்கு வரவேற்கிறோம்",
      langModalSubtitle: "உங்கள் விருப்ப மொழியைத் தேர்ந்தெடுக்கவும் / Please select your preferred language",
      langModalEnBtn: "English",
      langModalTaBtn: "தமிழ் (Tamil)",
      langModalRemember: "மேலே உள்ள பட்டன் மூலம் எந்த நேரத்திலும் மொழியை மாற்றலாம்"
    }
  },

  // ── Copyright ──────────────────────────────────────────────
  copyrightYear: "2026"
};
