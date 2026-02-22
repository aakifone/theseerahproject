import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, ChevronLeft, ChevronRight, MapPin, Clock, BookOpen, ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

interface JourneyStop {
  id: string;
  title: string;
  description: string;
  details: string;
  estimatedDistance?: string;
  estimatedTime?: string;
  citations: { source: string; reference: string }[];
}

const stops: JourneyStop[] = [
  {
    id: "makkah-departure",
    title: "Departure from Makkah",
    description: "Under cover of night, the Prophet ﷺ and Abu Bakr slipped out of Makkah while Ali ibn Abi Talib lay in the Prophet's bed as a decoy.",
    details: "The Quraysh had planned to send a group of young men from different clans to assassinate the Prophet ﷺ simultaneously, so that responsibility would be distributed and no single clan could be held accountable. The Prophet ﷺ learned of this plot through divine revelation and planned his departure meticulously. He and Abu Bakr left through a back window and took an unexpected southern route — away from Madinah — to confuse pursuers.",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3905" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
    ],
  },
  {
    id: "cave-thawr",
    title: "The Cave of Thawr",
    description: "The Prophet ﷺ and Abu Bakr hid in the Cave of Thawr on Jabal Thawr, south of Makkah, for three days while Quraysh search parties scoured the area.",
    details: "According to narrations, a spider wove its web across the cave entrance and a pigeon nested nearby, making the cave appear undisturbed. When pursuers reached the mouth of the cave, Abu Bakr whispered in fear, and the Prophet ﷺ reassured him: 'Do not grieve; indeed Allah is with us' (Quran 9:40). Abdullah ibn Abi Bakr brought news each night, and Amir ibn Fuhayrah covered their tracks with his flock.",
    estimatedDistance: "~8 km south of Makkah",
    estimatedTime: "3 days hiding",
    citations: [
      { source: "Quran", reference: "Surah al-Tawbah (9:40)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3922" },
    ],
  },
  {
    id: "coastal-route",
    title: "The Coastal Route",
    description: "Guided by Abdullah ibn Urayqit (a non-Muslim hired for his expertise), they took an unconventional coastal route westward toward the Red Sea coast before turning north.",
    details: "The choice of guide is significant — the Prophet ﷺ trusted a non-Muslim based on competence and trustworthiness, demonstrating pragmatic inter-community relations. The route avoided the main trade roads where Quraysh scouts would be watching. They traveled mostly at night to avoid detection and the extreme desert heat. A bounty of 100 camels had been placed on the Prophet's head.",
    estimatedDistance: "~380 km total journey",
    estimatedTime: "~8 days of travel",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
      { source: "Martin Lings", reference: "Muhammad: His Life Based on the Earliest Sources, Ch. 36" },
    ],
  },
  {
    id: "umm-mabad",
    title: "The Tent of Umm Ma'bad",
    description: "Along the journey, they stopped at the tent of Umm Ma'bad al-Khuza'iyyah, where the Prophet ﷺ miraculously produced milk from a dry she-goat.",
    details: "Umm Ma'bad later gave a famous physical description of the Prophet ﷺ, one of the most detailed in the Seerah literature. She described him as clearly handsome, of medium build, with luminous features and a dignified bearing. This account, transmitted by her husband upon his return, is valued as an eyewitness description by someone with no prior connection to the Muslim community.",
    citations: [
      { source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 1" },
      { source: "Al-Hakim", reference: "Al-Mustadrak, Vol. 3" },
    ],
  },
  {
    id: "suraqah",
    title: "Encounter with Suraqah ibn Malik",
    description: "The Quraysh bounty hunter Suraqah ibn Malik tracked and nearly caught them, but his horse repeatedly stumbled. He eventually asked for — and received — a promise of safety.",
    details: "Suraqah had set out to claim the bounty of 100 camels. Three times his horse's hooves sank into the sand. Recognizing divine protection, he asked the Prophet ﷺ for a written guarantee of safety and returned, actively misdirecting other pursuers. The Prophet ﷺ reportedly told Suraqah he would one day wear the bracelets of the Persian emperor — a prophecy fulfilled years later when Suraqah received the bracelets from the Persian royal treasury during the caliphate of Umar.",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3906" },
    ],
  },
  {
    id: "quba",
    title: "Arrival at Quba",
    description: "The Prophet ﷺ arrived at the outskirts of Madinah in the village of Quba, where he stayed for several days and established the first mosque in Islam — Masjid Quba.",
    details: "The people of Quba had been watching the road daily, waiting for the Prophet's arrival. The Masjid Quba, built during this brief stay, is described in the Quran as 'a mosque founded on righteousness from the first day' (9:108). The Prophet ﷺ waited here for Ali ibn Abi Talib to arrive from Makkah after returning the entrusted belongings to their owners.",
    estimatedDistance: "~5 km south of Madinah",
    citations: [
      { source: "Quran", reference: "Surah al-Tawbah (9:108)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3906" },
    ],
  },
  {
    id: "madinah-arrival",
    title: "Entry into Madinah",
    description: "The Prophet ﷺ entered Madinah to an enthusiastic welcome, with the Ansar singing 'Tala'al-Badru Alayna' (The full moon has risen upon us). He allowed his camel to choose where to stop, and built his mosque and home at that location.",
    details: "The arrival in Madinah was transformative. Every family wanted to host the Prophet ﷺ, and he wisely let his camel walk freely until it knelt at a spot belonging to two orphans. He purchased the land and built the Prophet's Mosque (al-Masjid al-Nabawi), which became the center of the Muslim community — serving as mosque, community center, court, and seat of governance. This marked the beginning of the Madinan period, the Islamic calendar, and the establishment of the first Muslim community-state.",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3906" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
    ],
  },
];

