import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AccessibilityState {
  reducedMotion: boolean;
  readingMode: boolean;
  lowGraphics: boolean;
  toggle: (key: "reducedMotion" | "readingMode" | "lowGraphics") => void;
}

const AccessibilityContext = createContext<AccessibilityState>({
  reducedMotion: false,
  readingMode: false,
  lowGraphics: false,
  toggle: () => {},
});

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });
  const [readingMode, setReadingMode] = useState(false);
  const [lowGraphics, setLowGraphics] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = (key: "reducedMotion" | "readingMode" | "lowGraphics") => {
    if (key === "reducedMotion") setReducedMotion((v) => !v);
    if (key === "readingMode") setReadingMode((v) => !v);
    if (key === "lowGraphics") setLowGraphics((v) => !v);
  };

  return (
    <AccessibilityContext.Provider value={{ reducedMotion, readingMode, lowGraphics, toggle }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => useContext(AccessibilityContext);
