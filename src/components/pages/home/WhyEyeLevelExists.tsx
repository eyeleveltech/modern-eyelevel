import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Pencil, Brain, Users, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/shared/WavyUnderline";
import GreenButton from "@/components/shared/GreenButton";
import mascot from "@/assets/mascot/Mascot_pen.png";

export default function WhyEyeLevelExists() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#E2FEA5 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 el-reveal">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-12 items-center">

          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="max-w-2xl pr-0 lg:pr-4">
            <GreenButton>WHY EYELEVEL</GreenButton>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-dela text-3xl md:text-4xl text-primary lg:text-[40px] font-lime text-foreground uppercase mb-6 leading-[1.1] tracking-wide"
            >
              Most marketing agencies are built to bill.<span className="text-white">EyeLevel is built to <WavyUnderline>grow.</WavyUnderline></span>
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

          {/* RIGHT COLUMN - MASCOT & STATS */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full mt-12 lg:mt-0">

            {/* Mascot Graphic Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] flex items-center justify-center max-w-[550px] mx-auto"
            >
              {/* SVG Background Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 450" preserveAspectRatio="xMidYMid meet">

                {/* Dashed lines */}
                <g stroke="#E2FEA5" strokeWidth="1.5" fill="none" strokeDasharray="4 4" className="opacity-40">
                  {/* Content to Strategy (Left) */}
                  <path d="M 94 383 L 40 383 L 40 68 L 84 68" />
                  {/* Strategy to Performance (Top) */}
                  <path d="M 206 68 L 384 68" />
                  {/* AI-Native to Performance (Right) */}
                  <path d="M 506 383 L 560 383 L 560 68 L 516 68" />
                </g>

                {/* Solid Arrows for Dashed Lines */}
                <g stroke="#E2FEA5" strokeWidth="1.5" fill="none" className="opacity-60">
                  <path d="M 76 63 L 84 68 L 76 73" />
                  <path d="M 376 63 L 384 68 L 376 73" />
                  <path d="M 524 63 L 516 68 L 524 73" />
                </g>

                {/* Thick Chart Line */}
                <path
                  d="M -20 420 L 180 310 L 280 290 L 430 150 L 580 110"
                  fill="none"
                  stroke="#E2FEA5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90 drop-shadow-[0_0_12px_rgba(226,254,165,0.6)]"
                />
                {/* Chart Line Arrow */}
                <path
                  d="M 563 104 L 580 110 L 568 124"
                  fill="none"
                  stroke="#E2FEA5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90 drop-shadow-[0_0_12px_rgba(226,254,165,0.6)]"
                />
              </svg>

              {/* Center Mascot */}
              <div className="relative z-20 w-40 h-40 md:w-56 md:h-56 xl:w-64 xl:h-64 flex items-center justify-center">
                <img src={mascot} alt="Mascot" className="object-contain w-full h-full drop-shadow-2xl" />
              </div>

              {/* Box 1: Strategy */}
              <div className="absolute top-[15%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-3 md:p-4 w-24 md:w-28 flex flex-col items-center justify-center gap-2 shadow-xl z-30 transition-transform hover:scale-105">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[9px] md:text-[10px] font-bold font-bricolage tracking-widest text-foreground text-center">STRATEGY</span>
              </div>

              {/* Box 2: Performance */}
              <div className="absolute top-[15%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-3 md:p-4 w-24 md:w-28 flex flex-col items-center justify-center gap-2 shadow-xl z-30 transition-transform hover:scale-105">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[9px] md:text-[10px] font-bold font-bricolage tracking-widest text-foreground text-center">PERFORMANCE</span>
              </div>

              {/* Box 3: Content */}
              <div className="absolute top-[85%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-3 md:p-4 w-24 md:w-28 flex flex-col items-center justify-center gap-2 shadow-xl z-30 transition-transform hover:scale-105">
                <Pencil className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[9px] md:text-[10px] font-bold font-bricolage tracking-widest text-foreground text-center">CONTENT</span>
              </div>

              {/* Box 4: AI-Native */}
              <div className="absolute top-[85%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl p-3 md:p-4 w-24 md:w-28 flex flex-col items-center justify-center gap-2 shadow-xl z-30 transition-transform hover:scale-105">
                <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                <span className="text-[9px] md:text-[10px] font-bold font-bricolage tracking-widest text-foreground text-center">AI-NATIVE</span>
              </div>
            </motion.div>

            {/* Bottom Feature Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-white/10 rounded-[1.5rem] bg-white/5 backdrop-blur-md max-w-[550px] mx-auto w-full z-20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center font-bricolage relative py-4 px-2">

                {/* Vertical dividers for md+ */}
                <div className="hidden md:block absolute top-1/2 left-1/4 w-px h-12 bg-white/10 -translate-y-1/2" />
                <div className="hidden md:block absolute top-1/2 left-2/4 w-px h-12 bg-white/10 -translate-y-1/2" />
                <div className="hidden md:block absolute top-1/2 left-3/4 w-px h-12 bg-white/10 -translate-y-1/2" />

                {/* Horizontal divider for mobile */}
                <div className="md:hidden absolute top-1/2 left-4 right-4 h-px bg-white/10 -translate-y-1/2" />
                {/* Vertical divider for mobile */}
                <div className="md:hidden absolute top-4 bottom-4 left-1/2 w-px bg-white/10 -translate-x-1/2" />

                <div className="flex flex-col items-center justify-start gap-2 px-1">
                  <Users className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-[10px] xl:text-[11px] text-foreground/80 leading-snug">Senior Marketers<br />Drive Strategy</span>
                </div>
                <div className="flex flex-col items-center justify-start gap-2 px-1">
                  <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-[10px] xl:text-[11px] text-foreground/80 leading-snug">AI-Native Production<br />For Speed & Scale</span>
                </div>
                <div className="flex flex-col items-center justify-start gap-2 px-1">
                  <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-[10px] xl:text-[11px] text-foreground/80 leading-snug">One Team.<br />One P&L.</span>
                </div>
                <div className="flex flex-col items-center justify-start gap-2 px-1">
                  <Target className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-[10px] xl:text-[11px] text-foreground/80 leading-snug">One Accountability<br />Line.</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
