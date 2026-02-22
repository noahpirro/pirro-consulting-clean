import { useState } from "react";

const STORAGE_KEY = "site-unlocked";
const PASSWORD = "pirroconsulting2026";

export const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "1");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-display font-bold mb-2">Pirro Consulting</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Diese Seite ist passwortgeschützt.
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Passwort eingeben"
          autoFocus
          className={`w-full h-12 px-4 rounded-lg border text-center text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${
            error ? "border-destructive bg-destructive/5 animate-shake" : "border-border bg-secondary"
          }`}
        />
        <button
          type="submit"
          className="w-full h-12 mt-3 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors"
        >
          Zugang freischalten
        </button>
      </form>
    </div>
  );
};
