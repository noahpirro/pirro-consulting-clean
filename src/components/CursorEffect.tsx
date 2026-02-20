import { useEffect, useRef, useState } from "react";

export const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer"
      );
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", () => setIsVisible(false));
      document.removeEventListener("mouseenter", () => setIsVisible(true));
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <div ref={outerRef} className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference" style={{ transition: "transform 0.15s ease-out" }}>
        <div className="rounded-full border border-white/30 transition-all duration-200" style={{ width: isPointer ? 48 : 32, height: isPointer ? 48 : 32, opacity: isVisible ? 1 : 0 }} />
      </div>
      <div ref={innerRef} className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference" style={{ transition: "transform 0.08s ease-out" }}>
        <div className="rounded-full bg-white transition-all duration-200" style={{ width: isPointer ? 8 : 5, height: isPointer ? 8 : 5, opacity: isVisible ? 1 : 0 }} />
      </div>
    </>
  );
};
