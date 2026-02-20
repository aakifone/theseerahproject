import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, Clock, MapPin, Users, BookOpen, Lightbulb } from "lucide-react";
import Fuse from "fuse.js";
import { events, people, places, themes } from "@/data/seerah-data";

interface SearchResult {
  type: "event" | "person" | "place" | "theme";
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

const allItems: SearchResult[] = [
  ...events.map((e) => ({
    type: "event" as const,
    id: e.id,
    title: e.title,
    subtitle: `${e.dateRange} — ${e.locations.join(", ")}`,
    url: `/timeline?event=${e.id}`,
  })),
  ...people.map((p) => ({
    type: "person" as const,
    id: p.id,
    title: p.name,
    subtitle: p.role,
    url: `/people-places?person=${p.id}`,
  })),
  ...places.map((p) => ({
    type: "place" as const,
    id: p.id,
    title: p.name,
    subtitle: p.description.slice(0, 80) + "…",
    url: `/people-places?place=${p.id}`,
  })),
  ...themes.map((t) => ({
    type: "theme" as const,
    id: t.id,
    title: t.title,
    subtitle: t.summary.slice(0, 80) + "…",
    url: `/themes?theme=${t.id}`,
  })),
];

const fuse = new Fuse(allItems, {
  keys: ["title", "subtitle"],
  threshold: 0.35,
  includeScore: true,
});

const typeIcons = {
  event: Clock,
  person: Users,
  place: MapPin,
  theme: Lightbulb,
};

const typeLabels = {
  event: "Event",
  person: "Person",
  place: "Place",
  theme: "Theme",
};

export default function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 12).map((r) => r.item);
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange]);

  if (!open) return null;

  const handleSelect = (url: string) => {
    navigate(url);
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
      <div className="relative mx-auto mt-[15vh] max-w-xl px-4">
        <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <Search className="h-5 w-5 text-muted-foreground shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, people, places, themes…"
              className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <button onClick={() => onOpenChange(false)} className="p-1 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>

          {query.trim() && (
            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">No results found</p>
              ) : (
                results.map((item) => {
                  const Icon = typeIcons[item.type];
                  return (
                    <button
                      key={`${item.type}-${item.id}`}
                      onClick={() => handleSelect(item.url)}
                      className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-muted text-left transition-colors"
                    >
                      <Icon className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate">{item.title}</div>
                        <div className="text-xs text-muted-foreground truncate">{item.subtitle}</div>
                      </div>
                      <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded shrink-0">
                        {typeLabels[item.type]}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          )}

          {!query.trim() && (
            <div className="p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <BookOpen className="inline h-4 w-4 mr-1 -mt-0.5" />
                Search across {events.length} events, {people.length} people, {places.length} places, and{" "}
                {themes.length} themes
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Press <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-xs">⌘K</kbd> to
                open search anytime
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
