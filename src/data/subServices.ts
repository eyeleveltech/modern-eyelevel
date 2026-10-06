export interface SubServiceData {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  heroDescription: string;
  features: string[];
}

export const subServicesData: Record<string, SubServiceData> = {
  // SOCIAL MEDIA MANAGEMENT
  "social-media-strategy": {
    id: "social-media-strategy",
    title: "Social Media Strategy",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "Data-driven social media strategies designed to build your brand and engage your target audience effectively.",
    features: ["Audience Research", "Platform Selection", "Content Themes", "Competitor Analysis"]
  },
  "social-media-management": {
    id: "social-media-management",
    title: "Social Media Management",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "End-to-end management of your social channels, ensuring consistent posting and active community engagement.",
    features: ["Content Scheduling", "Community Management", "Analytics & Reporting", "Trend Monitoring"]
  },
  "content-creation": {
    id: "content-creation",
    title: "Content Creation",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "High-quality, engaging content tailored to your brand voice and designed to capture attention.",
    features: ["Copywriting", "Visual Assets", "Interactive Formats", "Campaign Specific Content"]
  },
  "designing-and-creative-services": {
    id: "designing-and-creative-services",
    title: "Designing & Creative Services",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "Stunning visual designs that elevate your brand identity across all digital touchpoints.",
    features: ["Graphic Design", "Brand Guidelines", "Custom Illustrations", "Ad Creatives"]
  },
  "influencer-marketing": {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "Connect with your audience through authentic voices by partnering with the right influencers.",
    features: ["Influencer Identification", "Campaign Management", "Contract Negotiation", "ROI Tracking"]
  },
  "celebrity-and-brand-partnerships": {
    id: "celebrity-and-brand-partnerships",
    title: "Celebrity & Brand Partnerships",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "High-impact celebrity endorsements and strategic brand collaborations for massive reach.",
    features: ["Celebrity Sourcing", "Partnership Strategy", "Co-Branding Campaigns", "Contract Management"]
  },
  "photography-and-camera-crew": {
    id: "photography-and-camera-crew",
    title: "Photography & Camera Crew",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "Professional photography and dedicated camera crews for high-end visual storytelling.",
    features: ["Product Photography", "Event Coverage", "Corporate Headshots", "On-Location Shoots"]
  },
  "videography": {
    id: "videography",
    title: "Videography",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "Cinematic videography services to capture your brand's essence and tell compelling stories.",
    features: ["Brand Films", "Event Highlights", "Interviews", "Social Media Shorts"]
  },
  "podcast-studio-setup": {
    id: "podcast-studio-setup",
    title: "Podcast Studio Setup",
    category: "Social Media Management",
    categorySlug: "social-media-management",
    heroDescription: "Comprehensive podcast production and studio setup for professional audio and video recording.",
    features: ["Equipment Setup", "Acoustic Treatment", "Recording Software", "Production Support"]
  },

  // PERFORMANCE MARKETING
  "strategy-and-budgeting": {
    id: "strategy-and-budgeting",
    title: "Strategy & Budgeting",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "Optimized allocation of your marketing spend to maximize ROI and achieve scalable growth.",
    features: ["Spend Forecasting", "Channel Allocation", "Goal Setting", "CPA Optimization"]
  },
  "audience-selection-and-setup": {
    id: "audience-selection-and-setup",
    title: "Audience Selection & Setup",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "Pinpoint targeting to ensure your ads reach the highest-converting demographics.",
    features: ["Lookalike Audiences", "Retargeting Pools", "Demographic Filtering", "Custom Segments"]
  },
  "ad-campaign-setup": {
    id: "ad-campaign-setup",
    title: "Ad Campaign Setup",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "Flawless execution and launch of your ad campaigns across multiple platforms.",
    features: ["Platform Integration", "A/B Testing Setup", "Ad Copywriting", "Creative Uploads"]
  },
  "website-landing-page-development": {
    id: "website-landing-page-development",
    title: "Website / Landing Page Development",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "High-converting landing pages engineered specifically for performance marketing traffic.",
    features: ["CRO Best Practices", "A/B Testing", "Fast Loading Speeds", "Mobile Optimization"]
  },
  "conversion-tracking": {
    id: "conversion-tracking",
    title: "Conversion Tracking",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "Precise pixel placement and event tracking to measure every meaningful interaction.",
    features: ["Pixel Installation", "Event Configuration", "Server-Side Tracking", "E-commerce Tracking"]
  },
  "marketing-automation": {
    id: "marketing-automation",
    title: "Marketing Automation",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "Streamlined workflows that nurture leads and drive conversions while you sleep.",
    features: ["Email Sequences", "CRM Integration", "Lead Scoring", "Behavioral Triggers"]
  },
  "performance-analysis-and-reporting": {
    id: "performance-analysis-and-reporting",
    title: "Performance Analysis & Reporting",
    category: "Performance Marketing",
    categorySlug: "performance-marketing",
    heroDescription: "In-depth analytics and clear reporting to keep you informed on campaign success.",
    features: ["Custom Dashboards", "ROI Calculation", "Weekly Insights", "Attribution Modeling"]
  },

  // AI & VIDEO PRODUCTION
  "tvc-commercial-videos": {
    id: "tvc-commercial-videos",
    title: "TVC / Commercial Videos",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Broadcast-quality commercial videos designed to capture attention on any screen.",
    features: ["Scriptwriting", "Casting & Location", "High-End Production", "Post-Production FX"]
  },
  "reels-and-stories": {
    id: "reels-and-stories",
    title: "Reels & Stories",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Vertical video content engineered for maximum virality and engagement on social platforms.",
    features: ["Trend Adaptation", "Fast-Paced Editing", "Platform-Specific Formats", "Engagement Hooks"]
  },
  "documentary-videos": {
    id: "documentary-videos",
    title: "Documentary Videos",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Long-form storytelling that dives deep into your brand's mission, history, and impact.",
    features: ["Narrative Structure", "In-Depth Interviews", "B-Roll Capture", "Cinematic Color Grading"]
  },
  "ugc-content": {
    id: "ugc-content",
    title: "UGC Content",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Authentic User-Generated Content strategies that build trust and drive conversions.",
    features: ["Creator Sourcing", "Brief Development", "Content Review", "Usage Rights Management"]
  },
  "digital-advertisements": {
    id: "digital-advertisements",
    title: "Digital Advertisements",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Impactful video ads optimized for digital channels and varied screen sizes.",
    features: ["Platform Optimization", "A/B Testing Variations", "Call-to-Action Focus", "Performance Driven"]
  },
  "logo-animation": {
    id: "logo-animation",
    title: "Logo Animation",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Dynamic logo reveals that add a premium touch to your brand identity and video intros.",
    features: ["2D & 3D Animation", "Custom Sound Design", "Brand Guidelines Alignment", "Multiple Export Formats"]
  },
  "motion-graphics": {
    id: "motion-graphics",
    title: "Motion Graphics",
    category: "AI & Video Production",
    categorySlug: "ai-and-video-production",
    heroDescription: "Engaging animated graphics to simplify complex ideas and elevate your visual content.",
    features: ["Explainer Videos", "Data Visualization", "Animated Typography", "UI/UX Animation"]
  },

  // WEBSITE AND APP DEVELOPMENT
  "e-commerce-websites": {
    id: "e-commerce-websites",
    title: "E-Commerce Websites",
    category: "Web & App Development",
    categorySlug: "website-and-app-development",
    heroDescription: "High-performance online stores built on Shopify, WooCommerce, or custom tech stacks.",
    features: ["Payment Gateway Integration", "Inventory Management", "Custom Themes", "Conversion Optimization"]
  },
  "catalogue-portfolio-websites": {
    id: "catalogue-portfolio-websites",
    title: "Catalogue / Portfolio Websites",
    category: "Web & App Development",
    categorySlug: "website-and-app-development",
    heroDescription: "Stunning digital portfolios and product catalogues that showcase your work beautifully.",
    features: ["Image Optimization", "Responsive Galleries", "Advanced Filtering", "Seamless Navigation"]
  },
  "brand-corporate-websites": {
    id: "brand-corporate-websites",
    title: "Brand / Corporate Websites",
    category: "Web & App Development",
    categorySlug: "website-and-app-development",
    heroDescription: "Professional, fast, and secure corporate websites that establish industry authority.",
    features: ["Corporate Identity", "Content Management Systems", "Security Implementation", "SEO Foundation"]
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    category: "Web & App Development",
    categorySlug: "website-and-app-development",
    heroDescription: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "UI/UX Design", "API Integration", "App Store Deployment"]
  },

  // ORGANIC MARKETING
  "bing-optimization": {
    id: "bing-optimization",
    title: "Bing Optimization",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    heroDescription: "Tap into the overlooked potential of Bing search traffic with targeted optimization.",
    features: ["Bing Webmaster Tools", "Local Listings", "Keyword Strategy", "Performance Tracking"]
  },
  "seo-aeo-geo": {
    id: "seo-aeo-geo",
    title: "SEO / AEO / GEO",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    heroDescription: "Comprehensive search, answer, and generative engine optimization for maximum visibility.",
    features: ["Technical SEO", "Content Strategy", "AI Search Optimization", "Backlink Building"]
  },
  "google-search-console": {
    id: "google-search-console",
    title: "Google Search Console",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    heroDescription: "Expert setup and management of GSC to monitor and maintain your site's search presence.",
    features: ["Error Resolution", "Indexation Monitoring", "Performance Insights", "Sitemap Management"]
  },
  "google-business-profile": {
    id: "google-business-profile",
    title: "Google Business Profile",
    category: "Organic Marketing",
    categorySlug: "organic-marketing",
    heroDescription: "Optimize your local search presence and dominate the map pack in your area.",
    features: ["Profile Setup", "Review Management", "Local Citations", "Regular Updates"]
  },

  // EVENTS
  "event-planning": {
    id: "event-planning",
    title: "Event Planning",
    category: "Events",
    categorySlug: "event-management",
    heroDescription: "Meticulous planning and execution for events that leave a lasting impression.",
    features: ["Venue Selection", "Vendor Coordination", "Timeline Management", "Budget Allocation"]
  },
  "corporate-events": {
    id: "corporate-events",
    title: "Corporate Events",
    category: "Events",
    categorySlug: "event-management",
    heroDescription: "Professional corporate gatherings, conferences, and retreats handled flawlessly.",
    features: ["Conference Management", "Team Building", "Gala Dinners", "Executive Retreats"]
  },
  "experiential-marketing": {
    id: "experiential-marketing",
    title: "Experiential Marketing",
    category: "Events",
    categorySlug: "event-management",
    heroDescription: "Immersive brand experiences that connect with audiences on an emotional level.",
    features: ["Brand Activations", "Pop-Up Shops", "Interactive Installations", "Product Launches"]
  },
  "sponsorship-and-branding": {
    id: "sponsorship-and-branding",
    title: "Sponsorship & Branding",
    category: "Events",
    categorySlug: "event-management",
    heroDescription: "Strategic sponsorship opportunities and event branding to maximize exposure.",
    features: ["Sponsor Acquisition", "Brand Placement", "Partnership Strategy", "ROI Analysis"]
  }
};
