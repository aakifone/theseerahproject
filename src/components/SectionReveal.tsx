import { useEffect, useRef, ReactNode } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useAccessibility();

  useEffect(() => {
    if (reducedMotion) {
      ref.current?.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            ref.current?.classList.add("visible");
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reducedMotion, delay]);

  return (
    <div ref={ref} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
}
