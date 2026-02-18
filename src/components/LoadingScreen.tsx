import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Logo with pulse animation */}
          <motion.img
            src={logo}
            alt="Pirro Consulting"
            width={224}
            height={60}
            className="w-48 md:w-56 brightness-0 invert mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [0, 1, 1, 1],
              scale: [0.9, 1, 1.02, 1],
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut",
            }}
          />

          {/* Progress bar container */}
          <div className="w-48 md:w-56 h-[2px] bg-background/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-background/80 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
