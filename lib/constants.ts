export const COMPANY = {
  name: "R&R Ambulance Service",
  tagline: "Rapid Response. Reliable Care.",
  phone: "+234 905 319 9812",
  phoneTel: "tel:+2349053199812",
  whatsapp: "2349053199812",
  email: "info@rnrambulance.ng",
  address: "265 Independence Ave, Garki, Abuja 900103, FCT",
  addressMapQuery: "265+Independence+Ave+Garki+Abuja+Nigeria",
  foundedYear: 2014,
  avgResponseTime: "5–10 minutes",
  livesSaved: 2400,
  paramedics: 50,
  vehicles: 15,
};

export const COVERAGE_ZONES = [
  "Maitama",
  "Wuse",
  "Wuse II",
  "Garki",
  "Gwarinpa",
  "Jabi",
  "Asokoro",
  "Kubwa",
  "Lugbe",
  "Central Area",
  "Karu",
  "Nyanya",
  "Dutse",
  "Dawaki",
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "emergency",
    title: "Emergency Response",
    shortDesc: "Immediate dispatch for life-threatening emergencies across Abuja FCT.",
    icon: "Siren",
    description:
      "Our Advanced and Basic Life Support units are GPS-dispatched 24/7. Staffed by certified paramedics with full resuscitation capability.",
    inclusions: [
      "ALS & BLS equipped ambulances",
      "GPS-tracked real-time dispatch",
      "Certified paramedic crew",
      "24/7 availability — 365 days",
    ],
    equipment: ["Defibrillator", "Oxygen Supply", "IV Kit", "ECG Monitor"],
    image: "/images/services/emergency.jpg",
  },
  {
    id: "transfer",
    title: "Patient Transfer",
    shortDesc: "Safe hospital-to-hospital transport with ICU-grade equipment.",
    icon: "ArrowRightLeft",
    description:
      "We provide seamless inter-facility transfers with ventilator-capable units. Continuous monitoring throughout the journey.",
    inclusions: [
      "ICU-grade transport capability",
      "Ventilator-equipped units",
      "Continuous patient monitoring",
      "Coordinated with receiving hospital",
    ],
    equipment: ["Ventilator", "Pulse Oximeter", "Stretcher", "Spinal Board"],
    image: "/images/services/transfer.jpg",
  },
  {
    id: "event",
    title: "Event Medical Standby",
    shortDesc: "Dedicated medical cover for corporate events, concerts and weddings.",
    icon: "Users",
    description:
      "Our event medical teams provide on-site first aid, triage, and emergency response for gatherings of all sizes across the FCT.",
    inclusions: [
      "On-site paramedic team",
      "First aid station setup",
      "Emergency evacuation plan",
      "Full event duration coverage",
    ],
    equipment: ["First Aid Kits", "Stretcher", "Oxygen Supply", "Defibrillator"],
    image: "/images/services/event.jpg",
  },
  {
    id: "air",
    title: "Air Ambulance Coordination",
    shortDesc: "Medical flight arrangements and ground-to-air handoff for critical cases.",
    icon: "Plane",
    description:
      "We coordinate air ambulance logistics — from ground transport to the airstrip to arranging specialist medical flights for critical patients.",
    inclusions: [
      "Medical flight arrangement",
      "Ground-to-air patient handoff",
      "Flight medical escort",
      "International transfer coordination",
    ],
    equipment: ["Portable Ventilator", "IV Kit", "ECG Monitor", "Oxygen"],
    image: "/images/services/air.jpg",
  },
  {
    id: "home",
    title: "Home Visit & Medical Escort",
    shortDesc: "Doctor-accompanied transport for high-risk or elderly patients.",
    icon: "Home",
    description:
      "For patients requiring supervised transport, our medical escort service provides a qualified doctor or paramedic throughout the journey.",
    inclusions: [
      "Doctor or paramedic escort",
      "Door-to-door service",
      "Medication administration en route",
      "Post-transfer handover report",
    ],
    equipment: ["Medication Kit", "Pulse Oximeter", "IV Kit", "Oxygen"],
    image: "/images/services/home.jpg",
  },
  {
    id: "neonatal",
    title: "Neonatal & Pediatric Transport",
    shortDesc: "Incubator-equipped transport with specialist paramedics for newborns and children.",
    icon: "Baby",
    description:
      "Our neonatal transport units are equipped with transport incubators and staffed by paramedics trained in pediatric emergency care.",
    inclusions: [
      "Transport incubator on board",
      "Neonatal-trained paramedics",
      "Temperature & O₂ monitoring",
      "NICU-to-NICU coordination",
    ],
    equipment: ["Transport Incubator", "Neonatal O₂", "IV Kit", "Pulse Oximeter"],
    image: "/images/services/neonatal.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The ambulance arrived in under 8 minutes. The paramedics were calm, professional, and had my husband stabilised before we reached the hospital.",
    name: "Amina I.",
    area: "Maitama",
    rating: 5,
  },
  {
    quote:
      "I panicked when my father collapsed. R&R were on-site before I finished the call. I genuinely believe they saved his life.",
    name: "Emeka O.",
    area: "Wuse II",
    rating: 5,
  },
  {
    quote:
      "We used R&R for our corporate conference in Garki. Their medical standby team was exceptional — discreet, professional, and fully prepared.",
    name: "Fatima B.",
    area: "Garki",
    rating: 5,
  },
  {
    quote:
      "The hospital-to-hospital transfer for my mother was seamless. Equipment was top-notch and the paramedic kept us informed throughout.",
    name: "Dr. Chukwu M.",
    area: "Asokoro",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How quickly can an ambulance reach me in Abuja?",
    a: "Our average response time is 5–10 minutes within central Abuja. We have pre-positioned units across Maitama, Wuse, Garki, Gwarinpa, and Asokoro to minimise travel time.",
  },
  {
    q: "What areas do you cover in the FCT?",
    a: "We cover all major areas of Abuja FCT including Maitama, Wuse, Wuse II, Garki, Gwarinpa, Jabi, Asokoro, Kubwa, Lugbe, Central Area, Karu, Nyanya, Dutse, and Dawaki. Call us if you're unsure about your location.",
  },
  {
    q: "How much does it cost to call an ambulance?",
    a: "Pricing depends on the type of service and distance. Emergency response is prioritised regardless of payment — we will never delay a life-saving response over billing. Contact us for a quote on non-emergency services.",
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes, we work with several Nigerian HMO providers. Contact us with your insurance details and we'll confirm coverage before dispatch for non-emergency calls.",
  },
  {
    q: "What equipment is on board your ambulances?",
    a: "All our units carry defibrillators, oxygen supply, IV infusion kits, ECG monitors, pulse oximeters, spinal boards, and stretchers. ALS units also carry ventilators and advanced airway management equipment.",
  },
  {
    q: "Can I pre-book an ambulance for a scheduled transfer?",
    a: "Yes. Use our Book Ambulance page or call us directly to schedule a patient transfer, home visit, or event standby. We recommend booking at least 4 hours in advance for non-emergency services.",
  },
  {
    q: "Do you provide services for events and large gatherings?",
    a: "Yes. Our Event Medical Standby service provides a dedicated team for corporate events, concerts, weddings, sports events, and more. Packages are tailored to the size and risk profile of your event.",
  },
  {
    q: "How do I track my ambulance after booking?",
    a: "After booking, our dispatcher will call you within 60 seconds to confirm the crew and provide an ETA. Full GPS tracking integration is coming soon. In the meantime, you can always call our emergency line for live updates.",
  },
];

