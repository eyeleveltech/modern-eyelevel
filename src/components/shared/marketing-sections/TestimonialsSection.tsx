import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialsSection = ({
  testimonials,
  accentColor,
}: {
  testimonials: Testimonial[];
  accentColor?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GreenButton>Client Success</GreenButton>
          <h2
            className={`font-dela text-4xl md:text-5xl lg:text-6xl uppercase mt-6 ${!accentColor ? "text-primary" : ""}`}
            style={accentColor ? { color: accentColor } : undefined}
          >
            What They <WavyUnderline>Say</WavyUnderline>
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                y: activeIndex === index ? 0 : 20,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${activeIndex === index ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <div
                className="h-full rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center bg-card/5"
                style={{
                  border: `2px solid ${accentColor || '#E2FEA5'}30`,
                }}
              >
                {/* Quote Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${accentColor || '#E2FEA5'}20` }}
                >
                  <Quote className={`w-8 h-8 ${!accentColor ? "text-primary" : ""}`} style={accentColor ? { color: accentColor } : undefined} />
                </div>

                {/* Quote Text */}
                <p className="font-bricolage text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 max-w-3xl text-foreground">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <p
                    className={`font-dela text-lg md:text-xl mb-1 ${!accentColor ? "text-primary" : ""}`}
                    style={accentColor ? { color: accentColor } : undefined}
                  >
                    {testimonial.author}
                  </p>
                  <p className="font-bricolage text-sm md:text-base text-foreground/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${!accentColor && activeIndex === index ? "bg-primary" : activeIndex !== index ? "bg-card/20" : ""}`}
              style={{
                backgroundColor: activeIndex === index && accentColor ? accentColor : undefined,
                transform: activeIndex === index ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


