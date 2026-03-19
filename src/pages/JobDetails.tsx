import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import EnhancedFooter from "@/components/EnhancedFooter";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Share2,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { jobListings } from "@/data/careers";

const JobDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const baseUrl = "https://theeyelevelstudio.com";
  const jobUrl = slug ? `${baseUrl}/careers/${slug}` : `${baseUrl}/careers`;

  const job = slug ? jobListings[slug] : null;

  if (!job) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#253e35" }}>
        <SEO
          title="Job Not Found | The EyeLevel Studio"
          description="The requested career listing could not be found."
          keywords={["job not found", "career listing", "marketing jobs"]}
          canonical={`${baseUrl}/careers`}
          url={jobUrl}
          noindex
        />
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-dela text-4xl text-[#F8FFE8] mb-4">
            Job Not Found
          </h1>
          <p className="text-[rgba(248,255,232,0.7)] mb-8">
            The job you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/careers")}
            className="bg-[#E2FEA5] text-[#253e35]"
          >
            Back to Careers
          </Button>
        </div>
        <EnhancedFooter showCTA={false} />
      </div>
    );
  }

  const handleApply = () => {
    navigate(`/apply?position=${encodeURIComponent(job.title)}`);
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    
    if (navigator.share) {
      await navigator.share({
        title: `${job.title} at EyeLevel Growth Studio`,
        text: job.shortDescription,
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#253e35" }}
    >
      <SEO
        title={`${job.title} | Careers at The EyeLevel Studio`}
        description={job.shortDescription}
        keywords={[
          job.title,
          `${job.department} jobs`,
          `${job.location} jobs`,
          "marketing careers",
          "creative agency jobs",
        ]}
        canonical={jobUrl}
        url={jobUrl}
      />
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/careers")}
            className="flex items-center gap-2 text-[rgba(248,255,232,0.7)] hover:text-[#E2FEA5] mb-8 transition-colors font-bricolage"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium font-bricolage"
                style={{ backgroundColor: "#E2FEA5", color: "#173229" }}
              >
                EyeLevel Growth Studio
              </span>
              <span
                className="text-xs px-3 py-1 rounded-full font-medium font-bricolage"
                style={{ backgroundColor: "#173229", color: "#F8FFE8" }}
              >
                {job.type}
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl font-dela mb-4 uppercase"
              style={{ color: "#F8FFE8" }}
            >
              {job.title}
            </h1>

            <div
              className="flex flex-wrap items-center gap-4 text-sm font-bricolage"
              style={{ color: "rgba(248, 255, 232, 0.7)" }}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Posted on {job.datePosted}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {job.department}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {job.experience}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group rounded-full px-8 py-6 text-base font-semibold font-bricolage hover:translate-y-0.5 hover:shadow-none transition-all duration-150"
              style={{
                backgroundColor: "#FCFAC2",
                color: "#0a0a0a",
                border: "3px solid #0a0a0a",
                boxShadow: "0 4px 0 #0a0a0a",
              }}
              onClick={handleApply}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold font-bricolage"
              style={{
                backgroundColor: "transparent",
                color: "#F8FFE8",
                border: "2px solid rgba(248, 255, 232, 0.3)",
              }}
              onClick={() => {
                void handleShare();
              }}
            >
              <Share2 className="mr-2 w-5 h-5" />
              Share Job
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                About EyeLevel Growth Studio
              </h2>
              <p
                className="font-bricolage whitespace-pre-line"
                style={{ color: "rgba(248, 255, 232, 0.8)" }}
              >
                {job.aboutCompany}
              </p>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Roles and Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Qualities We Look For
              </h2>
              <ul className="space-y-3">
                {job.qualities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#173229",
                border: "1px solid rgba(226, 254, 165, 0.1)",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#E2FEA5" }}
              >
                Why Work With Us?
              </h2>
              <p
                className="font-bricolage mb-4"
                style={{ color: "rgba(248, 255, 232, 0.8)" }}
              >
                Our team is our most valuable resource! At EyeLevel, each one of
                us is a dynamic superstar. We have carefully bred an ecosystem
                which hires nothing but incredibly and exceptionally talented
                people who can dream, collaborate, experiment and break new
                grounds.
              </p>
              <ul className="space-y-3">
                {job.benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-bricolage"
                    style={{ color: "rgba(248, 255, 232, 0.8)" }}
                  >
                    <CheckCircle
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#E2FEA5" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: "#F8FFE8",
                border: "3px solid #0a0a0a",
                boxShadow: "0 6px 0 #0a0a0a",
              }}
            >
              <h2
                className="font-dela text-2xl mb-4 uppercase"
                style={{ color: "#0a0a0a" }}
              >
                Ready to Join Our Team?
              </h2>
              <p
                className="font-bricolage mb-6"
                style={{ color: "rgba(10, 10, 10, 0.7)" }}
              >
                Passionate about digital marketing and eager to make an impact?
                We'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="group rounded-full px-10 py-6 text-base font-semibold font-bricolage hover:translate-y-0.5 hover:shadow-none transition-all duration-150"
                style={{
                  backgroundColor: "#FCFAC2",
                  color: "#0a0a0a",
                  border: "3px solid #0a0a0a",
                  boxShadow: "0 4px 0 #0a0a0a",
                }}
                onClick={handleApply}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <EnhancedFooter showCTA={false} mascotBgColor="#253E35" />
    </div>
  );
};

export default JobDetails;
