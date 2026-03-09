import akmal from "@/assets/people/akmal.jpeg";
import charles from "@/assets/people/charles.png";
import janani from "@/assets/people/janani.png";
import mohan from "@/assets/people/mohan.png";
import blogImage1 from "@/assets/blogImages/blog1.jpg";
import blogImage2 from "@/assets/blogImages/blog2.jpg";
import blogImage3 from "@/assets/blogImages/blog3.jpg";
import blogImage4 from "@/assets/blogImages/blog4.jpg";
import blogImage5 from "@/assets/blogImages/blog5.jpg";
import blogImage6 from "@/assets/blogImages/blog6.jpg";
import { ORG_ID } from "@/hooks/schemas";

export const ALL_BLOGS_CATEGORY = "All Blogs";

export type BlogAuthor = {
  name: string;
  role: string;
  image?: string;
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: BlogAuthor;
  seoTitle: string;
  seoDescription: string;
  content: string[];
  tags: string[];
};

const BASE_URL = "https://theeyelevelstudio.com";

export const blogPosts: BlogPost[] = [
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
    author: {
      name: "Akmal Rahman",
      role: "Co-Founder",
      image: akmal,
    },
    seoTitle: "How AI Is Transforming Marketing in 2026",
    seoDescription:
      "Discover how AI is reshaping marketing in 2026 â€” from automation and personalization to predictive, data-driven growth strategies.",
    content: [
      "Artificial Intelligence has moved beyond buzzword status to become the backbone of modern marketing strategies. In 2026, we're witnessing an unprecedented integration of AI tools that are fundamentally changing how brands understand, reach, and engage their audiences.",
      "## The Rise of Predictive Analytics",
      "One of the most significant shifts we've seen is the adoption of predictive analytics in campaign planning. AI-powered tools can now analyze historical data, market trends, and consumer behavior patterns to forecast campaign performance with remarkable accuracy. This means marketers can optimize their strategies before launching, rather than making adjustments on the fly.",
      "The implications are profound. Brands are seeing 40-60% improvements in ROI by leveraging predictive models to allocate budgets more effectively. The days of 'spray and pray' marketing are firmly behind us.",
      "## Personalization at Scale",
      "Perhaps the most visible change is in personalization. AI now enables hyper-personalized experiences for millions of users simultaneously. From dynamic email content that adapts to individual preferences to website experiences that reshape themselves based on user behavior, the technology has matured to a point where one-to-one marketing at scale is finally achievable.",
      "Consider this: a single campaign can now generate thousands of unique creative variations, each tailored to specific audience segments. The AI optimizes in real-time, learning which combinations resonate best with different demographics, interests, and behavioral profiles.",
      "## Conversational AI and Customer Experience",
      "Chatbots and conversational AI have evolved dramatically. Modern AI assistants can handle complex customer inquiries, provide personalized recommendations, and even complete transactionsâ€”all while maintaining natural, human-like conversations. The result is 24/7 customer support that actually enhances brand perception rather than frustrating users.",
      "## Content Creation Revolution",
      "AI-generated content has reached a level of sophistication that makes it nearly indistinguishable from human-written copy in many contexts. Smart marketers are using AI as a creative partnerâ€”generating first drafts, suggesting headlines, and even creating visual content that can be refined and approved by human team members.",
      "The key is collaboration. The most successful teams treat AI as an enhancement to human creativity, not a replacement. This symbiotic relationship is producing content at unprecedented speed and scale while maintaining the emotional intelligence and brand voice that only humans can provide.",
      "## Looking Ahead",
      "As we move through 2026, the integration of AI in marketing will only deepen. The brands that thrive will be those that embrace these tools while maintaining their authentic voice and genuine connection with customers. AI is the enabler; human creativity and strategic thinking remain the differentiators.",
      "The future of marketing isn't about AI versus humansâ€”it's about AI empowering humans to do what they do best, at scales previously unimaginable.",
    ],
    tags: [
      "Artificial Intelligence",
      "Marketing Technology",
      "Digital Strategy",
      "Automation",
    ],
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
    author: {
      name: "Akmal Rahman",
      role: "Co-Founder",
      image: akmal,
    },
    seoTitle: "The Psychology of Color in Branding Explained",
    seoDescription:
      "Learn how color psychology influences brand perception, emotions, and conversions across digital and physical brand experiences.",
    content: [
      "Color is one of the most powerful tools in a brand's arsenal. It communicates emotions, builds recognition, and influences purchasing decisionsâ€”often before a customer even reads a single word of your message.",
      "## The Science Behind Color Psychology",
      "Research consistently shows that color can account for up to 90% of snap judgments made about products. This isn't just marketing folklore; it's rooted in the way our brains process visual information and associate colors with emotions and experiences.",
      "Different colors trigger different psychological responses. Blue evokes trust and reliabilityâ€”hence its popularity among financial institutions and tech companies. Red creates urgency and excitement, making it a favorite for sales and food brands. Green suggests growth, health, and sustainability.",
      "## Cultural Considerations",
      "One critical aspect often overlooked is the cultural dimension of color perception. White symbolizes purity in Western cultures but represents mourning in many Asian societies. Red signifies luck and prosperity in China but can signal danger or warning in other contexts.",
      "For global brands, understanding these nuances is essential. A color palette that works beautifully in one market may send entirely different messages in another. This is why many international brands develop flexible color systems that can adapt to local contexts while maintaining overall brand coherence.",
      "## Digital Age Implications",
      "The digital realm has introduced new considerations for color in branding. Screen technology affects how colors appearâ€”what looks vibrant on one device may appear washed out on another. Accessibility has also become a crucial factor, with brands needing to ensure sufficient contrast for users with visual impairments.",
      "Dark mode preferences have prompted many brands to develop dual color systems, ensuring their identity remains strong whether displayed on light or dark backgrounds. This adaptability has become a mark of sophisticated brand design.",
      "## Building Your Color Strategy",
      "When developing a color strategy, start with your brand's core values and personality. What emotions do you want to evoke? What associations do you want to build? Then research your competitive landscapeâ€”differentiation matters. If every competitor uses blue, a well-chosen alternative color could help you stand out.",
      "Test your choices across all touchpoints: digital, print, merchandise, and environments. Consistency builds recognition, but ensure your colors work technically across all applications before committing.",
      "## The Bottom Line",
      "Color is not decorationâ€”it's communication. The most successful brands treat color as a strategic asset, investing time and research into choices that will resonate with their target audience and support their business objectives for years to come.",
    ],
    tags: ["Branding", "Design Psychology", "Color Theory", "Brand Strategy"],
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
    author: {
      name: "Janani S",
      role: "Junior Graphics Designer",
      image: janani,
    },
    seoTitle: "Building a Scalable Design System for Growth",
    seoDescription:
      "A practical guide to creating scalable design systems that improve consistency, efficiency, and brand growth across teams.",
    content: [
      "A design system is more than a collection of componentsâ€”it's a living ecosystem that enables teams to build consistent, high-quality products at scale. But building one that actually works requires careful planning, clear governance, and a commitment to evolution.",
      "## Start With Principles, Not Components",
      "The mistake many teams make is jumping straight into building UI components. Instead, start with design principlesâ€”the foundational beliefs that will guide every decision. These principles should reflect your brand values and product philosophy.",
      "Principles like 'Clarity over cleverness' or 'Accessibility by default' provide a framework for resolving debates and making consistent decisions, even when the component library doesn't cover a specific use case.",
      "## The Token Foundation",
      "Design tokens are the atomic building blocks of your system: colors, typography scales, spacing units, shadows, and animation timings. Getting these right early pays dividends throughout the system's lifecycle.",
      "Invest in a robust token architecture that supports theming and multi-brand applications. Use semantic naming (e.g., 'color-text-primary' rather than 'color-gray-800') to enable flexibility without losing consistency.",
      "## Component Architecture",
      "When building components, think in terms of composition rather than configuration. Small, focused components that can be combined are more flexible than large, feature-heavy ones with numerous props.",
      "Document not just how to use each component, but why it exists and when to use it. Include examples of correct usage, edge cases, and anti-patterns. The goal is to empower designers and developers to make good decisions independently.",
      "## Governance and Evolution",
      "A design system without governance becomes a liability. Establish clear processes for proposing changes, reviewing contributions, and deprecating outdated patterns. Regular audits help identify inconsistencies and opportunities for improvement.",
      "Version your system thoughtfully. Breaking changes should be rare and well-communicated. Provide migration guides and sufficient transition periods for teams to update their implementations.",
      "## Adoption Strategy",
      "The best design system is useless if no one uses it. Focus on developer experience: excellent documentation, easy installation, and responsive support. Celebrate teams that adopt the system and showcase their successes.",
      "Track adoption metrics and gather feedback continuously. The system should evolve based on real usage patterns and pain points, not abstract ideals.",
      "## The Long Game",
      "Building a design system is a multi-year investment. Start small, prove value quickly, and expand based on organizational needs. Remember: the goal isn't a perfect systemâ€”it's enabling teams to build better products, faster.",
    ],
    tags: ["Design Systems", "UI/UX", "Product Design", "Development"],
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
    author: {
      name: "MohanKumar Raja",
      role: "Digital Marketing Manager",
      image: mohan,
    },
    seoTitle: "The Future of Performance Marketing Strategies",
    seoDescription:
      "Explore emerging performance marketing trends, data-driven tactics, and how brands can stay competitive in a changing landscape.",
    content: [
      "Performance marketing stands at an inflection point. Privacy regulations, the death of third-party cookies, and evolving consumer expectations are forcing a fundamental rethinking of data-driven strategies.",
      "## The Privacy-First Reality",
      "GDPR, CCPA, and similar regulations worldwide have fundamentally changed what's possible in performance marketing. The era of ubiquitous tracking is ending, and marketers must adapt to a world where consent is paramount and data collection is limited.",
      "This isn't necessarily bad news. Brands that embrace privacy-first approaches are finding that quality trumps quantityâ€”smaller, more engaged audiences often deliver better results than massive but poorly-targeted reach.",
      "## First-Party Data Renaissance",
      "With third-party data becoming increasingly restricted, first-party data has emerged as the new gold standard. Brands are investing heavily in strategies to collect, organize, and activate data from their own customer interactions.",
      "This shift requires new capabilities: robust data infrastructure, sophisticated customer data platforms, and creative approaches to encouraging users to share information willingly. The value exchange must be clear and compelling.",
      "## Contextual Comeback",
      "Contextual advertisingâ€”targeting based on content rather than user profilesâ€”is experiencing a renaissance. Modern contextual tools use AI to understand content with unprecedented nuance, enabling relevant ad placement without personal data.",
      "The results are promising. Contextual campaigns are showing comparable or even superior performance to behavioral targeting in many categories, while providing a clear privacy-compliant path forward.",
      "## Measurement Evolution",
      "Attribution has always been complex, but the current environment makes it even more challenging. Multi-touch attribution models are giving way to more sophisticated approaches: marketing mix modeling, incrementality testing, and unified measurement frameworks.",
      "The key insight is that perfect attribution may be impossibleâ€”and that's okay. What matters is having sufficient confidence to make good allocation decisions, not mathematical certainty about every conversion.",
      "## The Human Element",
      "As automation handles more tactical execution, the human role in performance marketing is shifting toward strategy, creativity, and relationship building. The most successful performance marketers combine analytical rigor with creative intuition and genuine understanding of customer needs.",
      "## Preparing for Tomorrow",
      "The future belongs to marketers who can navigate complexity while maintaining focus on fundamentals: understanding customers, creating value, and measuring results. The tools will continue to evolve, but these principles remain constant.",
    ],
    tags: [
      "Performance Marketing",
      "Digital Advertising",
      "Privacy",
      "Analytics",
    ],
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
    author: {
      name: "Thanujaa G",
      role: "Brand Marketing Specialist",
    },
    seoTitle: "Crafting Compelling Brand Stories That Convert",
    seoDescription:
      "Learn how to craft authentic brand stories that connect emotionally, strengthen identity, and drive meaningful conversions.",
    content: [
      "In a world saturated with content, brands that tell compelling stories rise above the noise. Story isn't just a marketing tacticâ€”it's how humans make sense of the world and form emotional connections.",
      "## Why Stories Work",
      "Neuroscience has shown that stories activate multiple areas of the brain simultaneously. When we hear a story, we don't just process informationâ€”we experience it. This creates stronger memories and deeper emotional connections than factual presentations alone.",
      "For brands, this means stories can communicate values, build trust, and inspire action in ways that product features and statistics cannot.",
      "## The Elements of Brand Story",
      "Every compelling brand story contains certain elements: a protagonist (often the customer, not the brand), a challenge or desire, transformation or resolution, and stakes that matter. The brand's role is typically that of guide or enabler, not hero.",
      "This structureâ€”known as the 'hero's journey' in various formsâ€”resonates across cultures because it mirrors the shape of human experience itself.",
      "## Finding Your Story",
      "Your brand story should emerge from genuine truth: your founding motivation, the problem you solve, the change you want to see in the world. Manufactured stories ring false; authentic ones resonate.",
      "Interview founders, employees, and customers. Look for patterns in why people choose your brand and what they experience as a result. The story is already thereâ€”your job is to uncover and articulate it.",
      "## Telling Stories Across Channels",
      "A great brand story isn't told onceâ€”it's expressed consistently across every touchpoint. From your website's About page to social media posts to customer service interactions, every element should reinforce the core narrative.",
      "This doesn't mean saying the same thing everywhere. Different channels and contexts call for different aspects of your story. The key is coherence: every piece should feel like it comes from the same source.",
      "## Evolving Your Story",
      "Brand stories aren't static. As your company grows, your market changes, and your understanding deepens, your story should evolve too. The core truths remain, but their expression adapts to new realities.",
      "Regular story audits help ensure your narrative remains relevant and authentic. Ask: Does this still reflect who we are and who we serve? Does it differentiate us from competitors? Does it inspire the actions we want?",
      "## The Courage to Be Different",
      "The most memorable brand stories are distinctive. They don't try to appeal to everyone or say what's expected. They take a point of view and commit to it.",
      "This requires courage, but the alternativeâ€”a bland, forgettable storyâ€”is far more dangerous in a crowded market. The brands that thrive are those brave enough to stand for something meaningful.",
    ],
    tags: ["Storytelling", "Branding", "Content Strategy", "Marketing"],
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
    author: {
      name: "Charles Praveen Kumar",
      role: "Senior Graphics Designer",
      image: charles,
    },
    seoTitle: "Design Principles for Conversion Optimization",
    seoDescription:
      "Discover proven design principles that improve user experience, engagement, and conversion rates across platforms.",
    content: [
      "Conversion optimization isn't about tricks or manipulationâ€”it's about removing friction and clearly communicating value. The best-converting designs are often the clearest and most user-focused.",
      "## Clarity Above All",
      "The single most important principle for conversion is clarity. Users should immediately understand what you offer, why it matters to them, and what they should do next. Confusion is the enemy of conversion.",
      "This means ruthless prioritization. Every page should have a primary goal, and everything on that page should support that goal. Secondary actions and information should be present but not competing for attention.",
      "## Visual Hierarchy Drives Action",
      "Eye-tracking studies consistently show that users scan pages in predictable patterns. Effective conversion design works with these patterns, placing key information and calls-to-action where eyes naturally go.",
      "Size, color, contrast, and whitespace all contribute to hierarchy. Make your primary CTA visually prominentâ€”larger, more colorful, with generous spacing around it. Secondary options should be clearly subordinate.",
      "## Reducing Cognitive Load",
      "Every decision point creates friction. The more choices you present, the harder you make it to choose. Simplify wherever possible: fewer form fields, clearer option distinctions, obvious default choices.",
      "Progressive disclosure can help manage complexity. Show only what's needed at each step, revealing additional options only when relevant. This keeps the immediate task manageable while preserving flexibility.",
      "## Building Trust",
      "Conversion requires trust, and trust must be earned visually. Professional design quality signals competence. Social proofâ€”testimonials, client logos, usage statisticsâ€”demonstrates that others have trusted you.",
      "Security indicators matter for transactions. Familiar payment logos, SSL certificates, and clear privacy statements reduce the perceived risk of action.",
      "## Mobile-First Thinking",
      "With mobile traffic dominating most industries, conversion optimization must prioritize mobile experience. This means touch-friendly buttons, legible text without zooming, and streamlined flows that work on small screens.",
      "Forms deserve special attention on mobile. Each field is more burdensome with a touch keyboard, so every unnecessary field costs you conversions. Consider alternatives like social login or saved information.",
      "## Testing and Iteration",
      "Design principles provide a starting point, but real optimization requires testing. A/B tests reveal what actually works with your specific audienceâ€”sometimes contradicting conventional wisdom.",
      "Test one element at a time when possible, and ensure sufficient sample sizes for statistical significance. Document learnings and build institutional knowledge over time.",
      "## The Holistic View",
      "Conversion isn't just about the landing pageâ€”it's the entire journey from first touch to completed action. Ensure consistency and coherence across every step. A compelling ad that leads to a confusing page wastes budget and frustrates users.",
    ],
    tags: [
      "UX Design",
      "Conversion Rate Optimization",
      "Web Design",
      "User Experience",
    ],
  },
];

