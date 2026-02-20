import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinTheLeague from "@/components/JoinTheLeague";
import WhatWeDo from "@/components/WhatWeDo";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import TextTestimonials from "@/components/TextTestimonials";
import WhyEyeLevel from "@/components/WhyEyeLevel";
import FAQSection from "@/components/FAQSection";
import EnhancedFooter from "@/components/EnhancedFooter";
import SEO from "@/components/SEO";
import {
  faqSchema,
  homePageSchema,
  organizationSchema,
  websiteSchema,
} from "@/hooks/schemas";

const Index = () => {
  return (
    <>
      <SEO
        title="Marketing & Growth Agency for Global Brands | The Eye Level Studio"
        description="The Eye Level Studio is a global marketing agency driving growth through strategy, performance marketing, AI, automation, and creative branding."
        schema={[organizationSchema, websiteSchema, homePageSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <JoinTheLeague />
        <WhatWeDo />
        <IndustriesSection />
        <ProcessSection />
        <TextTestimonials />
        <WhyEyeLevel />
        <FAQSection />
        <EnhancedFooter showCTA={false} />
      </div>
    </>
  );
};

export default Index;
