export type ConfidenceLevel = "well-attested" | "reported-with-variation" | "disputed";

export interface Citation {
  source: string;
  reference: string;
}

export interface MicroEvent {
  title: string;
  detail: string;
}

export interface RashidunEvent {
  id: string;
  caliphId: string;
  title: string;
  dateRange: string;
  alternateChronologies?: string[];
  primaryLocation: string;
  secondaryLocations?: string[];
  keyIndividuals: string[];
  theme: "leadership" | "military" | "economic" | "social" | "dispute" | "diplomacy";
  politicalContext: string;
  socialContext: string;
  narrative: string;
  timelineBreakdown: string[];
  immediateOutcome: string;
  shortTermImpact: string;
  longTermImpact: string;
  narrationVariants: string;
  whatIsAgreed: string;
  whereSourcesDiffer: string;
  confidenceLevel: ConfidenceLevel;
  microEvents: MicroEvent[];
  furtherReading: string[];
  citations: Citation[];
}

export interface CaliphChapter {
  id: string;
  title: string;
  overview: string;
  whyItMatters: string;
  events: RashidunEvent[];
}

export interface CaliphProfile {
  id: string;
  name: string;
  kunya: string;
  titles: string[];
  lifespanRanges: string;
  overview: string;
  keyRoles: string[];
  majorAchievements: string[];
  majorControversies: string[];
  uncertaintyNotes: string;
  chapters: CaliphChapter[];
  citations: Citation[];
}

export interface GovernanceRegion {
  id: string;
  name: string;
  city: string;
  uncertaintyNotes: string;
  notes: string;
}

export const rashidunMethodology = {
  sourceSelection: [
    "Priority is given to early Arabic chronicles (e.g., al-Tabari, al-Baladhuri), hadith corpora used by historians, and major biographical compilations.",
    "Secondary works are used to contextualize chronology, administration, and historiography, especially where early reports conflict.",
  ],
  chronologyDisputes: [
    "Dates are shown as ranges when lunar/solar conversion or source sequencing differs.",
    "For contested events, 'What is agreed' and 'Where sources differ' are displayed side by side.",
  ],
  neutralRepresentation: [
    "Competing narrations are summarized without polemical language.",
    "Labels indicate confidence: Well attested, Reported with variation, or Disputed.",
  ],
};

