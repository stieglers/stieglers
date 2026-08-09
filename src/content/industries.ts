export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  solutions: string[];
  products: string[];
  security: string[];
  opportunities: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Technology and security support for banks, microfinance and fintech operators that need auditability, access control and resilient digital channels.",
    challenges: [
      "Access control and privileged account discipline",
      "Audit trails and operational accountability",
      "Secure customer-facing channels",
      "Resilience of critical transaction systems",
      "Regulatory and institutional expectations",
    ],
    solutions: [
      "Cybersecurity assessments and hardening guidance",
      "Secure software engineering for operational platforms",
      "Infrastructure and network resilience design",
      "Systems integration across business platforms",
      "Technology advisory for leadership teams",
    ],
    products: ["SyntraxSec"],
    security: [
      "Identity and access boundaries",
      "Monitoring readiness",
      "Secure development practices",
      "Incident response planning support",
    ],
    opportunities: [
      "Modernize operational portals with stronger controls",
      "Improve visibility across digital risk",
      "Reduce dependence on fragile manual controls",
    ],
  },
  {
    slug: "education",
    name: "Education",
    summary:
      "Digital systems for schools and education institutions that need reliable student operations, communication and secure data handling.",
    challenges: [
      "Student management across fragmented tools",
      "Fee tracking and administrative overhead",
      "Parent and guardian communication",
      "Academic records integrity",
      "Infrastructure reliability on campus",
    ],
    solutions: [
      "ENMS school management platform",
      "Campus network and infrastructure support",
      "Cybersecurity readiness for education environments",
      "Digital transformation of administrative workflows",
    ],
    products: ["ENMS", "SyntraxSec"],
    security: [
      "Role-based access for staff",
      "Protection of student records",
      "Secure communication pathways",
    ],
    opportunities: [
      "Replace spreadsheet-driven school administration",
      "Improve academic and fee visibility",
      "Strengthen institutional cybersecurity awareness",
    ],
  },
  {
    slug: "government",
    name: "Government & Institutions",
    summary:
      "Technology delivery for public institutions and organizations that require documentation, transparency and dependable systems.",
    challenges: [
      "Procurement and milestone clarity",
      "Secure handling of institutional data",
      "Legacy systems that are hard to modernize",
      "Need for accessible, documented handover",
      "Operational continuity requirements",
    ],
    solutions: [
      "Secure custom software and portals",
      "Infrastructure and network modernization",
      "Cybersecurity assessments",
      "Systems integration and process digitization",
      "Advisory and delivery governance",
    ],
    products: ["SyntraxSec"],
    security: [
      "Access control and auditability",
      "Secure development and deployment",
      "Infrastructure hardening guidance",
    ],
    opportunities: [
      "Digitize high-friction public service workflows",
      "Improve institutional reporting and control",
      "Build sustainable internal technology ownership",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    summary:
      "Sales, inventory and multi-branch operations support for retailers modernizing day-to-day business systems.",
    challenges: [
      "Fragmented sales and stock tracking",
      "Limited branch visibility",
      "Manual reconciliation overhead",
      "Need for faster checkout and reporting",
      "Growing digital risk as operations move online",
    ],
    solutions: [
      "Syntrax POS for sales and inventory operations",
      "Business systems integration",
      "Secure infrastructure for retail operations",
      "Digital transformation of store workflows",
    ],
    products: ["POS", "SyntraxSec"],
    security: [
      "Protected transaction records",
      "Role-based staff access",
      "Hardened operational infrastructure",
    ],
    opportunities: [
      "Unify branch reporting",
      "Reduce stock blind spots",
      "Create cleaner operational data for growth decisions",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Technology support for healthcare and pharmacy operations where availability, confidentiality and operational control matter.",
    challenges: [
      "Medication inventory visibility",
      "Dispensing and sales control",
      "Sensitive operational data handling",
      "Multi-branch coordination",
      "Systems that must remain available",
    ],
    solutions: [
      "Pharmacy Management System",
      "Secure software engineering",
      "Cybersecurity and access control guidance",
      "Infrastructure resilience planning",
    ],
    products: ["Pharmacy PMS", "SyntraxSec"],
    security: [
      "Confidentiality-minded system design",
      "Role-based operational access",
      "Monitoring and continuity considerations",
    ],
    opportunities: [
      "Modernize pharmacy operations",
      "Improve stock and dispensing control",
      "Strengthen digital security posture",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Infrastructure, integration and security support for manufacturing environments that depend on reliable systems and connectivity.",
    challenges: [
      "Operational systems that must stay available",
      "Network segmentation between business and production environments",
      "Limited visibility across tools and plants",
      "Integration between operations and business systems",
      "Growing cyber risk to operational technology adjacency",
    ],
    solutions: [
      "Network and infrastructure architecture",
      "Systems integration",
      "Cybersecurity assessments",
      "Custom operational software where needed",
    ],
    products: ["SyntraxSec"],
    security: [
      "Segmentation and access control",
      "Hardening guidance",
      "Monitoring readiness",
    ],
    opportunities: [
      "Improve reliability of critical digital operations",
      "Connect production-adjacent systems with better control",
      "Reduce unmanaged technology risk",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}