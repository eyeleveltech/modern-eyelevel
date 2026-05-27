import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Zap,
  TrendingUp,
  Lightbulb,
  Palette,
  Bot,
  BarChart3,
} from "lucide-react";
import WavyUnderline from "@/components/shared/WavyUnderline";
import Eyeball from "@/components/shared/Eyeball";
import GreenButton from "@/components/shared/GreenButton";
const WhatWeDo = () => {
  const services = [
    {
      icon: Target,
      label: "Strategy",
    },
    {
      icon: Palette,
      label: "Creative",
    },
    {
      icon: Bot,
      label: "AI",
    },
    {
      icon: BarChart3,
      label: "Performance Marketing",
    },
  ];
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 overflow-hidden relative md:py-[28px] bg-secondary"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Headline with Eye Animation */}
        <div className="text-center mb-16 md:mb-24">
          <GreenButton>The EyeLevel Difference</GreenButton>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="font-dela text-3xl md:text-5xl text-primary lg:text-6xl leading-[1.1] mb-6 uppercase"
          >
            Built on {"  "}
            <WavyUnderline className="mb-6">proof !!</WavyUnderline> <br />{" "}
            <span>not guesswork.</span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: The Unblinking Eye Visualization */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer rings */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-white/10"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[10%] rounded-full border border-white/20"
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[20%] rounded-full border border-white/30"
              />

              {/* The Eye */}
              <div className="absolute inset-[25%] flex items-center justify-center">
                <Eyeball />
              </div>

              {/* Floating icons around the eye */}
              {[
                {
                  Icon: Zap,
                  position: "top-0 left-1/2 -translate-x-1/2",
                  delay: 0,
                },
                {
                  Icon: Target,
                  position: "right-0 top-1/2 -translate-y-1/2",
                  delay: 0.2,
                },
                {
                  Icon: TrendingUp,
                  position: "bottom-0 left-1/2 -translate-x-1/2",
                  delay: 0.4,
                },
                {
                  Icon: Lightbulb,
                  position: "left-0 top-1/2 -translate-y-1/2",
                  delay: 0.6,
                },
              ].map(({ Icon, position, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.5 + delay,
                    duration: 0.4,
                  }}
                  className={`absolute ${position}`}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-12 h-12 rounded-xl bg-background border border-white/10 shadow-lg flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-8"
          >
            {/* Contrast cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Gurus Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-red-500/30 text-4xl font-bold">
                  ✕
                </div>
                <h3 className="text-sm font-semibold font-bricolage text-red-400 mb-2">
                  Marketing "Wizards"
                </h3>
                <p className="text-xs font-bricolage text-foreground/60">
                  Magic tricks & guesswork
                </p>
              </motion.div>

              {/* EyeLevel Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="p-5 rounded-2xl bg-primary/10 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-4xl font-bold text-primary/30">
                  ✓
                </div>
                <h3 className="text-sm font-semibold font-bricolage mb-2 text-primary">
                  EyeLevel
                </h3>
                <p className="text-xs font-bricolage text-foreground/60">
                  Engineering & precision
                </p>
              </motion.div>
            </div>

            {/* Body Copy */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
              }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl font-bricolage leading-relaxed text-foreground">
                We find the whole "marketing wizard" charade{" "}
                <span className="font-semibold text-primary">
                  exhausting
                </span>
                , and we know you do too.
              </p>
              <p className="text-base md:text-lg font-bricolage leading-relaxed text-foreground/70">
                EyeLevel doesn't do magic tricks; we do{" "}
                <span className="font-medium text-foreground">
                  engineering
                </span>
                . With the focus of a single, unblinking eye, we see the missed
                opportunities others ignore. We are the filter for the
                industry's theatrics, turning your confused operations into a{" "}
                <span className="font-medium text-primary">
                  growth engine
                </span>{" "}
                that actually performs.
              </p>
            </motion.div>

            {/* Services Pills */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
              }}
              className="space-y-4"
            >
              <p className="text-sm font-medium font-bricolage uppercase tracking-wider text-foreground/60">
                We help ambitious brands dominate with:
              </p>
              <div className="flex flex-wrap gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background border border-white/10 shadow-sm hover:border-white/30 hover:shadow-md transition-all cursor-default"
                  >
                    <service.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium font-bricolage text-foreground">
                      {service.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* The Eye Icon */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.8,
              }}
              className="flex items-center gap-3 pt-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <Eye className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-md font-bricolage italic text-primary">
                One Focused Eye. Infinite Possibilities.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;


