import { Toaster } from "@/components/ui/toaster";
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
import { CursorEffect } from "./components/CursorEffect";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { ErrorBoundary } from "./components/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
  <HelmetProvider>
      <TooltipProvider>
        <LoadingScreen />
        <CursorEffect />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          <BackToTop />
          <CookieConsent />
          <WhatsAppWidget />
          <SocialProofPopup />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
  </HelmetProvider>
  </ErrorBoundary>
);

export default App;
