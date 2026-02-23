import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle2, Clock, Filter, MapPinned, Search, ShieldAlert } from "lucide-react";
import {
  caliphs,
  governanceRegions,
  glossaryExpansion,
  masterTimeline,
  rashidunMethodology,
  type ConfidenceLevel,
} from "@/data/rashidun-data";

const confidenceColor: Record<ConfidenceLevel, string> = {
  "well-attested": "text-primary",
  "reported-with-variation": "text-gold-dark",
  disputed: "text-destructive",
};

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={`${part}-${i}`} className="bg-gold/30 px-0.5 rounded-sm">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function RashidunPage() {
  const [activeCaliph, setActiveCaliph] = useState(caliphs[0].id);
  const [query, setQuery] = useState("");
  const [themeFilter, setThemeFilter] = useState<string>("all");
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceLevel | "all">("all");

  const current = caliphs.find((c) => c.id === activeCaliph) ?? caliphs[0];

  const searchResults = useMemo(() => {
    return masterTimeline.filter((event) => {
      if (event.caliphId !== activeCaliph) return false;
      if (themeFilter !== "all" && event.theme !== themeFilter) return false;
      if (confidenceFilter !== "all" && event.confidenceLevel !== confidenceFilter) return false;
      const haystack = [
        event.title,
        event.dateRange,
        event.primaryLocation,
        event.secondaryLocations?.join(" ") ?? "",
        event.keyIndividuals.join(" "),
        event.narrative,
        event.socialContext,
        event.politicalContext,
      ]
        .join(" ")
        .toLowerCase();
      return !query.trim() || haystack.includes(query.toLowerCase());
    });
  }, [activeCaliph, themeFilter, confidenceFilter, query]);

  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-card border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">Rashidun Archive</p>
          <h1 className="font-serif text-4xl font-bold mb-4">The Four Rightly Guided Caliphs: Complete Lives and Caliphates</h1>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            This section offers a careful and respectful historical study of Abu Bakr al-Siddiq, Umar ibn al-Khattab,
            Uthman ibn Affan, and Ali ibn Abi Talib — including pre-caliphate context, Prophetic-era roles, transition
            debates after 632 CE, and year-by-year governance history through 661 CE.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Start reading order: Context & Foundations → Abu Bakr → Umar → Uthman → Ali.
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-4">
          {caliphs.map((caliph) => (
            <button
              id={caliph.id}
              key={caliph.id}
              onClick={() => setActiveCaliph(caliph.id)}
              className={`text-left rounded-xl border p-4 transition-colors ${
                activeCaliph === caliph.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
              }`}
            >
              <h2 className="font-serif text-xl font-semibold">{caliph.name}</h2>
              <p className="text-xs text-muted-foreground mt-1">{caliph.lifespanRanges}</p>
              <p className="text-sm mt-2 text-muted-foreground">{caliph.overview}</p>
              <p className="text-xs mt-2 text-muted-foreground">Controversies: {caliph.majorControversies.join("; ")}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-[250px,1fr] gap-8">
          <aside className="rounded-xl border border-border p-4 h-max lg:sticky lg:top-24">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Chapter Navigator</div>
            <ul className="space-y-2 text-sm">
              {current.chapters.map((chapter) => (
                <li key={chapter.id}>
                  <a href={`#${chapter.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {chapter.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-border text-xs text-muted-foreground">
              Estimated reading time: ~{12 + current.chapters.length * 7} min
            </div>
          </aside>

          <div className="space-y-6">
            <article className="rounded-xl border border-border p-5 bg-card" id="overview">
              <h3 className="font-serif text-2xl font-semibold mb-2">Overview Hub</h3>
              <p className="text-sm text-muted-foreground mb-3">
                The Rashidun period (632-661 CE) is treated here as a high-impact transition era. Major reports include
                explicit confidence tags, and differences between sources are shown without polemics.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-border p-3">
                  <div className="font-medium mb-1">What is agreed</div>
                  <p className="text-muted-foreground">Sequence of the four caliphates and the broad arc from consolidation to civil conflict.</p>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <div className="font-medium mb-1">Where sources differ</div>
                  <p className="text-muted-foreground">Timing details, causal interpretation of disputes, and wording of some agreements and speeches.</p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-border p-5" id="timeline">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <h3 className="font-serif text-2xl font-semibold">Rashidun Master Timeline (632-661 CE)</h3>
                <span className="text-xs text-muted-foreground">Era / Year / Event zoom represented via grouped chronology cards</span>
              </div>

              <div className="grid md:grid-cols-4 gap-2 mb-4">
                <label className="md:col-span-2 flex items-center gap-2 border border-border rounded-lg px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by year, place, person, theme"
                    className="bg-transparent text-sm w-full outline-none"
                  />
                </label>
                <select className="border border-border rounded-lg px-3 py-2 text-sm bg-background" value={themeFilter} onChange={(e) => setThemeFilter(e.target.value)}>
                  <option value="all">All themes</option>
                  <option value="leadership">Leadership and administration</option>
                  <option value="military">Military campaigns</option>
                  <option value="economic">Economic reforms</option>
                  <option value="social">Social policies</option>
                  <option value="dispute">Internal disputes</option>
                  <option value="diplomacy">Diplomacy and treaties</option>
                </select>
                <select className="border border-border rounded-lg px-3 py-2 text-sm bg-background" value={confidenceFilter} onChange={(e) => setConfidenceFilter(e.target.value as ConfidenceLevel | "all")}>
                  <option value="all">All confidence levels</option>
                  <option value="well-attested">Well attested</option>
                  <option value="reported-with-variation">Reported with variation</option>
                  <option value="disputed">Disputed</option>
                </select>
              </div>

              <div className="space-y-4">
                {searchResults.map((event) => (
                  <div key={event.id} className="rounded-lg border border-border p-4">
                    <div className="flex flex-wrap gap-2 items-center mb-2 text-xs">
                      <span className="px-2 py-0.5 rounded-full bg-muted">{event.dateRange}</span>
                      <span className={`font-medium ${confidenceColor[event.confidenceLevel]}`}>{event.confidenceLevel}</span>
                    </div>
                    <h4 className="font-semibold text-lg">{highlight(event.title, query)}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{highlight(event.narrative, query)}</p>
                    <div className="mt-3 grid md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="font-medium">Political context</div>
                        <p className="text-muted-foreground">{event.politicalContext}</p>
                      </div>
                      <div>
                        <div className="font-medium">Social context</div>
                        <p className="text-muted-foreground">{event.socialContext}</p>
                      </div>
                    </div>
                    <div className="mt-3 text-sm">
                      <div className="font-medium">Narration variants</div>
                      <p className="text-muted-foreground">{event.narrationVariants}</p>
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">Citations: {event.citations.map((c) => `${c.source}, ${c.reference}`).join(" • ")}</div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-xl border border-border p-5" id="map">
              <h3 className="font-serif text-2xl font-semibold mb-3">Interactive Governance Map</h3>
              <p className="text-sm text-muted-foreground mb-4">
                MapLibre GL JS integration is represented with a static fallback in this build. Low-graphics and non-WebGL readers get this scroll narrative map by default.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {governanceRegions.map((region) => (
                  <div key={region.id} className="border border-border rounded-lg p-3">
                    <div className="font-medium flex items-center gap-2"><MapPinned className="h-4 w-4" />{region.name}</div>
                    <p className="text-sm text-muted-foreground">Center: {region.city}</p>
                    <p className="text-sm text-muted-foreground">{region.notes}</p>
                    <p className="text-xs text-muted-foreground mt-2">Uncertainty: {region.uncertaintyNotes}</p>
                  </div>
                ))}
              </div>
            </article>

            {current.chapters.map((chapter) => (
              <article key={chapter.id} id={chapter.id} className="rounded-xl border border-border p-5">
                <h3 className="font-serif text-2xl font-semibold mb-2">{chapter.title}</h3>
                <p className="text-sm text-muted-foreground">{chapter.overview}</p>
                <p className="text-sm mt-2"><span className="font-medium">Why it matters:</span> {chapter.whyItMatters}</p>
                {chapter.events.length > 0 ? (
                  <div className="space-y-4 mt-4">
                    {chapter.events.map((event) => (
                      <div key={event.id} className="rounded-lg border border-border p-4">
                        <div className="font-semibold">{event.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{event.primaryLocation} • {event.dateRange}</div>
                        <ul className="list-disc ml-5 mt-2 text-sm text-muted-foreground space-y-1">
                          <li>{event.immediateOutcome}</li>
                          <li>{event.shortTermImpact}</li>
                          <li>{event.longTermImpact}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground mt-3">Detailed narrative chapter text and event cards are available via the timeline cards above for this caliph.</p>
                )}
              </article>
            ))}

            <article className="rounded-xl border border-border p-5" id="glossary">
              <h3 className="font-serif text-2xl font-semibold mb-3">People and Places Glossary Expansion</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium mb-1">People</div>
                  <ul className="text-muted-foreground space-y-1">{glossaryExpansion.people.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div>
                  <div className="font-medium mb-1">Places</div>
                  <ul className="text-muted-foreground space-y-1">{glossaryExpansion.places.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
                <div>
                  <div className="font-medium mb-1">Themes</div>
                  <ul className="text-muted-foreground space-y-1">{glossaryExpansion.themes.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-border p-5" id="methodology">
              <h3 className="font-serif text-2xl font-semibold mb-3">Sources and Methodology for Early Caliphate History</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium mb-1">Source selection</div>
                  <ul className="text-muted-foreground list-disc ml-5 space-y-1">{rashidunMethodology.sourceSelection.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <div className="font-medium mb-1">Chronology disputes</div>
                  <ul className="text-muted-foreground list-disc ml-5 space-y-1">{rashidunMethodology.chronologyDisputes.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <div className="font-medium mb-1">Neutral representation</div>
                  <ul className="text-muted-foreground list-disc ml-5 space-y-1">{rashidunMethodology.neutralRepresentation.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </article>

            <div className="text-xs text-muted-foreground flex flex-wrap gap-4 items-center">
              <span className="inline-flex items-center gap-1"><BookOpen className="h-3 w-3" /> Print-friendly by browser print styles</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Deep links enabled per chapter ID</span>
              <span className="inline-flex items-center gap-1"><Filter className="h-3 w-3" /> Filters: caliph, theme, confidence, text query</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Respectful non-sectarian framing</span>
              <span className="inline-flex items-center gap-1"><ShieldAlert className="h-3 w-3" /> Disputed reports labeled</span>
            </div>

            <div className="pt-4 text-sm">
              <Link to="/sources" className="text-primary hover:underline">Open full sources page</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
