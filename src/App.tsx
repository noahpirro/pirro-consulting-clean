import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
