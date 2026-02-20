import { useRef, useEffect, useCallback } from "react";

interface InteractiveGridProps {
  /** Grid cell size in px (default 40) */
  cellSize?: number;
  /** Dot base color (default "rgba(255,255,255,0.06)") */
  dotColor?: string;
  /** Highlight color when mouse is near (default "rgba(255,255,255,0.3)") */
  highlightColor?: string;
  /** Radius of mouse influence in px (default 120) */
  radius?: number;
}

/**
 * Canvas-based interactive dot grid that reacts to mouse movement.
 * Very performant since it uses requestAnimationFrame + canvas.
 */
export const InteractiveGrid = ({
  cellSize = 40,
  dotColor = "rgba(255,255,255,0.06)",
  highlightColor = "rgba(255,255,255,0.35)",
  radius = 120,
}: InteractiveGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    });
    resizeObserver.observe(parent);
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    parent.addEventListener("mousemove", handleMouseMove, { passive: true });
    parent.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      const cols = Math.ceil(canvas.width / cellSize) + 1;
      const rows = Math.ceil(canvas.height / cellSize) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize;
          const y = row * cellSize;
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          const proximity = Math.max(0, 1 - dist / radius);

          // Interpolate size and color based on proximity
          const dotSize = 1 + proximity * 2;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = proximity > 0 ? highlightColor : dotColor;
          ctx.globalAlpha = proximity > 0 ? 0.1 + proximity * 0.8 : 1;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cellSize, dotColor, highlightColor, radius, handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden="true"
    />
  );
};
