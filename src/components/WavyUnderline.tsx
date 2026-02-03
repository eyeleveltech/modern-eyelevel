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
        className="absolute left-1/2 -bottom-2 -translate-x-1/2"
        width="80%"
        height="8"                 // ✅ static height
        viewBox="0 0 200 8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.path
          d="M0 4 Q50 0, 100 4 T200 4"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.svg>
    </span>
  );
};

export default WavyUnderline;
