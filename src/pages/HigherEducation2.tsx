// import Header from "@/components/Header";
// import React, { useState } from "react";
// import img from "@/assets/industries/edulanding.png";
// import { ArrowRight, Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import WavyUnderline from "@/components/WavyUnderline";
// import { motion, AnimatePresence } from "framer-motion";
// import GreenButton from "@/components/GreenButton";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast";

// const HigherEducation2 = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

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
//       // Only allow digits, max 10
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, phone: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const proff_stat = [
//     {
//       value: "5%",
//       title: "Boost enrollment fast.",
//       description: "Targeted Campaigns.",
//     },
//     {
//       value: "40%",
//       title: "Elevate branding authority.",
//       description: "Stand out now.",
//     },
//     // {
//     //   value: "45%",
//     //   title: "Slash CAC costs.",
//     //   description: "Smarter admissions.",
//     // },
//     // {
//     //   value: "50%",
//     //   title: "Cut consultant reliance.",
//     //   description: "Own admissions now.",
//     // },
//   ];
//   return (
//     <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
//       {/* ✅ Background Video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//         poster="/images/hero-fallback.jpg"
//       >
//         <source src="/eduvideo.mp4" type="video/mp4" />
//         {/* Optional WebM for better performance */}
//         <source src="/videos/campus-hero.webm" type="video/webm" />
//       </video>

//       {/* ✅ Dark green overlay for readability */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(120deg, rgba(37,62,53,0.82), rgba(23,50,41,0.75))",
//         }}
//       />

//       {/* ✅ Optional soft radial glow (premium) */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at 20% 20%, rgba(226,254,165,0.10), transparent 55%)",
//           opacity: 0.9,
//         }}
//       />

//       <div className="absolute top-5 left-5">
//         <img src="/logo_eyelevel.png" alt="" className="w-14 md:w-20" />
//       </div>

//       {/* ✅ Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">
//         {/* left side content */}
//         <section className="flex flex-col items-baseline justify-center max-w-2xl">
//           <GreenButton>Higher Education</GreenButton>
//           <h1 className="text-3xl md:text-4xl lg:text-6xl mb-3 uppercase text-[#E1FCA4]">
//             From Visibility to Admission
//           </h1>
//           <p className="text-lg md:text-2xl text-[rgba(248,255,232,0.85)]">
//             "Fill Your Seats with Top-Tier Students – Proven{" "}
//             <span className="text-[#E1FCA4] text-2xl md:text-4xl font-bold">
//               +25%{" "}
//             </span>
//             Enrollment Growth."
//           </p>

//           {/* stats */}
//           <div className="hidden md:grid grid-cols-2 mt-5 items-center justify-center gap-10 w-full">
//             {proff_stat.map((stat) => (
//               <div
//                 className="flex flex-col gap-1 p-5 rounded-2xl"
//                 style={{
//                   backgroundColor: "rgba(248, 255, 232, 0.05)",
//                   border: "2px solid rgba(248, 255, 232, 0.1)",
//                 }}
//               >
//                 <span className="text-3xl font-bold text-[#E1FCA4]">
//                   {stat.value}
//                 </span>
//                 <p>{stat.title}</p>
//                 <p className="text-xs">{stat.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* right side form */}
//         <section id="cta-form">
//           <div className="max-w-3xl mx-auto">
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//             >
//               <div
//                 className="rounded-2xl p-6 md:p-8 max-w-lg mx-auto"
//                 style={{
//                   backgroundColor: "rgba(248, 255, 232, 0.05)",
//                   border: "2px solid rgba(248, 255, 232, 0.1)",
//                 }}
//               >
//                 <div className="space-y-4 mb-6">
//                   {/* Name Field */}
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block font-bricolage text-sm mb-2"
//                       style={{ color: "rgba(248, 255, 232, 0.7)" }}
//                     >
//                       Name
//                     </label>
//                     <Input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full min-h-[52px] rounded-xl font-bricolage text-base"
//                       style={{
//                         backgroundColor: "rgba(248, 255, 232, 0.05)",
//                         border: "1px solid rgba(248, 255, 232, 0.2)",
//                         color: "#F8FFE8",
//                       }}
//                       placeholder="Your name"
//                     />
//                   </div>

//                   {/* Email Field */}
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block font-bricolage text-sm mb-2"
//                       style={{ color: "rgba(248, 255, 232, 0.7)" }}
//                     >
//                       Email
//                     </label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full min-h-[52px] rounded-xl font-bricolage text-base"
//                       style={{
//                         backgroundColor: "rgba(248, 255, 232, 0.05)",
//                         border: "1px solid rgba(248, 255, 232, 0.2)",
//                         color: "#F8FFE8",
//                       }}
//                       placeholder="your@email.com"
//                     />
//                   </div>

//                   {/* Phone Field with +91 prefix */}
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block font-bricolage text-sm mb-2"
//                       style={{ color: "rgba(248, 255, 232, 0.7)" }}
//                     >
//                       Phone Number
//                     </label>
//                     <div className="flex">
//                       <div
//                         className="flex items-center justify-center px-4 rounded-l-xl border-y border-l font-bricolage text-base"
//                         style={{
//                           backgroundColor: "rgba(248, 255, 232, 0.08)",
//                           borderColor: "rgba(248, 255, 232, 0.2)",
//                           color: "rgba(248, 255, 232, 0.7)",
//                         }}
//                       >
//                         +91
//                       </div>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         maxLength={10}
//                         pattern="[0-9]{10}"
//                         className="w-full min-h-[52px] rounded-l-none rounded-r-xl font-bricolage text-base"
//                         style={{
//                           backgroundColor: "rgba(248, 255, 232, 0.05)",
//                           border: "1px solid rgba(248, 255, 232, 0.2)",
//                           color: "#F8FFE8",
//                         }}
//                         placeholder="9876543210"
//                       />
//                     </div>
//                     <p
//                       className="font-bricolage text-xs mt-1.5"
//                       style={{ color: "rgba(248, 255, 232, 0.4)" }}
//                     >
//                       Enter 10 digit mobile number
//                     </p>
//                   </div>
//                 </div>

//                 <Button
//                   type="submit"
//                   size="lg"
//                   disabled={isSubmitting}
//                   className="w-full rounded-xl min-h-[56px] text-base font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-70"
//                   style={{
//                     backgroundColor: "#FCFAC2",
//                     color: "#0a0a0a",
//                     border: "2px solid #0a0a0a",
//                   }}
//                 >
//                   {isSubmitting ? "Sending..." : "Secure your enrollment"}
//                   <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </div>
//             </motion.form>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default HigherEducation2;
