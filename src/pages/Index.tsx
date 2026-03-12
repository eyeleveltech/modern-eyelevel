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
import faqs from "@/data/faqs";

const Index = () => {
  return (
    <>
      <SEO
        title="Sports, Healthcare & Education Marketing Agency | EyeLevel"
        description="Chennai's only digital marketing agency for Sports, Healthcare & Education. Performance marketing, event production & video. Book a free consultation today."
        keywords={[
          "performance marketing agency Chennai",
          "growth marketing agency",
          "specialized marketing agency India",
          "digital marketing services in Chennai",
          "sports healthcare education digital marketing",
        ]}
        schema={[organizationSchema, websiteSchema, homePageSchema, faqSchema]}
        canonical="https://theeyelevelstudio.com/"
        url="https://theeyelevelstudio.com/"
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
        <FAQSection faqs={faqs["Home"]} />
        <EnhancedFooter showCTA={false} />
      </div>
    </>
  );
};

export default Index;
