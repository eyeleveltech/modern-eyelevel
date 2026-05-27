import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import GreenButton from "@/components/shared/GreenButton";
import WavyUnderline from "@/components/shared/WavyUnderline";

export interface GalleryImage {
  src: string;
  alt: string;
}

export const ImageGallerySection = ({
  images,
  title = "Our Work in Action",
  subtitle = "Real results from real clients",
  accentColor,
  colorTitle = "Our Work in ",
  underlineTitle = "Action",
}: {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  accentColor?: string;
  colorTitle?: string;
  underlineTitle?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 relative overflow-hidden bg-background"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GreenButton>Portfolio</GreenButton>
          <h2
            className={`font-dela text-4xl md:text-5xl lg:text-6xl mb-4 uppercase mt-6 ${!accentColor ? "text-primary" : ""}`}
            style={accentColor ? { color: accentColor } : undefined}
          >
            {colorTitle} <span> </span>
            <WavyUnderline>{underlineTitle}</WavyUnderline>
          </h2>
          <p className="font-bricolage text-lg max-w-2xl mx-auto text-foreground/70">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Creative Image Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 items-stretch">
          <motion.div className="col-span-12 md:col-span-7 row-span-2 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full rounded-3xl overflow-hidden group"
            >
              <img loading="lazy"
                src={images[0]?.src}
                alt={images[0]?.alt}
                title={images[0]?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor || '#E2FEA5'}40, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="col-span-6 md:col-span-5 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative h-full rounded-3xl overflow-hidden group"
            >
              <img loading="lazy"
                src={images[1]?.src}
                alt={images[1]?.alt}
                title={images[1]?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor || '#E2FEA5'}40, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div className="col-span-6 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden group"
            >
              <img loading="lazy"
                src={images[2]?.src}
                alt={images[2]?.alt}
                title={images[2]?.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, ${accentColor || '#E2FEA5'}40, transparent 50%)`,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className={`absolute -bottom-20 -left-20 w-40 h-40 opacity-10 ${!accentColor ? "text-primary" : ""}`}
        style={accentColor ? { color: accentColor } : undefined}
      >
        <Star className="w-full h-full" />
      </motion.div>
    </section>
  );
};


