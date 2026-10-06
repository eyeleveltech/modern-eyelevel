import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Map, Palette, Code2, SearchCheck, PenLine, Wrench } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { websiteAndAppDevelopmentSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/WEBSITE AND APP DEVELOPMENT/HeroSection";
import { IncludesSection } from "@/components/sections/services/WEBSITE AND APP DEVELOPMENT/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/WEBSITE AND APP DEVELOPMENT/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/WEBSITE AND APP DEVELOPMENT/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/WEBSITE AND APP DEVELOPMENT/IndustriesSection";
import { CTASection } from "@/components/sections/services/WEBSITE AND APP DEVELOPMENT/CTASection";

const WebsiteAndAppDevelopment = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Website & App Development | High-Performance Sites | Eyelevel Growth Studio"
        description="We craft high-performance websites and mobile apps tailored to your business goals. Clean, fast, and built for growth."
        keywords={[
          "website design agency Chennai",
          "web development agency Chennai",
          "website design company Chennai",
          "Webflow agency Chennai",
          "WordPress agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          websiteAndAppDevelopmentSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Website & App Development", url: "https://theeyelevelstudio.com/services/website-and-app-development" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/website-and-app-development"
        url="https://theeyelevelstudio.com/services/website-and-app-development"
      />
      <Header />

      <HeroSection />
      <IncludesSection />
      <WhoIsItForSection />
      <QuoteSection />
      <IndustriesSection />
      <CTASection />

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div>
  );
};

export default WebsiteAndAppDevelopment;
