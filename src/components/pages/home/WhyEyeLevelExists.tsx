import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Pencil, Brain, Users, Zap, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import mascot from "@/assets/mascot/Mascot_pen.png";

export default function WhyEyeLevelExists() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#E2FEA5 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 el-reveal">

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-12 items-center">
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="max-w-2xl pr-0 lg:pr-8">
            <GreenButton>WHY EYELEVEL</GreenButton>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-dela text-3xl md:text-4xl text-primary uppercase text-foreground mb-8 leading-[1.05] tracking-wide"
            >
              Most marketing agencies are built to bill.<WavyUnderline>EyeLevel is built to grow.</WavyUnderline>
            </motion.h2>

            {/* Body Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bricolage text-sm md:text-base text-foreground/70 space-y-6 leading-relaxed"
            >
              <p>
                EyeLevel is a <span className="text-primary font-medium">digital marketing agency in Chennai</span> that runs strategy, performance, content, and AI as one connected system. Not three vendors. Not three invoices. One studio.
              </p>
              <p>
                Every retainer pads. Every report obscures. Every campaign looks busier than it works. That isn't a few bad <span className="text-primary font-medium">agencies in India</span>. That's how the industry is structured.
              </p>
              <p>
                EyeLevel was built differently. Senior marketers run every strategy. AI-native production handles the speed and scale. <span className="text-primary font-medium">One team. One P&L. One accountability line.</span>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link to="/works">
                <Button size="lg" variant="neo" className="group px-8 py-6 text-base font-bricolage">
                  See how we work
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - MASCOT & BADGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] flex items-center justify-center w-full mt-10 lg:mt-0"
          >
            {/* Fake Chart Line Background */}
            <svg className="absolute inset-0 w-full h-full opacity-30 text-primary pointer-events-none" viewBox="0 0 500 300" preserveAspectRatio="none">
              <path d="M0,250 C100,240 150,180 250,180 C350,180 400,100 500,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M480,50 L500,50 L500,70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Center Mascot Placeholder */}
            <div className="relative z-20 flex flex-col items-center justify-center w-86 h-64 border-2 border-dashed border-primary/40 rounded-2xl bg-primary/5 backdrop-blur-sm text-primary font-bricolage text-center p-4">
              <img src={mascot} alt="Mascot" className="object-cover w-full h-full rounded-lg" />
            </div>

            {/* Floating Badges */}
            <div className="absolute top-10 left-4 md:left-10 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-xl z-30 transform -rotate-2">
              <Target className="w-8 h-8 text-primary" />
              <span className="text-[10px] font-bold font-bricolage tracking-widest text-foreground">STRATEGY</span>
            </div>

            <div className="absolute top-4 right-4 md:right-10 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-xl z-30 transform rotate-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              <span className="text-[10px] font-bold font-bricolage tracking-widest text-foreground">PERFORMANCE</span>
            </div>

            <div className="absolute bottom-12 left-0 md:left-8 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-xl z-30 transform rotate-2">
              <Pencil className="w-8 h-8 text-primary" />
              <span className="text-[10px] font-bold font-bricolage tracking-widest text-foreground">CONTENT</span>
            </div>

            <div className="absolute bottom-10 right-0 md:right-4 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-4 flex flex-col items-center gap-2 shadow-xl z-30 transform -rotate-3">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-[10px] font-bold font-bricolage tracking-widest text-foreground">AI-NATIVE</span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM FEATURE BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 md:mt-28 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-md p-6 md:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-white/10 text-center font-bricolage">

            <div className="flex flex-col items-center gap-4 p-4">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-sm md:text-base text-foreground/80 leading-snug max-w-[150px]">Senior Marketers Drive Strategy</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-4">
              <Zap className="w-8 h-8 text-primary" />
              <span className="text-sm md:text-base text-foreground/80 leading-snug max-w-[150px]">AI-Native Production For Speed & Scale</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-sm md:text-base text-foreground/80 leading-snug max-w-[150px]">One Team.<br />One P&L.</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-4">
              <Target className="w-8 h-8 text-primary" />
              <span className="text-sm md:text-base text-foreground/80 leading-snug max-w-[150px]">One Accountability Line.</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
