import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";

// Assuming these images exist based on previous workspace state
import sportImg from "@/assets/industries/sport.webp";
import realestateImg from "@/assets/industries/realestate.webp";
import healthcareImg from "@/assets/industries/healthcare-whatsapp.png";
import d2cImg from "@/assets/industries/d2c-whatsapp.png";
import b2bImg from "@/assets/industries/b2b.webp";

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
    description: "Sports marketing in India is built around cricket. Every other sport is left to figure it out alone. EyeLevel is India's only studio built specifically for sports brands. Leagues, academies, federations, and athletes.",
    link: "/services/sports-marketing",
    linkText: "Sports marketing agency in India",
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
    description: "Patients aren't buying products. They're making decisions about their family's care. Healthcare marketing demands a different kind of seriousness. And a different kind of agency.",
    link: "/industries/healthcare",
    linkText: "Healthcare digital marketing in Chennai",
    image: healthcareImg,
  },
  {
    id: "d2c",
    number: "04",
    title: "FMCG & D2C",
    description: "Most FMCG agencies sell you retail support. Most D2C agencies sell you performance ads. We do both. Because that's how consumer brands actually grow.",
    link: "/industries/d2c",
    linkText: "D2C marketing agency India",
    image: d2cImg,
  },
  {
    id: "b2b",
    number: "05",
    title: "Manufacturing & B2B",
    description: "Chennai is India's #1 manufacturing hub. Most B2B brands here have a 2014 website and 200 LinkedIn followers. Their buyers moved online. Their marketing didn't.",
    link: "/industries/b2b",
    linkText: "B2B marketing agency in Chennai",
    image: b2bImg,
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
          Five industries the studio goes deep in across <span className="font-medium text-primary">India and Chennai.</span>
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
      className="group relative w-full md:w-auto h-[400px] md:h-full rounded-[1.5rem] overflow-hidden cursor-pointer flex-1 md:hover:flex-[2.5] lg:hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/5 bg-[#111C15]"
    >
      {/* Background Image */}
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-30 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=800&auto=format&fit=crop';
        }}
      />
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

      {/* COLLAPSED STATE CONTENT (Visible on desktop by default, hides on hover) */}
      <div className="absolute inset-0 p-6 flex flex-col items-center justify-end z-20 md:flex md:group-hover:opacity-0 md:group-hover:pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hidden">
        <span className="font-bricolage text-sm text-primary mb-2 md:mb-4 md:[writing-mode:vertical-rl] md:-rotate-180">
          {industry.number}
        </span>
        <h3 className="font-bricolage font-bold text-xl md:text-xl lg:text-[22px] text-primary whitespace-nowrap md:[writing-mode:vertical-rl] md:-rotate-180 tracking-wide">
          {industry.title}
        </h3>
      </div>

      {/* EXPANDED STATE CONTENT (Visible on mobile by default, fades/slides in on hover on desktop) */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-30 opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:translate-x-4 md:group-hover:translate-x-0 translate-y-0">
        
        {/* Top row: Number */}
        <div className="flex items-center justify-between text-primary">
          <span className="font-bricolage text-sm">{industry.number}</span>
        </div>

        {/* Middle and Bottom content */}
        <div className="flex flex-col gap-4 mt-auto">
          <h3 className="font-dela text-2xl md:text-3xl text-primary leading-tight">
            {industry.title}
          </h3>
          <p className="font-bricolage text-sm text-foreground/80 leading-relaxed max-w-xl">
            {industry.description}
          </p>

          <Link to={industry.link} className="flex items-center justify-between group/link gap-4 mt-2 border-t border-primary/20 pt-4">
             <span className="font-bricolage text-sm font-medium text-primary group-hover/link:text-white transition-colors">
               {industry.linkText}
             </span>
             <ArrowRight className="w-5 h-5 text-primary group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default HomeIndustriesSection;



