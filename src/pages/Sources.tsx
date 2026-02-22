import SectionReveal from "@/components/SectionReveal";
import { BookOpen, AlertTriangle, CheckCircle, Info } from "lucide-react";

const primarySources = [
  {
    title: "Al-Sirah al-Nabawiyyah",
    author: "Ibn Hisham (d. 833 CE)",
    note: "Edited version of Ibn Ishaq's original biography, the earliest comprehensive Seerah. Based on Ibn Ishaq's collection of oral reports with chains of transmission (isnad).",
  },
  {
    title: "Sahih al-Bukhari",
    author: "Imam al-Bukhari (d. 870 CE)",
    note: "The most authenticated collection of prophetic traditions (hadith). Contains thousands of reports on the Prophet's life, actions, and sayings, rigorously verified.",
  },
  {
    title: "Sahih Muslim",
    author: "Imam Muslim (d. 875 CE)",
    note: "The second most authenticated hadith collection. Organized thematically and valued for its rigorous methodology.",
  },
  {
    title: "Tarikh al-Rusul wa'l-Muluk",
    author: "Al-Tabari (d. 923 CE)",
    note: "A comprehensive history that preserves multiple narrations of the same events with their chains of transmission, allowing readers to evaluate different accounts.",
  },
  {
    title: "Al-Tabaqat al-Kubra",
    author: "Ibn Sa'd (d. 845 CE)",
    note: "A biographical encyclopedia of the Prophet ﷺ and his companions, providing detailed accounts of individuals and events.",
  },
];

const secondarySources = [
  {
    title: "Muhammad: His Life Based on the Earliest Sources",
    author: "Martin Lings",
    note: "A widely acclaimed English-language biography that draws primarily from Ibn Ishaq, Ibn Hisham, and al-Waqidi. Praised for its narrative quality and fidelity to classical sources.",
  },
  {
    title: "The Sealed Nectar (Al-Rahiq al-Makhtum)",
    author: "Safiur-Rahman al-Mubarakpuri",
    note: "An award-winning Seerah that combines traditional scholarship with accessible modern presentation.",
  },
];

export default function SourcesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 bg-card geometric-border border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="ornament-divider mb-4">
            <span className="text-muted-foreground text-sm">✦</span>
          </div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Methodology</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4 italic">Sources & Methodology</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Understanding the scholarly foundations and methodological principles behind this resource.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-16">
          {/* Disclaimer */}
          <SectionReveal>
            <div className="p-6 rounded border-2 border-gold/30 bg-gold/5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg font-semibold mb-2 italic">Educational Resource Disclaimer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This website is an educational resource designed to present the Seerah in an accessible,
                    interactive format. It is not a substitute for direct engagement with primary scholarly
                    sources. All content should be verified with qualified scholars and original texts.
                    Dates and details noted as approximate reflect genuine historical uncertainty across sources.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Methodology */}
          <SectionReveal>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 italic">Methodological Principles</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "Source Priority",
                    text: "We prioritize Quranic references first, then authenticated hadith collections (Sahih al-Bukhari, Sahih Muslim), followed by classical Seerah works (Ibn Hisham, al-Tabari), and finally reputable modern scholarship.",
                  },
                  {
                    icon: Info,
                    title: "Handling Differences",
                    text: "Where narrations differ — on dates, details, or interpretations — we present the most widely accepted version while noting alternatives in the 'Report Notes' section. Confidence labels indicate the level of scholarly consensus.",
                  },
                  {
                    icon: BookOpen,
                    title: "Citation System",
                    text: "Every event, person, and theme entry includes structured citations referencing the source work and specific section. This allows readers to verify claims against original materials.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Date Approximation",
                    text: "Many dates in the Seerah are approximate. Converting from the Islamic lunar calendar to the Gregorian calendar introduces inherent imprecision. We note uncertainty where it exists rather than presenting false precision.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded bg-card border border-border">
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold mb-1 italic">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Confidence Labels */}
          <SectionReveal>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 italic">Confidence Labels</h2>
              <div className="space-y-3">
                <div className="p-4 rounded border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-primary italic">Well Attested</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Reported through multiple reliable chains with broad scholarly consensus on the main details.
                  </p>
                </div>
                <div className="p-4 rounded border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-sm font-semibold text-gold-dark italic">Reported with Variation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The core event is established, but specific details (dates, numbers, sequences) vary across sources.
                  </p>
                </div>
                <div className="p-4 rounded border border-border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    <span className="text-sm font-semibold text-destructive italic">Disputed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Significant scholarly disagreement exists about whether or specific aspects of this event occurred as described.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Primary Sources */}
          <SectionReveal>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 italic">Primary Sources</h2>
              <div className="space-y-4">
                {primarySources.map((src) => (
                  <div key={src.title} className="p-5 rounded border border-border bg-card">
                    <h3 className="font-serif text-base font-semibold italic">{src.title}</h3>
                    <p className="text-xs text-gold font-medium mt-0.5 mb-2">{src.author}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{src.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Secondary Sources */}
          <SectionReveal>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 italic">Secondary Sources</h2>
              <div className="space-y-4">
                {secondarySources.map((src) => (
                  <div key={src.title} className="p-5 rounded border border-border bg-card">
                    <h3 className="font-serif text-base font-semibold italic">{src.title}</h3>
                    <p className="text-xs text-gold font-medium mt-0.5 mb-2">{src.author}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{src.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Contributing */}
          <SectionReveal>
            <div className="p-6 rounded border border-border bg-card text-center">
              <h2 className="font-serif text-xl font-bold mb-3 italic">Contributing Content</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                This resource is designed for scholarly expansion. Events, people, places, and themes can be
                added by editing the structured data files. All contributions should include proper citations
                and follow the confidence labeling system described above.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}