export const TEAM = [
  {
    name: "Dr. Adebayo Okafor",
    role: "Chief Medical Officer",
    bio: "15 years emergency medicine, ATLS certified.",
    credential: "MBBS, FWACP",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Paramedic Chisom Eze",
    role: "Lead Paramedic (ALS)",
    bio: "Advanced Life Support specialist, 10 years field experience.",
    credential: "ALS Certified",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Ngozi Adeyemi",
    role: "Operations Director",
    bio: "Oversees fleet deployment and dispatch coordination.",
    credential: "BSc Operations Mgmt",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Musa Ibrahim",
    role: "Fleet Manager",
    bio: "Manages 15-vehicle fleet, maintenance, and readiness.",
    credential: "Certified Fleet Mgr",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Amaka Obi",
    role: "Senior Dispatcher",
    bio: "Coordinates real-time dispatch across all FCT zones.",
    credential: "EMD Certified",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Dr. Folake Bello",
    role: "Training & Compliance Lead",
    bio: "Ensures all staff meet national and international standards.",
    credential: "MBBS, PHTLS",
    image: "/images/team/placeholder.jpg",
  },
];

export const CERTIFICATIONS = [
  { name: "NEMA Registered", body: "National Emergency Management Agency", year: "2019", icon: "ShieldCheck" },
  { name: "FRSC Certified", body: "Federal Road Safety Corps", year: "2016", icon: "Award" },
  { name: "ISO 9001:2015", body: "Quality Management System", year: "2021", icon: "BadgeCheck" },
  { name: "NMA Partner", body: "Nigerian Medical Association", year: "2018", icon: "Heart" },
  { name: "FMoH Approved", body: "Federal Ministry of Health", year: "2019", icon: "Building2" },
  { name: "FCT DHSS", body: "FCT Dept. of Health & Human Services", year: "2020", icon: "Stethoscope" },
];

export const MILESTONES = [
  { year: "2014", event: "Founded in Garki, Abuja" },
  { year: "2016", event: "Fleet expanded to 10 vehicles" },
  { year: "2019", event: "NEMA certification achieved" },
  { year: "2021", event: "Air ambulance coordination launched" },
  { year: "2025", event: "2,400+ lives saved milestone" },
];

export const EQUIPMENT = [
  { name: "Defibrillator", icon: "Zap" },
  { name: "Ventilator", icon: "Wind" },
  { name: "Spinal Board", icon: "AlignCenter" },
  { name: "Oxygen Supply", icon: "Droplets" },
  { name: "IV Infusion Kit", icon: "Pipette" },
  { name: "Pulse Oximeter", icon: "Activity" },
  { name: "ECG Monitor", icon: "HeartPulse" },
  { name: "Stretcher", icon: "BedDouble" },
];