const abuBakrEvents: RashidunEvent[] = [
  {
    id: "saqifah-transition",
    caliphId: "abu-bakr",
    title: "Saqifah and Immediate Leadership Transition",
    dateRange: "632 CE / 11 AH",
    alternateChronologies: ["Late Rabi I 11 AH", "Same day as the Prophet's passing per some reports"],
    primaryLocation: "Madinah",
    secondaryLocations: ["Saqifah of Banu Sa'idah", "Masjid al-Nabawi"],
    keyIndividuals: ["Abu Bakr al-Siddiq", "Umar ibn al-Khattab", "Ansar leaders", "Abu Ubaydah ibn al-Jarrah"],
    theme: "leadership",
    politicalContext: "The community faced immediate institutional uncertainty after the Prophet's death; tribal loyalties and Medinan-Makkan power balances were all active variables.",
    socialContext: "Grief was intense, and reports describe emotional fragmentation, especially among recent converts and tribes at a distance from Madinah.",
    narrative: "Debate occurred over leadership at Saqifah. Abu Bakr argued for continuity under Qurashi leadership while acknowledging the Ansar's sacrifice. Bay'ah was first given by a smaller group and then publicly in the mosque.",
    timelineBreakdown: ["Emergency gathering at Saqifah", "Arguments over leadership formula", "Initial pledge", "General pledge in mosque"],
    immediateOutcome: "A functioning leadership center was established quickly.",
    shortTermImpact: "The decision reduced immediate risk of political fragmentation inside Madinah.",
    longTermImpact: "It set precedents for consultation, rapid crisis response, and legitimacy debates in Islamic political thought.",
    narrationVariants: "Narratives differ on sequence details, speech wording, and which participants arrived first.",
    whatIsAgreed: "A leadership discussion occurred in Saqifah and Abu Bakr became first caliph through pledge.",
    whereSourcesDiffer: "Exact order of speeches, degree of consensus at first meeting, and timing relative to burial preparations.",
    confidenceLevel: "reported-with-variation",
    microEvents: [
      { title: "Umar's immediate pledge", detail: "Frequently cited as pivotal in stabilizing momentum for a public settlement." },
      { title: "Public address", detail: "Abu Bakr's speech on obedience to God and accountability became foundational in later governance discourse." },
    ],
    furtherReading: ["Fred Donner, Muhammad and the Believers", "Wilferd Madelung, The Succession to Muhammad"],
    citations: [
      { source: "al-Tabari", reference: "Tarikh, events of 11 AH" },
      { source: "Ibn Kathir", reference: "al-Bidayah wa'l-Nihayah, vol. 5" },
    ],
  },
  {
    id: "ridda-campaigns",
    caliphId: "abu-bakr",
    title: "Ridda Wars and Reassertion of Medinan Authority",
    dateRange: "632-633 CE / 11-12 AH",
    primaryLocation: "Arabian Peninsula",
    secondaryLocations: ["Yamamah", "Najd", "Bahrain", "Yemen"],
    keyIndividuals: ["Khalid ibn al-Walid", "Musaylimah", "Abu Bakr"],
    theme: "military",
    politicalContext: "After the Prophet's death, several tribes withheld zakat or supported rival claimants; leadership in Madinah framed this as a challenge to covenantal unity.",
    socialContext: "Newly Islamized tribal networks were unevenly integrated and often prioritized local autonomy.",
    narrative: "Abu Bakr dispatched multiple columns, combining military action with negotiated reintegration. Campaigns culminated in Yamamah, where losses among Qur'an reciters influenced compilation efforts.",
    timelineBreakdown: ["Dispatch of commanders", "Campaign phases by region", "Battle of Yamamah", "Tribal reintegration"],
    immediateOutcome: "Central authority was re-established across much of Arabia.",
    shortTermImpact: "Tax and administrative channels resumed; military cadres were consolidated.",
    longTermImpact: "The campaigns became a turning point for state durability and for preserving textual memory of the Qur'an.",
    narrationVariants: "Disagreement exists over whether each case was apostasy, rebellion, fiscal refusal, or mixed motives.",
    whatIsAgreed: "Major campaigns occurred and Yamamah was decisive.",
    whereSourcesDiffer: "Causal framing for each tribe and exact casualty figures.",
    confidenceLevel: "reported-with-variation",
    microEvents: [
      { title: "Zakat policy stance", detail: "Abu Bakr's insistence on continuity in zakat obligations is strongly preserved in major chronicles." },
    ],
    furtherReading: ["Hugh Kennedy, The Great Arab Conquests"],
    citations: [
      { source: "al-Baladhuri", reference: "Futuh al-Buldan" },
      { source: "al-Tabari", reference: "Tarikh, 11-12 AH" },
    ],
  },
];

