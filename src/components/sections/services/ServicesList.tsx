import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceGallery from "@/components/sections/services/ServiceGallery";

import influencerCelebrityImg from "@/assets/pages/services/influencer-celebrity.webp";
import photoGallery1 from "@/assets/pages/services/photo-gallery-1.webp";
import photoGallery2 from "@/assets/pages/services/photo-gallery-2.webp";
import photoGallery3 from "@/assets/pages/services/photo-gallery-3.webp";
import martechGallery1 from "@/assets/pages/services/martech-gallery-1.webp";
import martechGallery2 from "@/assets/pages/services/martech-gallery-2.webp";
import production_1 from "@/assets/pages/services/content-production-1.webp";
import production_2 from "@/assets/pages/services/content-production-2.webp";
import production_3 from "@/assets/pages/services/content-production-3.webp";
import poster_1 from "@/assets/pages/services/cro-poster-1.webp";
import poster_3 from "@/assets/pages/services/cro-poster-3.webp";
import social_1 from "@/assets/pages/services/seo-social.webp";
import social_2 from "@/assets/pages/services/social-media.webp";
import perf_mark_01 from "@/assets/pages/services/performance-marketing-1.webp";
import perf_mark_02 from "@/assets/pages/services/performance-marketing-2.webp";
import perf_mark_03 from "@/assets/pages/services/performance-marketing-3.webp";
import celebrityEvent from "@/assets/pages/services/celebrity.webp";
import meeting from "@/assets/pages/services/meeting.webp";
import crm from "@/assets/pages/services/crm.webp";
import web_1 from "@/assets/pages/services/web-design-1.webp";
import web_2 from "@/assets/pages/services/web-design-2.webp";
import web_3 from "@/assets/pages/services/web-design-3.webp";
import web_4 from "@/assets/pages/services/web-design-4.webp";
import social from "@/assets/pages/services/social-media-management.webp";
import linkedinb2b_2 from "@/assets/pages/services/linkedinb2b_2.webp";
import crofunneldesign_1 from "@/assets/pages/services/crofunneldesign.webp";
import crofunneldesign_2 from "@/assets/pages/services/crofunneldesign_2.webp";
import crofunneldesign_3 from "@/assets/pages/services/crofunneldesign_1.webp";
import revenueattribution_1 from "@/assets/pages/services/revenueattribution_1.webp";
import revenueattribution_2 from "@/assets/pages/services/revenueattribution_2.webp";
import brandandidentity_1 from "@/assets/pages/services/cro-poster-3.webp";
import brandandidentity_2 from "@/assets/pages/services/social_media_1.webp";
import brandandidentity_3 from "@/assets/content/works/misc/shoot_1.webp";
import aiseo_1 from "@/assets/pages/services/aiseo_3.webp";
import aiseo_2 from "@/assets/pages/services/aiseo_2.webp";
import linkedinb2b_3 from "@/assets/pages/services/linkedinb2b_3.webp";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: (
      <>
        <strong className="text-white">Your Brand, Everywhere That Matters</strong>
        <br /><br />
        We build and manage your brand's social presence from the ground up — strategy, content, and community. From scroll-stopping Reels to influencer campaigns, we handle every touchpoint so you stay consistent, relevant, and growing.
        <br /><br />
        <span className="text-primary font-semibold">Services:</span> Photography & Camera Crew / Videography / Content Creation / Podcast Studio Setup / Social Media Management / Influencer Marketing / Designing & Creative Services / Social Media Strategy / Celebrity & Brand Partnerships
      </>
    ),
    media: [
      { src: influencerCelebrityImg, type: "image" as const },
      { src: celebrityEvent, type: "image" as const },
      { src: social, type: "image" as const },
    ],
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/social-media-management", }
  },
  {
    id: 2,
    title: "Paid & Performance Marketing",
    description: (
      <>
        <strong className="text-white">Every Rupee, Working Harder</strong>
        <br /><br />
        We engineer data-driven ad campaigns that reach the right audience at the right moment — and convert. From setup to scale, we manage the full funnel with precision targeting, real-time optimization, and transparent reporting.
        <br /><br />
        <span className="text-primary font-semibold">Services:</span> Strategy & Budgeting / Audience Selection & Setup / Conversion Tracking / Marketing Automation / Website & Landing Page Development / Ad Campaign Setup / Performance Analysis & Reporting
      </>
    ),
    media: [
      { src: perf_mark_01, type: "image" as const },
      { src: perf_mark_02, type: "image" as const },
      { src: perf_mark_03, type: "image" as const },
    ],
    bgColor: "#0D1F1A",
    cta: { text: "Learn More →", link: "/services/performance-marketing", }
  },
  {
    id: 3,
    title: "AI Video Production",
    description: (
      <>
        <strong className="text-white">Stories That Stop the Scroll</strong>
        <br /><br />
        From cinematic TVCs to AI-assisted motion graphics, we produce video content that commands attention and drives action. Every frame is crafted with purpose — for screens big and small.
        <br /><br />
        <span className="text-primary font-semibold">Services:</span> TVC & Commercial Videos / Reels & Stories / Documentary Videos / UGC Content / Digital Advertisements / Logo Animation / Motion Graphics
      </>
    ),
    media: [
      { src: production_1, type: "image" as const },
      { src: production_2, type: "image" as const },
      { src: production_3, type: "image" as const },
    ],
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/ai-and-video-production", }
  },
  {
    id: 4,
    title: "Web & App Development",
    description: (
      <>
        <strong className="text-white">Designed to Convert. Built to Last.</strong>
        <br /><br />
        We craft high-performance websites and mobile apps tailored to your business goals — whether you're selling products, showcasing a portfolio, or building a brand platform. Every build is clean, fast, and built for growth.
        <br /><br />
        <span className="text-primary font-semibold">Services:</span> E-Commerce Websites (Shopify / WooCommerce / Custom) / Catalogue & Portfolio Websites / Brand & Corporate Websites / Mobile App Development
      </>
    ),
    media: [
      { src: web_1, type: "image" as const },
      { src: web_2, type: "image" as const },
      { src: web_3, type: "image" as const },
      { src: web_4, type: "image" as const },
    ],
    bgColor: "#0D1F1A",
    cta: { text: "Learn More →", link: "/services/website-and-app-development", }
  },
  {
    id: 5,
    title: "Organic Marketing",
    description: (
      <>
        <strong className="text-white">Get Found. Stay Found.</strong>
        <br /><br />
        We optimize your digital presence so customers discover you naturally — on search engines, AI platforms, and maps. No ads needed; just sustained, compounding visibility built the right way.
        <br /><br />
        <span className="text-primary font-semibold">Services:</span> Bing Optimization / SEO / AEO / GEO / Google Search Console / Google Business Profile (Google My Business)
      </>
    ),
    media: [
      { src: aiseo_1, type: "image" as const },
      { src: social_1, type: "image" as const },
      { src: aiseo_2, type: "image" as const },
    ],
    bgColor: "#1a2f28",
    cta: { text: "Learn More →", link: "/services/organic-marketing", }
  },
  {
    id: 6,
    title: "Events",
    description: (
      <>
        <strong className="text-white">Events That Leave an Impression</strong>
        <br /><br />
        We handle the full lifecycle of your event — from early planning through flawless execution. With end-to-end coordination, sponsorship strategy, and on-brand visuals, we make sure every event reflects your brand at its best.
        <br /><br />
        <span className="text-primary font-semibold">Services:</span> Event Planning & Organizing / End-to-End Event Management / Sponsorship Management / Event Branding
      </>
    ),
    media: [
      { src: meeting, type: "image" as const },
      { src: photoGallery1, type: "image" as const },
      { src: photoGallery2, type: "image" as const },
    ],
    bgColor: "#0D1F1A",
    cta: { text: "Learn More →", link: "/services/event-management", }
  },
];

const ServicesList = () => {
  return (
    <>
      {services.map((service, index) => (
        <section
          key={service.id}
          id={`service-${service.id}`}
          className="px-4 relative overflow-hidden py-[100px]"
          style={{ backgroundColor: service.bgColor }}
        >
          {/* Subtle Background Accent */}
          <div className="absolute inset-0 pointer-events-none">
            {index % 2 === 0 ? (
              <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            ) : (
              <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            )}
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image Gallery Section */}
              <div className="w-full lg:w-3/5">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                >
                  <ServiceGallery
                    media={service.media}
                    title={service.title}
                    autoScrollInterval={4000}
                  />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h2
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-dela leading-tight uppercase text-foreground"
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-sm md:text-base leading-relaxed font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.75)" }}
                  >
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  {service.cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="pt-4"
                    >
                      <Link to={service.cta.link}>
                        <Button className="h-12 px-6 lg:h-14 lg:px-8 text-sm lg:text-base font-semibold rounded-full group overflow-hidden relative">
                          <span className="relative z-10 flex items-center gap-2">
                            {service.cta.text.replace("→", "")}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </span>

                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServicesList;
