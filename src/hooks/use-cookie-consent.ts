import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "cookie-consent";

export type ConsentValue = "all" | "necessary" | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEY) as ConsentValue;
  });

  const updateConsent = useCallback((value: "all" | "necessary") => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
  }, []);

  // Block/unblock analytics based on consent
  useEffect(() => {
    if (consent === "all") {
      // Enable analytics tracking
      window.localStorage.setItem("analytics-enabled", "true");
    } else {
      // Disable analytics tracking
      window.localStorage.removeItem("analytics-enabled");
    }
  }, [consent]);

  return {
    consent,
    updateConsent,
    hasConsent: consent !== null,
    allowsAnalytics: consent === "all",
  };
}
