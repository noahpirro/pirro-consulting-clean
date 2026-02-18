import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import Index from "../pages/Index";

const Recruiting = lazy(() => import("../pages/Recruiting"));
const Marketing = lazy(() => import("../pages/Marketing"));
const Webdesign = lazy(() => import("../pages/Webdesign"));
const Impressum = lazy(() => import("../pages/Impressum"));
const Datenschutz = lazy(() => import("../pages/Datenschutz"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogArticle = lazy(() => import("../pages/BlogArticle"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/recruiting" element={<PageTransition><Recruiting /></PageTransition>} />
          <Route path="/marketing" element={<PageTransition><Marketing /></PageTransition>} />
          <Route path="/webdesign" element={<PageTransition><Webdesign /></PageTransition>} />
          <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
          <Route path="/datenschutz" element={<PageTransition><Datenschutz /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogArticle /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
