import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Home, BookOpen, Briefcase } from "lucide-react";
import { Aurora } from "@/components/Aurora";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const NotFound = () => (
  <>
    <Helmet>
      <title>404 - Seite nicht gefunden | Pirro Consulting</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <section
      id="main-content"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-foreground text-background"
    >
      <Aurora />

      <motion.div
        className="container mx-auto max-w-2xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 */}
        <motion.h1
          className="text-[8rem] md:text-[12rem] font-display font-bold leading-none select-none text-background/10 mb-2"
          variants={itemVariants}
        >
          404
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold mb-4"
          variants={itemVariants}
        >
          Seite nicht gefunden
        </motion.h2>

        <motion.p
          className="text-lg text-background/60 max-w-md mx-auto mb-10"
          variants={itemVariants}
        >
          Die Seite die du suchst existiert leider nicht. Aber hier findest du
          bestimmt was du brauchst:
        </motion.p>

        {/* Quick Links */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 mb-10"
          variants={itemVariants}
        >
          <Link
            to="/"
            className="flex flex-col items-center gap-2 p-5 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
          >
            <Home className="w-6 h-6 text-background/60" />
            <span className="text-sm font-medium">Startseite</span>
          </Link>
          <Link
            to="/blog"
            className="flex flex-col items-center gap-2 p-5 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
          >
            <BookOpen className="w-6 h-6 text-background/60" />
            <span className="text-sm font-medium">Blog</span>
          </Link>
          <Link
            to="/kontakt"
            className="flex flex-col items-center gap-2 p-5 rounded-xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
          >
            <Briefcase className="w-6 h-6 text-background/60" />
            <span className="text-sm font-medium">Kontakt</span>
          </Link>
        </motion.div>

        {/* Primary CTA */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </motion.div>
      </motion.div>
    </section>
  </>
);

export default NotFound;
