export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  overview: string;
  liveUrl?: string;
  audience: string[];
  capabilities: string[];
  modules: { name: string; description: string }[];
  security: string[];
  integrations: string[];
  deployment: string[];
  faq: { question: string; answer: string }[];
  cta: { label: string; href: string };
};

export const products: Product[] = [
  {
    slug: "syntraxsec",
    name: "SyntraxSec",
    tagline: "Cybersecurity training and operations readiness in one platform.",
    summary:
      "Security operations and cybersecurity capabilities designed to help organizations identify, manage and strengthen digital readiness.",
    overview:
      "SyntraxSec brings cybersecurity training, labs, assessments, events and team readiness into one platform — helping organizations build practical security capability rather than relying on one-off awareness sessions.",
    liveUrl: "https://app.syntrax.co.tz",
    audience: [
      "Security and IT teams",
      "Institutions building cyber readiness programs",
      "Organizations running internal security training",
      "Teams preparing for assessments and drills",
    ],
    capabilities: [
      "Cybersecurity training programs",
      "Hands-on labs",
      "Assessments and readiness tracking",
      "Events and team activities",
      "Centralized learning and operations support",
    ],
    modules: [
      {
        name: "Training",
        description: "Structured cybersecurity learning paths for teams building practical capability.",
      },
      {
        name: "Labs",
        description: "Hands-on environments that reinforce technical skills beyond theory.",
      },
      {
        name: "Assessments",
        description: "Evaluate readiness and identify where teams need deeper practice.",
      },
      {
        name: "Events",
        description: "Organize security events and team activities in one place.",
      },
      {
        name: "Team readiness",
        description: "Track participation and progress across security initiatives.",
      },
    ],
    security: [
      "Role-aware access for platform users",
      "Secure hosted delivery model",
      "Operational practices aligned with Syntrax security standards",
    ],
    integrations: [
      "Organizational onboarding workflows",
      "Future identity and reporting integrations as required",
    ],
    deployment: ["Hosted SaaS via Syntrax", "Organization-ready onboarding support"],
    faq: [
      {
        question: "Is SyntraxSec a monitoring SIEM?",
        answer:
          "SyntraxSec is positioned as a cybersecurity training and operations readiness platform with labs, assessments and team capability support. For security assessments and broader cybersecurity services, talk to our security team.",
      },
      {
        question: "Who is SyntraxSec for?",
        answer:
          "It is designed for organizations and teams that need structured cybersecurity training, labs and readiness activities.",
      },
    ],
    cta: { label: "Explore SyntraxSec", href: "/demo?product=syntraxsec" },
  },
  {
    slug: "enms",
    name: "ENMS",
    tagline: "Education Network Management System for modern schools.",
    summary:
      "Student records, academics, fees, attendance and parent communication for schools that need dependable operations.",
    overview:
      "ENMS helps schools manage academic and administrative operations in one system — reducing fragmented spreadsheets and improving visibility for administrators, teachers and parents.",
    liveUrl: "https://school.syntrax.co.tz",
    audience: [
      "Primary and secondary schools",
      "School administrators and academic offices",
      "Institutions modernizing student operations",
    ],
    capabilities: [
      "Student records management",
      "Academic operations support",
      "Fees and financial tracking workflows",
      "Attendance management",
      "Parent communication channels",
    ],
    modules: [
      {
        name: "Students",
        description: "Maintain structured student records and academic profiles.",
      },
      {
        name: "Academics",
        description: "Support class, assessment and academic administration workflows.",
      },
      {
        name: "Fees",
        description: "Track fee-related operations with clearer administrative control.",
      },
      {
        name: "Attendance",
        description: "Record and review attendance with less manual overhead.",
      },
      {
        name: "Parent communication",
        description: "Keep parents informed through structured communication pathways.",
      },
    ],
    security: [
      "Role-based access for school staff",
      "Protected student and institutional data handling",
      "Audit-friendly operational records",
    ],
    integrations: [
      "School administrative workflows",
      "Future payment and communication integrations as needed",
    ],
    deployment: ["Hosted SaaS", "School onboarding and training support"],
    faq: [
      {
        question: "Can ENMS replace spreadsheets for school administration?",
        answer:
          "ENMS is designed to centralize core school operations such as student records, academics, fees, attendance and parent communication.",
      },
      {
        question: "Do you help with onboarding?",
        answer:
          "Yes. We support onboarding and help schools structure the transition from fragmented tools to ENMS.",
      },
    ],
    cta: { label: "Request an ENMS Demo", href: "/demo?product=enms" },
  },
  {
    slug: "pos",
    name: "Syntrax POS",
    tagline: "Point of sale and business management for retail and service businesses.",
    summary:
      "Multi-tenant POS SaaS for sales, stock, receipts and branch reporting from one platform.",
    overview:
      "Syntrax POS helps retail and service businesses run day-to-day sales operations with clearer inventory visibility, receipts and reporting across branches.",
    liveUrl: "https://pos.syntrax.co.tz",
    audience: [
      "Retail businesses",
      "Service businesses with counter sales",
      "Multi-branch operators",
      "SMEs modernizing sales operations",
    ],
    capabilities: [
      "Point of sale transactions",
      "Stock and inventory tracking",
      "Receipts and sales records",
      "Branch reporting",
      "Multi-tenant SaaS delivery",
    ],
    modules: [
      {
        name: "Sales",
        description: "Process transactions quickly with clear sales records.",
      },
      {
        name: "Inventory",
        description: "Track stock movement and availability across operations.",
      },
      {
        name: "Receipts",
        description: "Issue and retain transaction documentation.",
      },
      {
        name: "Branches",
        description: "Operate and report across multiple business locations.",
      },
      {
        name: "Reporting",
        description: "Review sales and operational performance from one platform.",
      },
    ],
    security: [
      "Tenant isolation for SaaS customers",
      "Role-based staff access",
      "Protected business transaction records",
    ],
    integrations: [
      "Business reporting workflows",
      "Future payment and accounting integrations as required",
    ],
    deployment: ["Hosted SaaS", "Business onboarding support"],
    faq: [
      {
        question: "Is Syntrax POS suitable for multi-branch businesses?",
        answer:
          "Yes. The platform is designed for multi-tenant and multi-branch retail and service operations.",
      },
    ],
    cta: { label: "Request a POS Demo", href: "/demo?product=pos" },
  },
  {
    slug: "pharmacy",
    name: "Pharmacy Management System",
    tagline: "End-to-end pharmacy operations with inventory and dispensing control.",
    summary:
      "Inventory, dispensing, sales, reporting and multi-branch control for pharmacy operations.",
    overview:
      "The Syntrax Pharmacy Management System helps pharmacies run inventory, dispensing and sales operations with clearer control across branches and reporting needs.",
    liveUrl: "https://pharmacy.syntrax.co.tz",
    audience: [
      "Retail pharmacies",
      "Multi-branch pharmacy operators",
      "Healthcare businesses managing medication inventory",
    ],
    capabilities: [
      "Medication inventory management",
      "Dispensing workflows",
      "Sales operations",
      "Operational reporting",
      "Multi-branch control",
    ],
    modules: [
      {
        name: "Inventory",
        description: "Track medication stock and movement with operational clarity.",
      },
      {
        name: "Dispensing",
        description: "Support day-to-day dispensing workflows.",
      },
      {
        name: "Sales",
        description: "Manage pharmacy sales as part of daily operations.",
      },
      {
        name: "Reporting",
        description: "Review operational performance and stock-related insights.",
      },
      {
        name: "Branches",
        description: "Coordinate multi-branch pharmacy operations.",
      },
    ],
    security: [
      "Role-based operational access",
      "Protected inventory and transaction records",
      "Controls suited to regulated medication operations",
    ],
    integrations: [
      "Pharmacy operational workflows",
      "Future billing or supplier integrations as needed",
    ],
    deployment: ["Hosted SaaS", "Pharmacy onboarding support"],
    faq: [
      {
        question: "Does the pharmacy system support multiple branches?",
        answer:
          "Yes. Multi-branch control is part of the product’s operational design.",
      },
    ],
    cta: { label: "Request a Pharmacy Demo", href: "/demo?product=pharmacy" },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}