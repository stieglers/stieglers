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
        label: "What we solve",
        href: "/solutions",
        description: "Business outcomes across security, systems and infrastructure.",
      },
      {
        label: "Solutions finder",
        href: "/solutions#finder",
        description: "Tell us what you need and get a tailored recommendation.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Software Engineering", href: "/services/software-engineering" },
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "Network Infrastructure", href: "/services/network-infrastructure" },
      { label: "Systems Integration", href: "/services/systems-integration" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "SyntraxSec",
        href: "/products/syntraxsec",
        description: "Cybersecurity training and operations platform.",
      },
      {
        label: "ENMS",
        href: "/products/enms",
        description: "Education Network Management System for schools.",
      },
      {
        label: "POS",
        href: "/products/pos",
        description: "Point of sale and business management.",
      },
      {
        label: "Pharmacy PMS",
        href: "/products/pharmacy",
        description: "Pharmacy operations and inventory management.",
      },
    ],
  },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Education", href: "/industries/education" },
      { label: "Government", href: "/industries/government" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Insights", href: "/insights" },
      { label: "Resources", href: "/resources" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Security & Trust", href: "/security" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const mobileNavSections = [
  {
    label: "Products",
    items: [
      { label: "All products", href: "/products" },
      { label: "SyntraxSec", href: "/products/syntraxsec" },
      { label: "ENMS", href: "/products/enms" },
      { label: "POS", href: "/products/pos" },
      { label: "Pharmacy PMS", href: "/products/pharmacy" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "All services", href: "/services" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Software Engineering", href: "/services/software-engineering" },
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "Network Infrastructure", href: "/services/network-infrastructure" },
      { label: "Systems Integration", href: "/services/systems-integration" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "All industries", href: "/industries" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Education", href: "/industries/education" },
      { label: "Government", href: "/industries/government" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Insights", href: "/insights" },
      { label: "Resources hub", href: "/resources" },
      { label: "Support center", href: "/support" },
      { label: "Security & Trust", href: "/security" },
      { label: "System status", href: "/status" },
      { label: "Careers", href: "/careers" },
      { label: "Client portal", href: "/client-portal" },
    ],
  },
] as const;

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Client portal", href: "/client-portal" },
  ],
  solutions: [
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Enterprise Systems", href: "/services/software-engineering" },
    { label: "Digital Transformation", href: "/services/digital-transformation" },
    { label: "Infrastructure", href: "/services/cloud-infrastructure" },
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
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Resources", href: "/resources" },
    { label: "Documentation", href: "/resources#documentation" },
    { label: "Support", href: "/support" },
    { label: "Status", href: "/status" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
    { label: "Accessibility", href: "/accessibility" },
  ],
} as const;