// import { useState } from "react";
// import Header from "@/components/Header";
// import EnhancedFooter from "@/components/EnhancedFooter";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Check,
//   ChevronDown,
//   Compass,
//   Palette,
//   BarChart3,
//   Settings,
//   Film,
//   Calendar,
//   Shield,
//   Clock,
//   MessageCircle,
//   FileText,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";
// import eventsVideo1 from "@/assets/events-video-1.mp4";
// import GreenButton from "@/components/GreenButton";
// import WavyUnderline from "@/components/WavyUnderline";

// // Service categories data for accordion
// const serviceCategories = [
//   {
//     id: "strategy",
//     icon: Compass,
//     title: "Strategy & Consultation",
//     outcome: "A clear roadmap for your institution's future.",
//     services: [
//       "Marketing Strategy Development",
//       "Market Research & Analysis",
//       "Retention & Enrollment Strategies",
//       "Academic Counseling & Training",
//     ],
//   },
//   {
//     id: "branding",
//     icon: Palette,
//     title: "Branding, Design & Development",
//     outcome: "A prestigious identity that attracts top-tier students.",
//     services: [
//       "Logo & Brand Identity Design",
//       "Website & App Development",
//       "Digital Creatives & Marketing Collateral",
//       "Printing Materials",
//     ],
//   },
//   {
//     id: "digital",
//     icon: BarChart3,
//     title: "Digital Marketing & Performance",
//     outcome: "Your institution, seen by the right students.",
//     services: [
//       "Social Media Management",
//       "Search Engine Optimization (SEO)",
//       "PPC Advertising Campaigns",
//       "Email & Content Marketing",
//     ],
//   },
//   {
//     id: "martech",
//     icon: Settings,
//     title: "Marketing Technology & CRM",
//     outcome: "Automated systems. No lead dropped.",
//     services: [
//       "CRM Setup & Automation",
//       "Tool & Marketing Tech Integration",
//       "WhatsApp Business & Bot Integration",
//       "Cloud Communication (IVR) Setup",
//     ],
//   },
//   {
//     id: "media",
//     icon: Film,
//     title: "Media & Content Production",
//     outcome: "Storytelling that brings your campus to life.",
//     services: [
//       "Photography & Video Production",
//       "Promotional & Educational Content",
//       "Public & Media Relations",
//       "Thought Leadership Content",
//     ],
//   },
//   {
//     id: "events",
//     icon: Calendar,
//     title: "Event Management",
//     outcome: "Experiences that drive direct enrollment.",
//     services: [
//       "Virtual & In-Person Events",
//       "Event Promotions",
//       "Sports Event Management",
//     ],
//   },
// ];

// const safetyPromises = [
//   { icon: Clock, text: "We live by fixed timelines." },
//   { icon: FileText, text: "You always know what is happening next." },
//   { icon: MessageCircle, text: "Simple language. No confusion." },
// ];

// const HigherEducationMarketingV2 = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [openCategory, setOpenCategory] = useState<string | null>("strategy");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     toast({
//       title: "Thank you!",
//       description:
//         "We'll be in touch shortly to discuss your enrollment goals.",
//     });
//     setFormData({ name: "", email: "", phone: "" });
//     setIsSubmitting(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, phone: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const toggleCategory = (id: string) => {
//     setOpenCategory(openCategory === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* ===== HERO SECTION - VIDEO ONLY ===== */}
//       <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
//         {/* Full-screen background video */}
//         <video
//           src={eventsVideo1}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Dark overlay for text readability */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
//           }}
//         />

//         {/* Centered CTA Content */}
//         <div className="relative z-10 text-center max-w-4xl w-full mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             {/* Clarity Signal */}
//             <GreenButton>One Goal: Your Admissions.</GreenButton>

//             {/* Main Headline - Unified size */}
//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="font-dela text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-[1.1] text-[#E2FEA5] uppercase"
//             >
//               From Visibility to <WavyUnderline>Admissions</WavyUnderline>
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="font-bricolage text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto"
//               style={{ color: "rgba(248, 255, 232, 0.85)" }}
//             >
//               We help higher education institutes boost enrollment and build
//               brand authority with zero confusion.
//             </motion.p>

