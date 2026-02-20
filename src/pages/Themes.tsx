import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ChevronDown, ChevronUp, BookOpen, ArrowRight } from "lucide-react";
import { themes, events } from "@/data/seerah-data";
import SectionReveal from "@/components/SectionReveal";

export default function ThemesPage() {
  const [searchParams] = useSearchParams();
  const [expandedId, setExpandedId] = useState<string | null>(searchParams.get("theme"));

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-card geometric-border border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Themes & Lessons</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Timeless Principles</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The Seerah contains lessons that transcend time and place. Explore the major themes woven
            through the life of Prophet Muhammad ﷺ.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6">
            {themes.map((theme, i) => {
              const isExpanded = expandedId === theme.id;
              const relatedEvts = events.filter((e) => theme.relatedEvents.includes(e.id));

              return (
                <SectionReveal key={theme.id} delay={i * 60}>
                  <div
                    className={`rounded-xl border bg-card transition-all ${
                      isExpanded ? "border-gold/50 shadow-lg" : "border-border hover:border-gold/30"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : theme.id)}
                      className="w-full text-left p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-xl font-semibold mb-2">{theme.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{theme.summary}</p>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-border pt-4 space-y-5">
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {theme.essay}
                        </p>

                        {relatedEvts.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold mb-3">Related Events</h4>
                            <div className="space-y-2">
                              {relatedEvts.map((evt) => (
                                <Link
                                  key={evt.id}
                                  to={`/timeline?event=${evt.id}`}
                                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                >
                                  <span className="text-xs text-muted-foreground w-20 shrink-0">
                                    {evt.dateRange}
                                  </span>
                                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                    {evt.title}
                                  </span>
                                  <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground group-hover:text-gold transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="text-xs font-semibold mb-2 flex items-center gap-1">
                            <BookOpen className="h-3 w-3" /> Citations
                          </h4>
                          <ul className="space-y-1">
                            {theme.citations.map((c, i) => (
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
