import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageTransition } from "./PageTransition";
import { ErrorBoundary } from "./ErrorBoundary";
import Index from "../pages/Index";

const Recruiting = lazy(() => import("../pages/Recruiting"));
const Marketing = lazy(() => import("../pages/Marketing"));
const Webdesign = lazy(() => import("../pages/Webdesign"));
const Impressum = lazy(() => import("../pages/Impressum"));
const Datenschutz = lazy(() => import("../pages/Datenschutz"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogArticle = lazy(() => import("../pages/BlogArticle"));
const Kontakt = lazy(() => import("../pages/Kontakt"));
const NotFound = lazy(() => import("../pages/NotFound"));

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

const RouteErrorFallback = (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
    <div className="text-center max-w-md">
      <p className="text-lg font-medium mb-2">Seite konnte nicht geladen werden</p>
      <p className="text-muted-foreground mb-6">Bitte prüfe deine Internetverbindung und versuche es erneut.</p>
      <button
        onClick={() => window.location.reload()}
        className="inline-flex items-center h-10 px-5 bg-foreground text-background rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors"
      >
        Seite neu laden
      </button>
    </div>
  </div>
);

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <ErrorBoundary fallback={RouteErrorFallback}>
      <Suspense fallback={<RouteFallback />} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/recruiting" element={<PageTransition><Recruiting /></PageTransition>} />
          <Route path="/marketing" element={<PageTransition><Marketing /></PageTransition>} />
          <Route path="/webdesign" element={<PageTransition><Webdesign /></PageTransition>} />
          <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
          <Route path="/datenschutz" element={<PageTransition><Datenschutz /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogArticle /></PageTransition>} />
          <Route path="/kontakt" element={<PageTransition><Kontakt /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
