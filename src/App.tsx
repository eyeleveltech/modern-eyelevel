import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import WhatsAppButton from "./components/WhatsAppButton";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const ServicesPage = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Booking = lazy(() => import("./pages/Booking"));
const Apply = lazy(() => import("./pages/Apply"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/how-we-work"
              element={<Navigate to="/about-us" replace />}
            />
            <Route path="/industries" element={<Industries />} />
            {/* <Route path="/industries/education" element={<EduMarketing />} /> */}
            {/* <Route path="/industries/sports" element={<SportsMarketing />} /> */}
            {/* <Route
              path="/industries/real-estate"
              element={<RealEstateMarketing />}
            /> */}
            {/* <Route path="/industries/b2b" element={<B2BMarketing />} /> */}
            {/* <Route path="/industries/:slug" element={<IndustryDetail />} /> */}
            {/* <Route
              path="/industries/higher-education"
              element={<HigherEducationMarketing />}
            />
            <Route
              path="/industries/higher-education-v2"
              element={<HigherEducationMarketingV2 />}
            />
            <Route
              path="/industries/higher-education-2"
              element={<HigherEducation2 />}
            /> */}

            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
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
                <Navigate
                  to="/careers/visualizer-senior-graphic-designer"
                  replace
                />
              }
            />
            <Route
              path="/careers/django--devops-engineer"
              element={<Navigate to="/careers/django-devops-engineer" replace />}
            />
            <Route path="/careers/:slug" element={<JobDetails />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route
              path="/terms-conditions"
              element={<Navigate to="/terms-and-condition" replace />}
            />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
