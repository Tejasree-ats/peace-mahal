/**
 * ============================================================
 * PEACE MAHAL — SITE CONFIGURATION
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
  // Verified phone numbers for Peace Mahal
  phone: "9500850116",              // Primary contact
  phoneSecondary: "9942658410",     // Secondary contact
  whatsapp: "919500850116",         // WhatsApp international format (without +)
  email: "",                        // Configurable: keep empty until real email is provided

  // ── Business Hours ─────────────────────────────────────────
  businessHours: "Monday – Sunday: 9:00 AM – 7:00 PM",
  businessHoursShort: "9:00 AM – 7:00 PM Daily",

  // ── Google Maps ────────────────────────────────────────────
  googleMapsSearchQuery: "Peace Mahal, 12/620 Vallal Seethakathi Salai, Behind Best Mummy Bakery, Keelakarai, Tamil Nadu 623517",
  googleMapsDirectionsURL: "https://www.google.com/maps/dir/?api=1&destination=Peace+Mahal,+12/620+Vallal+Seethakathi+Salai,+Behind+Best+Mummy+Bakery,+Keelakarai,+Tamil+Nadu+623517",
  googleMapsEmbedURL: "https://www.google.com/maps?q=Peace+Mahal+12%2F620+Vallal+Seethakathi+Salai+Behind+Best+Mummy+Bakery+Keelakarai+Tamil+Nadu+623517&output=embed",

  // ── WhatsApp Message Templates ─────────────────────────────
  whatsappDefaultMessage: "Hello Peace Mahal, I would like to enquire about booking the hall. Please share the availability and booking details.",

  // Dynamic message generator for enquiry forms
  getWhatsAppEnquiryMessage: function(eventType, date, guests, name) {
    eventType = eventType || "an event";
    var greeting = name ? `Hello Peace Mahal, I am ${name}.` : "Hello Peace Mahal,";
    var dateStr = date ? ` on ${date}` : "";
    var guestStr = guests ? ` for approximately ${guests} guests` : "";
    return `${greeting} I would like to enquire about ${eventType}${dateStr}${guestStr}. Please share the availability and booking details.`;
  },

  // ── Social Media ───────────────────────────────────────────
  // Only verified accounts. Keep empty until official accounts exist.
  socialMedia: {
    facebook: "",
    instagram: "",
    youtube: "",
    twitter: ""
  },

  // ── Facilities ─────────────────────────────────────────────
  facilities: [
    { name: "Spacious Function Hall", icon: "🏛️", description: "Expansive hall designed for weddings, receptions and grand family gatherings.", enabled: true },
    { name: "Decorated Stage",       icon: "🎭", description: "Elevated, beautifully styled ceremonial stage with backdrop illumination.", enabled: true },
    { name: "Grand Entrance & Canopy", icon: "✨", description: "Impressive entrance gateway with dedicated driveway and festive lighting canopy.", enabled: true },
    { name: "Dining Facility",       icon: "🍽️", description: "Dedicated dining space to serve guests comfortably during events.", enabled: true },
    { name: "Parking Area",          icon: "🅿️", description: "Convenient vehicle parking and easy access directly from the main road.", enabled: true },
    { name: "Ventilation & Cooling", icon: "❄️", description: "High-capacity air ventilation, ceiling fans and cooling units.", enabled: true },
    { name: "Dressing Rooms",        icon: "👗", description: "Comfortable private rooms for bride and groom preparations.", enabled: true },
    { name: "Guest Amenities",       icon: "🚻", description: "Well-maintained restrooms and essential facilities for visitors.", enabled: true }
  ],

  // ── Event Types ────────────────────────────────────────────
  eventTypes: [
    {
      name: "Weddings",
      description: "A dedicated, welcoming venue for memorable wedding celebrations.",
      icon: "💒"
    },
    {
      name: "Wedding Receptions",
      description: "A warm and spacious setting to celebrate with family and guests.",
      icon: "💍"
    },
    {
      name: "Engagements",
      description: "A suitable setting for engagement and pre-wedding celebrations.",
      icon: "💝"
    },
    {
      name: "Nikah & Family Functions",
      description: "A respected venue for important family and community occasions.",
      icon: "🌙"
    },
    {
      name: "Birthday & Anniversary Celebrations",
      description: "Celebrate milestones with loved ones in comfort.",
      icon: "🎂"
    },
    {
      name: "Community & Social Events",
      description: "Suitable for gatherings and organized social occasions.",
      icon: "🤝"
    }
  ],

  // ── Genuine Peace Mahal Photographs ────────────────────────
  galleryImages: [
    {
      src: "images/peace-mahal-night-entrance.jpg",
      alt: "Peace Mahal illuminated grand entrance canopy in Kilakarai",
      category: "exterior",
      caption: "Peace Mahal — Grand Entrance & Festive Light Canopy"
    },
    {
      src: "images/peace-mahal-exterior.jpg",
      alt: "Peace Mahal venue exterior and driveway behind Best Mummy Bakery",
      category: "exterior",
      caption: "Peace Mahal — Exterior View & Dedicated Driveway"
    },
    {
      src: "images/peace-mahal-stage.jpg",
      alt: "Peace Mahal decorated wedding stage with floral backdrop and royal couch",
      category: "stage",
      caption: "Peace Mahal — Decorated Wedding & Reception Stage"
    },
    {
      src: "images/peace-mahal-interior.jpg",
      alt: "Peace Mahal spacious functional hall interior seating view in Keelakarai",
      category: "hall",
      caption: "Peace Mahal — Main Hall Seating & Stage View"
    },
    {
      src: "images/peace-mahal-event.jpg",
      alt: "Peace Mahal live event celebration with guests in Kilakarai",
      category: "events",
      caption: "Peace Mahal — Event Celebration in Progress"
    }
  ],

  // ── Copyright ──────────────────────────────────────────────
  copyrightYear: "2026"
};
