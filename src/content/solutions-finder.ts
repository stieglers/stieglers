export type NeedOption = {
  id: string;
  label: string;
  recommendationTitle: string;
  recommended: { name: string; href: string; type: "product" | "service" }[];
  cta: { label: string; href: string };
  summary: string;
};

export const needOptions: NeedOption[] = [
  {
    id: "cybersecurity",
    label: "I need cybersecurity",
    recommendationTitle: "You selected Cybersecurity",
    summary:
      "Strengthen security posture with assessments, secure engineering guidance and readiness capabilities.",
    recommended: [
      { name: "SyntraxSec", href: "/products/syntraxsec", type: "product" },
      { name: "Security Assessment", href: "/services/cybersecurity", type: "service" },
      { name: "Vulnerability Assessment", href: "/services/cybersecurity", type: "service" },
      { name: "Security Consulting", href: "/consultation?type=cybersecurity", type: "service" },
    ],
    cta: { label: "Talk to a Security Specialist", href: "/consultation?type=cybersecurity" },
  },
  {
    id: "business-management",
    label: "I need a business management system",
    recommendationTitle: "You selected Business Management",
    summary:
      "Build or modernize business systems that match your workflows and reporting needs.",
    recommended: [
      { name: "Software Engineering", href: "/services/software-engineering", type: "service" },
      { name: "Syntrax POS", href: "/products/pos", type: "product" },
      { name: "Systems Integration", href: "/services/systems-integration", type: "service" },
    ],
    cta: { label: "Request a Quote", href: "/quote?service=software-engineering" },
  },
  {
    id: "school-management",
    label: "I need a school management system",
    recommendationTitle: "You selected School Management",
    summary:
      "Centralize student records, academics, fees, attendance and parent communication.",
    recommended: [
      { name: "ENMS", href: "/products/enms", type: "product" },
      { name: "Education solutions", href: "/industries/education", type: "service" },
      { name: "Digital Transformation", href: "/services/digital-transformation", type: "service" },
    ],
    cta: { label: "Request an ENMS Demo", href: "/demo?product=enms" },
  },
  {
    id: "pos",
    label: "I need a POS system",
    recommendationTitle: "You selected POS",
    summary:
      "Run sales, stock, receipts and branch reporting from one retail operations platform.",
    recommended: [
      { name: "Syntrax POS", href: "/products/pos", type: "product" },
      { name: "Retail solutions", href: "/industries/retail", type: "service" },
    ],
    cta: { label: "Request a POS Demo", href: "/demo?product=pos" },
  },
  {
    id: "network",
    label: "I need network infrastructure",
    recommendationTitle: "You selected Network Infrastructure",
    summary:
      "Design network foundations for performance, segmentation and secure access.",
    recommended: [
      { name: "Network Infrastructure", href: "/services/network-infrastructure", type: "service" },
      { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", type: "service" },
      { name: "Cybersecurity", href: "/services/cybersecurity", type: "service" },
    ],
    cta: { label: "Discuss Network Architecture", href: "/consultation?type=infrastructure" },
  },
  {
    id: "cloud",
    label: "I need cloud services",
    recommendationTitle: "You selected Cloud Services",
    summary:
      "Plan secure, resilient cloud and hosting foundations for critical systems.",
    recommended: [
      { name: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", type: "service" },
      { name: "IT Consulting", href: "/services/it-consulting", type: "service" },
      { name: "Cybersecurity", href: "/services/cybersecurity", type: "service" },
    ],
    cta: { label: "Plan Cloud Work", href: "/consultation?type=infrastructure" },
  },
  {
    id: "software",
    label: "I need software development",
    recommendationTitle: "You selected Software Development",
    summary:
      "Design and build secure applications tailored to organizational workflows.",
    recommended: [
      { name: "Software Engineering", href: "/services/software-engineering", type: "service" },
      { name: "Systems Integration", href: "/services/systems-integration", type: "service" },
    ],
    cta: { label: "Discuss a Software Project", href: "/consultation?type=software" },
  },
  {
    id: "transformation",
    label: "I need digital transformation",
    recommendationTitle: "You selected Digital Transformation",
    summary:
      "Modernize manual processes and connect disconnected systems with a practical roadmap.",
    recommended: [
      { name: "Digital Transformation", href: "/services/digital-transformation", type: "service" },
      { name: "IT Consulting", href: "/services/it-consulting", type: "service" },
      { name: "Software Engineering", href: "/services/software-engineering", type: "service" },
    ],
    cta: {
      label: "Start a Transformation Conversation",
      href: "/consultation?type=digital-transformation",
    },
  },
  {
    id: "assessment",
    label: "I need security assessment",
    recommendationTitle: "You selected Security Assessment",
    summary:
      "Identify exposure, prioritize remediation and strengthen security with clear reporting.",
    recommended: [
      { name: "Cybersecurity", href: "/services/cybersecurity", type: "service" },
      { name: "SyntraxSec", href: "/products/syntraxsec", type: "product" },
      { name: "Security consultation", href: "/consultation?type=cybersecurity", type: "service" },
    ],
    cta: { label: "Talk to a Security Specialist", href: "/consultation?type=cybersecurity" },
  },
  {
    id: "consulting",
    label: "I need IT consulting",
    recommendationTitle: "You selected IT Consulting",
    summary:
      "Get clear technology advice for architecture, security, vendors and delivery decisions.",
    recommended: [
      { name: "IT Consulting", href: "/services/it-consulting", type: "service" },
      { name: "Book a consultation", href: "/consultation?type=general", type: "service" },
    ],
    cta: { label: "Book a Consultation", href: "/consultation?type=general" },
  },
];