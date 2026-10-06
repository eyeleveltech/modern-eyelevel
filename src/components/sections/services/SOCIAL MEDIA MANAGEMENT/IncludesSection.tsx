import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Edit3, Users, UserPlus, PieChart } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { Button } from "@/components/ui/button";
import { CardsParallax, type iCardItem } from "@/components/shared/CardsParallax";
import { socialMediaManagementSchema, breadcrumbSchema } from "@/hooks/schemas";

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
            WHAT IT <WavyUnderline>INCLUDES</WavyUnderline>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Box 1 (wide) */}
          <motion.div
            {...scrollAnimProps}
            className="lg:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Calendar className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">STRATEGY & MANAGEMENT</h3>
            <ul className="list-disc list-inside font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 space-y-2 max-w-xl">
              <li>
                <Link to="/services/social-media-management/social-media-strategy" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Social Media Strategy</Link>
              </li>
              <li>
                <Link to="/services/social-media-management/social-media-management" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Social Media Management</Link>
              </li>
            </ul>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Users className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">CONTENT & DESIGN</h3>
            <ul className="list-disc list-inside font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 space-y-2 max-w-xl">
              <li>
                <Link to="/services/social-media-management/content-creation" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Content Creation</Link>
              </li>
              <li>
                <Link to="/services/social-media-management/designing-and-creative-services" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Designing & Creative Services</Link>
              </li>
            </ul>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-white/5 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <UserPlus className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">PARTNERSHIPS</h3>
            <ul className="list-disc list-inside font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 space-y-2 max-w-xl">
              <li>
                <Link to="/services/social-media-management/influencer-marketing" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Influencer Marketing</Link>
              </li>
              <li>
                <Link to="/services/social-media-management/celebrity-and-brand-partnerships" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Celebrity & Brand Partnerships</Link>
              </li>
            </ul>
          </motion.div>

          {/* Box 4 (wide) */}
          <motion.div
            {...scrollAnimProps}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-primary/5 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border border-primary/20 group relative overflow-hidden flex flex-col justify-start min-h-[280px] transition-all duration-300 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Edit3 className="w-10 h-10 text-primary mb-6 transition-colors duration-300 group-hover:text-primary" />
            <h3 className="font-dela text-xl md:text-2xl lg:text-3xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">PRODUCTION & STUDIO</h3>
            <ul className="list-disc list-inside font-bricolage text-sm md:text-base lg:text-lg text-foreground/80 space-y-2 max-w-xl">
              <li>
                <Link to="/services/social-media-management/photography-and-camera-crew" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Photography & Camera Crew</Link>
              </li>
              <li>
                <Link to="/services/social-media-management/videography" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Videography</Link>
              </li>
              <li>
                <Link to="/services/social-media-management/podcast-studio-setup" className="hover:text-primary hover:underline underline-offset-4 transition-colors">Podcast Studio Setup</Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
 
    </>
  );
};
