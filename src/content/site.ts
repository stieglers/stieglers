export const siteConfig = {
  name: "Syntrax Technologies",
  shortName: "Syntrax",
  legalName: "Syntrax Technologies",
  tagline: "Secure Systems. Confident Digital Operations.",
  description:
    "Syntrax Technologies is an East African technology company that designs, builds, secures and supports digital systems for institutions and businesses.",
  url: "https://syntrax.co.tz",
  locale: "en",
  country: "Tanzania",
  region: "East Africa",
  city: "Dar es Salaam",
  email: {
    general: "info@syntrax.co.tz",
    security: "security@syntrax.co.tz",
  },
  phone: {
    display: "0712 349 117",
    e164: "+255712349117",
    whatsapp: "255712349117",
  },
  hours: "Mon–Fri: 8:00 – 18:00 EAT",
  address: {
    city: "Dar es Salaam",
    country: "Tanzania",
    region: "East Africa",
    // Street-level address not published; keep city/country only.
    display: "Dar es Salaam, Tanzania",
  },
  social: {
    // Only set verified official account URLs. Empty values stay hidden in the UI.
    linkedin: "",
    facebook: "",
    instagram: "",
    github: "",
  },
  whatsappEnabled: true,
  features: {
    teamSectionEnabled: false,
    testimonialsEnabled: false,
    caseStudiesEnabled: false,
    partnersEnabled: false,
    techStackPublic: false,
  },
  productsLive: {
    syntraxsec: "https://app.syntrax.co.tz",
    pharmacy: "https://pharmacy.syntrax.co.tz",
    pos: "https://pos.syntrax.co.tz",
    enms: "https://school.syntrax.co.tz",
  },
} as const;

export type SiteConfig = typeof siteConfig;