import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, Bot, Cpu, Code, MapPin, BarChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { organicMarketingSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/ORGANIC MARKETING/HeroSection";
import { IncludesSection } from "@/components/sections/services/ORGANIC MARKETING/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/ORGANIC MARKETING/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/ORGANIC MARKETING/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/ORGANIC MARKETING/IndustriesSection";
import { CTASection } from "@/components/sections/services/ORGANIC MARKETING/CTASection";

const OrganicMarketing = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Organic Marketing Agency | SEO, AEO & GEO | Eyelevel Growth Studio"
        description="We optimize your digital presence so customers discover you naturally — on search engines, AI platforms, and maps. No ads needed."
        keywords={[
          "SEO agency Chennai",
          "AI SEO agency India",
          "AEO agency",
          "GEO optimization India",
          "Google AI Overview optimization",
          "local SEO Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          organicMarketingSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Organic Marketing", url: "https://theeyelevelstudio.com/services/organic-marketing" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/organic-marketing"
        url="https://theeyelevelstudio.com/services/organic-marketing"
      />
      <Header />

      <HeroSection />
      <IncludesSection />
      <WhoIsItForSection />
      <QuoteSection />
      <IndustriesSection />
      <CTASection />

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div >
  );
};

export default OrganicMarketing;
