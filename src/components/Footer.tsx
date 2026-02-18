import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.img 
              src={logo} 
              alt="Pirro Consulting" 
              className="h-8 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </Link>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <motion.div whileHover={{ color: "hsl(var(--foreground))" }}>
              <Link to="/impressum" className="hover:text-foreground transition-colors">
                Impressum
              </Link>
            </motion.div>
            <motion.div whileHover={{ color: "hsl(var(--foreground))" }}>
              <Link to="/datenschutz" className="hover:text-foreground transition-colors">
                Datenschutz
              </Link>
            </motion.div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pirro Consulting
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
