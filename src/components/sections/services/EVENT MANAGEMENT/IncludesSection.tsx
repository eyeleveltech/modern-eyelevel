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
import { brandAndIdentitySchema, breadcrumbSchema } from "@/hooks/schemas";

export const IncludesSection = () => {
  const scrollAnimProps = {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 30 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/* Section 2 — What it includes (Bento Box) */}
      <section className="px-4 sm:px-10 md:px-20 bg-background relative z-10 py-20 md:py-[100px]">
        <div className="w-full flex justify-start text-center">
          <motion.h2
            {...scrollAnimProps}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-12"
          >
            BUILT FOR BUSINESSES THAT NEED <WavyUnderline>RESULTS</WavyUnderline>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
          {/* Box 1 */}
          <motion.div
            {...scrollAnimProps}
            className="bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Layers className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              EVENT CURATION
            </h3>
            <ul className="list-disc list-inside font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 space-y-2 max-w-xl">
              <li>
                <Link to="/services/events/event-planning-and-organizing" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Event Planning & Organizing</Link>
              </li>
              <li>
                <Link to="/services/events/end-to-end-event-management" className="hover:text-primary hover:underline underline-offset-4 transition-colors">End-to-End Event Management</Link>
              </li>
            </ul>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
              SPONSORSHIP & BRANDING
            </h3>
            <ul className="list-disc list-inside font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 space-y-2 max-w-xl">
              <li>
                <Link to="/services/events/sponsorship-management" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Sponsorship Management</Link>
              </li>
              <li>
                <Link to="/services/events/event-branding" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Event Branding</Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
 
    </>
  );
};