export const blogPostsData = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost>;

export const blogCategories = [
  ALL_BLOGS_CATEGORY,
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export const slugifyBlogCategory = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getBlogCategoryUrl = (category: string) =>
  category === ALL_BLOGS_CATEGORY
    ? "/blog"
    : `/blog/category/${slugifyBlogCategory(category)}`;

export const getBlogCategoryBySlug = (categorySlug: string) =>
  blogCategories.find((category) => slugifyBlogCategory(category) === categorySlug);

export const getBlogPostsByCategory = (category: string) =>
  category === ALL_BLOGS_CATEGORY
    ? blogPosts
    : blogPosts.filter((post) => post.category === category);

export const getBlogCategorySeo = (category: string) => {
  if (category === ALL_BLOGS_CATEGORY) {
    return {
      title: "Marketing Insights, Growth & AI Trends | The Eye Level Studio Blog",
      description:
        "Read expert insights on marketing, branding, performance, AI, Web3, and growth strategies shaping the future of business.",
      keywords: [
        "marketing blog",
        "digital marketing insights",
        "branding blog",
        "AI marketing",
        "growth strategy blog",
      ],
      canonical: "https://theeyelevelstudio.com/blog",
      url: "https://theeyelevelstudio.com/blog",
      heroLabel: "Blog",
      heroTitle: "Your Go-To Source: Blog Highlights & More",
    };
  }

  const categoryPosts = getBlogPostsByCategory(category);
  const previewTopics = Array.from(
    new Set(categoryPosts.flatMap((post) => post.tags).slice(0, 4)),
  );

  return {
    title: `${category} Blogs | The Eye Level Studio`,
    description:
      previewTopics.length > 0
        ? `Explore ${category.toLowerCase()} insights from The Eye Level Studio covering ${previewTopics.join(", ")}.`
        : `Explore ${category.toLowerCase()} insights and articles from The Eye Level Studio.`,
    keywords: [
      `${category} blog`,
      `${category} insights`,
      ...previewTopics,
    ],
    canonical: `https://theeyelevelstudio.com${getBlogCategoryUrl(category)}`,
    url: `https://theeyelevelstudio.com${getBlogCategoryUrl(category)}`,
    heroLabel: category,
    heroTitle: `${category} Blog Articles`,
  };
};

const toISODate = (input: string) => {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().split("T")[0];
};

export const getBlogArchiveSchema = (category: string) => {
  const posts = getBlogPostsByCategory(category);
  const seo = getBlogCategorySeo(category);
  const archiveUrl = seo.url;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${archiveUrl}#blog`,
      url: archiveUrl,
      name: seo.title,
      description: seo.description,
      publisher: { "@id": ORG_ID },
      blogPost: posts.map((post) => ({
        "@id": `${BASE_URL}/blog/${post.slug}#post`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${archiveUrl}#itemlist`,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  ];
};

export const getBlogPostingSchema = (post: BlogPost) => {
  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#post`,
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: toISODate(post.date),
    dateModified: toISODate(post.date),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@id": ORG_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    image: post.image ? [`${BASE_URL}${post.image}`] : undefined,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };
};
