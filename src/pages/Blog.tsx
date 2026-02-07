import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GreenButton from "@/components/GreenButton";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import blogImage1 from "@/assets/blogImages/blog1.jpg";
import blogImage2 from "@/assets/blogImages/blog2.jpg";
import blogImage3 from "@/assets/blogImages/blog3.jpg";
import blogImage4 from "@/assets/blogImages/blog4.jpg";
import blogImage5 from "@/assets/blogImages/blog5.jpg";
import blogImage6 from "@/assets/blogImages/blog6.jpg";

import WavyUnderline from "@/components/WavyUnderline";
import SEO from "@/components/SEO";

// Decorative star
const Star4 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const AnimatedStar = ({
  className,
  delay = 0,
  color = "#E2FEA5",
}: {
  className?: string;
  delay?: number;
  color?: string;
}) => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{
      scale: [0.5, 1, 0.8, 1],
      opacity: [0, 1, 0.7, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: 2 }}
    className={className}
    style={{ color }}
  >
    <Star4 className="w-full h-full" />
  </motion.div>
);

const categories = [
  "Latest Blogs",
  "AI",
  "Artificial Intelligence",
  "Branding",
  "Design Chit Chat",
  "Design Principles",
  "Design Process",
  "Design Strategies",
  "Design Career",
];

