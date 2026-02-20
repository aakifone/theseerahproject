import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Settings2 } from "lucide-react";
import { useAccessibility } from "@/context/AccessibilityContext";
import SearchDialog from "./SearchDialog";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/timeline", label: "Timeline" },
  { to: "/hijrah", label: "Hijrah Journey" },
  { to: "/themes", label: "Themes" },
  { to: "/people-places", label: "People & Places" },
  { to: "/sources", label: "Sources" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const { reducedMotion, readingMode, lowGraphics, toggle } = useAccessibility();

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSettingsOpen(false);
  }, [location]);

  return (
    <div className={`min-h-screen ${readingMode ? "reading-mode" : ""} ${lowGraphics ? "low-graphics" : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1">
        <div
          className="h-full bg-gold transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
            The Seerah
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Accessibility settings"
            >
              <Settings2 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md lg:hidden text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {settingsOpen && (
          <div className="border-t border-border bg-card px-4 py-3">
            <div className="container mx-auto flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={() => toggle("reducedMotion")}
                  className="rounded border-border"
                />
                Reduce motion
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={readingMode}
                  onChange={() => toggle("readingMode")}
                  className="rounded border-border"
                />
                Reading mode
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={lowGraphics}
                  onChange={() => toggle("lowGraphics")}
                  className="rounded border-border"
                />
                Low graphics
              </label>
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <div className="border-t border-border bg-card lg:hidden">
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium py-2.5 px-3 rounded-md transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="main-content">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-lg mx-auto">
            <h3 className="font-serif text-2xl font-semibold mb-3">The Seerah</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              An educational resource exploring the life of Prophet Muhammad ﷺ. This content is for
              educational purposes and should be verified with scholarly sources. Dates noted as approximate
              reflect genuine historical uncertainty.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Built with respect and scholarly care. Content contributions welcome.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
