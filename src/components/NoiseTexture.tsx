/**
 * Subtle film grain / noise overlay for premium feel.
 * Place inside a section with `position: relative` and `overflow: hidden`.
 */
export const NoiseTexture = ({ opacity = 0.03 }: { opacity?: number }) => (
  <div
    className="pointer-events-none absolute inset-0 z-[1]"
    style={{ opacity }}
  >
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);
