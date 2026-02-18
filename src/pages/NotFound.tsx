import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, SearchX } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const NotFound = () => {
  const location = useLocation();

  return (
    <>
    <Helmet>
      <title>404 - Seite nicht gefunden | Pirro Consulting</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-foreground text-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-background/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-highlight/5 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto max-w-3xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Large Animated 404 */}
        <motion.div className="relative mb-6" variants={itemVariants}>
          <motion.h1
            className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-bold leading-none select-none text-background/10"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.05)",
                "0 0 60px rgba(255,255,255,0.1)",
                "0 0 20px rgba(255,255,255,0.05)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.h1>

          {/* Icon overlay centered on the 404 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="w-20 h-20 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center">
              <SearchX className="w-10 h-10 text-background/60" />
            </div>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
          variants={itemVariants}
        >
          Seite nicht gefunden
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl text-background/60 max-w-xl mx-auto mb-10"
          variants={itemVariants}
        >
          Die Seite die du suchst existiert leider nicht.
        </motion.p>

        {/* Attempted path display */}
        <motion.div
          className="inline-flex items-center gap-2 bg-background/5 border border-background/10 px-4 py-2 rounded-full mb-10"
          variants={itemVariants}
        >
          <span className="text-sm text-background/40 font-mono">
            {location.pathname}
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex flex-col items-center gap-4"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/"
              className="inline-flex items-center h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 rounded-md transition-all group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Startseite
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
    </>
  );
};

export default NotFound;
