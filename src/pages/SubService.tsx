import { useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import WavyUnderline from "@/components/shared/WavyUnderline";
import { AnimatedHeroHeading } from "@/components/shared/AnimatedHeroHeading";
import GreenButton from "@/components/shared/GreenButton";
import { Star18 } from "@/components/shared/Star18";
import SEO from "@/components/utils/SEO";
import { Button } from "@/components/ui/button";
import { subServicesData } from "@/data/subServices";

const SubService = () => {
  const { categorySlug, subServiceSlug } = useParams<{ categorySlug: string; subServiceSlug: string }>();
  const data = subServicesData[subServiceSlug || ""];
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  // Pre-process title into words for AnimatedHeroHeading
  // We'll just split by space. And add a WavyUnderline to the last word.
  const titleWords = data.title.split(" ");
  const lastWord = titleWords.pop() || "";
  
  const animatedWords = [
    ...titleWords.map(word => word.toUpperCase()),
    <WavyUnderline key="wavy">{lastWord.toUpperCase()}</WavyUnderline>
  ];

  return (
    <div className="min-h-screen bg-background overflow-clip">
      <SEO
        title={`${data.title} | ${data.category} | Eyelevel Growth Studio`}
        description={data.heroDescription}
      />
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] lg:min-h-[85vh] flex items-center px-4 overflow-hidden bg-secondary pt-40 pb-[100px]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-forest-dark/60 pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <GreenButton>SERVICES / {data.category.toUpperCase()} / {data.title.toUpperCase()}</GreenButton>
          </motion.div>

          <AnimatedHeroHeading words={animatedWords} />
          
          <div className="w-20 h-1 opacity-50 bg-primary my-8 rounded-full mx-auto"></div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="font-bricolage text-lg max-w-3xl mx-auto mb-10 leading-relaxed text-foreground"
          >
            {data.heroDescription}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center rounded-full relative font-bricolage z-50 justify-start gap-4"
          >
            <Link to="/booking">
              <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full group overflow-hidden relative">
                <span className="relative z-10">Book a free 30-min diagnostic</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features/Details Section */}
      <section className="px-4 sm:px-10 md:px-20 bg-background relative z-10 py-20 md:py-[100px]">
        <div className="w-full max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-dela uppercase text-primary text-2xl md:text-4xl lg:text-5xl mb-6"
          >
            OUR <WavyUnderline>APPROACH</WavyUnderline>
          </motion.h2>
          <p className="font-bricolage text-lg text-muted-foreground">
            Everything we do for {data.title} to drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {data.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-secondary/30 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/5 group relative overflow-hidden flex items-start gap-4 transition-all duration-300 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-dela text-xl text-foreground mb-2">{feature}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="w-full max-w-5xl mx-auto mt-16 text-center">
           <Link to={`/services/${data.categorySlug}`}>
             <Button variant="outline" className="h-12 px-6 rounded-full font-bricolage border-primary/20 hover:bg-primary/5 hover:text-primary transition-all">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to {data.category}
             </Button>
           </Link>
        </div>
      </section>

      <EnhancedFooter mascotBgClass="bg-background" showCTA={false} />
    </div>
  );
};

export default SubService;
