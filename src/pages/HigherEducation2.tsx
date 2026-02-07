import Header from "@/components/Header";
import React from "react";
import img from "@/assets/industries/edulanding.png";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WavyUnderline from "@/components/WavyUnderline";
import { motion, AnimatePresence } from "framer-motion";

const HigherEducation2 = () => {
  return (
    <div className="min-h-[100vh] bg-background flex items-end p-4">
      <Header />
      <div
        className="
      w-full"
      >
        <div className="flex items-center justify-between w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dela text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.1] uppercase text-[#E2FEA5]"
          >
            From Visibility to <WavyUnderline>Admissions</WavyUnderline>
          </motion.h1>
          <div className="max-w-lg flex flex-col items-center justify-end gap-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bricolage text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(248, 255, 232, 0.85)" }}
            >
              We help higher education institutes boost enrollment and build
              brand authority with zero confusion.
            </motion.p>
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
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full h-[300px] mt-10"
        >
          <img src={img} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default HigherEducation2;
