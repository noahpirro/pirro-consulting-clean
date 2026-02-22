import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { CookieConsent } from "./components/CookieConsent";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { LoadingScreen } from "./components/LoadingScreen";
import { SocialProofPopup } from "./components/SocialProofPopup";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PasswordGate } from "./components/PasswordGate";

const App = () => (
  <ErrorBoundary>
  <PasswordGate>
  <HelmetProvider>
      <TooltipProvider>
        <LoadingScreen />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          <BackToTop />
          <CookieConsent />
          <WhatsAppWidget />
          <SocialProofPopup />
          <ExitIntentPopup />
          <StickyMobileCTA />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
  </HelmetProvider>
  </PasswordGate>
  </ErrorBoundary>
);

export default App;
