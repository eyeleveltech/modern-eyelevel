import { useState } from "react";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Compass,
  Palette,
  BarChart3,
  Settings,
  Film,
  Calendar,
  GraduationCap,
  TrendingDown,
  Users,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import WavyUnderline from "@/components/WavyUnderline";
import GreenButton from "@/components/GreenButton";

import emptyClass from "@/assets/Edu-marketing/empty-class.png";
import bgImage from "@/assets/Edu-marketing/edu-bg.png";

// Service categories data
const serviceCategories = [
  {
    id: "strategy",
    number: "01",
    icon: Compass,
    title: "Strategy & Consultation",
    outcome: "A clear roadmap for your institution's future.",
    color: "#B8D4BE",
    services: [
      {
        name: "Marketing Strategy Development",
        desc: "Data-backed plans to hit your enrollment targets.",
      },
      {
        name: "Market Research & Analysis",
        desc: "Understanding your competition and student personas.",
      },
      {
        name: "Retention & Enrollment Strategies",
        desc: "Keeping students engaged from inquiry to graduation.",
      },
      {
        name: "Academic Counseling & Training",
        desc: "Professional consulting to sharpen your internal teams.",
      },
    ],
  },
  {
    id: "branding",
    number: "02",
    icon: Palette,
    title: "Branding, Design & Development",
    outcome: "A prestigious identity that attracts top-tier students.",
    color: "#E2FEA5",
    services: [
      {
        name: "Logo & Brand Identity",
        desc: "Visuals that command respect in the education sector.",
      },
      {
        name: "Website & App Development",
        desc: "High-converting digital platforms built for mobile.",
      },
      {
        name: "Digital Creatives",
        desc: "High-energy marketing collateral that stops the scroll.",
      },
      {
        name: "Printing Materials",
        desc: "Premium brochures and physical assets for campus events.",
      },
    ],
  },
  {
    id: "digital",
    number: "03",
    icon: BarChart3,
    title: "Digital Marketing & Performance",
    outcome: "Your institution, seen by the right students at the right time.",
    color: "#FFB4B4",
    services: [
      {
        name: "Social Media Management",
        desc: "Building a vibrant, active community for your brand.",
      },
      {
        name: "Search Engine Optimization (SEO)",
        desc: "Dominating search results when students look for courses.",
      },
      {
        name: "PPC Advertising Campaigns",
        desc: "Targeted ads on Meta, Google, and LinkedIn.",
      },
      {
        name: "Email & Content Marketing",
        desc: "Persuasive storytelling that converts leads into admissions.",
      },
    ],
  },
  {
    id: "martech",
    number: "04",
    icon: Settings,
    title: "Marketing Technology & CRM",
    outcome: "Automated systems that ensure no lead is ever dropped.",
    color: "#FCFAC2",
    services: [
      {
        name: "CRM Setup & Automation",
        desc: "We build the engine that manages your student pipeline.",
      },
      {
        name: "Tool Integration",
        desc: "Connecting your website, CRM, and communication tools.",
      },
      {
        name: "WhatsApp Business & Bot Integration",
        desc: "Fast, automated student support where they live.",
      },
      {
        name: "Cloud Communication (IVR)",
        desc: "Professional phone systems for seamless inquiries.",
      },
    ],
  },
  {
    id: "media",
    number: "05",
    icon: Film,
    title: "Media & Content Production",
    outcome: "High-quality storytelling that brings your campus to life.",
    color: "#A5D8FF",
    services: [
      {
        name: "Photography & Video Production",
        desc: "Professional shoots that capture your campus energy.",
      },
      {
        name: "Promotional & Educational Videos",
        desc: "From high-impact ads to scriptwriting and production.",
      },
      {
        name: "Public & Media Relations",
        desc: "Building authority through news and thought leadership.",
      },
    ],
  },
  {
    id: "events",
    number: "06",
    icon: Calendar,
    title: "Event Management",
    outcome: "Memorable experiences that drive direct enrollment.",
    color: "#DDA0DD",
    services: [
      {
        name: "Virtual & In-Person Events",
        desc: "Seamlessly managed webinars and open days.",
      },
      {
        name: "Event Promotions",
        desc: "Getting the right audience to show up.",
      },
      {
        name: "Sports Event Management",
        desc: "Specialized handling of institutional sports events.",
      },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Pick a time to talk.",
    icon: Phone,
    desc: "Schedule a free strategy call",
  },
  {
    number: "02",
    title: "We build your growth plan.",
    icon: Compass,
    desc: "Custom roadmap for your institution",
  },
  {
    number: "03",
    title: "Watch your enrollment grow.",
    icon: TrendingDown,
    desc: "See real results in weeks",
  },
];

const HigherEducationMarketing = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Thank you!",
      description:
        "We'll be in touch shortly to discuss your enrollment goals.",
    });
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only allow digits, max 10
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.35, // increase to see it
            zIndex: 0,
          }}
        />

        {/* HERO TINT OVERLAY */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "#253e35",
            opacity: 0.55,
            zIndex: 1,
          }}
        />

        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(184,212,190,0.4) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(226,254,165,0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
          {/* Pill badge */}
          <GreenButton>Higher Education Marketing</GreenButton>

          {/* Main Headline - Unified size */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-[1.1] text-[#E2FEA5] uppercase"
          >
            From Visibility to <WavyUnderline>Admissions</WavyUnderline>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(248, 255, 232, 0.85)" }}
          >
            We help higher education institutes boost enrollment and build brand
            authority with zero confusion.
          </motion.p>

          {/* CTA + Clarity Signal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-5"
          >
            <a href="#cta-form" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto group rounded-full px-8 md:px-12 min-h-[56px] md:min-h-[64px] text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Secure your enrollment
                <ArrowRight className="ml-2 md:ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </a>

            {/* <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full"
              style={{
                backgroundColor: "rgba(226, 254, 165, 0.1)",
                border: "1px solid rgba(226, 254, 165, 0.2)",
              }}
            >
              <Check
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "#E2FEA5" }}
              />
              <span
                className="font-bricolage text-sm"
                style={{ color: "#E2FEA5" }}
              >
                One Goal: Your Admissions.
              </span>
            </div> */}
          </motion.div>

          {/* Proof Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "+25%", label: "Enrollment" },
              { value: "45%", label: "Lower CAC" },
              { value: "150+", label: "Institutions" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span
                  className="font-dela text-2xl md:text-3xl lg:text-4xl block"
                  style={{ color: "#E2FEA5" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-bricolage text-xs md:text-sm"
                  style={{ color: "rgba(248, 255, 232, 0.6)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Fixed CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-6"
          style={{
            background: "linear-gradient(to top, #253e35 80%, transparent)",
          }}
        >
          <a href="#cta-form" className="block">
            <Button
              size="lg"
              className="w-full rounded-full min-h-[56px] text-base font-semibold font-bricolage"
              style={{
                backgroundColor: "#B8D4BE",
                color: "#0a0a0a",
                border: "3px solid #0a0a0a",
                boxShadow: "0 4px 0 #0a0a0a",
              }}
            >
              Secure your enrollment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* ===== PROBLEM SECTION - Enhanced ===== */}
      <section
        className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#173229" }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #FFB4B4, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-20 left-10 w-24 h-24 md:w-40 md:h-40 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #B8D4BE, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* ✅ Fixed layout: left content + right image */}

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-dela text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 md:mb-10 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Is your campus <WavyUnderline>quiet?</WavyUnderline>
              </h2>
              <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
                {/* LEFT: content */}
                <div className="w-full lg:flex-1">
                  {/* Pain points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                    {[
                      { text: "Empty seats cost more than just revenue." },
                      { text: "They cost reputation." },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-2xl p-5 md:p-6 text-left"
                        style={{
                          backgroundColor: "rgba(248, 255, 232, 0.03)",
                          border: "1px solid rgba(248, 255, 232, 0.1)",
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              backgroundColor: "rgba(255, 180, 180, 0.2)",
                            }}
                          >
                            <TrendingDown
                              className="w-4 h-4"
                              style={{ color: "#E2FEA5" }}
                            />
                          </div>
                          <p
                            className="font-bricolage text-base md:text-lg"
                            style={{ color: "#F8FFE8" }}
                          >
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contrast */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                  >
                    <div
                      className="inline-block rounded-2xl p-6 md:p-8 relative overflow-hidden"
                      style={{
                        backgroundColor: "rgba(184, 212, 190, 0.08)",
                        border: "2px solid rgba(184, 212, 190, 0.25)",
                      }}
                    >
                      <p
                        className="font-bricolage text-sm md:text-base mb-3 opacity-60"
                        style={{ color: "#F8FFE8" }}
                      >
                        Generic agencies give you "synergy."
                      </p>
                      <p
                        className="font-dela text-2xl md:text-3xl lg:text-4xl uppercase"
                        style={{ color: "#B8D4BE" }}
                      >
                        We give you students.
                      </p>
                      <div
                        className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
                        style={{ backgroundColor: "#B8D4BE" }}
                      />
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center lg:justify-start"
                  >
                    <a href="#cta-form" className="inline-block">
                      <Button
                        size="lg"
                        className="group rounded-full px-8 md:px-10 min-h-[56px] md:min-h-[60px] text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all"
                        style={{
                          backgroundColor: "#FCFAC2",
                          color: "#0a0a0a",
                          border: "3px solid #0a0a0a",
                          boxShadow: "0 4px 0 #0a0a0a",
                        }}
                      >
                        Secure your enrollment
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </Button>
                    </a>
                  </motion.div>
                </div>

                {/* RIGHT: image */}
                <div className="w-full lg:w-[480px] xl:w-[560px]">
                  <div
                    className="relative overflow-hidden rounded-3xl border"
                    style={{ borderColor: "rgba(248, 255, 232, 0.12)" }}
                  >
                    <img
                      src={emptyClass}
                      alt=""
                      className="w-full h-[260px] sm:h-[320px] lg:h-[460px] object-cover"
                    />
                    {/* optional premium overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(23,50,41,0.55), transparent 60%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 360° GROWTH SERVICES SECTION (Accordion) ===== */}
      <section
        className="py-16 md:py-24 lg:py-32 px-4"
        style={{ backgroundColor: "#1e3c30" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <GreenButton>What You Get</GreenButton>
            <h2
              className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase"
              style={{ color: "#E2FEA5" }}
            >
              360° <WavyUnderline>Growth</WavyUnderline> Services
            </h2>
          </motion.div>

          {/* Accordion Categories */}
          <div className="space-y-3 md:space-y-4">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor:
                      openCategory === category.id
                        ? "rgba(248, 255, 232, 0.08)"
                        : "rgba(248, 255, 232, 0.03)",
                    border: `1px solid ${openCategory === category.id ? category.color + "40" : "rgba(248, 255, 232, 0.1)"}`,
                  }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left group min-h-[72px] md:min-h-[80px]"
                  >
                    {/* Number & Icon */}
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor:
                          openCategory === category.id
                            ? category.color + "25"
                            : "rgba(248, 255, 232, 0.05)",
                        border: `1px solid ${openCategory === category.id ? category.color + "50" : "rgba(248, 255, 232, 0.1)"}`,
                      }}
                    >
                      <category.icon
                        className="w-5 h-5 md:w-6 md:h-6"
                        style={{
                          color:
                            openCategory === category.id
                              ? category.color
                              : "rgba(248, 255, 232, 0.5)",
                        }}
                      />
                    </div>

                    {/* Title & Outcome */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-dela uppercase text-base md:text-lg lg:text-xl transition-colors duration-300"
                        style={{
                          color:
                            openCategory === category.id
                              ? category.color
                              : "#F8FFE8",
                        }}
                      >
                        {category.title}
                      </h3>
                      <p
                        className="font-bricolage text-sm md:text-base mt-1 line-clamp-1"
                        style={{ color: "rgba(248, 255, 232, 0.6)" }}
                      >
                        {category.outcome}
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${openCategory === category.id ? "rotate-180" : ""}`}
                      style={{
                        color:
                          openCategory === category.id
                            ? category.color
                            : "rgba(248, 255, 232, 0.4)",
                      }}
                    />
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {openCategory === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                          <div className="grid gap-3 md:gap-4">
                            {category.services.map((service, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 p-3 md:p-4 rounded-xl"
                                style={{
                                  backgroundColor: "rgba(248, 255, 232, 0.03)",
                                }}
                              >
                                <div
                                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                  style={{
                                    backgroundColor: category.color + "20",
                                  }}
                                >
                                  <Check
                                    className="w-3.5 h-3.5"
                                    style={{ color: category.color }}
                                  />
                                </div>
                                <div>
                                  <h4
                                    className="font-bricolage font-semibold text-sm md:text-base"
                                    style={{ color: "#F8FFE8" }}
                                  >
                                    {service.name}
                                  </h4>
                                  <p
                                    className="font-bricolage text-sm mt-0.5"
                                    style={{
                                      color: "rgba(248, 255, 232, 0.6)",
                                    }}
                                  >
                                    {service.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION - Enhanced ===== */}
      <section
        className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden"
        style={{ backgroundColor: "#253e35" }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
            style={{
              background: "radial-gradient(circle, #E2FEA5, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <GreenButton>How It Works</GreenButton>
            <h2
              className="font-dela text-3xl md:text-4xl lg:text-5xl uppercase"
              style={{ color: "#E2FEA5" }}
            >
              Three steps to more <WavyUnderline>admissions.</WavyUnderline>
            </h2>
          </motion.div>

          {/* Steps with connecting line */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* CARD */}
                  <div
                    className="rounded-3xl p-6 md:p-8 text-center h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    style={{
                      backgroundColor: "rgba(248, 255, 232, 0.03)",
                      border: "2px solid rgba(226, 254, 165, 0.15)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(226, 254, 165, 0.08), transparent 70%)",
                      }}
                    />

                    {/* Step number badge */}
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 md:mb-6 rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        backgroundColor: "rgba(226, 254, 165, 0.15)",
                        border: "2px solid rgba(226, 254, 165, 0.35)",
                        boxShadow: "0 4px 20px rgba(226, 254, 165, 0.1)",
                      }}
                    >
                      <span
                        className="font-dela text-2xl md:text-3xl"
                        style={{ color: "#E2FEA5" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-10 h-10 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(248, 255, 232, 0.05)" }}
                    >
                      <step.icon
                        className="w-5 h-5"
                        style={{ color: "rgba(248, 255, 232, 0.6)" }}
                      />
                    </div>

                    <h3
                      className="font-dela text-lg md:text-xl mb-2"
                      style={{ color: "#F8FFE8" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-bricolage text-sm"
                      style={{ color: "rgba(248, 255, 232, 0.5)" }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* 🔁 ARROW BETWEEN CARDS */}
                  {index < processSteps.length - 1 && (
                    <>
                      {/* Desktop → horizontal arrow */}
                      <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 pointer-events-none">
                        <ArrowRight
                          className="w-6 h-6"
                          style={{ color: "rgba(226, 254, 165, 0.35)" }}
                        />
                      </div>

                      {/* Mobile → vertical arrow */}
                      <div className="md:hidden absolute left-1/2 -bottom-4 translate-y-full -translate-x-1/2 pointer-events-none">
                        <ArrowRight
                          className="w-5 h-5 rotate-90"
                          style={{ color: "rgba(226, 254, 165, 0.35)" }}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA after steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 md:mt-14"
          >
            <a href="#cta-form">
              <Button
                size="lg"
                className="group rounded-full px-8 md:px-10 min-h-[56px] md:min-h-[60px] text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section
        id="cta-form"
        className="py-16 md:py-24 lg:py-32 px-4 scroll-mt-20"
        style={{ backgroundColor: "#173229" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-10"
          >
            <h2
              className="font-dela text-3xl md:text-4xl lg:text-5xl mb-3 uppercase"
              style={{ color: "#E2FEA5" }}
            >
              Stop guessing. <WavyUnderline>Start</WavyUnderline> growing.
            </h2>
            <p
              className="font-bricolage text-base md:text-lg"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              No corporate fluff. Just results.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-6 md:p-8 max-w-lg mx-auto"
              style={{
                backgroundColor: "rgba(248, 255, 232, 0.05)",
                border: "2px solid rgba(248, 255, 232, 0.1)",
              }}
            >
              <div className="space-y-4 mb-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-bricolage text-sm mb-2"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full min-h-[52px] rounded-xl font-bricolage text-base"
                    style={{
                      backgroundColor: "rgba(248, 255, 232, 0.05)",
                      border: "1px solid rgba(248, 255, 232, 0.2)",
                      color: "#F8FFE8",
                    }}
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bricolage text-sm mb-2"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full min-h-[52px] rounded-xl font-bricolage text-base"
                    style={{
                      backgroundColor: "rgba(248, 255, 232, 0.05)",
                      border: "1px solid rgba(248, 255, 232, 0.2)",
                      color: "#F8FFE8",
                    }}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Field with +91 prefix */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-bricolage text-sm mb-2"
                    style={{ color: "rgba(248, 255, 232, 0.7)" }}
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <div
                      className="flex items-center justify-center px-4 rounded-l-xl border-y border-l font-bricolage text-base"
                      style={{
                        backgroundColor: "rgba(248, 255, 232, 0.08)",
                        borderColor: "rgba(248, 255, 232, 0.2)",
                        color: "rgba(248, 255, 232, 0.7)",
                      }}
                    >
                      +91
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      className="w-full min-h-[52px] rounded-l-none rounded-r-xl font-bricolage text-base"
                      style={{
                        backgroundColor: "rgba(248, 255, 232, 0.05)",
                        border: "1px solid rgba(248, 255, 232, 0.2)",
                        color: "#F8FFE8",
                      }}
                      placeholder="9876543210"
                    />
                  </div>
                  <p
                    className="font-bricolage text-xs mt-1.5"
                    style={{ color: "rgba(248, 255, 232, 0.4)" }}
                  >
                    Enter 10 digit mobile number
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full min-h-[56px] text-base font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-70"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
              >
                {isSubmitting ? "Sending..." : "Secure your enrollment"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="mt-5 text-center">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: "rgba(226, 254, 165, 0.1)",
                    border: "1px solid rgba(226, 254, 165, 0.2)",
                  }}
                >
                  <Check
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "#E2FEA5" }}
                  />
                  <span
                    className="font-bricolage text-sm"
                    style={{ color: "#E2FEA5" }}
                  >
                    One Goal: Your Admissions.
                  </span>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Spacer for fixed mobile CTA */}
      <div className="h-20 md:hidden" style={{ backgroundColor: "#173229" }} />

      <EnhancedFooter />
    </div>
  );
};

export default HigherEducationMarketing;
