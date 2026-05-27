import ScrollToTop from "@/components/utils/ScrollToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AppRoutes from "./AppRoutes";

const isBrowser = typeof window !== "undefined";

const AppContent = () => (
  <>
    {isBrowser && <WhatsAppButton />}
    {isBrowser && <ScrollToTop />}
    <AppRoutes />
  </>
);

export default AppContent;