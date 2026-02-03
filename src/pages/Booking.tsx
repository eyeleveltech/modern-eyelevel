import { motion } from "framer-motion";
import Header from "@/components/Header";
import WavyUnderline from "@/components/WavyUnderline";

const Booking = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#253e35" }}>
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-36 pb-10 sm:pb-14">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-dela mb-3 sm:mb-4 uppercase leading-relaxed"
            style={{ color: "#E2FEA5" }}
          >
            Book Your <WavyUnderline>Free</WavyUnderline> Consultation
          </h1>

          <p
            className="text-sm sm:text-base md:text-lg font-bricolage max-w-md sm:max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(248, 255, 232, 0.7)" }}
          >
            Select a date and fill in your details, and let's discuss how we can
            grow your business.
          </p>
        </motion.div>

        {/* Google Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-xl overflow-hidden border"
          style={{
            backgroundColor: "#F8FFE8",
            borderColor: "rgba(208, 233, 153, 0.3)",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LfQ_OWiyFvg1nG-vCR9-00AFU5SqCSRExcs-mQpcL-HoH0qR6soNQ1iCwm22yAzwJJT-qSmoc?gv=true"
            title="Book a consultation with EyeLevel Growth Studio"
            className="block w-full h-[720px] sm:h-[820px] md:h-[950px] lg:h-[1100px]"
            style={{ border: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
