import { motion } from "framer-motion";

export const ClientLogosMarquee = () => {
  const logos = [
    "University of Excellence",
    "Premier Academy",
    "Global Institute",
    "Tech University",
    "Business School",
    "Medical College",
    "Engineering Hub",
    "Creative Arts Academy",
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-forest-deep">
      <div className="flex items-center">
        {/* Trusted By Label */}
        <div className="shrink-0 px-8 py-4 font-bricolage text-sm uppercase tracking-wider text-foreground/50">
          Trusted By
        </div>

        {/* Scrolling Logos */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={index}
                className="font-dela text-xl md:text-2xl opacity-30 hover:opacity-70 transition-opacity cursor-default text-foreground"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none bg-gradient-to-r from-forest-950 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none bg-gradient-to-l from-forest-950 to-transparent" />
    </section>
  );
};


