interface WaveDividerProps {
  /** "top" draws wave at top of section, "bottom" at bottom */
  position?: "top" | "bottom";
  /** Fill color (default matches background) */
  fill?: string;
  /** Whether to animate the wave */
  animate?: boolean;
}

/**
 * Animated wave SVG divider between sections.
 * Uses native SMIL <animate> instead of Framer Motion for GPU performance.
 */
export const WaveDivider = ({
  position = "bottom",
  fill = "hsl(var(--background))",
  animate: shouldAnimate = true,
}: WaveDividerProps) => {
  const isTop = position === "top";

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-none z-[2] ${
        isTop ? "top-0" : "bottom-0"
      }`}
      style={{ transform: isTop ? "rotate(180deg)" : undefined }}
    >
      <svg
        className="relative block w-full"
        style={{ height: "60px" }}
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shouldAnimate ? (
          <>
            <path
              d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
              fill={fill}
              fillOpacity={0.5}
            >
              <animate
                attributeName="d"
                values="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z;M0,20 C200,0 400,50 600,20 C800,0 1000,50 1200,20 L1200,60 L0,60 Z;M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0,40 C300,60 500,20 700,40 C900,60 1100,20 1200,40 L1200,60 L0,60 Z"
              fill={fill}
            >
              <animate
                attributeName="d"
                values="M0,40 C300,60 500,20 700,40 C900,60 1100,20 1200,40 L1200,60 L0,60 Z;M0,35 C300,10 500,55 700,35 C900,10 1100,55 1200,35 L1200,60 L0,60 Z;M0,40 C300,60 500,20 700,40 C900,60 1100,20 1200,40 L1200,60 L0,60 Z"
                dur="6s"
                repeatCount="indefinite"
                begin="1s"
              />
            </path>
          </>
        ) : (
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill={fill}
          />
        )}
      </svg>
    </div>
  );
};
