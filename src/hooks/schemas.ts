export const ORG_ID = "https://theeyelevelstudio.com/#organization";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "The Eye Level Studio",
  url: "https://theeyelevelstudio.com/",
  logo: "https://www.theeyelevelstudio.com/assets/eyelevelstudio-logo.png",
  description:
    "The Eye Level Studio is a global marketing agency delivering growth strategy, performance marketing, AI automation, creative branding, and Web3 marketing solutions.",
  sameAs: [
    "https://www.linkedin.com/company/theeyelevelstudio/",
    "https://www.instagram.com/theeyelevelstudio/",
    "https://www.youtube.com/@theeyelevelstudio",
    "https://x.com/Eye_Levelstudio",
    "https://www.facebook.com/share/1DN368ZHPh/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: "hello@eyelevelstudio.in",
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://theeyelevelstudio.com/#website",
  url: "https://theeyelevelstudio.com/",
  name: "The Eye Level Studio",
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://theeyelevelstudio.com/#homepage",
  url: "https://theeyelevelstudio.com/",
  name: "Marketing & Growth Agency for Global Brands",
  description:
    "A global marketing agency helping brands scale through growth strategy, performance marketing, AI automation, creative branding, and Web3 solutions.",
  about: { "@id": ORG_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://theeyelevelstudio.com/wp-content/uploads/hero-image.jpg",
  },
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://theeyelevelstudio.com/services#service",
  name: "Marketing Services",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Place", name: "Global" },
  serviceType: [
    "Growth Strategy",
    "Performance Marketing",
    "AI & Automation",
    "Creative Branding",
    "Web3 Marketing",
  ],
  url: "https://theeyelevelstudio.com/services",
};

export const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://theeyelevelstudio.com/industries#page",
  name: "Industry-Specific Marketing Solutions",
  about: [
    "Education Marketing",
    "Sports Marketing",
    "Real Estate Marketing",
    "B2B Marketing",
    "Web3 & Blockchain Marketing",
  ],
  publisher: { "@id": ORG_ID },
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://theeyelevelstudio.com/contact-us#contact",
  url: "https://theeyelevelstudio.com/contact-us",
  publisher: { "@id": ORG_ID },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is a growth studio? Is it just a trendy term for an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An agency charges you to push buttons. A Growth Studio builds the machine. We don't just execute tasks to fill a timesheet; we fuse strategy, creativity and code into a single system designed to generate revenue, not just noise.",
      },
    },
    {
      "@type": "Question",
      name: "Why shouldn't I just hire a traditional marketing firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because you don't need more chaos; you need a direction. Traditional firms are great at spending budget on spray and pray tactics. We use the Rod of Growth to part the seas of complexity and build a single, clear path to Growth.",
      },
    },
    {
      "@type": "Question",
      name: "What results can I actually expect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you want likes and brand love, hire a poet. If you want bankable growth, hire us. Our focus extends beyond vanity metrics like shares and follows to include what matters most: Leads, Sales, Profits.",
      },
    },
    {
      "@type": "Question",
      name: "Do you know my industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in Edu-Marketing, Sports, Real Estate, and B2B. But growth is a discipline, not a niche. We use a toolkit of Strategy, AI, and Automation that works across industries, selling anything from a pin to a plane.",
      },
    },
    {
      "@type": "Question",
      name: "How much does this cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on how fast you want to grow. We design unique solutions for unique demands and do not use cookie-cutter pricing. We start with a Growth Audit—if we can't make you money, we don't deserve yours.",
      },
    },
  ],
};