const umarEvents: RashidunEvent[] = [
  {
    id: "diwan-reforms",
    caliphId: "umar",
    title: "Administrative Reforms and Establishment of the Diwan",
    dateRange: "c. 638-641 CE / 17-20 AH",
    primaryLocation: "Madinah",
    secondaryLocations: ["Kufa", "Basra", "Fustat"],
    keyIndividuals: ["Umar ibn al-Khattab", "Companion-administrators"],
    theme: "economic",
    politicalContext: "Rapid territorial expansion required structured stipends, garrison systems, and fiscal records.",
    socialContext: "Diverse populations entered Muslim governance, requiring predictable welfare and tax administration.",
    narrative: "Reports describe Umar organizing stipends by precedence, formalizing registers, and developing oversight practices for governors and judges.",
    timelineBreakdown: ["Creation of stipend registry", "Provincial oversight directives", "Judicial appointments"],
    immediateOutcome: "Administrative capacity increased significantly.",
    shortTermImpact: "Revenue and military payroll management became more coherent.",
    longTermImpact: "Diwan logic informed later Umayyad and Abbasid bureaucracies.",
    narrationVariants: "Historians debate exact dating and whether reforms emerged in stages or through single decrees.",
    whatIsAgreed: "Umar presided over key state-building reforms.",
    whereSourcesDiffer: "Precise order and technical details of each office.",
    confidenceLevel: "well-attested",
    microEvents: [{ title: "Governor accountability", detail: "Letters and inspections are frequently cited as part of Umar's governance culture." }],
    furtherReading: ["Patricia Crone, God's Rule"],
    citations: [
      { source: "al-Tabari", reference: "Tarikh, Umar period" },
      { source: "Ibn Sa'd", reference: "Tabaqat, Umar biography" },
    ],
  },
  {
    id: "jerusalem-entry",
    caliphId: "umar",
    title: "Reception of Jerusalem and Terms of Security",
    dateRange: "637-638 CE / 16-17 AH",
    primaryLocation: "Jerusalem (Iliya')",
    keyIndividuals: ["Umar ibn al-Khattab", "Local Christian leadership", "Muslim commanders"],
    theme: "diplomacy",
    politicalContext: "Byzantine authority in the Levant was weakening after major battlefield losses.",
    socialContext: "Urban populations required guarantees around worship, property, and taxation.",
    narrative: "Early sources preserve agreements attributed to Umar's administration concerning security and civic order after the city submitted.",
    timelineBreakdown: ["Negotiations", "Transfer of authority", "Administrative settlement"],
    immediateOutcome: "City transitioned without total devastation.",
    shortTermImpact: "Helped stabilize broader Levantine governance.",
    longTermImpact: "Became central in later memory of Muslim-Christian political relations.",
    narrationVariants: "Texts of the so-called covenant vary across manuscripts and later recensions.",
    whatIsAgreed: "Jerusalem entered Muslim rule during Umar's caliphate through negotiated arrangements.",
    whereSourcesDiffer: "Exact wording and legal scope of guarantees.",
    confidenceLevel: "reported-with-variation",
    microEvents: [],
    furtherReading: ["Chase Robinson, Islamic Civilization in Thirty Lives"],
    citations: [{ source: "al-Ya'qubi", reference: "Tarikh" }],
  },
];

const uthmanEvents: RashidunEvent[] = [
  {
    id: "mushaf-standardization",
    caliphId: "uthman",
    title: "Canonical Codex Project and Regional Copies",
    dateRange: "c. 650-656 CE / 30-35 AH",
    primaryLocation: "Madinah",
    secondaryLocations: ["Kufa", "Basra", "Damascus"],
    keyIndividuals: ["Uthman ibn Affan", "Zayd ibn Thabit", "Qurayshi scribes"],
    theme: "social",
    politicalContext: "Expansion brought dialect variation in recitation practices across garrison towns.",
    socialContext: "Communities sought unity in liturgical recitation and education.",
    narrative: "Uthman commissioned a committee to prepare standardized exemplars based on earlier collections, distributing copies to major centers.",
    timelineBreakdown: ["Reports of recitation disputes", "Formation of committee", "Dispatch of codices"],
    immediateOutcome: "A shared textual reference expanded across provinces.",
    shortTermImpact: "Reduced public recitational conflict in military and teaching contexts.",
    longTermImpact: "Uthmanic codex tradition became foundational to later Qur'anic manuscript transmission.",
    narrationVariants: "Some details differ regarding number of codices and destruction of variant personal materials.",
    whatIsAgreed: "A state-backed standardization effort occurred under Uthman.",
    whereSourcesDiffer: "Operational specifics and scope of accompanying directives.",
    confidenceLevel: "well-attested",
    microEvents: [],
    furtherReading: ["Nicolai Sinai, The Qur'an: A Historical-Critical Introduction"],
    citations: [{ source: "Sahih al-Bukhari", reference: "Kitab Fada'il al-Qur'an" }],
  },
  {
    id: "late-unrest",
    caliphId: "uthman",
    title: "Late Caliphate Unrest and Siege of Madinah",
    dateRange: "654-656 CE / 34-35 AH",
    primaryLocation: "Madinah",
    secondaryLocations: ["Egypt", "Kufa", "Basra"],
    keyIndividuals: ["Uthman ibn Affan", "Provincial critics", "Companions in mediation roles"],
    theme: "dispute",
    politicalContext: "Questions around provincial appointments, revenue justice, and center-province trust intensified.",
    socialContext: "New social groups in garrison cities demanded representation and accountability.",
    narrative: "Delegations raised grievances; mediation attempts occurred; siege conditions escalated and ended with Uthman's killing.",
    timelineBreakdown: ["Petitions and delegations", "Mediation efforts", "House siege", "Assassination"],
    immediateOutcome: "Leadership vacuum and severe communal trauma.",
    shortTermImpact: "Accelerated polarization in the Muslim polity.",
    longTermImpact: "Set conditions for the First Fitna and long-term historiographical divergence.",
    narrationVariants: "Source corpora differ strongly on culpability chains and chronology of final days.",
    whatIsAgreed: "Serious unrest ended in Uthman's assassination in Madinah.",
    whereSourcesDiffer: "Names of principal instigators, local coordination, and who could have prevented escalation.",
    confidenceLevel: "reported-with-variation",
    microEvents: [],
    furtherReading: ["Julius Wellhausen, The Arab Kingdom and its Fall"],
    citations: [{ source: "al-Tabari", reference: "Tarikh, 35 AH" }],
  },
];