const blogPosts = [
  {
    id: 1,
    slug: "how-ai-is-transforming-marketing-in-2026",
    title: "How AI is Transforming Marketing in 2026",
    excerpt:
      "Discover the latest AI tools and strategies that are revolutionizing how brands connect with their audiences.",
    category: "AI",
    image: blogImage1,
    date: "Jan 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "the-psychology-of-color-in-branding",
    title: "The Psychology of Color in Branding",
    excerpt:
      "Learn how color choices impact consumer perception and brand recognition in the digital age.",
    category: "Branding",
    image: blogImage2,
    date: "Jan 3, 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "building-a-design-system-that-scales",
    title: "Building a Design System That Scales",
    excerpt:
      "A comprehensive guide to creating design systems that grow with your organization.",
    category: "Design Process",
    image: blogImage3,
    date: "Dec 28, 2025",
    readTime: "10 min read",
  },
  {
    id: 4,
    slug: "the-future-of-performance-marketing",
    title: "The Future of Performance Marketing",
    excerpt:
      "Explore emerging trends and technologies shaping the future of data-driven marketing.",
    category: "Design Strategies",
    image: blogImage4,
    date: "Dec 22, 2025",
    readTime: "6 min read",
  },
  {
    id: 5,
    slug: "crafting-compelling-brand-stories",
    title: "Crafting Compelling Brand Stories",
    excerpt:
      "Master the art of storytelling to create emotional connections with your target audience.",
    category: "Branding",
    image: blogImage5,
    date: "Dec 18, 2025",
    readTime: "8 min read",
  },
  {
    id: 6,
    slug: "design-principles-for-conversion-optimization",
    title: "Design Principles for Conversion Optimization",
    excerpt:
      "Apply proven design principles to increase your website's conversion rates.",
    category: "Design Principles",
    image: blogImage6,
    date: "Dec 15, 2025",
    readTime: "9 min read",
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Latest Blogs");
  const [email, setEmail] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "Latest Blogs" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const Star18 = ({ className }: { className?: string }) => {
    const points = 18;
    const outerRadius = 100;
    const innerRadius = 75;
    const cx = 100;
    const cy = 100;

    let pathData = "";
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / points - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      pathData += `${i === 0 ? "M" : "L"} ${x} ${y} `;
    }
    pathData += "Z";

    return (
      <svg viewBox="0 0 200 200" className={className}>
        <path d={pathData} fill="currentColor" />
      </svg>
    );
  };

  const ref = useRef(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/read.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const hasPlayedInitial = useRef(false);
  const hasLeftHero = useRef(false);

  const playAnimation = () => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(1.5);
    lottieRef.current.goToAndPlay(0, true);
  };
  useEffect(() => {
    if (animationData && !hasPlayedInitial.current) {
      playAnimation();
      hasPlayedInitial.current = true;
    }
  }, [animationData]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // User came BACK into hero
          if (hasLeftHero.current) {
            playAnimation();
            hasLeftHero.current = false;
          }
        } else {
          // User left hero
          hasLeftHero.current = true;
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#253e35" }}>
      <SEO
        title="Marketing Insights, Growth & AI Trends | The Eye Level Studio Blog"
        description="Read expert insights on marketing, branding, performance, AI, Web3, and growth strategies shaping the future of business."
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative md:min-h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Rotating 32-pointed star - centered upper area */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-[350px] md:w-[600px] lg:w-[750px] h-[350px] md:h-[600px] lg:h-[750px] text-[#1e3329] pointer-events-none"
        >
          <Star18 className="w-full h-full" />
        </motion.div>

        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <GreenButton>Blog</GreenButton>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-dela mb-6 uppercase"
            style={{ color: "#E2FEA5" }}
          >
            Your Go-To Source:{" "}
            <span>
              <WavyUnderline>Blog</WavyUnderline> Highlights & More
            </span>
          </motion.h1>
          {animationData && (
            <Lottie
              lottieRef={lottieRef}
              animationData={animationData}
              autoPlay={false}
              loop
              className="absolute -top-0 left-[55px] w-[70px] md:-top-[48px] md:left-[32px] md:w-[120px] lg:-left-[10px] lg:-top-[76px] lg:w-[150px] pointer-events-none"
            />
          )}

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto mt-8"
          >
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: "rgba(248, 255, 232, 0.5)" }}
              />
              <Input
                type="text"
                placeholder="Search any blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl font-bricolage"
                style={{
                  backgroundColor: "rgba(248, 255, 232, 0.05)",
                  borderColor: "rgba(226, 254, 165, 0.2)",
                  color: "#F8FFE8",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <section className="py-8 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveCategory(category)}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-bricolage"
                  style={{
                    backgroundColor:
                      activeCategory === category
                        ? "#E2FEA5"
                        : "rgba(248, 255, 232, 0.05)",
                    color: activeCategory === category ? "#0a0a0a" : "#F8FFE8",
                    border:
                      activeCategory === category
                        ? "none"
                        : "1px solid rgba(226, 254, 165, 0.2)",
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4" style={{ backgroundColor: "#173229" }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div
                    className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{
                      backgroundColor: "rgba(248, 255, 232, 0.03)",
                      border: "1px solid rgba(226, 254, 165, 0.1)",
                    }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <span
                        className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full font-bricolage"
                        style={{ backgroundColor: "#E2FEA5", color: "#0a0a0a" }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div
                        className="flex items-center gap-3 text-sm mb-3 font-bricolage"
                        style={{ color: "rgba(248, 255, 232, 0.5)" }}
                      >
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3
                        className="text-xl font-dela mb-3 transition-colors uppercase group-hover:text-[#E2FEA5]"
                        style={{ color: "#F8FFE8" }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="leading-relaxed font-bricolage mb-4"
                        style={{ color: "rgba(248, 255, 232, 0.7)" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 font-semibold font-bricolage text-[#E2FEA5] group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-lg font-bricolage"
                style={{ color: "rgba(248, 255, 232, 0.6)" }}
              >
                No blog posts found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1e3c30" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-dela mb-4 uppercase"
          >
            <span style={{ color: "#E2FEA5" }}>
              Stay in the loop - Be the first to
            </span>{" "}
            <WavyUnderline>know.</WavyUnderline>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 font-bricolage"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Be the first to hear about our latest projects, design insights, and
            studio updates.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-6 rounded-xl font-bricolage"
              style={{
                backgroundColor: "rgba(248, 255, 232, 0.05)",
                borderColor: "rgba(226, 254, 165, 0.2)",
                color: "#F8FFE8",
              }}
            />
            <Button
              type="submit"
              className="px-8 py-6 rounded-xl font-semibold font-bricolage"
              style={{ backgroundColor: "#E2FEA5", color: "#0a0a0a" }}
            >
              Subscribe
            </Button>
          </motion.form>
        </div>
      </section>

      <EnhancedFooter showCTA={false} mascotBgColor="#1E3C30" />
    </div>
  );
};

export default Blog;
