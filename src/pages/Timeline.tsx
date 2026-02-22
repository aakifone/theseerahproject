import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, MapPin, Users, BookOpen, AlertCircle, Filter } from "lucide-react";
import { events, type SeerahEvent, type Era, type EventCategory } from "@/data/seerah-data";
import SectionReveal from "@/components/SectionReveal";

const eraLabels: Record<Era, string> = {
  "pre-revelation": "Pre-Revelation",
  makkan: "Makkan Period",
  madinan: "Madinan Period",
};

const eraColors: Record<Era, string> = {
  "pre-revelation": "bg-muted text-muted-foreground",
  makkan: "bg-gold/15 text-gold-dark",
  madinan: "bg-primary/15 text-primary",
};

const categoryLabels: Record<EventCategory, string> = {
  revelation: "Revelation",
  community: "Community",
  treaty: "Treaty",
  conflict: "Conflict",
  migration: "Migration",
  "social-reform": "Social Reform",
  personal: "Personal",
};

const confidenceLabels = {
  "well-attested": { label: "Well Attested", color: "text-primary" },
  "reported-with-variation": { label: "Reported with Variation", color: "text-gold-dark" },
  disputed: { label: "Disputed", color: "text-destructive" },
};

export default function TimelinePage() {
  const [searchParams] = useSearchParams();
  const [expandedId, setExpandedId] = useState<string | null>(searchParams.get("event"));
  const [eraFilter, setEraFilter] = useState<Era | "all">("all");
  const [catFilter, setCatFilter] = useState<EventCategory | "all">("all");
  const [showFilters, setShowFilters] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);

  const filtered = events.filter((e) => {
    if (eraFilter !== "all" && e.era !== eraFilter) return false;
    if (catFilter !== "all" && !e.categories.includes(catFilter)) return false;
    return true;
  });

  useEffect(() => {
    const eventId = searchParams.get("event");
    if (eventId) {
      setExpandedId(eventId);
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-card geometric-border border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="ornament-divider mb-4">
            <span className="text-muted-foreground text-sm">✦</span>
          </div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Complete Timeline</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4 italic">The Seerah Timeline</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A comprehensive chronological journey through the life of Prophet Muhammad ﷺ, from birth to
            passing, with scholarly citations and historical context.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-14 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground italic">{filtered.length} events</span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
              {(eraFilter !== "all" || catFilter !== "all") && (
                <span className="w-2 h-2 rounded-full bg-gold" />
              )}
            </button>
          </div>
          {showFilters && (
            <div className="mt-3 pb-1 space-y-3">
              <div>
                <div className="text-xs text-muted-foreground mb-1.5 italic">Era</div>
                <div className="flex flex-wrap gap-2">
                  {(["all", "pre-revelation", "makkan", "madinan"] as const).map((era) => (
                    <button
                      key={era}
                      onClick={() => setEraFilter(era)}
                      className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                        eraFilter === era
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {era === "all" ? "All Eras" : eraLabels[era]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1.5 italic">Category</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCatFilter("all")}
                    className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                      catFilter === "all"
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    All
                  </button>
                  {(Object.keys(categoryLabels) as EventCategory[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCatFilter(cat)}
                      className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                        catFilter === cat
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {categoryLabels[cat]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {filtered.map((event, i) => (
                <TimelineEntry
                  key={event.id}
                  event={event}
                  index={i}
                  isExpanded={expandedId === event.id}
                  onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
                  ref={expandedId === event.id ? expandedRef : undefined}
                />
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground italic">No events match the selected filters.</p>
              <button
                onClick={() => {
                  setEraFilter("all");
                  setCatFilter("all");
                }}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import { forwardRef } from "react";

const TimelineEntry = forwardRef<
  HTMLDivElement,
  { event: SeerahEvent; index: number; isExpanded: boolean; onToggle: () => void }
>(({ event, index, isExpanded, onToggle }, ref) => {
  const isLeft = index % 2 === 0;
  const conf = confidenceLabels[event.confidenceLevel];

  return (
    <div ref={ref} className={`relative flex items-start gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Dot */}
      <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-7 z-10" />

      <div className="hidden md:block md:w-1/2" />

      {/* Card */}
      <div className="ml-14 md:ml-0 md:w-1/2">
        <SectionReveal delay={index * 50}>
          <div
            className={`rounded border bg-card transition-all ${
              isExpanded ? "border-gold/50 shadow-lg" : "border-border hover:border-gold/30 hover:shadow-md"
            }`}
          >
            <button onClick={onToggle} className="w-full text-left p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded ${eraColors[event.era]}`}>
                      {eraLabels[event.era]}
                    </span>
                    <span className="text-xs text-muted-foreground italic">{event.dateRange}</span>
                    {event.dateUncertain && (
                      <span className="text-xs text-muted-foreground italic">≈ approx.</span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-semibold italic">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{event.summary}</p>
                </div>
                <div className="shrink-0 mt-6">
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            </button>

            {isExpanded && (
              <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {event.locations.join(", ")}
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 italic">Deep Dive</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.deepDive}</p>
                </div>

                <div className="p-4 rounded bg-gold/5 border border-gold/20">
                  <h4 className="text-sm font-semibold text-gold-dark mb-1 italic">Why It Matters</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.whyItMatters}</p>
                </div>

                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className={`text-xs font-medium ${conf.color}`}>{conf.label}</span>
                </div>

                {event.reportNotes && (
                  <div className="p-3 rounded bg-muted/50 border border-border">
                    <h4 className="text-xs font-semibold mb-1 text-muted-foreground italic">Report Notes</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{event.reportNotes}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {event.categories.map((cat) => (
                    <span key={cat} className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {categoryLabels[cat]}
                    </span>
                  ))}
                </div>

                {(event.relatedPeople.length > 0 || event.relatedPlaces.length > 0) && (
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    {event.relatedPeople.length > 0 && (
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <Link to={`/people-places?person=${event.relatedPeople[0]}`} className="hover:text-primary underline">
                          {event.relatedPeople.length} related {event.relatedPeople.length === 1 ? "person" : "people"}
                        </Link>
                      </span>
                    )}
                    {event.relatedPlaces.length > 0 && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <Link to={`/people-places?place=${event.relatedPlaces[0]}`} className="hover:text-primary underline">
                          {event.relatedPlaces.length} related {event.relatedPlaces.length === 1 ? "place" : "places"}
                        </Link>
                      </span>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-semibold mb-2 flex items-center gap-1 italic">
                    <BookOpen className="h-3 w-3" /> Citations
                  </h4>
                  <ul className="space-y-1">
                    {event.citations.map((c, i) => (
                      <li key={i} className="text-xs text-muted-foreground">
                        <span className="font-medium">{c.source}</span> — {c.reference}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
});

TimelineEntry.displayName = "TimelineEntry";