const aliEvents: RashidunEvent[] = [
  {
    id: "camel-battle",
    caliphId: "ali",
    title: "Basra Campaign and Battle of the Camel",
    dateRange: "656 CE / 36 AH",
    primaryLocation: "Basra",
    keyIndividuals: ["Ali ibn Abi Talib", "A'ishah", "Talhah", "al-Zubayr"],
    theme: "dispute",
    politicalContext: "Post-assassination legitimacy and demands for justice over Uthman's death converged in competing political coalitions.",
    socialContext: "Public rhetoric in Iraq and Hijaz reflected urgency but also fear of civil war.",
    narrative: "Negotiation attempts preceded fighting; conflict then broke out with major casualties. Ali's administration re-established authority in Basra afterward.",
    timelineBreakdown: ["Mobilization", "Negotiation phase", "Battle", "Post-conflict settlement"],
    immediateOutcome: "Ali held strategic control in Iraq.",
    shortTermImpact: "The conflict deepened intra-community wounds.",
    longTermImpact: "It became a defining memory in Sunni and Shi'i historiographies, interpreted in differing moral frameworks.",
    narrationVariants: "Accounts diverge on who triggered first combat and whether a negotiated settlement was near.",
    whatIsAgreed: "A major battle occurred near Basra during Ali's caliphate.",
    whereSourcesDiffer: "Trigger sequence and command responsibility for escalation.",
    confidenceLevel: "reported-with-variation",
    microEvents: [],
    furtherReading: ["Madelung, The Succession to Muhammad"],
    citations: [{ source: "al-Tabari", reference: "Tarikh, 36 AH" }],
  },
  {
    id: "siffin-arbitration",
    caliphId: "ali",
    title: "Siffin, Arbitration Process, and Kharijite Break",
    dateRange: "657-658 CE / 37-38 AH",
    primaryLocation: "Siffin (Euphrates region)",
    secondaryLocations: ["Kufa", "Nahrawan"],
    keyIndividuals: ["Ali ibn Abi Talib", "Mu'awiyah ibn Abi Sufyan", "Arbitration delegates"],
    theme: "leadership",
    politicalContext: "Competing claims around justice for Uthman's killing and political legitimacy reached military stalemate.",
    socialContext: "Soldier fatigue and moral dispute over arbitration terms generated splinter movements.",
    narrative: "After prolonged confrontation, arbitration was accepted by part of Ali's camp, rejected by others, and followed by internal fragmentation and the Nahrawan conflict.",
    timelineBreakdown: ["Siffin engagement", "Arbitration agreement", "Kharijite separation", "Nahrawan campaign"],
    immediateOutcome: "No decisive settlement emerged.",
    shortTermImpact: "Authority remained divided between Iraq and Syria.",
    longTermImpact: "These events shaped classical debates on rebellion, arbitration, and just leadership.",
    narrationVariants: "Sources diverge on terms of arbitration and degree of manipulation by political actors.",
    whatIsAgreed: "Siffin and a subsequent arbitration attempt occurred, followed by Kharijite opposition.",
    whereSourcesDiffer: "Exact legal language, delegation dynamics, and interpretation of outcomes.",
    confidenceLevel: "reported-with-variation",
    microEvents: [],
    furtherReading: ["Hugh Kennedy, The Prophet and the Age of the Caliphates"],
    citations: [{ source: "al-Tabari", reference: "Tarikh, 37-38 AH" }],
  },
];

