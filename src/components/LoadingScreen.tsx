import { useState, useEffect } from "react";
import logo from "@/assets/logo.webp";

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-foreground transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <img
        src={logo}
        alt="Pirro Consulting"
        width={200}
        height={54}
        className="w-44 md:w-52 brightness-0 invert"
      />
    </div>
  );
};
