import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";

// Assuming these images exist based on previous workspace state
import sportImg from "@/assets/industries/sport.webp";
import realestateImg from "@/assets/industries/realestate.webp";
import healthcareImg from "@/assets/industries/healthcare-whatsapp.png";
import d2cImg from "@/assets/industries/d2c-whatsapp.png";
import b2bImg from "@/assets/industries/b2b.webp";
import eduImg from "@/assets/industries/edu.webp";

export interface Industry {
  id: string;
  number: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: "sports",
    number: "01",
    title: "Sports & Fitness",
    description: "We've produced two national pickleball leagues and 15+ sporting events end-to-end — marketing, sponsorship, content, broadcast, and merchandise.",
    link: "/services/sports-marketing",
    linkText: "Sports marketing agency in Chennai",
    image: sportImg,
  },
  {
    id: "realestate",
    number: "02",
    title: "Real Estate",
    description: "Real estate is a high-trust, slow-burn sale. Months of buyer research before a site visit. Most agencies optimise for cheap leads. We're built for closed deals.",
    link: "/industries/real-estate",
    linkText: "Real estate marketing agency in Chennai",
    image: realestateImg,
  },
  {
    id: "healthcare",
    number: "03",
    title: "Healthcare",
    description: "Building trust for hospitals and clinics. We focus on patient acquisition, reputation management, and high-quality educational content.",
    link: "/industries/healthcare",
    linkText: "Healthcare marketing agency in Chennai",
    image: healthcareImg,
  },
  {
    id: "d2c",
    number: "04",
    title: "FMCG & D2C",
    description: "D2C brands live on CAC and retention. We run WhatsApp campaigns, Meta ads, and content systems designed to reduce acquisition cost and increase LTV.",
    link: "/industries/d2c",
    linkText: "D2C marketing agency in Chennai",
    image: d2cImg,
  },
  {
    id: "b2b",
    number: "05",
    title: "Manufacturing & B2B",
    description: "Long sales cycles require persistent nurturing. We build comprehensive B2B pipelines and LinkedIn strategies to convert prospects.",
    link: "/industries/b2b",
    linkText: "B2B marketing agency in Chennai",
    image: b2bImg,
  },
  {
    id: "education",
    number: "06",
    title: "Education & EdTech",
    description: "From student enrollment to course sales. We build full-funnel marketing systems that drive qualified leads and higher conversions.",
    link: "/industries/education",
    linkText: "Education marketing agency in Chennai",
    image: eduImg,
  }
];

const HomeIndustriesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Container for the text (centered) */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-16 el-reveal">
        <GreenButton>INDUSTRIES</GreenButton>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-dela text-3xl md:text-5xl lg:text-[56px] text-foreground mb-6 leading-[1.1] tracking-wide mt-6"
        >
          We don't work with everyone.<br className="hidden md:block" />
          <span className="text-primary">We work with <WavyUnderline>these.</WavyUnderline></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bricolage text-foreground/70 text-base md:text-lg"
        >
          Six industries the studio goes deep in across <span className="font-medium text-primary">India and Chennai.</span>
        </motion.p>
      </div>

      {/* Accordion Area */}
      <div className="w-full max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 h-[auto] md:h-[450px] lg:h-[500px]">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

const IndustryCard = ({ industry, index }: IndustryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full md:w-auto h-[400px] md:h-full rounded-[1.5rem] overflow-hidden cursor-pointer [perspective:1200px] flex-1 md:hover:flex-[2.5] lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
    >
      {/* Inner wrapper for 3D flip effect */}
      <div className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-[1.5rem] overflow-hidden border border-white/5 bg-[#111C15]">
          <img
            src={industry.image}
            alt={industry.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            onError={(e) => {
              // Fallback if image path is broken
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop';
            }}
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09110C] via-[#09110C]/40 to-transparent" />
          
          <div className="absolute inset-0 p-6 md:p-4 pb-8 flex flex-col items-center justify-end transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="font-bricolage font-bold text-xl md:text-xl lg:text-[22px] text-primary whitespace-nowrap md:[writing-mode:vertical-rl] md:-rotate-180 tracking-wide transition-all duration-500">
              {industry.title}
            </h3>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[1.5rem] bg-[#09110C] border border-primary p-6 md:p-8 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          
          {/* Top Row: Number and X */}
          <div className="flex items-center justify-between text-primary mb-4 md:mb-6">
            <span className="font-bricolage text-sm">{industry.number}</span>
            <X className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
          </div>

          <h3 className="font-dela text-xl md:text-2xl text-primary mb-3 md:mb-4 shrink-0">{industry.title}</h3>
          
          <p className="font-bricolage text-sm text-foreground/80 leading-relaxed mb-auto overflow-y-auto pr-2 scrollbar-hide">
            {industry.description}
          </p>

          <Link to={industry.link} className="mt-4 md:mt-6 flex items-start justify-between group/link gap-4 shrink-0">
             <span className="font-bricolage text-sm font-medium text-primary group-hover/link:text-white transition-colors">
               {industry.linkText}
             </span>
             <ArrowRight className="w-5 h-5 shrink-0 text-primary group-hover/link:translate-x-1 transition-all mt-0.5" />
          </Link>
          
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIndustriesSection;