export const caliphs: CaliphProfile[] = [
  {
    id: "abu-bakr",
    name: "Abu Bakr al-Siddiq",
    kunya: "Abu Bakr",
    titles: ["al-Siddiq", "Khalifat Rasul Allah"],
    lifespanRanges: "c. 573-634 CE",
    overview: "Close Companion, early convert, and first caliph; central in immediate post-Prophetic consolidation.",
    keyRoles: ["Earliest adult male convert in many Sunni reports", "Companion during Hijrah", "First caliph (632-634 CE)"],
    majorAchievements: ["Leadership transition stabilization", "Ridda campaigns", "Early Qur'an collection impetus"],
    majorControversies: ["Interpretation of Saqifah process", "Use of force in Ridda campaigns"],
    uncertaintyNotes: "Birth year and some conversion-sequence reports vary.",
    chapters: [
      { id: "abu-a", title: "Before Birth and Early Context", overview: "Qurashi mercantile setting and lineage context.", whyItMatters: "Frames his social capital before Islam.", events: [] },
      { id: "abu-b", title: "Life During the Prophet's Mission", overview: "From early conversion to major diplomatic and military roles.", whyItMatters: "Shows continuity into caliphal leadership.", events: [] },
      { id: "abu-c", title: "Transition After the Prophet's Passing", overview: "Immediate communal decision-making in crisis.", whyItMatters: "Sets foundations for institutional survival.", events: [abuBakrEvents[0]] },
      { id: "abu-d", title: "Caliphate Year by Year", overview: "11-13 AH developments across governance and campaigns.", whyItMatters: "Defines first post-Prophetic statecraft template.", events: abuBakrEvents },
      { id: "abu-e", title: "Final Years and Legacy", overview: "Illness, succession nomination process, and legacy transmission.", whyItMatters: "Demonstrates precedent-setting succession mechanisms.", events: [] },
    ],
    citations: [{ source: "Ibn Sa'd", reference: "Tabaqat al-Kubra" }],
  },
  {
    id: "umar",
    name: "Umar ibn al-Khattab",
    kunya: "Abu Hafs",
    titles: ["al-Faruq", "Amir al-Mu'minin"],
    lifespanRanges: "c. 584-644 CE",
    overview: "Second caliph known for administrative rigor, expansion oversight, and legal governance.",
    keyRoles: ["Advisor in Prophetic period", "Second caliph (634-644 CE)", "Institutional reformer"],
    majorAchievements: ["Diwan and provincial governance", "Judicial structuring", "Urban garrison foundations"],
    majorControversies: ["Interpretation of expansion policy motives"],
    uncertaintyNotes: "Some policy dating differs across source traditions.",
    chapters: [
      { id: "um-a", title: "Before Birth and Early Context", overview: "Adi clan background and Makkan social order.", whyItMatters: "Situates later reputation for firmness.", events: [] },
      { id: "um-b", title: "Life During the Prophet's Mission", overview: "Conversion, participation in key campaigns, and advisory role.", whyItMatters: "Explains his authority in post-Prophetic period.", events: [] },
      { id: "um-c", title: "Transition and Accession", overview: "Nomination by Abu Bakr and communal confirmation.", whyItMatters: "Highlights evolving succession practice.", events: [] },
      { id: "um-d", title: "Caliphate Year by Year", overview: "13-23 AH expansion and institution-building.", whyItMatters: "Core phase in early Islamic governance architecture.", events: umarEvents },
      { id: "um-e", title: "Final Years and Aftermath", overview: "Assassination, shura formation, and transition to next caliph.", whyItMatters: "Shapes later constitutional memory.", events: [] },
    ],
    citations: [{ source: "al-Tabari", reference: "Tarikh, Umar era" }],
  },
  {
    id: "uthman",
    name: "Uthman ibn Affan",
    kunya: "Abu Abd Allah",
    titles: ["Dhu al-Nurayn"],
    lifespanRanges: "c. 576-656 CE",
    overview: "Third caliph associated with codex standardization and late-period political unrest.",
    keyRoles: ["Early convert", "Two migrations", "Third caliph (644-656 CE)"],
    majorAchievements: ["Qur'an codex project", "Naval and provincial developments"],
    majorControversies: ["Governorship appointments", "Unrest ending in assassination"],
    uncertaintyNotes: "Chains of causation in final unrest are deeply contested in sources.",
    chapters: [
      { id: "uth-a", title: "Before Birth and Early Context", overview: "Umayyad merchant context in Makkah.", whyItMatters: "Explains economic and social standing.", events: [] },
      { id: "uth-b", title: "Life During the Prophet's Mission", overview: "Early Islam, migration, and family ties to Prophet through marriage.", whyItMatters: "Essential to understanding title Dhu al-Nurayn.", events: [] },
      { id: "uth-c", title: "Transition and Selection", overview: "Shura process after Umar's death.", whyItMatters: "Illustrates consultative selection model.", events: [] },
      { id: "uth-d", title: "Caliphate Year by Year", overview: "23-35 AH governance, codification, and growing dissent.", whyItMatters: "Turning point toward First Fitna.", events: uthmanEvents },
      { id: "uth-e", title: "Final Years and Legacy", overview: "Siege, death, and immediate political repercussions.", whyItMatters: "Catalyst for civil conflict and historical divergence.", events: [] },
    ],
    citations: [{ source: "al-Baladhuri", reference: "Ansab al-Ashraf" }],
  },
  {
    id: "ali",
    name: "Ali ibn Abi Talib",
    kunya: "Abu al-Hasan",
    titles: ["Amir al-Mu'minin", "Abu Turab (in reports)"],
    lifespanRanges: "c. 600-661 CE",
    overview: "Fourth caliph, early household member of the Prophet, central figure in legal and theological memory.",
    keyRoles: ["Early believer", "Military and judicial participant", "Fourth caliph (656-661 CE)"],
    majorAchievements: ["Governance from Kufa", "Legal and ethical legacy in sermons/letters"],
    majorControversies: ["Civil war sequence", "Arbitration outcomes"],
    uncertaintyNotes: "Chronology and interpretation of First Fitna battles vary considerably by corpus.",
    chapters: [
      { id: "ali-a", title: "Before Birth and Early Context", overview: "Hashimi kinship and upbringing in Prophet's household context.", whyItMatters: "Explains intimate proximity to revelation era.", events: [] },
      { id: "ali-b", title: "Life During the Prophet's Mission", overview: "Role in Hijrah, campaigns, and treaty settings.", whyItMatters: "Foundational for later authority perceptions.", events: [] },
      { id: "ali-c", title: "Transition to Caliphate", overview: "Accession amid crisis after Uthman's death.", whyItMatters: "Marks entry into First Fitna phase.", events: [] },
      { id: "ali-d", title: "Caliphate Year by Year", overview: "36-40 AH conflicts, arbitration, and governance challenges.", whyItMatters: "Shapes long-term political theology across traditions.", events: aliEvents },
      { id: "ali-e", title: "Final Years and Legacy", overview: "Assassination in Kufa and immediate succession dynamics.", whyItMatters: "End of Rashidun period in common Sunni chronology.", events: [] },
    ],
    citations: [{ source: "Nahj al-Balaghah", reference: "selected letters (attribution discussed in scholarship)" }],
  },
];

