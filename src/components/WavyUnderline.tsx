import { motion } from "framer-motion";

interface WavyUnderlineProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const WavyUnderline = ({
  children,
  color = "#ffffff",
  className = "",
}: WavyUnderlineProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Text */}
      <span style={{ color }}>{children}</span>

      {/* Underline */}
      <motion.svg
        className="absolute left-1/2 -bottom-2 md:-bottom-3 -translate-x-1/2"
        width="80%" // Changed to 100% to match container width better
        height="12" // Increased slightly to prevent clipping of thick strokes
        viewBox="0 0 200 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // Added preserveAspectRatio to let the wave stretch naturally
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 4 Q50 0, 100 4 T200 4"
          stroke={color}
          strokeWidth="2" // Slightly thinner looks cleaner on mobile, adjust as needed
          strokeLinecap="round"
          strokeLinejoin="round"
          // Animation props belong ONLY here
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </span>
  );
};

export default WavyUnderline;
