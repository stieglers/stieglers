export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  overview: string;
  problems: string[];
  capabilities: string[];
  approach: string[];
  architecture: string[];
  benefits: string[];
  industries: string[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
  cta: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortName: "Security",
    tagline: "Security engineered into the systems that power your organization.",
    summary:
      "Protect systems, applications, infrastructure and digital operations against modern security threats.",
    overview:
      "Syntrax helps organizations strengthen security posture through assessments, secure engineering, monitoring readiness and practical remediation guidance. We focus on clear findings, prioritized action and security that supports business continuity.",
    problems: [
      "Unknown exposure across networks, applications and cloud assets",
      "Inconsistent access control and privileged account hygiene",
      "Limited visibility into security events and incident readiness",
      "Compliance and audit pressure without an actionable roadmap",
      "Security treated as a late-stage checklist instead of engineering",
    ],
    capabilities: [
      "Vulnerability assessment and penetration testing",
      "Security architecture reviews",
      "Application and API security assessments",
      "Network and infrastructure hardening guidance",
      "Security monitoring readiness and SIEM-oriented practices",
      "Security awareness and team readiness via SyntraxSec",
      "Incident response planning support",
      "Remediation prioritization and executive reporting",
    ],
    approach: [
      "Discover: map assets, trust boundaries and critical business processes",
      "Assess: evaluate exposure, controls and operational readiness",
      "Prioritize: focus on risk that matters to operations and data",
      "Harden: guide remediation with clear ownership and sequencing",
      "Validate: re-test and confirm meaningful risk reduction",
      "Sustain: establish monitoring, routines and security culture",
    ],
    architecture: [
      "Identity and access boundaries",
      "Application and API protection",
      "Data protection controls",
      "Infrastructure segmentation",
      "Monitoring and alerting pathways",
      "Incident response workflows",
    ],
    benefits: [
      "Clear, executive-ready security findings",
      "Actionable remediation paths for IT and engineering teams",
      "Security aligned to business operations, not theatre",
      "Stronger readiness for audits and institutional expectations",
    ],
    industries: [
      "Financial Services",
      "Education",
      "Government & Institutions",
      "Healthcare",
      "Retail",
    ],
    deliverables: [
      "Assessment scope and methodology summary",
      "Findings report with severity and business context",
      "Prioritized remediation roadmap",
      "Technical evidence package for engineering teams",
      "Optional retest and validation report",
    ],
    faq: [
      {
        question: "Do you offer penetration testing?",
        answer:
          "Yes. We provide vulnerability assessments and penetration testing engagements with clear reporting and remediation guidance.",
      },
      {
        question: "Can Syntrax help after an assessment?",
        answer:
          "Yes. We help teams prioritize fixes, sequence remediation and, where needed, support secure engineering and monitoring readiness.",
      },
      {
        question: "Is SyntraxSec part of your security offering?",
        answer:
          "SyntraxSec supports cybersecurity training, labs, assessments and team readiness. It complements our security services for organizations building lasting capability.",
      },
    ],
    cta: { label: "Talk to a Security Specialist", href: "/consultation?type=cybersecurity" },
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    shortName: "Engineering",
    tagline: "Reliable business applications designed around real workflows.",
    summary:
      "Design and develop enterprise software tailored to organizational processes, integrations and long-term maintainability.",
    overview:
      "We build secure, maintainable software for institutions and businesses — from operational platforms to custom systems that replace fragmented tools and manual processes.",
    problems: [
      "Manual processes that slow operations and create errors",
      "Disconnected tools that cannot share trusted data",
      "Legacy systems that are difficult to extend securely",
      "Products that look finished but fail under real usage",
      "Delivery without documentation, ownership or handover clarity",
    ],
    capabilities: [
      "Custom web and business application development",
      "Enterprise workflow systems",
      "API design and backend services",
      "Secure authentication and role-based access",
      "Data modeling and reporting",
      "Product modernization and rebuilds",
      "Quality assurance and release discipline",
      "Documentation and knowledge transfer",
    ],
    approach: [
      "Discover operational requirements and constraints",
      "Design information architecture and user journeys",
      "Build iteratively with security and review checkpoints",
      "Integrate with existing systems where needed",
      "Deploy with operational readiness",
      "Support evolution through clear ownership models",
    ],
    architecture: [
      "Presentation layer and role-aware interfaces",
      "Application services and domain logic",
      "APIs and integration contracts",
      "Data persistence and auditability",
      "Identity, authorization and logging",
    ],
    benefits: [
      "Software aligned to how the organization actually works",
      "Maintainable architecture for long-term ownership",
      "Security and access control designed in from the start",
      "Clear delivery milestones and documentation",
    ],
    industries: ["Education", "Retail", "Healthcare", "Financial Services", "Professional Services"],
    deliverables: [
      "Product/requirements definition",
      "Architecture and delivery plan",
      "Working software increments",
      "Admin and user documentation",
      "Deployment and support handover",
    ],
    faq: [
      {
        question: "Do you build custom systems or only products?",
        answer:
          "Both. We offer Syntrax products such as ENMS, POS and SyntraxSec, and we also engineer custom systems when your workflows require a tailored platform.",
      },
      {
        question: "How do you handle security in software delivery?",
        answer:
          "Access control, validation, logging and secure deployment practices are part of delivery — not an afterthought at the end.",
      },
    ],
    cta: { label: "Discuss a Software Project", href: "/consultation?type=software" },
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    shortName: "Infrastructure",
    tagline: "Secure, scalable infrastructure for systems that must stay available.",
    summary:
      "Design secure, resilient infrastructure and cloud foundations that support growth without unnecessary complexity.",
    overview:
      "We help organizations design and modernize infrastructure — from network and hosting foundations to cloud readiness — with security, observability and operational ownership in mind.",
    problems: [
      "Fragile environments that are difficult to recover",
      "Unclear ownership of hosting, backups and access",
      "Growth without a scalable infrastructure plan",
      "Security gaps in network and server configurations",
      "Migrations that disrupt operations",
    ],
    capabilities: [
      "Infrastructure assessment and design",
      "Cloud readiness and migration planning",
      "Secure hosting architecture",
      "Backup and recovery planning",
      "Monitoring and operational baselines",
      "Identity-aware access for infrastructure",
      "Hardening guidance for critical systems",
    ],
    approach: [
      "Assess current environment and critical services",
      "Define target architecture and resilience goals",
      "Sequence changes to reduce operational risk",
      "Implement foundations with clear ownership",
      "Validate recovery and monitoring readiness",
    ],
    architecture: [
      "Compute and application hosting layers",
      "Network segmentation and perimeter controls",
      "Identity and privileged access",
      "Backup, recovery and continuity paths",
      "Observability and alerting",
    ],
    benefits: [
      "Infrastructure that supports business continuity",
      "Clearer ownership and operational routines",
      "Security controls that match risk",
      "A path to scale without redesigning from scratch",
    ],
    industries: ["Financial Services", "Education", "Government", "Healthcare", "Manufacturing"],
    deliverables: [
      "Current-state assessment",
      "Target architecture recommendations",
      "Implementation roadmap",
      "Hardening and operations checklist",
      "Handover documentation",
    ],
    faq: [
      {
        question: "Do you support both on-premise and cloud environments?",
        answer:
          "Yes. We design for the environment that fits your constraints — on-premise, cloud, or hybrid — with security and continuity as first principles.",
      },
    ],
    cta: { label: "Plan Infrastructure Work", href: "/consultation?type=infrastructure" },
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    shortName: "Transformation",
    tagline: "Modernize processes and connect the systems your organization depends on.",
    summary:
      "Replace fragmented tools and manual workflows with connected digital systems that improve control and efficiency.",
    overview:
      "Digital transformation at Syntrax is practical: identify high-friction processes, design better workflows, implement the right systems and secure the resulting operating model.",
    problems: [
      "Paper-based or spreadsheet-driven operations",
      "Departments working in disconnected tools",
      "Poor visibility into performance and exceptions",
      "Change initiatives that stall after procurement",
      "Technology adopted without process redesign",
    ],
    capabilities: [
      "Process discovery and opportunity mapping",
      "Systems selection and solution design",
      "Workflow digitization",
      "Integration between business systems",
      "Change enablement and training support",
      "Security and governance considerations",
    ],
    approach: [
      "Map the current operating model",
      "Identify transformation priorities with measurable outcomes",
      "Design the target process and system landscape",
      "Implement in phases that protect operations",
      "Train teams and stabilize adoption",
      "Measure, refine and expand",
    ],
    architecture: [
      "Process and service map",
      "System of record design",
      "Integration and data exchange",
      "Role-based portals and workflows",
      "Reporting and control layers",
    ],
    benefits: [
      "Faster, more controlled operations",
      "Better data quality and visibility",
      "Reduced dependence on fragile manual workarounds",
      "Technology investment tied to business outcomes",
    ],
    industries: ["Education", "Retail", "Government", "Healthcare", "Professional Services"],
    deliverables: [
      "Transformation opportunity assessment",
      "Target operating model recommendations",
      "Phased implementation plan",
      "Configured systems and integrations",
      "Training and adoption materials",
    ],
    faq: [
      {
        question: "Is digital transformation only for large organizations?",
        answer:
          "No. We work with institutions and growing businesses that need practical modernization — not abstract strategy decks.",
      },
    ],
    cta: { label: "Start a Transformation Conversation", href: "/consultation?type=digital-transformation" },
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    shortName: "Consulting",
    tagline: "Clear technology advice for leaders who need decisions they can defend.",
    summary:
      "Advisory support for technology strategy, architecture choices, vendor decisions and operational improvement.",
    overview:
      "We help leadership and IT teams make grounded technology decisions — with clarity on risk, cost, security and delivery reality.",
    problems: [
      "Technology decisions without a clear architectural direction",
      "Vendor proposals that are hard to evaluate objectively",
      "Security and infrastructure risk without prioritization",
      "Internal teams stretched across too many initiatives",
      "Roadmaps that look ambitious but are not executable",
    ],
    capabilities: [
      "Technology strategy and roadmap advisory",
      "Architecture and platform reviews",
      "Security and risk prioritization",
      "Vendor and solution evaluation support",
      "Delivery model and governance advice",
      "Executive-ready recommendations",
    ],
    approach: [
      "Clarify business and operational goals",
      "Assess current systems and constraints",
      "Define options with trade-offs",
      "Recommend a practical path forward",
      "Support decision-making and next-step planning",
    ],
    architecture: [
      "Current-state technology map",
      "Target architecture options",
      "Risk and dependency analysis",
      "Governance and ownership model",
    ],
    benefits: [
      "Decisions grounded in operational reality",
      "Reduced risk of expensive misaligned investments",
      "Clearer ownership and sequencing",
      "Independent technical perspective",
    ],
    industries: ["Financial Services", "Education", "Government", "Healthcare", "Manufacturing"],
    deliverables: [
      "Advisory brief or assessment report",
      "Recommended architecture options",
      "Prioritized roadmap",
      "Decision support materials for stakeholders",
    ],
    faq: [
      {
        question: "Can consulting lead into implementation?",
        answer:
          "Yes. Many engagements begin with advisory work and continue into delivery when the path is clear. Consulting remains useful even when implementation is handled internally.",
      },
    ],
    cta: { label: "Book a Consultation", href: "/consultation?type=general" },
  },
  {
    slug: "network-infrastructure",
    name: "Network Infrastructure",
    shortName: "Networking",
    tagline: "Networks designed for performance, segmentation and secure operations.",
    summary:
      "Plan and strengthen network architecture so people, systems and services can communicate reliably and securely.",
    overview:
      "We design and review network foundations with availability, segmentation and secure access as core requirements — especially for institutions that cannot afford fragile connectivity.",
    problems: [
      "Flat networks with weak segmentation",
      "Unclear remote access and VPN posture",
      "Performance bottlenecks affecting operations",
      "Limited visibility into network health",
      "Growth that outpaces original network design",
    ],
    capabilities: [
      "Network architecture design",
      "Segmentation and secure access planning",
      "Wireless and campus network guidance",
      "VPN and remote access design support",
      "Network hardening recommendations",
      "Monitoring baselines for network health",
    ],
    approach: [
      "Assess topology, traffic patterns and critical services",
      "Identify risk, congestion and ownership gaps",
      "Design target network architecture",
      "Sequence implementation to protect uptime",
      "Document operations and handover",
    ],
    architecture: [
      "Core, distribution and access layers",
      "Segmentation and trust zones",
      "Secure remote access paths",
      "Edge protection and monitoring points",
    ],
    benefits: [
      "More resilient connectivity for critical operations",
      "Improved security boundaries",
      "Clearer network ownership and documentation",
      "A foundation ready for growth and monitoring",
    ],
    industries: ["Education", "Government", "Healthcare", "Manufacturing", "Financial Services"],
    deliverables: [
      "Network assessment summary",
      "Target design recommendations",
      "Implementation sequencing plan",
      "Hardening and operations notes",
    ],
    faq: [
      {
        question: "Do you implement and advise, or only advise?",
        answer:
          "Depending on engagement scope, we can advise on design, support implementation planning, and help validate that the resulting network meets operational and security expectations.",
      },
    ],
    cta: { label: "Discuss Network Architecture", href: "/consultation?type=infrastructure" },
  },
  {
    slug: "systems-integration",
    name: "Systems Integration",
    shortName: "Integration",
    tagline: "Connect systems so information moves with control and trust.",
    summary:
      "Integrate applications, data sources and business platforms so operations can run as one coherent system.",
    overview:
      "We design and implement integrations that reduce duplicate entry, improve data consistency and create reliable pathways between the systems your teams use every day.",
    problems: [
      "Duplicate data entry across platforms",
      "Inconsistent records between departments",
      "Manual exports that break and go unnoticed",
      "No clear ownership of integration failures",
      "APIs and connectors added without governance",
    ],
    capabilities: [
      "Integration architecture design",
      "API and data exchange implementation",
      "Process orchestration across systems",
      "Identity and access considerations for integrations",
      "Error handling and monitoring patterns",
      "Documentation and operational handover",
    ],
    approach: [
      "Map systems, data owners and critical flows",
      "Define contracts, events and failure handling",
      "Implement integrations in controlled phases",
      "Validate data integrity and operational routines",
      "Document ownership and support paths",
    ],
    architecture: [
      "Source and destination systems",
      "API/event integration layer",
      "Transformation and validation rules",
      "Monitoring, retries and audit trails",
    ],
    benefits: [
      "Less manual reconciliation",
      "More trustworthy operational data",
      "Faster cross-department workflows",
      "Integrations that can be supported over time",
    ],
    industries: ["Retail", "Education", "Healthcare", "Financial Services", "Government"],
    deliverables: [
      "Integration map and design",
      "Implemented connectors/APIs",
      "Validation and monitoring plan",
      "Support and ownership documentation",
    ],
    faq: [
      {
        question: "Can you integrate Syntrax products with existing systems?",
        answer:
          "Yes. Where product capabilities and client systems allow, we design integrations that keep operations connected without fragile manual workarounds.",
      },
    ],
    cta: { label: "Request Integration Support", href: "/quote?service=systems-integration" },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}