export const masterTimeline = [...abuBakrEvents, ...umarEvents, ...uthmanEvents, ...aliEvents];

export const governanceRegions: GovernanceRegion[] = [
  { id: "hijaz", name: "Hijaz", city: "Madinah", notes: "Caliphal center in early period.", uncertaintyNotes: "Administrative boundaries fluid in earliest years." },
  { id: "iraq", name: "Iraq", city: "Kufa/Basra", notes: "Major garrison and political theaters.", uncertaintyNotes: "Route details vary across campaign reports." },
  { id: "sham", name: "Bilad al-Sham", city: "Damascus/Jerusalem", notes: "Critical frontier and administrative region.", uncertaintyNotes: "Provincial subdivision dates differ by source." },
  { id: "egypt", name: "Egypt", city: "Fustat", notes: "Revenue-rich province and strategic corridor.", uncertaintyNotes: "Early taxation figures reported with variation." },
];

export const glossaryExpansion = {
  people: ["Abu Ubaydah ibn al-Jarrah", "Mu'awiyah ibn Abi Sufyan", "Amr ibn al-'As", "A'ishah bint Abi Bakr"],
  places: ["Saqifah", "Yamamah", "Siffin", "Nahrawan", "Fustat"],
  themes: ["Shura", "Bay'ah", "Diwan", "Fitna", "Qur'anic transmission"],
};
