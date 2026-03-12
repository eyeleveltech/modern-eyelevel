import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
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