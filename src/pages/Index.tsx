import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, BookOpen, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-desert.jpg";
import { events } from "@/data/seerah-data";
import SectionReveal from "@/components/SectionReveal";

const stats = [
  { icon: Calendar, label: "Years Covered", value: "63", note: "c. 570–632 CE" },
  { icon: MapPin, label: "Major Phases", value: "3", note: "Pre-Revelation · Makkah · Madinah" },
  { icon: Users, label: "Key Migrations", value: "2", note: "Abyssinia & Madinah" },
  { icon: BookOpen, label: "Events Documented", value: `${events.length}+`, note: "Dates may vary by source" },
];

const ctaLinks = [
  { to: "/complete-seerah", label: "Full Narrative", desc: "The complete story, A to Z" },
  { to: "/timeline", label: "Start the Seerah", desc: "Complete scholarly timeline" },
  { to: "/hijrah", label: "Hijrah Journey", desc: "The migration narrative" },
  { to: "/themes", label: "Themes & Lessons", desc: "Timeless principles" },
  { to: "/people-places", label: "People & Places", desc: "Key figures and locations" },
  { to: "/sources", label: "Sources", desc: "Methodology & citations" },
];

const milestoneEvents = events.filter((e) =>
  ["first-revelation", "hijrah", "conquest-makkah", "farewell-pilgrimage"].includes(e.id)
);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Arabian desert landscape at golden hour with distant architecture"
          className="absolute inset-0 w-full h-full object-cover sepia-[.3]"
          loading="eager"
          data-essential
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/45 to-background" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-gold-light text-xs tracking-[0.4em] uppercase mb-8 font-body">
              ❦ An Interactive Digital Museum ❦
            </p>
          </SectionReveal>
          <SectionReveal delay={100}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 text-balance italic">
              The Life of Prophet
              <br />
              Muhammad <span className="text-gold-light not-italic">ﷺ</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-primary-foreground/80 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10 font-body">
              Explore the Seerah through a comprehensive scholarly timeline, interactive journey,
              thematic essays, and primary sources.
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/timeline"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded transition-colors text-sm"
              >
                Begin the Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sources"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium rounded transition-colors text-sm"
              >
                View Sources
              </Link>
            </div>
          </SectionReveal>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-9 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
            <div className="w-0.5 h-2 rounded-full bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-card geometric-border">
        <div className="container mx-auto max-w-5xl">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded border border-border bg-background hover:shadow-lg transition-shadow"
                >
                  <stat.icon className="h-5 w-5 mx-auto mb-3 text-gold" />
                  <div className="font-serif text-4xl font-bold text-foreground mb-1 italic">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.note}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Links */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="ornament-divider mb-4">
                <span className="text-muted-foreground text-sm">✦</span>
              </div>
              <h2 className="font-serif text-4xl font-bold italic">Explore the Seerah</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ctaLinks.map((cta, i) => (
              <SectionReveal key={cta.to} delay={i * 80}>
                <Link
                  to={cta.to}
                  className="group block p-6 rounded border border-border bg-card hover:border-gold/50 hover:shadow-md transition-all"
                >
                  <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-colors italic">
                    {cta.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cta.desc}</p>
                  <ChevronRight className="h-4 w-4 mt-3 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Timeline */}
      <section className="py-20 px-4 bg-card geometric-pattern">
        <div className="container mx-auto max-w-4xl">
          <SectionReveal>
            <div className="text-center mb-12">
              <div className="ornament-divider mb-4">
                <span className="text-muted-foreground text-sm">✦</span>
              </div>
              <h2 className="font-serif text-4xl font-bold italic mb-4">Key Milestones</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Pivotal moments that shaped the prophetic mission
              </p>
            </div>
          </SectionReveal>
          <div className="space-y-4">
            {milestoneEvents.map((event, i) => (
              <SectionReveal key={event.id} delay={i * 100}>
                <Link
                  to={`/timeline?event=${event.id}`}
                  className="group block p-6 rounded border border-border bg-background hover:border-gold/50 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-16 text-center">
                      <div className="text-xs font-medium text-gold uppercase tracking-wider">{event.era === "makkan" ? "Makkah" : "Madinah"}</div>
                      <div className="font-serif text-sm font-semibold mt-1 italic">{event.dateRange}</div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors italic">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{event.summary}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all mt-1" />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={400}>
            <div className="text-center mt-10">
              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                View Complete Timeline <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-4 text-center">
        <SectionReveal>
          <div className="max-w-2xl mx-auto">
            <div className="ornament-divider mb-6">
              <span className="text-muted-foreground text-lg">❦</span>
            </div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Begin Your Journey</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 italic">
              A Life That Changed the World
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the quiet contemplation in the Cave of Hira to the Farewell Sermon before over one hundred
              thousand souls — explore a life of mercy, justice, and unwavering purpose.
            </p>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-emerald-light text-primary-foreground font-semibold rounded transition-colors text-sm"
            >
              Start the Timeline <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}