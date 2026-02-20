export interface Citation {
  source: string;
  reference: string;
}

export type ConfidenceLevel = "well-attested" | "reported-with-variation" | "disputed";
export type Era = "pre-revelation" | "makkan" | "madinan";
export type EventCategory = "revelation" | "community" | "treaty" | "conflict" | "migration" | "social-reform" | "personal";

export interface SeerahEvent {
  id: string;
  title: string;
  dateRange: string;
  dateUncertain?: boolean;
  hijriDate?: string;
  locations: string[];
  era: Era;
  categories: EventCategory[];
  summary: string;
  deepDive: string;
  whyItMatters: string;
  confidenceLevel: ConfidenceLevel;
  reportNotes?: string;
  citations: Citation[];
  relatedPeople: string[];
  relatedPlaces: string[];
  relatedThemes: string[];
}

export interface Person {
  id: string;
  name: string;
  bio: string;
  role: string;
  relatedEvents: string[];
  citations: Citation[];
}

export interface Place {
  id: string;
  name: string;
  lat: number;
  lon: number;
  description: string;
  citations: Citation[];
}

export interface Theme {
  id: string;
  title: string;
  summary: string;
  essay: string;
  relatedEvents: string[];
  citations: Citation[];
}

export const events: SeerahEvent[] = [
  {
    id: "birth",
    title: "Birth and Early Life",
    dateRange: "c. 570 CE",
    dateUncertain: true,
    locations: ["Makkah"],
    era: "pre-revelation",
    categories: ["personal"],
    summary: "Muhammad ﷺ was born in Makkah in the Year of the Elephant, into the Banu Hashim clan of the Quraysh tribe. His father Abdullah had died before his birth, and his mother Aminah passed away when he was six. He was raised first by his grandfather Abd al-Muttalib, then by his uncle Abu Talib.",
    deepDive: "Born into the noblest lineage of the Quraysh, Muhammad ﷺ experienced early hardship through orphanhood. He was nursed by Halimah al-Sa'diyyah among the Bedouins of Banu Sa'd, a common practice among Makkan families. After losing both parents young, his grandfather and later his uncle Abu Talib became his guardians. Even before prophethood, he was known for his honesty and trustworthiness, earning the title 'al-Amin' (the Trustworthy). He worked as a shepherd and later as a merchant, gaining a reputation for integrity that would become foundational to his later mission.",
    whyItMatters: "His early life of orphanhood and integrity established the character that would later earn the trust of an entire community and form the basis of his prophetic mission.",
    confidenceLevel: "reported-with-variation",
    reportNotes: "The exact date of birth is debated. Most scholars favor 12 Rabi' al-Awwal (c. 570 CE), though some place it on the 8th or 9th. The 'Year of the Elephant' correlation is widely accepted but the Gregorian equivalent varies between 569–571 CE.",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Merits" },
      { source: "Martin Lings", reference: "Muhammad: His Life Based on the Earliest Sources, Ch. 1-5" },
    ],
    relatedPeople: ["abu-talib", "halimah"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["patience", "leadership"],
  },
  {
    id: "marriage-khadijah",
    title: "Marriage to Khadijah",
    dateRange: "c. 595 CE",
    dateUncertain: true,
    locations: ["Makkah"],
    era: "pre-revelation",
    categories: ["personal"],
    summary: "At approximately twenty-five years of age, Muhammad ﷺ married Khadijah bint Khuwaylid, a respected and successful merchant of Makkah. She had employed him to lead a trade caravan to Syria, impressed by his honesty and skill. Their marriage lasted about twenty-five years until her death.",
    deepDive: "Khadijah was a widow of noble lineage and considerable wealth who had become one of Makkah's most successful merchants. After Muhammad ﷺ successfully led her trade caravan, she proposed marriage through an intermediary. Despite the age difference — she was about forty and he twenty-five — their union was deeply loving and mutually supportive. She bore him several children and would become the first person to accept Islam when revelation came. She supported him emotionally, financially, and spiritually throughout the most challenging early years of his mission.",
    whyItMatters: "This marriage exemplified mutual respect and partnership. Khadijah's unwavering support was critical to the survival of the early Muslim community.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3818" },
    ],
    relatedPeople: ["khadijah"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["family-life", "leadership"],
  },
  {
    id: "first-revelation",
    title: "The First Revelation",
    dateRange: "c. 610 CE",
    hijriDate: "Ramadan, 13 BH",
    locations: ["Cave of Hira", "Makkah"],
    era: "makkan",
    categories: ["revelation"],
    summary: "At the age of forty, while in spiritual retreat in the Cave of Hira on Jabal al-Nour, Muhammad ﷺ received the first verses of the Quran through the angel Jibril (Gabriel). The first words revealed were 'Iqra' — 'Read' or 'Recite' — the opening of Surah al-Alaq.",
    deepDive: "Muhammad ﷺ had developed a practice of retreating to the Cave of Hira for periods of contemplation, a practice known as tahannuth. During one such retreat in Ramadan, the angel Jibril appeared and commanded him to read. After three times insisting he could not, the first five verses of Surah al-Alaq were revealed. Shaken by the experience, he returned to Khadijah, who comforted him and took him to her cousin Waraqah ibn Nawfal, a Christian scholar, who recognized the signs of prophethood. This event marked the beginning of twenty-three years of revelation.",
    whyItMatters: "This moment inaugurated the prophetic mission and the revelation of the Quran, fundamentally transforming the religious, social, and political landscape of Arabia and beyond.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3" },
      { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
    ],
    relatedPeople: ["khadijah"],
    relatedPlaces: ["cave-hira", "makkah"],
    relatedThemes: ["worship", "patience"],
  },
  {
    id: "early-muslims",
    title: "The First Believers",
    dateRange: "610–613 CE",
    locations: ["Makkah"],
    era: "makkan",
    categories: ["community"],
    summary: "The earliest converts to Islam included Khadijah bint Khuwaylid, Abu Bakr al-Siddiq, Ali ibn Abi Talib, and Zayd ibn Harithah. For approximately three years, the message was shared privately, building a small but devoted community of believers.",
    deepDive: "The first phase of the prophetic mission was characterized by private, discreet invitation (da'wah). Khadijah was the first to believe, followed by Ali ibn Abi Talib (then a young boy in the Prophet's household), Zayd ibn Harithah (his freed servant), and Abu Bakr al-Siddiq, whose social standing helped bring others into the fold. Abu Bakr's efforts brought in Uthman ibn Affan, al-Zubayr ibn al-Awwam, Abdur-Rahman ibn Awf, Sa'd ibn Abi Waqqas, and Talhah ibn Ubaydillah. This initial community, numbering about forty, met secretly in the house of al-Arqam ibn Abi al-Arqam.",
    whyItMatters: "This quiet early phase demonstrated the power of personal conviction and trust-based community building, principles that remained central to Islamic social organization.",
    confidenceLevel: "well-attested",
    reportNotes: "The exact order of the earliest converts is debated among scholars. Most agree Khadijah was first, but the sequence of Abu Bakr, Ali, and Zayd varies by source.",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
      { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 6" },
    ],
    relatedPeople: ["khadijah", "abu-bakr", "ali", "bilal"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["community", "leadership"],
  },
  {
    id: "persecution",
    title: "Persecution of Early Muslims",
    dateRange: "613–615 CE",
    locations: ["Makkah"],
    era: "makkan",
    categories: ["social-reform"],
    summary: "After the Prophet ﷺ began preaching publicly, the Quraysh leaders intensified their opposition. Early Muslims without tribal protection — including Bilal ibn Rabah, the family of Yasir, and Khabbab ibn al-Aratt — suffered severe persecution including torture, economic boycott, and social ostracism.",
    deepDive: "The public proclamation of Islam directly challenged the religious, economic, and social order of Makkan society. The Quraysh elite saw Islam as a threat to their custodianship of the Ka'bah and the lucrative pilgrimage trade. Those most vulnerable — enslaved people, freed persons, and those without strong clan protection — bore the worst abuse. Bilal was tortured by his master Umayyah ibn Khalaf until Abu Bakr purchased and freed him. Sumayyah bint Khayyat became the first martyr of Islam. The Prophet ﷺ himself was protected by Abu Talib's clan honor but endured verbal abuse, social exclusion, and physical harassment.",
    whyItMatters: "The persecution tested and forged the early Muslim community's resolve, establishing endurance and moral courage as defining characteristics of the faith.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Virtues of Companions" },
    ],
    relatedPeople: ["bilal", "sumayyah", "abu-bakr"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["patience", "justice"],
  },
  {
    id: "migration-abyssinia",
    title: "Migration to Abyssinia",
    dateRange: "c. 615 CE",
    hijriDate: "5th year of Prophethood",
    locations: ["Abyssinia"],
    era: "makkan",
    categories: ["migration"],
    summary: "Facing intensifying persecution, the Prophet ﷺ advised a group of Muslims to seek refuge in the Christian kingdom of Abyssinia (modern Ethiopia), ruled by the just Negus (al-Najashi). Two migrations took place, with the second group numbering around eighty-three men and eighteen women.",
    deepDive: "This was the first hijrah in Islam. The Prophet ﷺ chose Abyssinia specifically because its ruler was known for justice. When the Quraysh sent envoys to demand the Muslims' return, the Negus held a hearing where Ja'far ibn Abi Talib eloquently described Islam's teachings on justice, compassion, and monotheism. The Negus was moved and refused to surrender the refugees. This episode demonstrated early Islam's engagement with other faith traditions and the concept of seeking just governance regardless of religious identity.",
    whyItMatters: "This migration established the principle that Muslims may seek refuge under just governance, and demonstrated interfaith respect at the earliest stage of Islamic history.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
      { source: "Ahmad", reference: "Musnad Ahmad, Hadith 1740" },
    ],
    relatedPeople: [],
    relatedPlaces: ["abyssinia"],
    relatedThemes: ["justice", "diplomacy"],
  },
  {
    id: "social-boycott",
    title: "The Boycott of Banu Hashim",
    dateRange: "616–619 CE",
    locations: ["Makkah"],
    era: "makkan",
    categories: ["social-reform"],
    summary: "The Quraysh imposed a comprehensive social and economic boycott against the Banu Hashim and Banu al-Muttalib clans. For approximately three years, the Prophet's extended family was confined to the valley of Abu Talib (Shi'b Abi Talib), suffering severe deprivation.",
    deepDive: "The boycott was formalized in a written pact hung inside the Ka'bah, prohibiting trade, marriage, and social interaction with the two clans until they surrendered Muhammad ﷺ. The community endured extreme hardship — food scarcity was so severe that sounds of children crying from hunger could be heard outside the valley. Some sympathetic Quraysh members secretly smuggled food. The boycott eventually collapsed when several Quraysh leaders, moved by conscience, publicly tore up the pact, which tradition records had been eaten by termites except for the phrase 'In Your name, O Allah.'",
    whyItMatters: "The boycott revealed both the extremes of opposition and the moral courage of those who stood against injustice, even at personal risk.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
      { source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 1" },
    ],
    relatedPeople: ["abu-talib"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["patience", "community"],
  },
  {
    id: "year-of-sorrow",
    title: "The Year of Sorrow",
    dateRange: "619 CE",
    hijriDate: "10th year of Prophethood",
    locations: ["Makkah"],
    era: "makkan",
    categories: ["personal"],
    summary: "Within a short span, the Prophet ﷺ lost both his beloved wife Khadijah and his uncle and protector Abu Talib. These twin losses removed his greatest emotional support and his most important political shield, leaving him profoundly vulnerable.",
    deepDive: "Khadijah had been the Prophet's confidante, his first believer, and his emotional anchor for twenty-five years. Abu Talib, though he did not embrace Islam, had used his considerable tribal authority to shield his nephew from the worst of Quraysh hostility. Without Abu Talib's protection, the new Quraysh leader Abu Lahab withdrew clan support, and the Prophet ﷺ faced open hostility. His attempt to find support in the nearby city of Ta'if was met with rejection and stoning. This period marked the lowest point of the Makkan phase, yet it preceded some of the most significant turning points in the prophetic mission.",
    whyItMatters: "This period of profound personal loss and vulnerability demonstrated that the prophetic mission was sustained not by worldly power but by divine support and personal resilience.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3846" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
    ],
    relatedPeople: ["khadijah", "abu-talib"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["patience", "mercy"],
  },
  {
    id: "isra-miraj",
    title: "The Night Journey and Ascension",
    dateRange: "c. 620–621 CE",
    dateUncertain: true,
    hijriDate: "27 Rajab (traditional)",
    locations: ["Makkah", "Jerusalem"],
    era: "makkan",
    categories: ["revelation"],
    summary: "In a miraculous event, the Prophet ﷺ was taken on a night journey (Isra) from the Sacred Mosque in Makkah to the Farthest Mosque (al-Masjid al-Aqsa) in Jerusalem, and then ascended through the heavens (Mi'raj). The five daily prayers were prescribed during this journey.",
    deepDive: "The Isra and Mi'raj is one of the most significant events in Islamic tradition. According to narrations, the Prophet ﷺ was carried on a heavenly mount called al-Buraq from Makkah to Jerusalem, where he led the previous prophets in prayer. He then ascended through the seven heavens, meeting various prophets at each level. The journey culminated in a direct encounter with the Divine, during which the obligation of five daily prayers was established. Upon his return and report of the journey, Abu Bakr immediately affirmed his belief, earning the title al-Siddiq (the Truthful). This event is referenced in the Quran (Surah al-Isra, 17:1).",
    whyItMatters: "The Isra and Mi'raj affirmed the spiritual connection between the Abrahamic prophetic tradition and established the central act of Islamic worship — the five daily prayers.",
    confidenceLevel: "well-attested",
    reportNotes: "While the event itself is affirmed in the Quran and authentic hadith, scholars differ on whether it was a physical or spiritual journey, and on the exact date. The majority position holds it was a physical journey. The traditional date of 27 Rajab is not universally agreed upon.",
    citations: [
      { source: "Quran", reference: "Surah al-Isra (17:1)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3207" },
      { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman" },
    ],
    relatedPeople: ["abu-bakr"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["worship", "patience"],
  },
  {
    id: "pledges-aqabah",
    title: "The Pledges of Aqabah",
    dateRange: "621–622 CE",
    locations: ["Makkah"],
    era: "makkan",
    categories: ["treaty", "community"],
    summary: "In two successive years, groups from the city of Yathrib (later Madinah) met the Prophet ﷺ at Aqabah during the pilgrimage season. They pledged their allegiance and invited him to migrate to their city, offering protection and support.",
    deepDive: "The First Pledge of Aqabah (621 CE) involved twelve men from Yathrib who embraced Islam and pledged to uphold basic moral principles. The Second Pledge (622 CE) was far more significant — seventy-three men and two women pledged to protect the Prophet ﷺ as they would their own families, and to support him militarily if needed. This was a transformative political development: for the first time, a substantial community outside Makkah formally committed to the new faith and its leader. The Prophet ﷺ sent Mus'ab ibn Umayr to Yathrib to teach Islam, and within a year, Islam had spread significantly in the city.",
    whyItMatters: "The pledges of Aqabah created the political and social foundation for the Hijrah and the establishment of the first Muslim polity in Madinah.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
      { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 6" },
    ],
    relatedPeople: [],
    relatedPlaces: ["makkah"],
    relatedThemes: ["community", "diplomacy"],
  },
  {
    id: "hijrah",
    title: "The Hijrah to Madinah",
    dateRange: "622 CE",
    hijriDate: "1 AH",
    locations: ["Makkah", "Cave of Thawr", "Madinah"],
    era: "madinan",
    categories: ["migration"],
    summary: "The Prophet ﷺ and Abu Bakr migrated from Makkah to Madinah, evading Quraysh pursuers by hiding in the Cave of Thawr for three days. This migration (Hijrah) marks the beginning of the Islamic calendar and the founding of the first Muslim community-state.",
    deepDive: "The Hijrah was meticulously planned. Ali ibn Abi Talib slept in the Prophet's bed as a decoy while Muhammad ﷺ and Abu Bakr slipped out of Makkah undetected. They took an unconventional southern route to the Cave of Thawr, where they hid for three days as Quraysh search parties scoured the area. The journey to Madinah took approximately eight days along a coastal route through the desert. Upon arrival in Quba (outside Madinah), the Prophet ﷺ built the first mosque of Islam. He then entered Madinah to an enthusiastic welcome. The people of Madinah who supported the Prophet were called the Ansar (Helpers), while the Makkan emigrants were called the Muhajirun.",
    whyItMatters: "The Hijrah transformed Islam from a persecuted faith community into a functioning society with political, legal, and social structures. It is the pivotal moment in Islamic history.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3905" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
      { source: "Martin Lings", reference: "Muhammad: His Life Based on the Earliest Sources, Ch. 35-38" },
    ],
    relatedPeople: ["abu-bakr", "ali"],
    relatedPlaces: ["makkah", "cave-thawr", "madinah"],
    relatedThemes: ["patience", "community", "leadership"],
  },
  {
    id: "constitution-madinah",
    title: "The Constitution of Madinah",
    dateRange: "622 CE",
    hijriDate: "1 AH",
    locations: ["Madinah"],
    era: "madinan",
    categories: ["treaty", "social-reform", "community"],
    summary: "Shortly after arriving in Madinah, the Prophet ﷺ established a written charter (often called the Constitution of Madinah) that defined the rights and responsibilities of all citizens — Muslim and non-Muslim alike — creating a multi-faith civic community.",
    deepDive: "The Sahifah (document) of Madinah is one of the earliest known written constitutions. It established that the Muslim Muhajirun and Ansar formed one ummah (community), while recognizing the Jewish tribes of Madinah as part of the broader civic body with full religious freedom and mutual defense obligations. It defined principles of justice, collective security, and conflict resolution. The document represented a revolutionary approach to governance: a pluralistic social contract based on shared civic responsibility rather than purely tribal allegiance. It also established the Prophet ﷺ as the final arbiter of disputes.",
    whyItMatters: "The Constitution of Madinah is one of history's earliest examples of a pluralistic civic charter, establishing principles of religious freedom, mutual obligation, and rule of law.",
    confidenceLevel: "well-attested",
    reportNotes: "The full text is preserved by Ibn Hisham. Some scholars debate whether it was a single document or compiled from multiple agreements. Its dating is generally placed early in the Madinan period, though exact timing is discussed.",
    citations: [
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
      { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 7" },
    ],
    relatedPeople: [],
    relatedPlaces: ["madinah"],
    relatedThemes: ["justice", "community", "diplomacy"],
  },
  {
    id: "battle-badr",
    title: "The Battle of Badr",
    dateRange: "March 624 CE",
    hijriDate: "17 Ramadan, 2 AH",
    locations: ["Badr"],
    era: "madinan",
    categories: ["conflict"],
    summary: "The first major military engagement between the Muslims and the Quraysh of Makkah. Despite being heavily outnumbered (approximately 313 Muslims against over 900 Quraysh), the Muslims achieved a decisive victory that established their credibility as a community.",
    deepDive: "The battle arose when a Muslim force set out to intercept a Makkan trade caravan led by Abu Sufyan. The caravan escaped, but a large Quraysh army marched out to confront the Muslims. At Badr, the Prophet ﷺ consulted his companions before engaging — a practice of shura (consultation) he maintained throughout. The battle resulted in a Muslim victory with seventy Quraysh killed and seventy captured. The Prophet ﷺ ordered that prisoners be treated humanely, and some were ransomed by teaching Madinan children to read. The victory was seen as divine confirmation of the Muslim cause and dramatically shifted the balance of power in the region.",
    whyItMatters: "Badr was a watershed moment that validated the Madinan Muslim community politically and militarily, demonstrating that a small force guided by principle could prevail.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Quran", reference: "Surah al-Anfal (8:1-75)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Military Expeditions" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
    ],
    relatedPeople: ["abu-bakr", "ali", "hamza", "bilal"],
    relatedPlaces: ["badr"],
    relatedThemes: ["conflict-ethics", "leadership", "justice"],
  },
  {
    id: "battle-uhud",
    title: "The Battle of Uhud",
    dateRange: "March 625 CE",
    hijriDate: "7 Shawwal, 3 AH",
    locations: ["Uhud"],
    era: "madinan",
    categories: ["conflict"],
    summary: "The Quraysh returned with a larger army seeking revenge for Badr. The battle at Mount Uhud initially went well for the Muslims, but a tactical error by archers who abandoned their positions led to a reversal. The Prophet ﷺ was wounded and Hamza ibn Abd al-Muttalib was killed.",
    deepDive: "The Quraysh assembled an army of about 3,000 under Abu Sufyan. The Prophet ﷺ, after consultation, positioned his forces with Mount Uhud at their backs and placed fifty archers on a strategic hill with strict orders to hold position. When the battle initially turned in the Muslims' favor, most archers left their positions to collect spoils. The Makkan cavalry, led by Khalid ibn al-Walid, exploited this gap to attack from behind. The resulting chaos led to significant Muslim casualties, including Hamza, the Prophet's uncle. Though not a clear defeat, Uhud taught painful lessons about discipline and obedience.",
    whyItMatters: "Uhud demonstrated that military success depends on discipline and collective responsibility, and that setbacks are opportunities for reflection and growth.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Quran", reference: "Surah Aal Imran (3:121-179)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Military Expeditions" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 3" },
    ],
    relatedPeople: ["hamza", "ali"],
    relatedPlaces: ["uhud"],
    relatedThemes: ["patience", "conflict-ethics", "leadership"],
  },
  {
    id: "battle-trench",
    title: "The Battle of the Trench",
    dateRange: "627 CE",
    hijriDate: "Shawwal, 5 AH",
    locations: ["Madinah"],
    era: "madinan",
    categories: ["conflict"],
    summary: "A coalition of Quraysh, allied tribes, and some Jewish groups besieged Madinah with an army of approximately 10,000. On the advice of Salman al-Farisi, the Muslims dug a defensive trench — a strategy unknown in Arabia — which successfully repelled the siege after about two weeks.",
    deepDive: "The Battle of the Trench (al-Khandaq) represented the largest military threat the Muslim community had faced. The Prophet ﷺ adopted the innovative suggestion of Salman al-Farisi to dig a trench across the exposed northern approach to Madinah. The massive coalition army was unable to cross the trench, and after weeks of siege, harsh weather, and internal discord caused the alliance to collapse and withdraw. The Quran describes a divine wind that scattered the enemy camps. This battle effectively ended the Quraysh's ability to destroy the Muslim community by force and shifted the strategic initiative to Madinah.",
    whyItMatters: "The Battle of the Trench showed the value of strategic innovation, consultation across cultural backgrounds, and defensive patience in the face of overwhelming force.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Quran", reference: "Surah al-Ahzab (33:9-27)" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 3" },
    ],
    relatedPeople: [],
    relatedPlaces: ["madinah"],
    relatedThemes: ["leadership", "community", "conflict-ethics"],
  },
  {
    id: "treaty-hudaybiyyah",
    title: "The Treaty of Hudaybiyyah",
    dateRange: "March 628 CE",
    hijriDate: "Dhul Qi'dah, 6 AH",
    locations: ["Hudaybiyyah"],
    era: "madinan",
    categories: ["treaty", "community"],
    summary: "When the Prophet ﷺ and 1,400 Muslims set out for a peaceful pilgrimage to Makkah, the Quraysh blocked their entry. After negotiations, a ten-year peace treaty was signed at Hudaybiyyah. Though its terms seemed unfavorable, it was described in the Quran as a 'clear victory.'",
    deepDive: "The Prophet ﷺ set out in ihram (pilgrimage garb) with no intention of fighting. When the Quraysh blocked them at Hudaybiyyah, negotiations ensued. The resulting treaty stipulated: a ten-year ceasefire, Muslims would return that year without performing pilgrimage, they could return the following year, any Quraysh member who fled to Madinah without permission must be returned, but Muslims who went to Makkah need not be returned. Many companions were initially distressed by the terms, which appeared one-sided. However, the treaty provided crucial stability. In the two years of peace that followed, more people entered Islam than in all the previous years combined, as people could now interact freely with Muslims.",
    whyItMatters: "Hudaybiyyah demonstrated that strategic patience and diplomacy can achieve more than military force, and that apparent concessions may yield transformative outcomes.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Quran", reference: "Surah al-Fath (48:1-29)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 2731-2732" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 3" },
    ],
    relatedPeople: ["abu-bakr", "umar", "ali"],
    relatedPlaces: ["hudaybiyyah"],
    relatedThemes: ["diplomacy", "patience", "leadership"],
  },
  {
    id: "conquest-makkah",
    title: "The Conquest of Makkah",
    dateRange: "January 630 CE",
    hijriDate: "20 Ramadan, 8 AH",
    locations: ["Makkah"],
    era: "madinan",
    categories: ["conflict", "social-reform"],
    summary: "After the Quraysh violated the Treaty of Hudaybiyyah by attacking a Muslim-allied tribe, the Prophet ﷺ marched on Makkah with 10,000 Muslims. The city was taken almost without bloodshed, and the Prophet ﷺ declared a general amnesty for its people.",
    deepDive: "When the Banu Bakr, allies of the Quraysh, attacked the Banu Khuza'ah (allies of the Muslims) with Quraysh support, the treaty was effectively broken. The Prophet ﷺ assembled the largest Muslim force yet and marched on Makkah. He entered the city with his head bowed in humility, not triumph. Resistance was minimal. Upon entering the Ka'bah, he destroyed the 360 idols within it. When the people of Makkah — many of whom had persecuted, tortured, and expelled the Muslims — gathered before him, he asked: 'What do you expect from me?' They replied: 'Generosity, O noble brother.' He declared: 'Go, for you are free.' This act of mass forgiveness remains one of the most celebrated moments of mercy in Islamic history.",
    whyItMatters: "The conquest of Makkah exemplified the Islamic ideal of mercy in victory. The general amnesty demonstrated that justice and forgiveness can coexist, even after decades of persecution.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Military Expeditions" },
      { source: "Muslim", reference: "Sahih Muslim, Kitab al-Jihad" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 4" },
    ],
    relatedPeople: ["abu-bakr", "ali", "bilal"],
    relatedPlaces: ["makkah"],
    relatedThemes: ["mercy", "justice", "leadership"],
  },
  {
    id: "farewell-pilgrimage",
    title: "The Farewell Pilgrimage",
    dateRange: "March 632 CE",
    hijriDate: "10 AH",
    locations: ["Makkah"],
    era: "madinan",
    categories: ["social-reform", "revelation"],
    summary: "In his only full Hajj, the Prophet ﷺ delivered the Farewell Sermon at Arafat before over 100,000 Muslims. This sermon articulated fundamental principles of human rights, equality, justice, and the sanctity of life and property.",
    deepDive: "The Farewell Pilgrimage (Hajjat al-Wada') was the Prophet's final and most comprehensive public address. Standing on the plain of Arafat, he declared the equality of all human beings regardless of race or color, affirmed the rights of women, prohibited usury, established the sanctity of life, property, and honor, and called for the just treatment of all people. He announced: 'All mankind is from Adam, and Adam is from dust. An Arab has no superiority over a non-Arab, nor does a non-Arab have any superiority over an Arab; a white has no superiority over a black, nor does a black have any superiority over a white — except by piety and good action.' He asked those present to convey his message to those absent, and the verse was revealed: 'Today I have perfected your religion for you.'",
    whyItMatters: "The Farewell Sermon is regarded as one of history's most significant declarations of human rights, articulating principles of equality and justice that remain foundational to Islamic ethics.",
    confidenceLevel: "well-attested",
    citations: [
      { source: "Muslim", reference: "Sahih Muslim, Kitab al-Hajj" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Hajj" },
      { source: "Quran", reference: "Surah al-Ma'idah (5:3)" },
    ],
    relatedPeople: [],
    relatedPlaces: ["makkah"],
    relatedThemes: ["justice", "mercy", "social-reform"],
  },
  {
    id: "passing",
    title: "The Passing of the Prophet ﷺ",
    dateRange: "June 632 CE",
    hijriDate: "12 Rabi' al-Awwal, 11 AH",
    locations: ["Madinah"],
    era: "madinan",
    categories: ["personal"],
    summary: "After a brief illness, the Prophet Muhammad ﷺ passed away in Madinah in the apartment of his wife Aisha. He was sixty-three years old. His death was a profound shock to the Muslim community, and Abu Bakr steadied them by declaring: 'Whoever worshipped Muhammad, let him know that Muhammad has died. And whoever worshipped Allah, let him know that Allah is alive and will never die.'",
    deepDive: "In his final days, the Prophet ﷺ continued to lead prayers until his illness prevented him, at which point he asked Abu Bakr to lead in his place. His final instructions emphasized prayer and the just treatment of those in one's care. He freed his slaves, gave away his remaining possessions, and made peace with all. When he passed, Umar initially refused to believe it until Abu Bakr recited the Quranic verse: 'Muhammad is only a messenger; messengers have passed on before him' (3:144). The Prophet ﷺ was buried where he passed, in Aisha's apartment, which is now part of the Prophet's Mosque in Madinah. His passing marked the end of prophethood and the beginning of the era of the Rightly Guided Caliphs.",
    whyItMatters: "The Prophet's death tested the community's attachment to principles over personality, and his final acts embodied the values of simplicity, generosity, and devotion he had taught throughout his life.",
    confidenceLevel: "well-attested",
    reportNotes: "The exact date is debated — 12 Rabi' al-Awwal is the most commonly cited, but some scholars propose the 1st or 2nd of the month.",
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 1241-1242" },
      { source: "Quran", reference: "Surah Aal Imran (3:144)" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 4" },
    ],
    relatedPeople: ["abu-bakr", "umar"],
    relatedPlaces: ["madinah"],
    relatedThemes: ["patience", "worship", "leadership"],
  },
];

