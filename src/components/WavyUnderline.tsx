import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WavyUnderline = ({ children, color = "#fff", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <span className={`relative inline-block ${className}`}>
      <span style={{ color }}>{children}</span>

      <svg
        ref={ref}
        className="absolute left-1/2 -bottom-2 -translate-x-1/2"
        width="80%"
        height="8"
        viewBox="0 0 200 8"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", transform: "translateZ(0)" }}
      >
        <motion.path
          d="M0 4 Q50 0, 100 4 T200 4"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          style={{ strokeDasharray: 1 }}
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
};

export default WavyUnderline;