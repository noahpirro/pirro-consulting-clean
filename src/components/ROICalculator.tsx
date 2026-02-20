import { useState, useEffect, useRef } from "react";
import { Calculator, Clock, TrendingUp, Euro, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

/* ------------------------------------------------------------------ */
/*  Animated number display – counts up smoothly via rAF              */
/* ------------------------------------------------------------------ */
function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  locale = "de-DE",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
}) {
  const [display, setDisplay] = useState("0");
  const prevRef = useRef(0);

  useEffect(() => {
    const start = prevRef.current;
    const diff = value - start;
    let startTime: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / 600, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased).toLocaleString(locale));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    prevRef.current = value;
  }, [value, locale]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Custom range slider with orange thumb & thin track                */
/* ------------------------------------------------------------------ */
function RangeSlider({
  label,
  min,
  max,
  value,
  onChange,
  unit = "",
  formatValue,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  unit?: string;
  formatValue?: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const displayed = formatValue ? formatValue(value) : `${value}${unit}`;

  return (
    <div className="space-y-3">
      {/* Label row */}
      <div className="flex items-center justify-between">
        <span className="text-sm md:text-base font-medium text-background/80">
          {label}
        </span>
        <span className="text-lg md:text-xl font-display font-bold text-highlight tabular-nums">
          {displayed}
        </span>
      </div>

      {/* Range input */}
      <div className="relative h-8 flex items-center">
        {/* Track background */}
        <div className="absolute inset-x-0 h-[3px] rounded-full bg-background/15" />
        {/* Filled track */}
        <div
          className="absolute left-0 h-[3px] rounded-full bg-highlight"
          style={{ width: `${pct}%` }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={value}
          aria-label={label}
          onChange={(e) => onChange(Number(e.target.value))}
          className="roi-slider relative z-10 w-full appearance-none bg-transparent cursor-pointer"
        />
      </div>

      {/* Min / Max labels */}
      <div className="flex items-center justify-between text-xs text-background/40">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Result card                                                       */
/* ------------------------------------------------------------------ */
function ResultCard({
  icon: Icon,
  label,
  value,
  prefix,
  suffix,
  delay,
}: {
  icon: typeof Clock;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delay: number;
}) {
  const [cardRef, cardInView] = useInView<HTMLDivElement>({ margin: "-60px" });

  /* track value changes for pulse animation */
  const [pulse, setPulse] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setPulse(true);
      prevValue.current = value;
      const id = setTimeout(() => setPulse(false), 400);
      return () => clearTimeout(id);
    }
  }, [value]);

  return (
    <div
      ref={cardRef}
      className={`relative bg-background/[0.07] backdrop-blur-sm border border-background/10 rounded-2xl p-6 overflow-hidden group transition-all duration-600 ease-out ${
        cardInView
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      } ${pulse ? "scale-[1.03]" : "scale-100"} transition-transform duration-300`}
      style={{
        transitionDelay: cardInView ? `${delay * 1000}ms` : "0ms",
      }}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-highlight/0 group-hover:bg-highlight/5 transition-colors duration-500 rounded-2xl" />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-highlight/15 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-highlight" strokeWidth={1.5} />
        </div>

        <p className="text-sm text-background/55 mb-1">{label}</p>

        <p className="text-3xl md:text-4xl font-display font-bold text-background tabular-nums">
          <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
        </p>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ROICalculator                                                     */
/* ================================================================== */
export const ROICalculator = () => {
  /* slider state */
  const [members, setMembers] = useState(5);
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(50);

  /* derived values */
  const timeSavedMonth = Math.round(hours * 0.7 * 4.33);
  const costSavedMonth = Math.round(timeSavedMonth * rate);
  const costSavedYear = costSavedMonth * 12;

  /* refs for in-view animation */
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ margin: "-80px" });
  const [slidersRef, slidersInView] = useInView<HTMLDivElement>({ margin: "-80px" });
  const [ctaRef, ctaInView] = useInView<HTMLDivElement>();

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* ---- Background decorations ---- */}
      <div
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-3xl"
        style={{ animation: "blob-float-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-background/5 rounded-full blur-3xl"
        style={{ animation: "blob-float-2 14s ease-in-out infinite" }}
      />

      {/* Grid dots */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ---- Content ---- */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 md:mb-20 transition-all duration-700 ease-out ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-background/60" />
            <span className="text-sm text-background/60">ROI-Rechner</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Was kostet dich{" "}
            <span className="text-highlight">Nicht-Automatisierung?</span>
          </h2>
          <p className="text-base md:text-lg text-background/60 max-w-2xl mx-auto">
            Berechne in Sekunden, wie viel Zeit und Geld du jeden Monat durch
            manuelle Prozesse verlierst.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: Sliders */}
          <div
            ref={slidersRef}
            className={`space-y-10 transition-all duration-700 ease-out ${
              slidersInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: slidersInView ? "150ms" : "0ms" }}
          >
            <RangeSlider
              label="Mitarbeiter im Team"
              min={1}
              max={50}
              value={members}
              onChange={setMembers}
            />

            <RangeSlider
              label="Stunden pro Woche für manuelle Prozesse"
              min={5}
              max={80}
              value={hours}
              onChange={setHours}
              suffix=" h"
              formatValue={(v) => `${v} h`}
            />

            <RangeSlider
              label="Durchschnittlicher Stundenlohn"
              min={20}
              max={150}
              value={rate}
              onChange={setRate}
              formatValue={(v) => `${v} \u20AC`}
            />
          </div>

          {/* RIGHT: Result cards */}
          <div className="grid gap-5">
            <ResultCard
              icon={Clock}
              label="Zeitersparnis pro Monat"
              value={timeSavedMonth}
              suffix=" Stunden"
              delay={0.1}
            />
            <ResultCard
              icon={Euro}
              label="Kostenersparnis pro Monat"
              value={costSavedMonth}
              prefix="\u20AC"
              delay={0.2}
            />
            <ResultCard
              icon={TrendingUp}
              label="Kostenersparnis pro Jahr"
              value={costSavedYear}
              prefix="\u20AC"
              delay={0.3}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-14 md:mt-20 transition-all duration-600 ease-out ${
            ctaInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: ctaInView ? "350ms" : "0ms" }}
        >
          <div className="inline-block hover:scale-[1.03] active:scale-[0.98] transition-transform">
            <Button
              size="lg"
              className="h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 transition-all group"
            >
              Jetzt Potenzialanalyse sichern
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-background/50 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-highlight rounded-full" />
              100% kostenlos
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-highlight rounded-full" />
              Unverbindlich
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-highlight rounded-full" />
              Ergebnisse in 30 Minuten
            </span>
          </div>
        </div>
      </div>

      {/* ---- Custom slider styles + blob keyframes ---- */}
      <style>{`
        /* Reset native styling */
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: hsl(15 90% 55%);
          border: 3px solid hsl(15 90% 65%);
          box-shadow: 0 0 12px hsl(15 90% 55% / 0.4);
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 20px hsl(15 90% 55% / 0.6);
        }
        .roi-slider::-webkit-slider-thumb:active {
          transform: scale(1.05);
        }
        .roi-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: hsl(15 90% 55%);
          border: 3px solid hsl(15 90% 65%);
          box-shadow: 0 0 12px hsl(15 90% 55% / 0.4);
          cursor: pointer;
        }
        .roi-slider::-webkit-slider-runnable-track {
          height: 3px;
          background: transparent;
        }
        .roi-slider::-moz-range-track {
          height: 3px;
          background: transparent;
        }
        .roi-slider:focus {
          outline: none;
        }

        @keyframes blob-float-1 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(60px) translateY(40px) scale(1.15); }
        }
        @keyframes blob-float-2 {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); }
          50% { transform: translateX(-40px) translateY(-60px) scale(1.2); }
        }
      `}</style>
    </section>
  );
};