//             {/* Main CTA Button */}
//             <div>
//               <a href="#cta-form">
//                 <Button
//                   size="lg"
//                   className="group rounded-full px-10 min-h-[60px] text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
//                   style={{
//                     backgroundColor: "#B8D4BE",
//                     color: "#0a0a0a",
//                     border: "3px solid #0a0a0a",
//                     boxShadow: "0 4px 0 #0a0a0a",
//                   }}
//                 >
//                   Secure your enrollment
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
//                 </Button>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         {/* Mobile Fixed CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pb-6"
//           style={{
//             background:
//               "linear-gradient(to top, rgba(0,0,0,0.9) 60%, transparent)",
//           }}
//         >
//           <a href="#cta-form" className="block">
//             <Button
//               size="lg"
//               className="w-full rounded-full min-h-[56px] text-base font-semibold font-bricolage"
//               style={{
//                 backgroundColor: "#B8D4BE",
//                 color: "#0a0a0a",
//                 border: "3px solid #0a0a0a",
//                 boxShadow: "0 4px 0 #0a0a0a",
//               }}
//             >
//               Secure your enrollment
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </a>
//         </motion.div>
//       </section>

//       {/* ===== OWNERSHIP SECTION ===== */}
//       <section
//         className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden"
//         style={{ backgroundColor: "#173229" }}
//       >
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
//             style={{
//               background: "radial-gradient(circle, #B8D4BE, transparent 60%)",
//             }}
//           />
//         </div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center"
//           >
//             <h2
//               className="font-dela text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 md:mb-12"
//               style={{ color: "#F8FFE8" }}
//             >
//               We own your results.
//             </h2>

//             <div className="space-y-6 md:space-y-8 mb-10 md:mb-14">
//               {[
//                 { dim: "Most agencies stop at", bright: '"clicks."' },
//                 { dim: "We stop at", bright: '"admissions."' },
//               ].map((line, i) => (
//                 <motion.p
//                   key={i}
//                   initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.15 }}
//                   className="font-bricolage text-xl md:text-2xl lg:text-3xl"
//                 >
//                   <span style={{ color: "rgba(248, 255, 232, 0.5)" }}>
//                     {line.dim}{" "}
//                   </span>
//                   <span style={{ color: "#B8D4BE" }}>{line.bright}</span>
//                 </motion.p>
//               ))}
//             </div>

//             {/* Divider line */}
//             <div
//               className="w-24 h-px mx-auto mb-10 md:mb-14"
//               style={{ backgroundColor: "rgba(184, 212, 190, 0.3)" }}
//             />

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 }}
//               className="mb-10 md:mb-14"
//             >
//               <p
//                 className="font-bricolage text-lg md:text-xl lg:text-2xl mb-2"
//                 style={{ color: "rgba(248, 255, 232, 0.7)" }}
//               >
//                 One partner for everything you need.
//               </p>
//               <p
//                 className="font-dela text-xl md:text-2xl lg:text-3xl"
//                 style={{ color: "#E2FEA5" }}
//               >
//                 From SEO to Event Management.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//             >
//               <a href="#cta-form" className="inline-block">
//                 <Button
//                   size="lg"
//                   className="group rounded-full px-8 md:px-10 min-h-[56px] md:min-h-[60px] text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all"
//                   style={{
//                     backgroundColor: "#B8D4BE",
//                     color: "#0a0a0a",
//                     border: "3px solid #0a0a0a",
//                     boxShadow: "0 4px 0 #0a0a0a",
//                   }}
//                 >
//                   Secure your enrollment
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== 360° GROWTH ENGINE (Accordion) ===== */}
//       <section
//         className="py-16 md:py-24 lg:py-32 px-4"
//         style={{ backgroundColor: "#1e3c30" }}
//       >
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10 md:mb-14"
//           >
//             <span
//               className="inline-block px-4 py-2 rounded-full font-bricolage text-sm mb-4 md:mb-6"
//               style={{
//                 backgroundColor: "rgba(226, 254, 165, 0.1)",
//                 border: "1px solid rgba(226, 254, 165, 0.2)",
//                 color: "#E2FEA5",
//               }}
//             >
//               Everything Under One Roof
//             </span>
//             <h2
//               className="font-dela text-3xl md:text-4xl lg:text-5xl"
//               style={{ color: "#F8FFE8" }}
//             >
//               The 360° Growth Engine
//             </h2>
//           </motion.div>

//           {/* Accordion Items */}
//           <div className="space-y-3 md:space-y-4">
//             {serviceCategories.map((category, index) => {
//               const IconComponent = category.icon;
//               const isOpen = openCategory === category.id;

