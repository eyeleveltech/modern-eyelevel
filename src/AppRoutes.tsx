import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPost from "./pages/BlogPost";
import Booking from "./pages/Booking";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Industries from "./pages/Industries";
import RealEstate from "./pages/industries/RealEstate";
import ITSaaS from "./pages/industries/ITSaaS";
import Healthcare from "./pages/industries/Healthcare";
import Automotive from "./pages/industries/Automotive";
import ManufacturingB2B from "./pages/industries/ManufacturingB2B";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import ServicesPage from "./pages/Services";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import FreeWebsites from "./pages/FreeWebsites";
import FreeWeddingFilm from "./pages/FreeWeddingFilm";
import WhatsappMarketing from "./pages/WhatsappMarketing";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import OrganicMarketing from "./pages/OrganicMarketing";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import AiAndVideoProduction from "./pages/AiAndVideoProduction";

import WebsiteAndAppDevelopment from "./pages/WebsiteAndAppDevelopment";
import EventManagement from "./pages/EventManagement";

import SubService from "./pages/SubService";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about-us" element={<Navigate to="/about" replace />} />
    <Route path="/about" element={<About />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/services" element={<ServicesPage />} />
    {/* New 6 Core Services */}
    <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
    <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
    <Route path="/services/organic-marketing" element={<OrganicMarketing />} />
    <Route path="/services/website-and-app-development" element={<WebsiteAndAppDevelopment />} />
    <Route path="/services/ai-and-video-production" element={<AiAndVideoProduction />} />
    <Route path="/services/event-management" element={<EventManagement />} />
    <Route path="/services/:categorySlug/:subServiceSlug" element={<SubService />} />

    {/* Obsolete Service Redirects */}
    <Route path="/services/whatsapp-marketing" element={<Navigate to="/services/performance-marketing" replace />} />
    <Route path="/services/ai-era-seo" element={<Navigate to="/services/organic-marketing" replace />} />
    <Route path="/services/content-and-creative" element={<Navigate to="/services/ai-and-video-production" replace />} />
    <Route path="/services/linkedin-b2b-marketing" element={<Navigate to="/services/social-media-management" replace />} />
    <Route path="/services/cro-and-funnel-design" element={<Navigate to="/services/website-and-app-development" replace />} />
    <Route path="/services/revenue-attribution-dashboard" element={<Navigate to="/services/performance-marketing" replace />} />
    <Route path="/services/brand-and-identity" element={<Navigate to="/services/social-media-management" replace />} />
    <Route path="/services/website-design-and-development" element={<Navigate to="/services/website-and-app-development" replace />} />
    {/* Portfolio now lives on its own standalone site. Send the old routes home. */}
    <Route path="/works" element={<Navigate to="/" replace />} />
    <Route path="/work" element={<Navigate to="/" replace />} />
    <Route path="/portfolio" element={<Navigate to="/" replace />} />
    <Route path="/portfolio/:categoryId" element={<Navigate to="/" replace />} />
    <Route path="/how-we-work" element={<Navigate to="/about" replace />} />
    <Route path="/industries" element={<Industries />} />
    <Route path="/industries/real-estate" element={<RealEstate />} />
    <Route path="/industries/it-saas" element={<ITSaaS />} />
    <Route path="/industries/healthcare" element={<Healthcare />} />
    <Route path="/industries/automotive" element={<Automotive />} />
    <Route path="/industries/manufacturing-b2b" element={<ManufacturingB2B />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/category/:categorySlug" element={<BlogCategory />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/apply" element={<Apply />} />
    <Route
      path="/careers/head-of-creative--strategy"
      element={<Navigate to="/careers/head-of-creative-strategy" replace />}
    />
    <Route
      path="/careers/visualizer--senior-graphic-designer"
      element={
        <Navigate to="/careers/visualizer-senior-graphic-designer" replace />
      }
    />
    <Route
      path="/careers/django--devops-engineer"
      element={<Navigate to="/careers/django-devops-engineer" replace />}
    />
    <Route path="/careers/:slug" element={<JobDetails />} />
    {/* Campaign landing page — deliberately not linked from the nav or footer */}
    <Route path="/3-websites-free" element={<FreeWebsites />} />
    {/* Link-only application page — not in nav, footer, or sitemap (noindex) */}
    <Route path="/free-wedding-film" element={<FreeWeddingFilm />} />
    <Route path="/thank-you" element={<ThankYou />} />
    <Route
      path="/terms-and-conditions"
      element={<Navigate to="/terms-and-condition" replace />}
    />
    <Route path="/terms-and-condition" element={<Terms />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
