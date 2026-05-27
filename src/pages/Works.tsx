import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Play } from "lucide-react";
import Header from "@/components/layout/Header";
import EnhancedFooter from "@/components/layout/EnhancedFooter";
import { Button } from "@/components/ui/button";

// images

import print_2 from "@/assets/works/print_2.jpeg";
import print_3 from "@/assets/works/print_3.jpeg";

import brand_1 from "@/assets/works/brand_1.jpeg";
import brand_2 from "@/assets/works/brand_2.jpeg";

import brand_4 from "@/assets/works/brand_4.jpeg";
import brand_5 from "@/assets/works/brand_5.jpeg";
import brand_6 from "@/assets/works/brand_6.jpeg";
import brand_7 from "@/assets/works/brand_7.jpeg";

import social_1 from "@/assets/works/social_media_1.jpeg";
import social_2 from "@/assets/works/social_media_2.jpeg";
import social_3 from "@/assets/works/social_media_3.jpeg";

import web_1 from "@/assets/works/web_1.jpeg";
import web_2 from "@/assets/works/web_2.jpeg";

import shoot_1 from "@/assets/works/shoot_1.jpeg";

type Category =
  | "Social Media"
  | "Branding"
  | "Print"
  | "Website"
  | "Photo Shoot"
  | "Videos"
  | "Events";

interface Work {
  id: string;
  title: string;
  description: string;
  category: Category;
  type: "image" | "video";
  src: string;
  orientation: "portrait" | "landscape";
  url?: string; // external link (e.g. websites)
}

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Social Media",
  "Branding",
  "Print",
  "Website",
  "Photo Shoot",
  "Videos",
  "Events",
];

const getWorkAspectClass = (orientation: Work["orientation"]) =>
  orientation === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";

const interleaveByOrientation = (works: Work[]) => {
  const portrait = works.filter((work) => work.orientation === "portrait");
  const landscape = works.filter((work) => work.orientation === "landscape");
  const primary = portrait.length >= landscape.length ? portrait : landscape;
  const secondary = primary === portrait ? landscape : portrait;

  return primary.flatMap((work, index) =>
    secondary[index] ? [work, secondary[index]] : [work],
  );
};

const WORKS: Work[] = [
  {
    id: "w1",
    title: "Mascot & Sports Branding Design",
    description:
      "A custom mascot and brand environment created for an energetic pickleball sports experience.",
    category: "Branding",
    type: "image",
    src: brand_1,
    orientation: "portrait",
  },

  {
    id: "w2",
    title: "Wishlist App Flyer Design",
    description:
      "A promotional flyer designed for the Pickabuuu wishlist app launch campaign.",
    category: "Print",
    type: "image",
    src: print_2,
    orientation: "portrait",
  },
  {
    id: "w3",
    title: "Healthcare Awareness Flyer Design",
    description:
      "A healthcare flyer designed for a dialysis awareness and support initiative.",
    category: "Print",
    type: "image",
    src: print_3,
    orientation: "portrait",
  },
  {
    id: "w4",
    title: "Business Card Mock-up Design",
    description:
      "A premium business card mock-up for brand identity presentation.",
    category: "Branding",
    type: "image",
    src: brand_2,
    orientation: "landscape",
  },

  {
    id: "w5",
    title: "Wellness Brand Business Card Design",
    description:
      "A premium business card design for a wellness and aesthetic brand.",
    category: "Branding",
    type: "image",
    src: brand_4,
    orientation: "landscape",
  },
  {
    id: "w6",
    title: "Outdoor Billboard Branding Design",
    description:
      "A billboard branding design created for a healthcare and wellness brand launch campaign.",
    category: "Branding",
    type: "image",
    src: brand_5,
    orientation: "portrait",
  },
  {
    id: "w7",
    title: "Pickleball Court Branding Design",
    description:
      "A vibrant court branding design created for a pickleball sports experience.",
    category: "Branding",
    type: "image",
    src: brand_6,
    orientation: "landscape",
  },
  {
    id: "w8",
    title: "Sports League Launch Campaign",
    description:
      "A social media campaign designed for a pickleball league launch announcement.",
    category: "Social Media",
    type: "image",
    src: social_2,
    orientation: "portrait",
  },
 
  {
    id: "w9",
    title: "Real Estate Brochure Design",
    description: "A premium brochure cover design for a real estate project.",
    category: "Branding",
    type: "image",
    src: brand_7,
    orientation: "landscape",
  },
  {
    id: "w10",
    title: "Luxury Product Photoshoot",
    description:
      "A premium product photoshoot for a luxury fragrance gift box collection.",
    category: "Photo Shoot",
    type: "image",
    src: shoot_1,
    orientation: "portrait",
  },
  {
    id: "w11",
    title: "Responsive Website Mock-up Design",
    description:
      "A responsive website mock-up designed for a luxury real estate brand.",
    category: "Website",
    type: "image",
    src: web_1,
    orientation: "landscape",
  },
  {
    id: "w12",
    title: "E-commerce Website Mock-up",
    description:
      "A creative website mock-up designed for an online lifestyle brand.",
    category: "Website",
    type: "image",
    src: web_2,
    orientation: "landscape",
  },
  {
    id: "w13",
    title: "Kombucha Social Media Campaign",
    description: "A social media creative for a kombucha wellness brand.",
    category: "Social Media",
    type: "image",
    src: social_1,
    orientation: "landscape",
  },
];