//               return (
//                 <motion.div
//                   key={category.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.05 }}
//                   className="rounded-2xl overflow-hidden"
//                   style={{
//                     backgroundColor: isOpen
//                       ? "rgba(184, 212, 190, 0.08)"
//                       : "rgba(248, 255, 232, 0.03)",
//                     border: `1px solid ${isOpen ? "rgba(184, 212, 190, 0.3)" : "rgba(248, 255, 232, 0.08)"}`,
//                   }}
//                 >
//                   <button
//                     onClick={() => toggleCategory(category.id)}
//                     className="w-full flex items-center justify-between p-4 md:p-6 text-left transition-colors"
//                   >
//                     <div className="flex items-center gap-3 md:gap-4">
//                       <div
//                         className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
//                         style={{
//                           backgroundColor: isOpen
//                             ? "rgba(184, 212, 190, 0.2)"
//                             : "rgba(248, 255, 232, 0.05)",
//                         }}
//                       >
//                         <IconComponent
//                           className="w-5 h-5 md:w-6 md:h-6 transition-colors"
//                           style={{
//                             color: isOpen
//                               ? "#B8D4BE"
//                               : "rgba(248, 255, 232, 0.6)",
//                           }}
//                         />
//                       </div>
//                       <div>
//                         <h3
//                           className="font-dela text-base md:text-lg transition-colors"
//                           style={{
//                             color: isOpen
//                               ? "#F8FFE8"
//                               : "rgba(248, 255, 232, 0.8)",
//                           }}
//                         >
//                           {category.title}
//                         </h3>
//                         <p
//                           className="font-bricolage text-xs md:text-sm mt-0.5 transition-colors"
//                           style={{
//                             color: isOpen
//                               ? "#B8D4BE"
//                               : "rgba(248, 255, 232, 0.5)",
//                           }}
//                         >
//                           {category.outcome}
//                         </p>
//                       </div>
//                     </div>
//                     <ChevronDown
//                       className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
//                       style={{
//                         color: isOpen ? "#B8D4BE" : "rgba(248, 255, 232, 0.4)",
//                       }}
//                     />
//                   </button>

//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-4 md:px-6 pb-5 md:pb-6 pt-0">
//                           <div className="pl-13 md:pl-16">
//                             <ul className="space-y-2 md:space-y-3">
//                               {category.services.map((service, sIndex) => (
//                                 <motion.li
//                                   key={sIndex}
//                                   initial={{ opacity: 0, x: -10 }}
//                                   animate={{ opacity: 1, x: 0 }}
//                                   transition={{ delay: sIndex * 0.05 }}
//                                   className="flex items-start gap-3"
//                                 >
//                                   <Check
//                                     className="w-4 h-4 flex-shrink-0 mt-0.5"
//                                     style={{ color: "#B8D4BE" }}
//                                   />
//                                   <span
//                                     className="font-bricolage text-sm md:text-base"
//                                     style={{
//                                       color: "rgba(248, 255, 232, 0.85)",
//                                     }}
//                                   >
//                                     {service}
//                                   </span>
//                                 </motion.li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ===== SAFETY PROMISE SECTION ===== */}
//       <section
//         className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden"
//         style={{ backgroundColor: "#253e35" }}
//       >
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div
//             className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15"
//             style={{
//               background: "radial-gradient(circle, #E2FEA5, transparent 60%)",
//             }}
//           />
//         </div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10 md:mb-14"
//           >
//             <div
//               className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto mb-6 md:mb-8"
//               style={{
//                 backgroundColor: "rgba(226, 254, 165, 0.1)",
//                 border: "2px solid rgba(226, 254, 165, 0.2)",
//               }}
//             >
//               <Shield
//                 className="w-8 h-8 md:w-10 md:h-10"
//                 style={{ color: "#E2FEA5" }}
//               />
//             </div>

//             <h2
//               className="font-dela text-3xl md:text-4xl lg:text-5xl mb-4"
//               style={{ color: "#F8FFE8" }}
//             >
//               No wasted investment.
//             </h2>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-14">
//             {safetyPromises.map((promise, index) => {
//               const IconComponent = promise.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="rounded-2xl p-5 md:p-6 text-center"
//                   style={{
//                     backgroundColor: "rgba(248, 255, 232, 0.03)",
//                     border: "1px solid rgba(248, 255, 232, 0.1)",
//                   }}
//                 >
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
//                     style={{ backgroundColor: "rgba(184, 212, 190, 0.15)" }}
//                   >
//                     <IconComponent
//                       className="w-6 h-6"
//                       style={{ color: "#B8D4BE" }}
//                     />
//                   </div>
//                   <p
//                     className="font-bricolage text-base md:text-lg"
//                     style={{ color: "#F8FFE8" }}
//                   >
//                     {promise.text}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Clarity Signal */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-wrap justify-center gap-4 md:gap-6"
//           >
//             {["Weekly Reports", "Direct WhatsApp Access"].map((item, i) => (
//               <div
//                 key={i}
//                 className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full"
//                 style={{
//                   backgroundColor: "rgba(226, 254, 165, 0.1)",
//                   border: "1px solid rgba(226, 254, 165, 0.2)",
//                 }}
//               >
//                 <Check className="w-4 h-4" style={{ color: "#E2FEA5" }} />
//                 <span
//                   className="font-bricolage text-sm"
//                   style={{ color: "#E2FEA5" }}
//                 >
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== FINAL CTA FORM ===== */}
//       <section
//         id="cta-form"
//         className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden"
//         style={{ backgroundColor: "#173229" }}
//       >
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div
//             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
//             style={{
//               background: "radial-gradient(ellipse, #B8D4BE, transparent 70%)",
//             }}
//           />
//         </div>

