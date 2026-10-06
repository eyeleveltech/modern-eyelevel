import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Layers, FileText, Sparkles, RefreshCcw, PenTool } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { eventManagementSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/EVENT MANAGEMENT/HeroSection";
import { IncludesSection } from "@/components/sections/services/EVENT MANAGEMENT/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/EVENT MANAGEMENT/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/EVENT MANAGEMENT/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/EVENT MANAGEMENT/IndustriesSection";
import { CTASection } from "@/components/sections/services/EVENT MANAGEMENT/CTASection";

const EventManagement = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="Event Management Agency | Events That Leave an Impression | Eyelevel"
        description="End-to-end event planning, organizing, execution, and sponsorship management that reflects your brand at its best."
        keywords={[
          "brand identity agency Chennai",
          "branding agency Chennai",
          "brand strategy agency India",
          "logo design agency Chennai",
          "rebranding agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          eventManagementSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "Event Management", url: "https://theeyelevelstudio.com/services/event-management" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/event-management"
        url="https://theeyelevelstudio.com/services/event-management"
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

export default EventManagement;
