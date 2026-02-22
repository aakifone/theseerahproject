import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { volumes, totalReadingTimeMinutes, type Volume, type Chapter, type NarrativeSection } from "@/data/complete-seerah-narrative";
import { ChevronDown, ChevronRight, Clock, BookOpen, MapPin, Users, Shield, AlertTriangle, CheckCircle2, Menu, X } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const confidenceConfig = {
  "well-attested": { label: "Well Attested", icon: CheckCircle2, className: "text-primary bg-secondary border-border" },
  "reported-with-variation": { label: "Reported with Variation", icon: AlertTriangle, className: "text-accent-foreground bg-accent/10 border-accent/30" },
  "disputed": { label: "Disputed", icon: Shield, className: "text-destructive bg-destructive/10 border-destructive/30" },
};

function ConfidenceBadge({ level }: { level: string }) {
  const config = confidenceConfig[level as keyof typeof confidenceConfig];
  if (!config) return null;
  const Icon = config.icon;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded border ${config.className}`}>
      <Icon className="h-3 w-3" /> {config.label}
    </span>
  );
}

function NarrativeSectionBlock({ section }: { section: NarrativeSection }) {
  const [microOpen, setMicroOpen] = useState(false);

  return (
    <article className="mb-12 scroll-mt-24" id={section.id}>
      <h4 className="font-serif text-2xl sm:text-3xl font-semibold mb-4 text-foreground italic">{section.title}</h4>

      {(section.dateRange || section.location || section.confidenceLevel) && (
        <div className="flex flex-wrap gap-3 mb-4 text-xs">
          {section.dateRange && (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" /> {section.dateRange}
            </span>
          )}
          {section.location && (
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3" /> {section.location}
            </span>
          )}
          {section.confidenceLevel && <ConfidenceBadge level={section.confidenceLevel} />}
        </div>
      )}

      <div className="prose prose-stone max-w-none text-foreground/90 leading-relaxed">
        {section.content.split("\n\n").map((para, i) => {
          if (para.startsWith("**") && para.includes("**\n")) {
            const [title, ...rest] = para.split("\n");
            return (
              <div key={i}>
                <h5 className="font-serif text-xl font-semibold mt-6 mb-2 text-foreground italic" dangerouslySetInnerHTML={{ __html: title.replace(/\*\*/g, "") }} />
                {rest.map((p, j) => <p key={j} className="mb-3">{p}</p>)}
              </div>
            );
          }
          if (para.startsWith("—") || para.startsWith("- ")) {
            return <p key={i} className="mb-2 pl-4 border-l-2 border-border text-sm">{para}</p>;
          }
          if (para.startsWith('"') || para.startsWith('"')) {
            return <blockquote key={i} className="border-l-4 border-gold/40 pl-4 italic text-muted-foreground my-4">{para}</blockquote>;
          }
          return <p key={i} className="mb-3">{para}</p>;
        })}
      </div>

      {section.keyFigures && section.keyFigures.length > 0 && (
        <div className="mt-4 p-3 rounded bg-secondary/50 border border-border">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1">
            <Users className="h-3 w-3" /> Key Figures
          </div>
          <p className="text-sm text-foreground">{section.keyFigures.join(", ")}</p>
        </div>
      )}

      {(section.politicalContext || section.socialContext) && (
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {section.politicalContext && (
            <div className="p-3 rounded bg-card border border-border">
              <div className="text-xs font-semibold text-muted-foreground mb-1 italic">Political Context</div>
              <p className="text-sm text-foreground/80">{section.politicalContext}</p>
            </div>
          )}
          {section.socialContext && (
            <div className="p-3 rounded bg-card border border-border">
              <div className="text-xs font-semibold text-muted-foreground mb-1 italic">Social Context</div>
              <p className="text-sm text-foreground/80">{section.socialContext}</p>
            </div>
          )}
        </div>
      )}

      {section.narrationVariants && (
        <div className="mt-4 p-3 rounded border border-accent/30 bg-accent/5">
          <div className="text-xs font-semibold text-accent-foreground mb-1 italic">📜 Narration Variants</div>
          <p className="text-sm text-foreground/80">{section.narrationVariants}</p>
        </div>
      )}

      {section.whyItMatters && (
        <div className="mt-4 p-4 rounded border border-gold/30 bg-gradient-to-r from-gold/5 to-transparent">
          <div className="text-xs font-semibold text-gold-dark mb-1 italic">★ Why It Matters</div>
          <p className="text-sm text-foreground/80 italic">{section.whyItMatters}</p>
        </div>
      )}

      {section.microEvents && section.microEvents.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setMicroOpen(!microOpen)}
            className="flex items-center gap-2 text-xs font-medium text-primary hover:text-gold transition-colors"
          >
            {microOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            {section.microEvents.length} Micro Events
          </button>
          {microOpen && (
            <div className="mt-2 space-y-2 pl-4 border-l-2 border-gold/30">
              {section.microEvents.map((me, i) => (
                <div key={i} className="text-sm">
                  <span className="font-medium text-foreground">{me.title}</span>
                  <span className="text-muted-foreground"> — {me.detail}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {section.citations && section.citations.length > 0 && (
        <div className="mt-4 pt-3 border-t border-border">
          <div className="text-xs font-semibold text-muted-foreground mb-1 italic">Sources</div>
          <div className="flex flex-wrap gap-2">
            {section.citations.map((c, i) => (
              <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                {c.source}: {c.reference}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function ChapterBlock({ chapter }: { chapter: Chapter }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-16 scroll-mt-24" id={chapter.id}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground group-hover:text-primary transition-colors italic">
              {chapter.title}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {chapter.readingTimeMinutes} min read</span>
              <span>{chapter.sections.length} sections</span>
            </div>
          </div>
          {open ? <ChevronDown className="h-5 w-5 text-muted-foreground mt-2 shrink-0" /> : <ChevronRight className="h-5 w-5 text-muted-foreground mt-2 shrink-0" />}
        </div>
      </button>

      {open && (
        <>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">{chapter.overview}</p>
          {chapter.sections.map((section) => (
            <NarrativeSectionBlock key={section.id} section={section} />
          ))}
        </>
      )}
    </div>
  );
}

export default function CompleteSeerah() {
  const [activeVolumeId, setActiveVolumeId] = useState(volumes[0].id);
  const [navOpen, setNavOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [hoverProgress, setHoverProgress] = useState<{ show: boolean; x: number; minutesLeft: number }>({ show: false, x: 0, minutesLeft: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const activeVolume = useMemo(() => volumes.find((v) => v.id === activeVolumeId) || volumes[0], [activeVolumeId]);

  const volumeReadingTime = useMemo(
    () => activeVolume.chapters.reduce((a, ch) => a + ch.readingTimeMinutes, 0),
    [activeVolume]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      const totalHeight = contentRef.current.scrollHeight;
      const scrolled = Math.max(0, -rect.top);
      const viewportHeight = window.innerHeight;
      const progress = Math.min(100, Math.max(0, (scrolled / (totalHeight - viewportHeight)) * 100));
      setReadingProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeVolumeId]);

  const handleProgressBarHover = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const bar = progressBarRef.current;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = x / rect.width;
      const minutesLeft = Math.max(0, Math.round(volumeReadingTime * (1 - pct)));
      setHoverProgress({ show: true, x: e.clientX, minutesLeft });
    },
    [volumeReadingTime]
  );

  return (
    <div className="min-h-screen">
      {/* Article progress bar */}
      <div
        ref={progressBarRef}
        className="sticky top-[calc(3.5rem+2px)] z-30 h-1.5 bg-muted cursor-pointer group"
        onMouseMove={handleProgressBarHover}
        onMouseLeave={() => setHoverProgress((p) => ({ ...p, show: false }))}
      >
        <div
          className="h-full transition-all duration-150 ease-out"
          style={{
            width: `${readingProgress}%`,
            background: `linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))`,
          }}
        />
        {hoverProgress.show && (
          <div
            className="absolute -top-10 px-2 py-1 rounded bg-foreground text-background text-xs font-medium pointer-events-none whitespace-nowrap"
            style={{ left: `${hoverProgress.x - (progressBarRef.current?.getBoundingClientRect().left || 0)}px`, transform: "translateX(-50%)" }}
          >
            ~{hoverProgress.minutesLeft} min left
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="ornament-divider mb-4">
              <span className="text-muted-foreground text-sm">✦</span>
            </div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Complete Narrative</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-balance italic">
              The Full Historical Narrative
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A comprehensive, chronological account from before the Prophet's birth ﷺ to the preservation of his legacy — structured, sourced, and academically careful.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><BookOpen className="h-4 w-4" /> {volumes.length} Volumes</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> ~{totalReadingTimeMinutes} min total</span>
            </div>
          </div>
        </SectionReveal>

        <div className="flex gap-8 lg:gap-12 relative">
          {/* Mobile nav toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-40 p-3 rounded bg-primary text-primary-foreground shadow-lg"
            aria-label="Toggle chapter navigation"
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Floating chapter navigator */}
          <aside
            className={`
              fixed lg:sticky lg:top-24 z-30
              ${navOpen ? "inset-0 bg-foreground/30 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none" : "pointer-events-none lg:pointer-events-auto"}
              lg:block lg:w-72 lg:shrink-0 lg:self-start
            `}
            onClick={(e) => { if (e.target === e.currentTarget) setNavOpen(false); }}
          >
            <nav
              className={`
                ${navOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                transition-transform duration-200
                w-72 max-h-[80vh] lg:max-h-[calc(100vh-8rem)] overflow-y-auto
                bg-card border border-border rounded p-4 shadow-lg lg:shadow-sm
                fixed left-4 top-24 lg:static
              `}
            >
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 italic">Volumes</div>
              {volumes.map((vol) => (
                <button
                  key={vol.id}
                  onClick={() => { setActiveVolumeId(vol.id); setNavOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className={`w-full text-left px-3 py-2.5 rounded mb-1 text-sm transition-colors ${
                    activeVolumeId === vol.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span className="font-serif font-bold text-xs mr-1.5 italic">{vol.number}.</span>
                  {vol.title}
                  <div className="text-xs mt-0.5 opacity-70">
                    {vol.chapters.reduce((a, ch) => a + ch.readingTimeMinutes, 0)} min
                  </div>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div ref={contentRef} className="flex-1 min-w-0 max-w-3xl">
            <SectionReveal>
              <div className="mb-12 pb-8 border-b border-border">
                <div className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">Volume {activeVolume.number}</div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-2 italic">{activeVolume.title}</h2>
                <p className="text-muted-foreground">{activeVolume.subtitle}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {volumeReadingTime} min read</span>
                  <span>{activeVolume.chapters.length} chapters</span>
                  <span>{activeVolume.chapters.reduce((a, ch) => a + ch.sections.length, 0)} sections</span>
                </div>
              </div>
            </SectionReveal>

            {activeVolume.chapters.map((chapter) => (
              <ChapterBlock key={chapter.id} chapter={chapter} />
            ))}

            {/* Volume navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-border mt-16">
              {(() => {
                const idx = volumes.findIndex((v) => v.id === activeVolumeId);
                const prev = idx > 0 ? volumes[idx - 1] : null;
                const next = idx < volumes.length - 1 ? volumes[idx + 1] : null;
                return (
                  <>
                    {prev ? (
                      <button
                        onClick={() => { setActiveVolumeId(prev.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        <div className="text-xs text-muted-foreground mb-0.5 italic">← Previous</div>
                        <div className="font-medium">Vol. {prev.number}: {prev.title}</div>
                      </button>
                    ) : <div />}
                    {next ? (
                      <button
                        onClick={() => { setActiveVolumeId(next.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-right"
                      >
                        <div className="text-xs text-muted-foreground mb-0.5 italic">Next →</div>
                        <div className="font-medium">Vol. {next.number}: {next.title}</div>
                      </button>
                    ) : <div />}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