const Works = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const visibleWorks = active === "All"
      ? WORKS
      : WORKS.filter((w) => w.category === active);

    return interleaveByOrientation(visibleWorks);
  }, [active]);

  const open = openId ? (WORKS.find((w) => w.id === openId) ?? null) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-10 md:mb-14">
            <p className="font-bricolage text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Selected Works
            </p>
            <h1 className="font-dela text-primary text-4xl md:text-6xl leading-[1.05] mb-4">
              Work we're proud of.
            </h1>
            <p className="font-bricolage text-base md:text-lg text-muted-foreground max-w-2xl">
              A curated mix of campaigns, brands, sites, films and events. Tap
              any card to view in detail.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full font-bricolage text-sm transition-all border-2 ${
                    isActive
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-foreground/15 hover:border-foreground/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filtered.map((w) => (
                <motion.div
                  layout
                  key={w.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                  className="mb-5 break-inside-avoid"
                >
                  <button
                    onClick={() => setOpenId(w.id)}
                    className="group block w-full overflow-hidden rounded-2xl bg-secondary text-left"
                  >
                    <div
                      className={`relative overflow-hidden bg-muted ${getWorkAspectClass(
                        w.orientation,
                      )}`}
                    >
                      {/* Category tag — top-left overlay */}
                      <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-background/85 backdrop-blur-sm font-bricolage text-xs uppercase tracking-[0.18em] text-foreground border border-foreground/10">
                        {w.category}
                      </span>
                      {w.type === "video" ? (
                        <>
                          <video
                            src={w.src}
                            muted
                            playsInline
                            loop
                            preload="metadata"
                            onMouseEnter={(e) =>
                              e.currentTarget.play().catch(() => {})
                            }
                            onMouseLeave={(e) => {
                              e.currentTarget.pause();
                              e.currentTarget.currentTime = 0;
                            }}
                            className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                            <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                              <Play className="w-6 h-6 ml-0.5" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <img
                          src={w.src}
                          alt={w.title}
                          loading="lazy"
                          className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      )}
                    </div>

                    {/* Caption frame — visually attached below image */}
                    <div className="border-2 border-t-0 border-secondary-foreground/10 bg-secondary pt-5 px-5 pb-5 text-secondary-foreground">
                      <h3 className="font-dela text-lg leading-snug mb-1.5 text-secondary-foreground">
                        {w.title}
                      </h3>
                      <p className="font-bricolage text-sm text-secondary-foreground/75 leading-relaxed">
                        {w.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenId(null)}
          >
            <button
              onClick={() => setOpenId(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-center overflow-hidden rounded-2xl bg-black">
                {open.type === "video" ? (
                  <video
                    src={open.src}
                    controls
                    autoPlay
                    className="max-h-[75vh] w-auto max-w-full"
                  />
                ) : (
                  <img
                    src={open.src}
                    alt={open.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                )}
              </div>

              <div className="w-full mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-white">
                <div>
                  <p className="font-bricolage text-xs uppercase tracking-[0.18em] text-white/60 mb-1">
                    {open.category}
                  </p>
                  <h3 className="font-dela text-2xl md:text-3xl mb-1">
                    {open.title}
                  </h3>
                  <p className="font-bricolage text-sm md:text-base text-white/75 max-w-2xl">
                    {open.description}
                  </p>
                </div>
                {open.url && (
                  <a href={open.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="lime" className="gap-2">
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EnhancedFooter mascotBgClass="bg-secondary" />
    </div>
  );
};

export default Works;



