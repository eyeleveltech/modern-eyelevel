import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, MessageSquare, Video, Image, BookOpen } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Button } from "@/components/ui/button";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { aiAndVideoProductionSchema, breadcrumbSchema } from "@/hooks/schemas";

import { HeroSection } from "@/components/sections/services/AI AND VIDEO PRODUCTION/HeroSection";
import { IncludesSection } from "@/components/sections/services/AI AND VIDEO PRODUCTION/IncludesSection";
import { WhoIsItForSection } from "@/components/sections/services/AI AND VIDEO PRODUCTION/WhoIsItForSection";
import { QuoteSection } from "@/components/sections/services/AI AND VIDEO PRODUCTION/QuoteSection";
import { IndustriesSection } from "@/components/sections/services/AI AND VIDEO PRODUCTION/IndustriesSection";
import { CTASection } from "@/components/sections/services/AI AND VIDEO PRODUCTION/CTASection";

const AiAndVideoProduction = () => {
  return (
    <div className="min-h-[65vh] lg:min-h-[95vh] bg-background overflow-clip">
      <SEO
        title="AI & Video Production | TVCs, Reels & Motion Graphics | Eyelevel"
        description="From cinematic TVCs to AI-assisted motion graphics, we produce video content that commands attention and drives action for screens big and small."
        keywords={[
          "content marketing agency Chennai",
          "creative agency Chennai",
          "video production Chennai",
          "copywriting agency India",
          "brand content agency Chennai",
        ]}
        image="https://theeyelevelstudio.com/og/services-1200x630.png"
        schema={[
          aiAndVideoProductionSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://theeyelevelstudio.com/" },
            { name: "Services", url: "https://theeyelevelstudio.com/services" },
            { name: "AI & Video Production", url: "https://theeyelevelstudio.com/services/ai-and-video-production" },
          ]),
        ]}
        canonical="https://theeyelevelstudio.com/services/ai-and-video-production"
        url="https://theeyelevelstudio.com/services/ai-and-video-production"
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

export default AiAndVideoProduction;
