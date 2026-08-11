/**
 * Translation architecture for English / Swahili.
 * Keep production UI on approved copy only — do not auto-machine-translate.
 */
export type Dictionary = {
  nav: {
    talkToExpert: string;
    clientPortal: string;
  };
  common: {
    learnMore: string;
  };
};

export const dictionaries: Record<"en" | "sw", Dictionary> = {
  en: {
    nav: {
      talkToExpert: "Talk to an Expert",
      clientPortal: "Client Portal",
    },
    common: {
      learnMore: "Learn more",
    },
  },
  sw: {
    nav: {
      talkToExpert: "Zungumza na Mtaalamu",
      clientPortal: "Portal ya Mteja",
    },
    common: {
      learnMore: "Jifunze zaidi",
    },
  },
};