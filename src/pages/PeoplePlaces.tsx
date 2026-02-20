import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Users, MapPin, BookOpen, ArrowRight } from "lucide-react";
import { people, places, events } from "@/data/seerah-data";
import SectionReveal from "@/components/SectionReveal";

export default function PeoplePlacesPage() {
  const [searchParams] = useSearchParams();
  const [tab, setTab] = useState<"people" | "places">(searchParams.get("place") ? "places" : "people");
  const [query, setQuery] = useState("");

  const filteredPeople = people.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.role.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPlaces = places.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-card geometric-border border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">Glossary</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">People & Places</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Key figures and locations in the life of Prophet Muhammad ﷺ.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setTab("people")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === "people" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <Users className="h-4 w-4" /> People ({people.length})
              </button>
              <button
                onClick={() => setTab("places")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === "places" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <MapPin className="h-4 w-4" /> Places ({places.length})
              </button>
            </div>
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${tab}…`}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* People */}
          {tab === "people" && (
            <div className="grid gap-4">
              {filteredPeople.map((person, i) => {
                const relatedEvts = events.filter((e) => person.relatedEvents.includes(e.id));
                return (
                  <SectionReveal key={person.id} delay={i * 40}>
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-serif text-lg font-semibold">{person.name}</h3>
                          <p className="text-xs text-gold font-medium mb-2">{person.role}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>

                          {relatedEvts.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {relatedEvts.map((evt) => (
                                <Link
                                  key={evt.id}
                                  to={`/timeline?event=${evt.id}`}
                                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 transition-colors"
                                >
                                  {evt.title} <ArrowRight className="h-3 w-3" />
                                </Link>
                              ))}
                            </div>
                          )}

                          <div className="mt-3">
                            {person.citations.map((c, j) => (
                              <p key={j} className="text-xs text-muted-foreground">
                                <BookOpen className="inline h-3 w-3 mr-1" />
                                {c.source} — {c.reference}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
              {filteredPeople.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No people match your search.</p>
              )}
            </div>
          )}

          {/* Places */}
          {tab === "places" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredPlaces.map((place, i) => (
                <SectionReveal key={place.id} delay={i * 40}>
                  <div className="rounded-xl border border-border bg-card p-6 h-full">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-serif text-lg font-semibold">{place.name}</h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {place.lat.toFixed(2)}°N, {place.lon.toFixed(2)}°E
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{place.description}</p>
                        <div className="mt-3">
                          {place.citations.map((c, j) => (
                            <p key={j} className="text-xs text-muted-foreground">
                              <BookOpen className="inline h-3 w-3 mr-1" />
                              {c.source} — {c.reference}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
              {filteredPlaces.length === 0 && (
                <p className="text-center text-muted-foreground py-8 col-span-2">No places match your search.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
