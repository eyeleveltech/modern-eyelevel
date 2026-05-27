import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";

export interface Industry {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  stats: string[];
  link?: string;
  ctaText?: string;
}

const industries: Industry[] = [
  {
    id: "saas",
    number: "01",
    title: "SaaS & Tech Startups",
    tagline: "From Demo Requests to Paying Customers",
    description: "SaaS companies need pipeline, not impressions. We build LinkedIn B2B funnels, AI content systems, and performance campaigns that turn interest into qualified conversations.",
    accentColor: "#B8D4BE",
    stats: ["3x Enrollment Growth", "45% Lower CAC"],
    link: "/industries/saas",
    ctaText: "Explore SaaS Marketing →"
  },
  {
    id: "d2c",
    number: "02",
    title: "D2C & E-commerce",
    tagline: "From First Click to Repeat Customer",
    description: "D2C brands live on CAC and retention. We run WhatsApp campaigns, Meta ads, and content systems designed to reduce acquisition cost and increase LTV.",
    accentColor: "#FFB4B4",
    stats: ["10M+ Fan Reach", "200% ROI"],
    link: "/industries/d2c",
    ctaText: "Explore D2C Marketing →"
  },
  {
    id: "sports",
    number: "03",
    title: "Sports & Pickleball",
    tagline: "From Tournament Day to Year-Round Brand",
    description: "We've produced two national pickleball leagues and 15+ sporting events end-to-end — marketing, sponsorship, content, broadcast, and merchandise.",
    accentColor: "#E2FEA5",
    stats: ["50% Faster Sales", "8x Lead Quality"],
    link: "/services/sports-marketing",
    ctaText: "Explore Sports Marketing →"
  },
  {
    id: "offshore",
    number: "04",
    title: "Offshore / US Clients",
    tagline: "Senior Strategy. Indian Efficiency. Your Time Zone.",
    description: "We currently manage marketing for offshore clients in the US and UAE. Full-service retainers, async-first, delivery standards that match your market.",
    accentColor: "#FCFAC2",
    stats: ["5x Pipeline Growth", "30% Shorter Cycle"],
    link: "/industries/offshore",
    ctaText: "Explore Offshore Marketing →"
  },
];

interface IndustryCardProps {
  industry: Industry;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const IndustryCard = ({ industry, index, isActive, onClick }: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <motion.div
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isActive ? "bg-card/5" : "bg-transparent border-brand-light/10"}`}
        style={{
          borderColor: isActive ? industry.accentColor : undefined,
        }}
      >
        {/* Main Row */}
        <div className="px-6 md:px-10 py-6 md:py-8 flex items-center gap-6 md:gap-10">
          {/* Number */}
          <span className="font-bricolage text-xs md:text-sm font-medium shrink-0 text-foreground/40">
            {industry.number}
          </span>

          {/* Title & Tagline */}
          <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
            <h3
              className={`font-dela text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${!isActive ? "text-foreground" : ""}`}
              style={isActive ? { color: industry.accentColor } : undefined}
            >
              {industry.title}
            </h3>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0.6, x: 0 }}
              className={`font-bricolage text-sm md:text-base ${isActive ? "text-foreground" : "text-foreground/60"}`}
            >
              {industry.tagline}
            </motion.span>
          </div>

          {/* Accent Bar (visible on hover) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block h-1 w-24 rounded-full origin-left"
            style={{ backgroundColor: industry.accentColor }}
          />

          {/* Arrow */}
          <motion.div
            animate={{
              x: isActive ? 0 : -5,
              opacity: isActive ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            {isActive ? (
              <ArrowUp width={24} height={24} style={{ color: industry.accentColor }} />
            ) : (
              <ArrowDown width={24} height={24} className="text-foreground/40" />
            )}
          </motion.div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-10 pb-8 pt-2">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 lg:items-center">
                  {/* Description */}
                  <p className="font-bricolage text-sm md:text-base leading-relaxed max-w-xl lg:pl-16 text-foreground/85">
                    {industry.description}
                  </p>

                  {/* Stats & CTA */}
                  <div className="flex flex-col gap-6 lg:gap-8 lg:ml-auto lg:pr-12 lg:items-end">
                    <div className="flex gap-6 lg:gap-10">
                      {industry.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="text-center lg:text-right"
                        >
                          <span
                            className="font-dela text-base md:text-lg block"
                            style={{ color: industry.accentColor }}
                          >
                            {stat.split(" ")[0]}
                          </span>
                          <span className="font-bricolage text-xs text-foreground/60">
                            {stat.split(" ").slice(1).join(" ")}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    {industry.link && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          to={industry.link}
                          className="whitespace-nowrap font-bricolage text-xs md:text-sm px-5 py-2 rounded-full transition-transform inline-flex items-center justify-center font-medium hover:scale-105 text-black border-2 border-black shadow-[0_2px_0_#0a0a0a]"
                          style={{ backgroundColor: industry.accentColor }}
                        >
                          {industry.ctaText}
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const HomeIndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 relative overflow-hidden md:py-[32px] bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <GreenButton>Industries We Dominate</GreenButton>
          <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.05] uppercase mt-6">
            <span className="text-primary">
              SPECIALIZED
            </span>
            <br />
            <WavyUnderline>EXPERTISE</WavyUnderline>
          </h2>
        </motion.div>

        {/* Interactive Cards */}
        <div className="space-y-3">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustriesSection;