//         <div className="max-w-2xl mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-8 md:mb-12"
//           >
//             <h2
//               className="font-dela text-3xl md:text-4xl lg:text-5xl mb-4"
//               style={{ color: "#F8FFE8" }}
//             >
//               Let's fill your next batch.
//             </h2>
//             <p
//               className="font-bricolage text-base md:text-lg"
//               style={{ color: "rgba(248, 255, 232, 0.7)" }}
//             >
//               Pick a time to map this out.
//             </p>
//           </motion.div>

//           <motion.form
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             onSubmit={handleSubmit}
//             className="rounded-3xl p-6 md:p-8 lg:p-10"
//             style={{
//               backgroundColor: "rgba(248, 255, 232, 0.03)",
//               border: "1px solid rgba(248, 255, 232, 0.1)",
//             }}
//           >
//             <div className="space-y-4 md:space-y-5">
//               <div>
//                 <label
//                   className="block font-bricolage text-sm mb-2"
//                   style={{ color: "rgba(248, 255, 232, 0.7)" }}
//                 >
//                   Your Name
//                 </label>
//                 <Input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Full name"
//                   className="rounded-xl min-h-[52px] text-base font-bricolage border-0"
//                   style={{
//                     backgroundColor: "rgba(248, 255, 232, 0.08)",
//                     color: "#F8FFE8",
//                   }}
//                 />
//               </div>

//               <div>
//                 <label
//                   className="block font-bricolage text-sm mb-2"
//                   style={{ color: "rgba(248, 255, 232, 0.7)" }}
//                 >
//                   Email Address
//                 </label>
//                 <Input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="you@institution.edu"
//                   className="rounded-xl min-h-[52px] text-base font-bricolage border-0"
//                   style={{
//                     backgroundColor: "rgba(248, 255, 232, 0.08)",
//                     color: "#F8FFE8",
//                   }}
//                 />
//               </div>

//               <div>
//                 <label
//                   className="block font-bricolage text-sm mb-2"
//                   style={{ color: "rgba(248, 255, 232, 0.7)" }}
//                 >
//                   Phone Number
//                 </label>
//                 <div className="flex">
//                   <div
//                     className="flex items-center justify-center px-4 rounded-l-xl min-h-[52px] font-bricolage text-base"
//                     style={{
//                       backgroundColor: "rgba(184, 212, 190, 0.15)",
//                       color: "#B8D4BE",
//                     }}
//                   >
//                     +91
//                   </div>
//                   <Input
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="10-digit mobile number"
//                     maxLength={10}
//                     className="rounded-l-none rounded-r-xl min-h-[52px] text-base font-bricolage border-0 flex-1"
//                     style={{
//                       backgroundColor: "rgba(248, 255, 232, 0.08)",
//                       color: "#F8FFE8",
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               size="lg"
//               className="w-full mt-6 md:mt-8 group rounded-full min-h-[56px] md:min-h-[60px] text-base md:text-lg font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all"
//               style={{
//                 backgroundColor: "#B8D4BE",
//                 color: "#0a0a0a",
//                 border: "3px solid #0a0a0a",
//                 boxShadow: "0 4px 0 #0a0a0a",
//               }}
//             >
//               {isSubmitting ? "Sending..." : "Secure your enrollment"}
//               {!isSubmitting && (
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
//               )}
//             </Button>

//             {/* Clarity Signal */}
//             <div className="mt-6 text-center">
//               <div
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
//                 style={{
//                   backgroundColor: "rgba(226, 254, 165, 0.1)",
//                   border: "1px solid rgba(226, 254, 165, 0.2)",
//                 }}
//               >
//                 <Check className="w-4 h-4" style={{ color: "#E2FEA5" }} />
//                 <span
//                   className="font-bricolage text-sm"
//                   style={{ color: "#E2FEA5" }}
//                 >
//                   One Goal: Your Admissions.
//                 </span>
//               </div>
//             </div>
//           </motion.form>
//         </div>
//       </section>

//       {/* Spacer for mobile fixed CTA */}
//       <div className="h-24 md:hidden" style={{ backgroundColor: "#173229" }} />

//       <EnhancedFooter />
//     </div>
//   );
// };

// export default HigherEducationMarketingV2;
