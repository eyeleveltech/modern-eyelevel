import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";


export const BigStatsSection = ({
  stats,
  accentColor,
}: {
  stats: { value: string; label: string; prefix?: string; suffix?: string }[];
  accentColor?: string;
}) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-forest-deep">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-dela text-4xl md:text-5xl lg:text-6xl mb-3">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  accentColor={accentColor}
                />
              </div>
              <p className="font-bricolage text-sm md:text-base uppercase tracking-wider text-foreground/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  accentColor,
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  accentColor?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(numericValue * easeOut);
        setDisplayValue(current.toString());

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(value.replace(/[^0-9]/g, ""));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={!accentColor ? "text-primary" : ""} style={accentColor ? { color: accentColor } : undefined}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};



