export type FaqItem = {
  question: string;
  answer: string;
  category:
    | "Cybersecurity"
    | "Products"
    | "Services"
    | "Support"
    | "Implementation"
    | "Pricing"
    | "Security"
    | "Deployment";
};

export const faqs: FaqItem[] = [
  {
    category: "Cybersecurity",
    question: "What cybersecurity services does Syntrax offer?",
    answer:
      "We provide vulnerability assessments, penetration testing, security architecture reviews, hardening guidance, monitoring readiness support and security consulting — complemented by SyntraxSec for training and team readiness.",
  },
  {
    category: "Products",
    question: "Which Syntrax products are available today?",
    answer:
      "Live Syntrax products include SyntraxSec, ENMS, Syntrax POS and the Pharmacy Management System.",
  },
  {
    category: "Services",
    question: "Do you only sell products, or also custom services?",
    answer:
      "Both. Syntrax delivers products and also provides software engineering, infrastructure, integration, consulting and digital transformation services.",
  },
  {
    category: "Pricing",
    question: "Do you publish fixed prices online?",
    answer:
      "No. Engagements vary by scope, users, environment and compliance needs. Use Request a Quote or Book a Consultation and our team will respond with a scoped proposal.",
  },
  {
    category: "Implementation",
    question: "How does implementation usually work?",
    answer:
      "Most engagements follow Discover → Design → Build → Secure → Deploy → Support, with milestones and clear ownership at each stage.",
  },
  {
    category: "Deployment",
    question: "Are Syntrax products available as hosted SaaS?",
    answer:
      "Yes. SyntraxSec, ENMS, POS and Pharmacy PMS are delivered as hosted platforms, with onboarding support for organizations.",
  },
  {
    category: "Support",
    question: "How can clients get technical support?",
    answer:
      "Clients can use the Support Center to submit a ticket, review FAQs and access documentation pathways. Existing clients can also use agreed support channels from their engagement.",
  },
  {
    category: "Security",
    question: "How can researchers report a vulnerability?",
    answer:
      "Use the Vulnerability Disclosure process at /security/disclosure and contact security@syntrax.co.tz. Please avoid public disclosure before we have had a reasonable opportunity to investigate and remediate.",
  },
];