export const people: Person[] = [
  {
    id: "khadijah",
    name: "Khadijah bint Khuwaylid",
    bio: "A successful merchant of Quraysh and the first wife of the Prophet ﷺ. She was the first person to embrace Islam and supported the Prophet ﷺ emotionally, financially, and spiritually through the most difficult early years. Known as 'the Mother of the Believers.'",
    role: "Wife, first believer, supporter",
    relatedEvents: ["marriage-khadijah", "first-revelation", "year-of-sorrow"],
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3818" }],
  },
  {
    id: "abu-bakr",
    name: "Abu Bakr al-Siddiq",
    bio: "A close friend and companion of the Prophet ﷺ from before Islam. He was among the first adult men to accept Islam, accompanied the Prophet on the Hijrah, and became the first Caliph after the Prophet's passing. Known as al-Siddiq (the Truthful).",
    role: "Companion, first Caliph",
    relatedEvents: ["early-muslims", "hijrah", "isra-miraj", "passing"],
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Companions" }],
  },
  {
    id: "umar",
    name: "Umar ibn al-Khattab",
    bio: "Initially a fierce opponent of Islam, his conversion dramatically strengthened the Muslim community. Known for his strong sense of justice and administrative genius, he became the second Caliph and oversaw a period of rapid expansion.",
    role: "Companion, second Caliph",
    relatedEvents: ["treaty-hudaybiyyah", "passing"],
    citations: [{ source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" }],
  },
  {
    id: "ali",
    name: "Ali ibn Abi Talib",
    bio: "The Prophet's cousin and son-in-law, raised in his household from a young age. One of the earliest converts to Islam. Known for his bravery, knowledge, and eloquence. He became the fourth Caliph.",
    role: "Cousin, Companion, fourth Caliph",
    relatedEvents: ["early-muslims", "hijrah", "battle-badr", "battle-uhud"],
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Companions" }],
  },
  {
    id: "bilal",
    name: "Bilal ibn Rabah",
    bio: "An Abyssinian enslaved person who was among the earliest converts to Islam. He was severely tortured for his faith by his master until Abu Bakr purchased and freed him. He became the first muezzin (caller to prayer) in Islamic history.",
    role: "Companion, first muezzin",
    relatedEvents: ["persecution", "early-muslims", "conquest-makkah"],
    citations: [{ source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" }],
  },
  {
    id: "hamza",
    name: "Hamza ibn Abd al-Muttalib",
    bio: "The Prophet's uncle, known as the 'Lion of God' for his courage and martial prowess. His conversion to Islam was a major boost to the Muslim community. He was martyred at the Battle of Uhud.",
    role: "Uncle, military leader",
    relatedEvents: ["battle-badr", "battle-uhud"],
    citations: [{ source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" }],
  },
  {
    id: "abu-talib",
    name: "Abu Talib ibn Abd al-Muttalib",
    bio: "The Prophet's uncle and guardian who raised him after the death of his grandfather. Though he did not embrace Islam, he provided crucial tribal protection to the Prophet ﷺ throughout the Makkan period. His death in the Year of Sorrow removed this protection.",
    role: "Uncle, guardian, protector",
    relatedEvents: ["birth", "social-boycott", "year-of-sorrow"],
    citations: [{ source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" }],
  },
  {
    id: "sumayyah",
    name: "Sumayyah bint Khayyat",
    bio: "An early convert to Islam and the first martyr (shahidah) in Islamic history. She was killed by Abu Jahl for refusing to renounce her faith, becoming a symbol of steadfastness and sacrifice.",
    role: "Early convert, first martyr",
    relatedEvents: ["persecution"],
    citations: [{ source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 8" }],
  },
];

export const places: Place[] = [
  {
    id: "makkah",
    name: "Makkah",
    lat: 21.4225,
    lon: 39.8262,
    description: "The birthplace of Prophet Muhammad ﷺ and the site of the Ka'bah, the holiest site in Islam. Makkah was a major center of trade and pilgrimage in pre-Islamic Arabia.",
    citations: [{ source: "Quran", reference: "Surah Aal Imran (3:96)" }],
  },
  {
    id: "madinah",
    name: "Madinah (Yathrib)",
    lat: 24.4672,
    lon: 39.6112,
    description: "Originally known as Yathrib, it was renamed Madinah al-Munawwarah (The Radiant City) after the Prophet's migration. It became the center of the first Muslim community-state.",
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Virtues of Madinah" }],
  },
  {
    id: "cave-hira",
    name: "Cave of Hira (Jabal al-Nour)",
    lat: 21.4575,
    lon: 39.8583,
    description: "A cave on the mountain of Jabal al-Nour near Makkah where the Prophet ﷺ would retreat for contemplation. It is the site where the first Quranic revelation was received.",
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3" }],
  },
  {
    id: "cave-thawr",
    name: "Cave of Thawr",
    lat: 21.3763,
    lon: 39.8483,
    description: "A cave on Jabal Thawr south of Makkah where the Prophet ﷺ and Abu Bakr hid for three days during the Hijrah to Madinah.",
    citations: [{ source: "Quran", reference: "Surah al-Tawbah (9:40)" }],
  },
  {
    id: "abyssinia",
    name: "Abyssinia (Ethiopia)",
    lat: 9.145,
    lon: 40.4897,
    description: "The Christian kingdom ruled by the Negus (al-Najashi) that provided refuge to early Muslims fleeing persecution in Makkah. This was the first hijrah in Islam.",
    citations: [{ source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" }],
  },
  {
    id: "badr",
    name: "Badr",
    lat: 23.7811,
    lon: 38.7917,
    description: "A small town southwest of Madinah where the first major battle between the Muslims and the Quraysh took place in 624 CE.",
    citations: [{ source: "Quran", reference: "Surah Aal Imran (3:123)" }],
  },
  {
    id: "uhud",
    name: "Mount Uhud",
    lat: 24.5026,
    lon: 39.6108,
    description: "A mountain north of Madinah where the second major battle took place in 625 CE. The Prophet ﷺ said of it: 'This is a mountain that loves us and we love it.'",
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 4083" }],
  },
  {
    id: "hudaybiyyah",
    name: "Hudaybiyyah",
    lat: 21.4412,
    lon: 39.6087,
    description: "A location on the outskirts of Makkah where the landmark peace treaty between the Muslims and the Quraysh was signed in 628 CE.",
    citations: [{ source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 2731" }],
  },
];

export const themes: Theme[] = [
  {
    id: "mercy",
    title: "Mercy and Compassion",
    summary: "The Prophet ﷺ was described as a 'mercy to all the worlds,' and his life consistently demonstrated compassion even toward those who opposed him.",
    essay: "The Quran describes the mission of Prophet Muhammad ﷺ as one of universal mercy: 'We have not sent you except as a mercy to the worlds' (21:107). This was not an abstract principle but a lived reality visible throughout his life. When he entered Makkah as a conqueror after years of persecution, he chose forgiveness over retribution. When children interrupted his prayers, he shortened them out of consideration for the parents. He taught that mercy extends to all living beings — animals, plants, and the environment. He said: 'The merciful are shown mercy by the Most Merciful. Be merciful to those on earth and the One in the heavens will be merciful to you.' This principle of mercy as a foundational value — not weakness but a conscious choice of the strong — shaped every aspect of his social, political, and personal conduct.",
    relatedEvents: ["conquest-makkah", "farewell-pilgrimage", "year-of-sorrow"],
    citations: [
      { source: "Quran", reference: "Surah al-Anbiya (21:107)" },
      { source: "Al-Tirmidhi", reference: "Jami al-Tirmidhi, Hadith 1924" },
    ],
  },
  {
    id: "justice",
    title: "Justice and Equality",
    summary: "The Prophet ﷺ established a social order founded on the equality of all human beings before God and the law, regardless of race, class, or tribal affiliation.",
    essay: "Justice (adl) is a central Quranic command: 'O you who believe, be persistently standing firm in justice, witnesses for Allah, even if against yourselves or parents and relatives' (4:135). The Prophet ﷺ embodied this principle consistently. He declared in his Farewell Sermon that no Arab has superiority over a non-Arab except through piety. When a noblewoman was caught stealing, he refused to exempt her from the legal consequence, saying: 'Even if Fatimah, the daughter of Muhammad, were to steal, I would cut her hand.' He appointed Bilal, a formerly enslaved Abyssinian, as the caller to prayer — a position of honor — challenging the racial hierarchies of Arabian society. The Constitution of Madinah extended justice to all citizens regardless of faith. These actions were revolutionary in a society deeply stratified by tribe, wealth, and lineage.",
    relatedEvents: ["constitution-madinah", "farewell-pilgrimage", "conquest-makkah"],
    citations: [
      { source: "Quran", reference: "Surah al-Nisa (4:135)" },
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3475" },
    ],
  },
  {
    id: "patience",
    title: "Patience and Perseverance",
    summary: "From persecution in Makkah to personal loss, the Prophet's life exemplified steadfast endurance (sabr) through the most severe trials.",
    essay: "Patience (sabr) permeates every phase of the prophetic biography. For thirteen years in Makkah, the Prophet ﷺ endured mockery, physical abuse, social boycott, and the anguish of watching his companions suffer. He lost his children, his beloved wife Khadijah, and his protective uncle Abu Talib in rapid succession. At Ta'if, he was stoned until his sandals filled with blood — yet when offered divine retribution, he prayed for the guidance of those who attacked him. This patience was not passive resignation but active perseverance grounded in trust in God's plan. The Quran repeatedly commands: 'Be patient, for indeed, the promise of Allah is truth' (30:60). The Prophet's patience was strategic and purposeful, always seeking the best outcome for his community while maintaining moral integrity.",
    relatedEvents: ["persecution", "year-of-sorrow", "social-boycott"],
    citations: [
      { source: "Quran", reference: "Surah al-Rum (30:60)" },
      { source: "Muslim", reference: "Sahih Muslim, Kitab al-Birr" },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    summary: "The Prophet ﷺ modeled a form of leadership based on consultation, humility, service, and leading by example rather than coercion.",
    essay: "The Prophet's leadership was characterized by shura (consultation), humility, and service. Before major decisions — at Badr, Uhud, and the Trench — he consulted his companions and adopted their views even when they differed from his initial inclination. He participated in manual labor alongside his community, mended his own clothes, and served his family. He said: 'The leader of a people is their servant.' He delegated authority, mentored successors, and created institutional structures like the Madinah constitution. His leadership was not top-down but participatory, creating a culture where every member of the community felt valued and responsible.",
    relatedEvents: ["constitution-madinah", "battle-badr", "battle-trench", "hijrah"],
    citations: [
      { source: "Quran", reference: "Surah Aal Imran (3:159)" },
      { source: "Al-Bayhaqi", reference: "Shu'ab al-Iman" },
    ],
  },
  {
    id: "community",
    title: "Community Building",
    summary: "From the early house gatherings to the establishment of Madinah, the Prophet ﷺ built a community based on brotherhood, mutual support, and shared responsibility.",
    essay: "Community (ummah) building was central to the prophetic mission. In Makkah, the early Muslims formed tight bonds through shared faith and mutual support under persecution. Upon arriving in Madinah, the Prophet ﷺ paired each Muhajir (emigrant) with an Ansari (helper) in a system of brotherhood (mu'akhah) that transcended tribal and economic boundaries — the Ansar shared their homes, businesses, and even offered to divorce a wife so their Muhajir brother could marry. This radical solidarity built a community that could weather external threats and internal challenges. The weekly Friday prayer, the institution of zakat (charitable giving), and the emphasis on neighborly rights all served to strengthen communal bonds.",
    relatedEvents: ["early-muslims", "hijrah", "constitution-madinah"],
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Brotherhood" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
    ],
  },
  {
    id: "conflict-ethics",
    title: "Ethics of Conflict",
    summary: "The Prophet ﷺ established detailed ethical guidelines for warfare, including the protection of non-combatants, prisoners, and the environment.",
    essay: "Islam's approach to conflict, as modeled by the Prophet ﷺ, was governed by strict ethical principles. War was a last resort, preceded by invitation to peace and negotiation. When conflict was unavoidable, the Prophet ﷺ issued clear rules: do not kill women, children, the elderly, or monks; do not destroy crops or cut down trees; do not mutilate the dead; treat prisoners with dignity. At Badr, prisoners were fed before their captors and offered freedom through teaching. The Quran states: 'Fight in the way of Allah those who fight you, but do not transgress. Indeed, Allah does not like transgressors' (2:190). These principles, articulated fourteen centuries ago, anticipated many modern laws of armed conflict.",
    relatedEvents: ["battle-badr", "battle-uhud", "battle-trench", "conquest-makkah"],
    citations: [
      { source: "Quran", reference: "Surah al-Baqarah (2:190)" },
      { source: "Abu Dawud", reference: "Sunan Abu Dawud, Book of Jihad" },
    ],
  },
  {
    id: "diplomacy",
    title: "Treaties and Diplomacy",
    summary: "The Prophet ﷺ engaged in diplomacy with neighboring powers and tribes, demonstrating strategic patience and commitment to peaceful resolution.",
    essay: "Diplomacy was a constant feature of the prophetic mission. The Constitution of Madinah was a diplomatic achievement that created a multi-faith civic order. The Treaty of Hudaybiyyah showed the Prophet's willingness to accept seemingly unfavorable terms for long-term strategic benefit. He sent letters to rulers of Byzantium, Persia, Egypt, and Abyssinia, inviting them to Islam through respectful diplomatic correspondence. He formed alliances with various tribes and honored his commitments meticulously. When treaties were broken — as at Hudaybiyyah — he responded proportionally and still offered amnesty. His diplomatic legacy demonstrates that principled negotiation, honoring commitments, and patience in statecraft can achieve more lasting results than force.",
    relatedEvents: ["constitution-madinah", "treaty-hudaybiyyah", "migration-abyssinia"],
    citations: [
      { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Conditions" },
      { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 3" },
    ],
  },
  {
    id: "social-reform",
    title: "Social Reform",
    summary: "The Prophet ﷺ enacted sweeping social reforms addressing the rights of women, orphans, the poor, and enslaved persons.",
    essay: "The social reforms initiated by the Prophet ﷺ transformed Arabian society. Women were granted inheritance rights, the right to own property, consent in marriage, and the right to seek divorce — rights that in many cases preceded similar developments in other civilizations by centuries. Orphans were given special protection and rights. The freeing of enslaved persons was made one of the highest acts of virtue, and the Prophet ﷺ actively worked to dismantle the institution of slavery. The poor were supported through the systematic institution of zakat. Tribal blood feuds were abolished, and the principle of individual (not collective) responsibility for crimes was established. Usury (riba) was prohibited, protecting the economically vulnerable. The Farewell Sermon codified many of these reforms as enduring principles.",
    relatedEvents: ["farewell-pilgrimage", "conquest-makkah", "constitution-madinah"],
    citations: [
      { source: "Quran", reference: "Surah al-Nisa (4:1-12)" },
      { source: "Muslim", reference: "Sahih Muslim, Kitab al-Hajj" },
    ],
  },
];
