import Header from "@/components/layout/Header";
import Hero from "@/components/pages/home/Hero";
import JoinTheLeague from "@/components/sections/JoinTheLeague";
import WhyEyeLevelExists from "@/components/pages/home/WhyEyeLevelExists";
import WhatWeDo from "@/components/pages/home/WhatWeDo";
import HomeIndustriesSection from "@/components/pages/home/HomeIndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TextTestimonials from "@/components/sections/TextTestimonials";
import WhyEyeLevel from "@/components/pages/home/WhyEyeLevel";
import FAQSection from "@/components/sections/FAQSection";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import SEO from "@/components/utils/SEO";
import {
  faqPageSchema,
  homePageSchema,
  homeServicesSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/hooks/schemas";
import faqs from "@/data/faqs";

const Index = () => {
  return (
    <>
      <SEO
        title="Marketing Agency India | Digital & Events Chennai | EyeLevel"
        description="EyeLevel is a marketing agency in Chennai for ambitious brands across India. Digital, events, content, and growth — founder-led. Book a call."
        keywords={[
          "marketing agency India",
          "Digital Marketing Agency Chennai",
          "Event management agency Chennai"
        ]}
        schema={[
          organizationSchema,
          localBusinessSchema,
          websiteSchema,
          homePageSchema,
          homeServicesSchema,
          faqPageSchema(faqs["Home"]),
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/"
        url="https://theeyelevelstudio.com/"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <JoinTheLeague />
        <WhyEyeLevelExists />
        <WhatWeDo />
        <HomeIndustriesSection />
        <ProcessSection />
        <TextTestimonials />
        <WhyEyeLevel />
        <FAQSection faqs={faqs["Home"]} />
        <EnhancedFooter showCTA={false} mascotBgClass="bg-background" />
      </div>
    </>
  );
};

export default Index;

