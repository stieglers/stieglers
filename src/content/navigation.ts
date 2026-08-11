export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Security engineered into systems, identity and operations.",
      },
      {
        label: "Enterprise Systems",
        href: "/services/software-engineering",
        description: "Business applications built around real workflows.",
      },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
        description: "Modernize processes and connect fragmented systems.",
      },
      {
        label: "Infrastructure",
        href: "/services/cloud-infrastructure",
        description: "Secure, resilient foundations for critical operations.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity",
        description: "Assessments, hardening and security readiness.",
      },
      {
        label: "Software Engineering",
        href: "/services/software-engineering",
        description: "Custom platforms with security designed in.",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/services/cloud-infrastructure",
        description: "Hosting, resilience and operational ownership.",
      },
      {
        label: "Network Architecture",
        href: "/services/network-infrastructure",
        description: "Segmentation, access and dependable connectivity.",
      },
      {
        label: "Systems Integration",
        href: "/services/systems-integration",
        description: "Trusted data movement across platforms.",
      },
      {
        label: "IT Consulting",
        href: "/services/it-consulting",
        description: "Clear decisions for architecture and delivery.",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "SyntraxSec",
        href: "/products/syntraxsec",
        description: "Cybersecurity training and operations readiness.",
      },
      {
        label: "ENMS",
        href: "/products/enms",
        description: "School management for academics, fees and records.",
      },
      {
        label: "POS",
        href: "/products/pos",
        description: "Point of sale and multi-branch retail operations.",
      },
      {
        label: "Pharmacy PMS",
        href: "/products/pharmacy",
        description: "Inventory, dispensing and pharmacy control.",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Financial Services",
        href: "/industries/financial-services",
        description: "Controls, auditability and resilient channels.",
      },
      {
        label: "Government",
        href: "/industries/government",
        description: "Secure systems for institutional delivery.",
      },
      {
        label: "Education",
        href: "/industries/education",
        description: "Student operations and campus technology.",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        description: "Pharmacy and operational systems with care for data.",
      },
      {
        label: "Retail",
        href: "/industries/retail",
        description: "Sales, stock and branch visibility.",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        description: "Reliable systems and segmented networks.",
      },
    ],
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Company",
    href: "/about",
    children: [
      {
        label: "About",
        href: "/about",
        description: "Mission, approach and regional focus.",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Build serious technology with Syntrax.",
      },
      {
        label: "Trust Center",
        href: "/security",
        description: "Security philosophy and disclosure.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Start a conversation with our team.",
      },
    ],
  },
];

export const mobileNavSections = [
  {
    label: "Solutions",
    items: primaryNav[0].children!.map((item) => ({
      label: item.label,
      href: item.href,
    })),
  },
  {
    label: "Services",
    items: [
      { label: "All services", href: "/services" },
      ...primaryNav[1].children!.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    ],
  },
  {
    label: "Products",
    items: [
      { label: "All products", href: "/products" },
      ...primaryNav[2].children!.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "All industries", href: "/industries" },
      ...primaryNav[3].children!.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Trust Center", href: "/security" },
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Client Portal", href: "/client-portal" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const footerNav = {
  solutions: [
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Enterprise Systems", href: "/services/software-engineering" },
    { label: "Digital Transformation", href: "/services/digital-transformation" },
    { label: "Infrastructure", href: "/services/cloud-infrastructure" },
  ],
  services: [
    { label: "Software Engineering", href: "/services/software-engineering" },
    { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
    { label: "Network Architecture", href: "/services/network-infrastructure" },
    { label: "Systems Integration", href: "/services/systems-integration" },
    { label: "IT Consulting", href: "/services/it-consulting" },
  ],
  products: [
    { label: "SyntraxSec", href: "/products/syntraxsec" },
    { label: "ENMS", href: "/products/enms" },
    { label: "POS", href: "/products/pos" },
    { label: "Pharmacy PMS", href: "/products/pharmacy" },
  ],
  industries: [
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Education", href: "/industries/education" },
    { label: "Government", href: "/industries/government" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Retail", href: "/industries/retail" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Resources", href: "/resources" },
    { label: "Support", href: "/support" },
    { label: "Status", href: "/status" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Client Portal", href: "/client-portal" },
  ],
  security: [
    { label: "Trust Center", href: "/security" },
    { label: "Disclosure", href: "/security/disclosure" },
    { label: "Advisories", href: "/security/advisories" },
    { label: "Privacy", href: "/privacy" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;