export default function HijrahJourneyPage() {
  const [activeStop, setActiveStop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentStop = stops[activeStop];

  const goTo = (index: number) => {
    if (index >= 0 && index < stops.length) {
      setActiveStop(index);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 bg-card geometric-border border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="ornament-divider mb-4">
            <span className="text-muted-foreground text-sm">✦</span>
          </div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Interactive Journey</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4 italic">The Hijrah</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Follow the historic migration from Makkah to Madinah — a journey that changed the course of
            history. Navigate through each stop to explore the events, challenges, and miracles of this
            pivotal journey.
          </p>
        </div>
      </section>

      {/* Route Overview */}
      <section className="py-8 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="flex items-center justify-between overflow-x-auto gap-1 py-4">
              {stops.map((stop, i) => (
                <button
                  key={stop.id}
                  onClick={() => goTo(i)}
                  className="flex flex-col items-center gap-2 min-w-[80px] group"
                  aria-label={`Go to ${stop.title}`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                      i === activeStop
                        ? "bg-gold border-gold scale-125 animate-pulse-gold"
                        : i < activeStop
                        ? "bg-primary border-primary"
                        : "bg-muted border-border group-hover:border-gold/50"
                    }`}
                  />
                  <span
                    className={`text-xs text-center leading-tight transition-colors ${
                      i === activeStop ? "text-gold font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {stop.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </button>
              ))}
            </div>
            <div className="absolute top-6 left-[40px] right-[40px] h-0.5 bg-border -z-10" />
            <div
              className="absolute top-6 left-[40px] h-0.5 bg-gold transition-all duration-500 -z-10"
              style={{ width: `${(activeStop / (stops.length - 1)) * (100 - 10)}%` }}
            />
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-4 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(activeStop - 1)}
              disabled={activeStop === 0}
              className="p-2 rounded border border-border hover:bg-muted disabled:opacity-30 transition-colors"
              aria-label="Previous stop"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-muted-foreground min-w-[80px] text-center italic">
              Stop {activeStop + 1} of {stops.length}
            </span>
            <button
              onClick={() => goTo(activeStop + 1)}
              disabled={activeStop === stops.length - 1}
              className="p-2 rounded border border-border hover:bg-muted disabled:opacity-30 transition-colors"
              aria-label="Next stop"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stop Detail */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <SectionReveal key={currentStop.id}>
            <div className="rounded border border-border bg-card p-8">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-3xl font-bold italic">{currentStop.title}</h2>
                  {(currentStop.estimatedDistance || currentStop.estimatedTime) && (
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                      {currentStop.estimatedDistance && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {currentStop.estimatedDistance}
                          <span className="italic text-gold/70 ml-1">est.</span>
                        </span>
                      )}
                      {currentStop.estimatedTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {currentStop.estimatedTime}
                          <span className="italic text-gold/70 ml-1">est.</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-base text-foreground leading-relaxed mb-4">{currentStop.description}</p>

              <div className="p-5 rounded bg-muted/30 border border-border mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{currentStop.details}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold mb-2 flex items-center gap-1 italic">
                  <BookOpen className="h-3 w-3" /> Citations
                </h4>
                <ul className="space-y-1">
                  {currentStop.citations.map((c, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      <span className="font-medium">{c.source}</span> — {c.reference}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => goTo(activeStop - 1)}
              disabled={activeStop === 0}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            {activeStop < stops.length - 1 ? (
              <button
                onClick={() => goTo(activeStop + 1)}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-gold transition-colors"
              >
                Next Stop <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                to="/timeline?event=hijrah"
                className="flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-dark transition-colors"
              >
                View in Timeline <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Text Alternative */}
      <section className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold mb-6 text-center italic">Complete Journey Overview</h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            A text-based alternative for all {stops.length} stops of the Hijrah journey.
          </p>
          <div className="space-y-6">
            {stops.map((stop, i) => (
              <div key={stop.id} className="flex gap-4">
                <div className="shrink-0 w-8 text-right">
                  <span className="text-sm font-bold text-gold font-serif italic">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold italic">{stop.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{stop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
