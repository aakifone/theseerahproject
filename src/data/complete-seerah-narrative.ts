export interface NarrativeSection {
  id: string;
  title: string;
  content: string; // Markdown-like paragraphs joined by \n\n
  dateRange?: string;
  location?: string;
  keyFigures?: string[];
  politicalContext?: string;
  socialContext?: string;
  narrationVariants?: string;
  confidenceLevel?: "well-attested" | "reported-with-variation" | "disputed";
  citations?: { source: string; reference: string }[];
  whyItMatters?: string;
  microEvents?: { title: string; detail: string }[];
}

export interface Chapter {
  id: string;
  title: string;
  overview: string;
  readingTimeMinutes: number;
  sections: NarrativeSection[];
}

export interface Volume {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  chapters: Chapter[];
}

function estimateReadingTime(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

const volumeI: Volume = {
  id: "vol-1",
  number: "I",
  title: "Arabia Before His Birth",
  subtitle: "The world into which the Prophet ﷺ was born",
  chapters: [
    {
      id: "ch-1-1",
      title: "Geography and Tribal Arabia",
      overview: "The Arabian Peninsula in the sixth century was a vast land of deserts, oases, and trade routes, home to fiercely independent tribes whose lives were governed by unwritten codes of honour, kinship, and survival.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-1-1-1",
          title: "The Land and Its People",
          content: `The Arabian Peninsula stretches over three million square kilometres, bordered by the Red Sea to the west, the Persian Gulf to the east, and the Indian Ocean to the south. Its interior is dominated by vast deserts — the Rub' al-Khali (Empty Quarter) in the south and the Nafud in the north — interspersed with oases that sustained settled communities.\n\nThe Hejaz, the western coastal strip, held the Peninsula's most significant settlements: Makkah, Yathrib (later Madinah), and Ta'if. These cities owed their importance to trade and pilgrimage. Makkah, situated in a barren valley, had no agriculture but thrived as a commercial and religious hub centred on the Ka'bah.\n\nArabian society was overwhelmingly tribal. The tribe (qabilah) was the fundamental unit of identity, protection, and law. Each tribe was led by a chief (sayyid) chosen for qualities of generosity, wisdom, and martial ability. Tribal honour ('ird) was paramount, and its violation could trigger blood feuds lasting generations.\n\nThe Bedouin nomads moved with their herds across the desert, while settled communities in the Hejaz and Yemen engaged in agriculture, craftsmanship, and trade. Despite the harsh environment, Arabia was not isolated — its merchants traversed routes connecting the Roman (Byzantine) and Persian (Sasanian) empires, carrying spices, incense, textiles, and precious goods.`,
          location: "Arabian Peninsula",
          politicalContext: "The Peninsula existed in a power vacuum between the Byzantine and Sasanian empires, both of which exerted influence through client Arab kingdoms — the Ghassanids (Byzantine allies) in the north-west and the Lakhmids (Sasanian allies) in the north-east.",
          socialContext: "Society was stratified by lineage, with noble tribes commanding greater prestige. Slavery was widespread. Women's status varied by tribe but was generally subordinate, with practices like female infanticide occurring in some clans.",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1, Introduction" },
            { source: "Fred Donner", reference: "Muhammad and the Believers, Ch. 1" },
          ],
        },
        {
          id: "s-1-1-2",
          title: "The Quraysh and Their Authority",
          content: `Among the tribes of the Hejaz, the Quraysh held a unique position. Tradition traces their ascendancy to Qusayy ibn Kilab (c. 5th century CE), who united the tribe, gained custodianship of the Ka'bah, and established Makkah as a major centre.\n\nThe Quraysh were guardians of the Ka'bah, the ancient sanctuary that attracted pilgrims from across Arabia. This custodianship gave them immense prestige and economic power. They organised the two great trade caravans — the winter journey to Yemen and the summer journey to Syria — described in Surah Quraysh of the Quran.\n\nMakkan governance was oligarchic. Decisions were made by a council (mala') of clan chiefs who gathered at the Dar al-Nadwah (Assembly House). Key civic functions — provision of water to pilgrims (siqayah), feeding of pilgrims (rifadah), custody of the Ka'bah keys (hijabah), military command (qiyadah), and the standard of war (liwa') — were distributed among the leading clans.\n\nThe Banu Hashim, the clan into which Muhammad ﷺ would be born, held the duties of providing water and food to pilgrims — a position of honour established by his great-grandfather, Hashim ibn Abd Manaf, who is credited with founding the system of trade agreements (ilaf) that secured safe passage for Makkan caravans.`,
          keyFigures: ["Qusayy ibn Kilab", "Hashim ibn Abd Manaf", "Abd al-Muttalib"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Quran", reference: "Surah Quraysh (106:1-4)" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 5" },
          ],
        },
        {
          id: "s-1-1-3",
          title: "The Religious Landscape",
          content: `Pre-Islamic Arabia was religiously diverse. The dominant practice was polytheism — the Ka'bah alone housed 360 idols representing various deities. Chief among these were Hubal (the main idol of the Ka'bah), al-Lat, al-Uzza, and Manat, mentioned in the Quran as false goddesses.\n\nHowever, Arabia was not exclusively polytheistic. Christianity had established communities in Najran (southern Arabia), among the Ghassanids, and scattered through the Hejaz. Judaism had deep roots in Yathrib (Madinah), where three major Jewish tribes — Banu Qaynuqa, Banu Nadir, and Banu Qurayza — played significant economic and cultural roles.\n\nThe Hanifs were individuals who rejected idolatry and sought the monotheism of Ibrahim (Abraham), though they did not follow Judaism or Christianity. Figures such as Waraqah ibn Nawfal, Zayd ibn Amr ibn Nufayl, and Uthman ibn al-Huwayrith are recorded among them.\n\nZoroastrianism influenced Arabia's eastern fringes through Persian cultural exchange. The religious pluralism of the Peninsula is significant: the message of Islam would emerge not in a religious vacuum but in a complex, multi-faith environment.`,
          confidenceLevel: "well-attested",
          citations: [
            { source: "Quran", reference: "Surah al-Najm (53:19-23)" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Kitab al-Manaqib" },
          ],
          whyItMatters: "Understanding the religious landscape of pre-Islamic Arabia is essential for appreciating the radical nature of the monotheistic message and the specific social reforms Islam introduced.",
        },
      ],
    },
    {
      id: "ch-1-2",
      title: "The Year of the Elephant",
      overview: "The dramatic failed siege of Makkah by the Abyssinian governor Abraha is one of the most significant events in pre-Islamic Arabian history, preserved in collective memory and in the Quran itself.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-1-2-1",
          title: "Abraha's Campaign Against the Ka'bah",
          content: `Abraha al-Ashram, the Abyssinian (Ethiopian) viceroy of Yemen, built a grand cathedral in Sana'a called al-Qullays, intending to divert the Arabian pilgrimage from Makkah. When this effort failed to attract pilgrims, he resolved to destroy the Ka'bah itself.\n\nAbraha assembled a massive army that included war elephants — animals never before seen in the Hejaz — and marched northward. As the army approached Makkah, they seized camels belonging to the Makkans, including two hundred belonging to Abd al-Muttalib, the Prophet's grandfather and then the chief of the Banu Hashim.\n\nAbd al-Muttalib went to negotiate with Abraha. When Abraha asked why he only sought the return of his camels rather than pleading for the Ka'bah, Abd al-Muttalib famously replied: "I am the lord of my camels. As for the House, it has a Lord who will protect it."\n\nWhen Abraha's army advanced on the Ka'bah, they were struck by a devastating calamity. The Quran describes it in Surah al-Fil (The Elephant): God sent flocks of birds (ababil) that pelted the army with stones of baked clay, destroying them utterly. Modern scholars have speculated about the nature of this event — some suggesting an epidemic, others maintaining the miraculous account — but the result is undisputed: Abraha's army was annihilated and the Ka'bah was preserved.\n\nThis event occurred in approximately 570 CE and became so momentous that the Arabs began dating events by it — the "Year of the Elephant" (Am al-Fil). It was in this very year, or close to it, that Muhammad ﷺ was born.`,
          dateRange: "c. 570 CE",
          location: "Makkah and surrounding areas",
          keyFigures: ["Abraha al-Ashram", "Abd al-Muttalib"],
          politicalContext: "Abyssinia (Axum) had conquered Yemen from the Himyarite kingdom and sought to extend its influence over the Hejaz and its lucrative pilgrimage trade.",
          confidenceLevel: "well-attested",
          narrationVariants: "While the Quranic account is universally accepted by Muslim scholars, historical interpretations differ on the exact nature of the 'stones of baked clay.' Some modern scholars suggest smallpox or another epidemic, while classical scholars maintain the literal miraculous interpretation.",
          citations: [
            { source: "Quran", reference: "Surah al-Fil (105:1-5)" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 5" },
          ],
          whyItMatters: "The Year of the Elephant established in the collective consciousness of Arabia that the Ka'bah was divinely protected, setting the stage for the significance of the sanctuary in the prophetic mission that would follow.",
          microEvents: [
            { title: "Seizure of Makkan livestock", detail: "Abraha's forces confiscated the herds of Makkan tribes as they approached, including Abd al-Muttalib's camels." },
            { title: "Abd al-Muttalib's prayer at the Ka'bah", detail: "After retrieving his camels, Abd al-Muttalib returned to the Ka'bah, held the door-ring, and prayed for divine protection." },
          ],
        },
      ],
    },
  ],
};

const volumeII: Volume = {
  id: "vol-2",
  number: "II",
  title: "Birth and Early Childhood",
  subtitle: "The formative years that shaped the future Prophet",
  chapters: [
    {
      id: "ch-2-1",
      title: "The Birth of Muhammad ﷺ",
      overview: "Born into the noblest lineage of the Quraysh yet orphaned before he could know his father, the child Muhammad ﷺ entered a world of both privilege and vulnerability.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-2-1-1",
          title: "The Context of His Birth",
          content: `Abdullah ibn Abd al-Muttalib, the Prophet's father, was the youngest and most beloved son of Abd al-Muttalib, chief of the Banu Hashim. Abdullah married Aminah bint Wahb of the Banu Zuhrah clan. Their marriage united two noble lineages of the Quraysh.\n\nAbdullah died while on a trade journey to Syria (or upon his return, according to some reports), before his son was born. Aminah was left a young widow, and the child was born into the world already fatherless.\n\nMuhammad ﷺ was born in Makkah in the Year of the Elephant, most commonly dated to 12 Rabi' al-Awwal (approximately April 570 CE, though dates range from 569 to 571 CE). He was born in the house of Abu Talib (or, according to other reports, in a house in the Shi'b of the Banu Hashim).\n\nThe birth was accompanied, according to tradition, by extraordinary signs — a light that illuminated the palaces of Syria, and other portents mentioned in various narrations. While these reports vary in historical strength, they reflect the community's retrospective understanding of the significance of the event.\n\nThe child was named Muhammad ("the praised one") by his grandfather Abd al-Muttalib — an unusual name in Arabia at the time, suggesting that Abd al-Muttalib had high aspirations for the boy. He was also called Ahmad, another form of the same root.`,
          dateRange: "c. 570 CE (12 Rabi' al-Awwal)",
          location: "Makkah",
          keyFigures: ["Abdullah ibn Abd al-Muttalib", "Aminah bint Wahb", "Abd al-Muttalib"],
          confidenceLevel: "reported-with-variation",
          narrationVariants: "The exact date of birth is among the most debated details. The 12th of Rabi' al-Awwal is the majority position but the 8th and 9th are also reported. The Gregorian equivalent varies between 569 and 571 CE. Whether Abdullah died before or after the birth is also debated, though the majority hold he died before.",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 6" },
            { source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 1" },
          ],
          whyItMatters: "The Prophet's birth into nobility yet immediate orphanhood established a life pattern of combining honour with humility, and divine care manifesting through human adversity.",
        },
        {
          id: "s-2-1-2",
          title: "Foster Care with Halimah al-Sa'diyyah",
          content: `It was the custom of noble Makkan families to send their infants to Bedouin foster families in the desert, where they would grow strong in the clean air and learn the pure Arabic of the desert tribes. Wet nurses from various tribes would come to Makkah seeking nurslings from wealthy families, as the arrangement brought the foster family honour and financial support.\n\nWhen the Bedouin women of the Banu Sa'd came to Makkah, none wished to take the orphan Muhammad — an orphan could not be expected to yield the generous gifts a father would provide. Halimah bint Abi Dhu'ayb al-Sa'diyyah, having found no other nursling, reluctantly agreed to take him rather than return empty-handed.\n\nAccording to Halimah's own account, preserved in the Seerah literature, the child brought immediate blessings. Her thin she-camel, which had barely given milk, began to produce abundantly. Her family's fortunes improved markedly during the time he was with them.\n\nMuhammad ﷺ spent approximately four to five years among the Banu Sa'd, developing the physical resilience, linguistic purity, and desert awareness that characterised Bedouin upbringing. It was during this period that the famous incident of the "opening of the chest" (shaqq al-sadr) is reported to have occurred — an event in which two figures (identified as angels in the narrations) opened the child's chest, removed a clot, washed his heart, and restored him. This incident so alarmed Halimah that she returned the child to his mother in Makkah.`,
          dateRange: "c. 570–575 CE",
          location: "Desert of Banu Sa'd, near Ta'if",
          keyFigures: ["Halimah al-Sa'diyyah"],
          confidenceLevel: "well-attested",
          narrationVariants: "The 'opening of the chest' incident is reported in Sahih Muslim and other collections. Some scholars interpret it literally as a miraculous event; others view it as a spiritual purification described in physical metaphors. The number of times this event occurred during the Prophet's life is also debated — some narrations mention it happening again before the Isra and Mi'raj.",
          citations: [
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman, Hadith 162" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 1" },
          ],
          microEvents: [
            { title: "Halimah's initial reluctance", detail: "She initially bypassed the orphan, but returned when she found no other nursling available." },
            { title: "The barakat (blessings) reported", detail: "Halimah's livestock and provisions reportedly increased significantly during Muhammad's stay." },
            { title: "The shaqq al-sadr incident", detail: "Two figures opened the child's chest, extracted a clot, washed his heart with Zamzam water, and restored him." },
          ],
        },
        {
          id: "s-2-1-3",
          title: "Early Losses and Guardianship",
          content: `At approximately six years of age, Muhammad ﷺ lost his mother Aminah. She died at a place called al-Abwa', between Makkah and Madinah, while returning from a visit to her late husband's relatives in Yathrib. The young boy was now a full orphan.\n\nHis grandfather Abd al-Muttalib, then chief of the Banu Hashim and one of the most respected figures in Makkah, took the child into his direct care. Sources describe a special bond between the elderly patriarch and the boy. Abd al-Muttalib would seat the child on his own carpet near the Ka'bah — a privilege no one else enjoyed.\n\nHowever, this too was brief. When Muhammad ﷺ was about eight years old, Abd al-Muttalib died. On his deathbed, he entrusted the boy to his son Abu Talib, Muhammad's uncle, who became his guardian and protector for the next four decades.\n\nAbu Talib, though not wealthy, treated Muhammad ﷺ as his own son. He took him on at least one trade journey to Syria, during which the famous encounter with the Christian monk Bahira is reported. Bahira reportedly recognised signs of prophethood in the boy and warned Abu Talib to protect him.\n\nThese successive losses — father, mother, grandfather — shaped a childhood marked by vulnerability and dependence on the kindness of extended family. The Quran itself references this: "Did He not find you an orphan and give you refuge?" (93:6). This experience of orphanhood would later inform the Prophet's deep concern for orphans, widows, and the vulnerable members of society.`,
          dateRange: "c. 576–578 CE",
          location: "Makkah, al-Abwa'",
          keyFigures: ["Aminah bint Wahb", "Abd al-Muttalib", "Abu Talib"],
          confidenceLevel: "well-attested",
          narrationVariants: "The age at which his mother died varies between five and six in different sources. The encounter with the monk Bahira is well-known but some scholars question certain embellishments in the account while accepting its core.",
          citations: [
            { source: "Quran", reference: "Surah al-Duha (93:6-8)" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Tirmidhi", reference: "Jami' al-Tirmidhi, Hadith 3620" },
          ],
          whyItMatters: "The repeated experience of loss and reliance on communal care profoundly shaped the Prophet's character and his later emphasis on caring for orphans, maintaining family bonds, and building supportive communities.",
        },
      ],
    },
  ],
};

const volumeIII: Volume = {
  id: "vol-3",
  number: "III",
  title: "Youth and Early Adulthood",
  subtitle: "From shepherd boy to al-Amin — the trusted one",
  chapters: [
    {
      id: "ch-3-1",
      title: "The Young Man of Makkah",
      overview: "Before prophethood, Muhammad ﷺ built a reputation that would become the bedrock of his mission — a man so honest and reliable that even his future opponents could not deny his integrity.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-3-1-1",
          title: "Trade Journeys and the Title of Al-Amin",
          content: `As a young man, Muhammad ﷺ worked as a shepherd — a profession shared by all the prophets, according to hadith. This humble occupation taught patience, vigilance, and gentle care for those in one's charge.\n\nHe subsequently entered the mercantile profession, accompanying trade caravans and earning a reputation for extraordinary honesty in commercial dealings. In an environment where sharp trading practices were common and admired, Muhammad ﷺ stood out for his absolute refusal to misrepresent goods, overcharge, or engage in deception.\n\nHis reputation earned him the title "al-Amin" (the Trustworthy) and "al-Sadiq" (the Truthful) — titles bestowed not by his supporters but by the broader Makkan society, including many who would later oppose his prophetic mission. People entrusted him with their valuables and sought him as an arbiter of disputes.\n\nEven at the moment of his emigration from Makkah years later, fleeing persecution, he took care to return all the items entrusted to him by the very people who sought to kill him — a striking testament to the depth of his integrity.`,
          keyFigures: ["Abu Talib"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 2262" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
          ],
          whyItMatters: "The pre-prophetic reputation for trustworthiness was essential — when Muhammad ﷺ later claimed divine revelation, his known character lent credibility that no amount of eloquence alone could have provided.",
        },
        {
          id: "s-3-1-2",
          title: "Hilf al-Fudul — The Pact of Virtue",
          content: `One of the most revealing events of Muhammad's youth was his participation in the Hilf al-Fudul (Pact of the Virtuous), an alliance formed by several Quraysh clans to defend the rights of the oppressed and ensure justice for strangers and the weak in Makkah.\n\nThe pact was formed after a merchant from Yemen was cheated by a powerful Makkan. When the merchant appealed publicly for justice, several clan leaders were moved to act. They gathered at the house of Abdullah ibn Jud'an and swore an oath to collectively intervene against injustice, regardless of the tribal affiliations of the parties involved.\n\nMuhammad ﷺ, then a young man, was present and participated in this pact. Decades later, as Prophet, he recalled it with great warmth: "I witnessed in the house of Abdullah ibn Jud'an a pact that, if I were invited to it now in Islam, I would respond. They pledged to return rights to the oppressed and that no oppressor would overpower the weak."\n\nThis event reveals that even before revelation, Muhammad ﷺ was drawn to principles of justice that transcended tribal loyalty — precisely the values that would define his prophetic mission.`,
          dateRange: "c. 590 CE",
          location: "Makkah, house of Abdullah ibn Jud'an",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Bayhaqi", reference: "Sunan al-Kubra, Hadith 12605" },
          ],
          whyItMatters: "The Hilf al-Fudul demonstrates that the pursuit of justice was not something imposed on Muhammad ﷺ by revelation alone — it was a deep personal commitment that predated and was then validated by his prophetic mission.",
        },
        {
          id: "s-3-1-3",
          title: "Marriage to Khadijah bint Khuwaylid",
          content: `Khadijah bint Khuwaylid was one of the most remarkable women of Makkah — a widow of noble lineage who had inherited and expanded a successful merchant enterprise. Known for her intelligence, dignity, and business acumen, she was one of the wealthiest and most respected individuals in the city.\n\nHaving heard of Muhammad's reputation for honesty, Khadijah employed him to lead a trade caravan to Syria. She sent her servant Maysarah to observe him. Maysarah returned with glowing reports of both the commercial success of the journey and Muhammad's exceptional character.\n\nImpressed, Khadijah proposed marriage through an intermediary — her friend Nafisah bint Munya. Muhammad ﷺ, then about twenty-five years old, accepted. Khadijah was approximately forty, though some scholars suggest she was younger.\n\nTheir marriage was a model of mutual love, respect, and partnership. Khadijah bore Muhammad ﷺ several children, including Zainab, Ruqayyah, Umm Kulthum, and Fatimah. Two sons, al-Qasim and Abdullah (also called al-Tahir or al-Tayyib), died in infancy.\n\nFor twenty-five years, until her death in 619 CE, Khadijah was his only wife. She was his confidante, his first believer, and his greatest support. The Prophet ﷺ spoke of her with deep love throughout his life, saying: "She believed in me when people rejected me. She supported me with her wealth when people deprived me. And Allah granted me children through her."`,
          dateRange: "c. 595 CE",
          location: "Makkah",
          keyFigures: ["Khadijah bint Khuwaylid", "Maysarah"],
          confidenceLevel: "well-attested",
          narrationVariants: "Khadijah's age at marriage is debated. The most common report gives her age as forty, but some scholars, including Ibn Kathir, suggest she was twenty-eight. The number and names of their children also have minor variations across sources.",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3818" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Ahmad", reference: "Musnad Ahmad, Hadith 24864" },
          ],
          whyItMatters: "The marriage to Khadijah demonstrates a model of spousal partnership, mutual respect, and emotional depth that became a standard in Islamic ethics of family life.",
        },
      ],
    },
  ],
};

const volumeIV: Volume = {
  id: "vol-4",
  number: "IV",
  title: "Beginning of Revelation",
  subtitle: "The call that changed the world",
  chapters: [
    {
      id: "ch-4-1",
      title: "The First Revelation",
      overview: "At the age of forty, in the solitude of a mountain cave, Muhammad ﷺ received the first words of the Quran — an event that would reshape human civilisation.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-4-1-1",
          title: "Retreat to the Cave of Hira",
          content: `In the years leading up to revelation, Muhammad ﷺ developed a practice of spiritual retreat. He would withdraw to the Cave of Hira, a small grotto near the summit of Jabal al-Nour (the Mountain of Light), approximately three kilometres north-east of Makkah.\n\nThere, he would spend days and sometimes weeks in contemplation (tahannuth), reflecting on the creation around him, disturbed by the moral decay he witnessed in Makkan society — the oppression of the weak, the worship of idols made by human hands, the burial of infant daughters, the exploitation of orphans.\n\nKhadijah would send provisions to him and sometimes visit. This period of withdrawal was not unusual in the context of Arabian hanif tradition — those who rejected idolatry and sought a purer spiritual path.\n\nThe Cave of Hira is a narrow space, barely large enough for a person to lie down, opening toward the Ka'bah. It was in this humble, confined place that the most consequential communication in Islamic belief would occur.`,
          dateRange: "Years before 610 CE",
          location: "Cave of Hira, Jabal al-Nour, near Makkah",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman" },
          ],
        },
        {
          id: "s-4-1-2",
          title: "The Night of the First Revelation",
          content: `During one of his retreats in the month of Ramadan, in approximately 610 CE, when Muhammad ﷺ was forty years old, the angel Jibril (Gabriel) appeared to him.\n\n"Read!" (Iqra!) commanded the angel.\n\n"I cannot read," Muhammad ﷺ replied — he was unlettered (ummi).\n\nThe angel embraced him tightly, pressing him until he could barely endure it, then released him and repeated: "Read!"\n\nAgain he replied: "I cannot read."\n\nThe angel pressed him a third time, then recited the first five verses of Surah al-Alaq:\n\n"Read in the name of your Lord who created — Created man from a clinging substance. Read, and your Lord is the Most Generous — Who taught by the pen — Taught man that which he knew not." (96:1-5)\n\nMuhammad ﷺ, trembling with awe and fear, descended the mountain and went directly to Khadijah. "Cover me! Cover me!" he said. She wrapped him in a cloak. When he had calmed, he told her what had happened and said: "I fear for myself."\n\nKhadijah's response was immediate and certain: "Never! By Allah, Allah will never disgrace you. You maintain family ties, bear the burdens of the weak, earn for the destitute, honour guests, and assist those afflicted by calamity."\n\nShe then took him to her cousin Waraqah ibn Nawfal, an elderly Christian scholar who had studied the scriptures. When Waraqah heard Muhammad's account, he said: "This is the same one who keeps the secrets [the angel Jibril] whom Allah had sent to Moses. I wish I were young and could live up to the time when your people would drive you out." Muhammad ﷺ asked: "Will they drive me out?" Waraqah replied: "Anyone who came with something similar to what you have brought was treated with hostility. If I should remain alive until your day of call, I will support you strongly."`,
          dateRange: "c. Ramadan 610 CE (13 years before Hijrah)",
          location: "Cave of Hira, then Khadijah's home, Makkah",
          keyFigures: ["Khadijah bint Khuwaylid", "Waraqah ibn Nawfal"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman" },
            { source: "Quran", reference: "Surah al-Alaq (96:1-5)" },
          ],
          whyItMatters: "The first revelation is the foundational moment of Islam. Khadijah's response — affirming Muhammad's character as evidence of divine favour — established that prophetic authority rests on moral integrity, not mere claims of power.",
          microEvents: [
            { title: "The three embraces", detail: "Jibril pressed Muhammad ﷺ three times before the words came — scholars interpret this as preparation for receiving the weight of divine revelation." },
            { title: "Waraqah's warning of exile", detail: "Waraqah's prediction that Muhammad ﷺ would be driven out proved prophetic, foreshadowing the Hijrah years later." },
          ],
        },
        {
          id: "s-4-1-3",
          title: "The Pause in Revelation and Its Resumption",
          content: `After the initial revelation, there was a period during which no further revelation came. This pause (known as fatrat al-wahy) caused the Prophet ﷺ intense distress. He longed for the return of the divine communication and reportedly went to the mountain peaks in his anguish.\n\nThe length of this pause is debated — reports range from a few days to several months, with some suggesting up to three years (though most scholars consider the longer estimates unlikely).\n\nWhen revelation resumed, it came with the opening verses of Surah al-Muddaththir: "O you who covers himself [with a garment], arise and warn. And your Lord glorify. And your clothing purify. And uncleanliness avoid." (74:1-5)\n\nThis second revelation shifted the nature of the prophetic mission from a personal spiritual experience to a public mandate: arise and warn. Muhammad ﷺ was no longer simply a recipient of divine words — he was now commanded to deliver them.`,
          confidenceLevel: "reported-with-variation",
          narrationVariants: "The length of the pause in revelation (fatrat al-wahy) is significantly debated. Most scholars place it at a few weeks to a few months. The report of a three-year gap comes from weaker chains of narration and is not accepted by the majority.",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 4" },
            { source: "Quran", reference: "Surah al-Muddaththir (74:1-5)" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman" },
          ],
        },
      ],
    },
    {
      id: "ch-4-2",
      title: "The Secret Call and Public Declaration",
      overview: "For three years, Islam spread through private invitation. Then came the command to proclaim it publicly — and with it, the beginning of organized opposition.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-4-2-1",
          title: "The First Believers",
          content: `The earliest phase of the prophetic mission was conducted in strict secrecy. Muhammad ﷺ invited people individually, choosing those he trusted most and those he judged most receptive.\n\nThe first to believe was Khadijah — without hesitation. Among men, the sources differ on the precise order, but the earliest converts included:\n\n— Abu Bakr al-Siddiq: A wealthy and respected merchant, Muhammad's closest friend, whose acceptance brought several other prominent Makkans into the fold.\n— Ali ibn Abi Talib: The Prophet's young cousin, then about ten years old, living in his household.\n— Zayd ibn Harithah: A freed slave whom Muhammad ﷺ had adopted as a son.\n\nThrough Abu Bakr's influence, a number of other important figures embraced Islam early: Uthman ibn Affan, al-Zubayr ibn al-Awwam, Abdur-Rahman ibn Awf, Sa'd ibn Abi Waqqas, and Talhah ibn Ubaydillah.\n\nThe early community met secretly, often in the house of al-Arqam ibn Abi al-Arqam near the hill of al-Safa. There, the Prophet ﷺ would teach them the Quran, lead them in prayer, and nurture their understanding of the new faith. This intimate community numbered approximately forty before Islam became public.`,
          dateRange: "610–613 CE",
          location: "Makkah, House of al-Arqam",
          keyFigures: ["Khadijah", "Abu Bakr", "Ali ibn Abi Talib", "Zayd ibn Harithah"],
          confidenceLevel: "well-attested",
          narrationVariants: "The exact sequence of the first male converts — whether Abu Bakr, Ali, or Zayd — is one of the most debated minor points in Seerah studies. Each has strong supporting evidence.",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 6" },
          ],
        },
        {
          id: "s-4-2-2",
          title: "The Public Declaration",
          content: `After approximately three years of private preaching, the command came to proclaim the message publicly. The Quran instructed: "And warn your closest kindred" (26:214).\n\nMuhammad ﷺ climbed to the top of Mount Safa and called out to the clans of Quraysh by name, one by one. When they gathered, he asked: "If I told you that an army was advancing on you from behind this mountain, would you believe me?" They replied: "Yes, we have never known you to lie." He then declared: "I am a warner to you before a severe punishment."\n\nHis uncle Abu Lahab immediately responded with hostility: "May you perish! Is this why you gathered us?" This exchange is referenced in Surah al-Masad (111).\n\nThe public declaration transformed Islam from a private spiritual movement into a public challenge to the entire social, religious, and economic order of Makkah. The reaction was swift: ridicule, social pressure, then escalating persecution.`,
          dateRange: "c. 613 CE",
          location: "Mount Safa, Makkah",
          keyFigures: ["Abu Lahab"],
          politicalContext: "The public declaration directly challenged the Quraysh's authority as custodians of the Ka'bah and the polytheistic system that underpinned their political and economic power.",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 4770" },
            { source: "Quran", reference: "Surah al-Shu'ara (26:214), Surah al-Masad (111:1-5)" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Iman" },
          ],
          whyItMatters: "The public declaration at Safa was the point of no return — it committed the Prophet ﷺ and his followers to an open confrontation with the most powerful interests in Makkah.",
        },
      ],
    },
  ],
};

const volumeV: Volume = {
  id: "vol-5",
  number: "V",
  title: "The Makkah Period in Full Detail",
  subtitle: "Years of persecution, endurance, and unwavering faith",
  chapters: [
    {
      id: "ch-5-1",
      title: "Persecution, Boycott, and Sorrow",
      overview: "The Makkan period tested the Muslim community to its limits — through torture, economic siege, and devastating personal losses — yet forged the resilience that would sustain the movement.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-5-1-1",
          title: "The Escalation of Persecution",
          content: `As Islam attracted more followers, the Quraysh leadership moved from ridicule to active persecution. The pattern was deliberate: they targeted the most vulnerable first — those without powerful tribal protectors.\n\nBilal ibn Rabah, an Abyssinian slave owned by Umayyah ibn Khalaf, was subjected to terrible torture. He was taken to the desert at midday, laid on the burning sand with heavy stones placed on his chest, and told to renounce his faith. His only response was "Ahad, Ahad" — "One, One" — affirming God's oneness. Abu Bakr eventually purchased and freed him.\n\nThe family of Yasir suffered the most devastating persecution. Yasir ibn Amir, his wife Sumayyah, and their son Ammar were tortured publicly. When the Prophet ﷺ passed by them during their ordeal, he could only say: "Patience, O family of Yasir! Your appointment is Paradise." Sumayyah was killed by Abu Jahl with a spear, becoming the first martyr (shahidah) of Islam.\n\nKhabbab ibn al-Aratt, a blacksmith, was tortured by having hot coals placed on his back. Others were beaten, starved, and denied water. Those with tribal protection, including the Prophet ﷺ himself (protected by Abu Talib's standing), were subjected to social humiliation, verbal abuse, and physical harassment but were shielded from the worst violence.\n\nThe economic dimension of persecution was equally severe. Muslim merchants were boycotted. Converts from noble families faced disinheritance. The social cost of accepting Islam in Makkah was enormous.`,
          dateRange: "613–616 CE",
          location: "Makkah",
          keyFigures: ["Bilal ibn Rabah", "Sumayyah bint Khayyat", "Yasir ibn Amir", "Ammar ibn Yasir", "Khabbab ibn al-Aratt"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Virtues of Companions" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1" },
            { source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 3" },
          ],
          whyItMatters: "The persecution of early Muslims established that the faith was not a matter of convenience — those who accepted it did so despite, not because of, worldly incentives. Their endurance became a moral standard for all subsequent generations.",
        },
        {
          id: "s-5-1-2",
          title: "The Social Boycott",
          content: `When individual persecution failed to extinguish Islam, the Quraysh escalated to collective punishment. In approximately 616 CE, the leading clans agreed on a comprehensive boycott against the Banu Hashim and Banu al-Muttalib — not just the Muslims among them, but the entire clans, Muslim and non-Muslim alike, for sheltering Muhammad ﷺ.\n\nA written document was drawn up and hung inside the Ka'bah. Its terms were sweeping: no one would marry anyone from the two clans, no one would buy from or sell to them, and no one would give them shelter or food. The boycott was enforced with social pressure and the threat of reprisal.\n\nThe Banu Hashim and Banu al-Muttalib withdrew into the narrow valley known as Shi'b Abi Talib (the Glen of Abu Talib). There they endured approximately three years of deprivation. Food was scarce — the sounds of children crying from hunger could be heard outside the valley. Prices were inflated whenever sympathetic merchants attempted to smuggle provisions.\n\nSome Quraysh members defied the boycott out of kinship or conscience. Hisham ibn Amr would send food-laden camels towards the glen at night. Eventually, a group of five Quraysh leaders — moved by the suffering — publicly tore up the document, which according to tradition had been consumed by termites except for the opening phrase "In Your name, O Allah."\n\nThe boycott was lifted, but by then the damage was deep — both physically and psychologically.`,
          dateRange: "c. 616–619 CE",
          location: "Shi'b Abi Talib, Makkah",
          keyFigures: ["Abu Talib", "Hisham ibn Amr"],
          politicalContext: "The boycott represented a shift from targeting individuals to collective punishment of entire clans — an extreme measure that eventually generated sympathy for the victims even among non-Muslims.",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 1-2" },
            { source: "Ibn Sa'd", reference: "Al-Tabaqat al-Kubra, Vol. 1" },
          ],
        },
        {
          id: "s-5-1-3",
          title: "The Year of Sorrow (Aam al-Huzn)",
          content: `Shortly after the boycott ended, Muhammad ﷺ suffered two devastating losses in quick succession.\n\nFirst, Abu Talib — his uncle, guardian, and protector for over forty years — fell ill and died. Despite never embracing Islam himself, Abu Talib had used his considerable tribal authority to shield his nephew from the worst of Quraysh hostility. Without his protection, Muhammad ﷺ was politically exposed.\n\nWithin weeks, or at most a few months, Khadijah also died. She had been his wife for twenty-five years, his first believer, his emotional anchor, and his strongest supporter. The Prophet ﷺ grieved deeply for both.\n\nThe loss of Abu Talib's protection had immediate political consequences. Abu Lahab, who succeeded Abu Talib as chief of the Banu Hashim, initially offered some protection but soon withdrew it under Quraysh pressure. Muhammad ﷺ found himself without tribal protection — a dangerous position in Arabian society.\n\nDesperately seeking support, the Prophet ﷺ travelled to Ta'if, a prosperous city about 100 kilometres east of Makkah, and appealed to the leaders of the Thaqif tribe. They rejected him. Worse, they set the children and vagrants of the city upon him, who chased him out of the city, pelting him with stones until his sandals were soaked with blood.\n\nAccording to tradition, the angel Jibril then appeared with the angel of the mountains and offered to crush the people of Ta'if between the mountains. The Prophet ﷺ refused, saying: "Rather, I hope that Allah will bring from their descendants people who will worship Allah alone, not associating anything with Him."\n\nThis response — choosing mercy and hope over retribution at his lowest point — is one of the most celebrated moments of his character.`,
          dateRange: "619 CE (10th year of Prophethood)",
          location: "Makkah, Ta'if",
          keyFigures: ["Abu Talib", "Khadijah bint Khuwaylid"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3231" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Jihad" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
          ],
          whyItMatters: "The Year of Sorrow represents the lowest point of the prophetic mission, yet it is followed by the Isra and Mi'raj, the pledges of Aqabah, and the Hijrah — demonstrating that breakthrough often follows the deepest trial.",
          microEvents: [
            { title: "Abu Lahab's initial and withdrawn protection", detail: "Abu Lahab briefly offered Muhammad ﷺ tribal protection but revoked it after a few days under pressure from Quraysh leaders." },
            { title: "Addas at Ta'if", detail: "A Christian servant named Addas brought the Prophet ﷺ grapes after his rejection at Ta'if, recognising him as a prophet when he mentioned the Prophet Yunus (Jonah)." },
          ],
        },
      ],
    },
  ],
};

const volumeVI: Volume = {
  id: "vol-6",
  number: "VI",
  title: "Hijrah and the Foundation of Madinah",
  subtitle: "From persecution to the birth of a new society",
  chapters: [
    {
      id: "ch-6-1",
      title: "The Road to Madinah",
      overview: "The Hijrah was not a flight but a meticulously planned migration that transformed a persecuted faith community into the foundation of a new civilisation.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-6-1-1",
          title: "The Pledges of Aqabah",
          content: `The breakthrough came not from Makkah but from Yathrib (Madinah), a city 450 kilometres to the north. Yathrib was divided between two major Arab tribes — the Aws and the Khazraj — who had been locked in generations of conflict, most recently the devastating Battle of Bu'ath. Both tribes were weary of war and open to new forms of authority.\n\nDuring the pilgrimage season of 621 CE, a small group of men from Yathrib met Muhammad ﷺ and embraced Islam. The following year, they returned — twelve in number — and took a formal pledge (the First Pledge of Aqabah), committing to basic moral principles: no idolatry, no theft, no fornication, no infanticide, no slander, and obedience to the Prophet in what was right.\n\nThe Prophet ﷺ sent Mus'ab ibn Umayr back to Yathrib with them to teach the Quran and spread Islam. Mus'ab was extraordinarily successful. Within a year, Islam had spread to nearly every household in the city.\n\nIn 622 CE, seventy-three men and two women from Yathrib came to the pilgrimage and took the Second Pledge of Aqabah — this time a military pledge. They committed to protect Muhammad ﷺ as they would their own families, to shelter him, and to fight in his defence if necessary. This was a political revolution: a community in another city was offering sovereignty to a man persecuted in his own.\n\nThe stage was set for the Hijrah.`,
          dateRange: "621–622 CE",
          location: "Aqabah, near Mina, Makkah",
          keyFigures: ["Mus'ab ibn Umayr", "As'ad ibn Zurarah"],
          politicalContext: "Yathrib's tribal conflicts made its people receptive to an outside authority who could unite them. The Muslim Prophet offered not just a new religion but a new basis for social organisation beyond tribal affiliation.",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 6" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Manaqib al-Ansar" },
          ],
        },
        {
          id: "s-6-1-2",
          title: "The Hijrah — The Migration",
          content: `With the pledge of protection from Yathrib secured, the Prophet ﷺ instructed his followers to begin migrating quietly. Over several weeks, Muslims left Makkah in small groups, heading for Yathrib.\n\nWhen the Quraysh realised what was happening, they convened an emergency council at the Dar al-Nadwah. Various proposals were discussed — exile, imprisonment, assassination. They settled on the most extreme: a simultaneous attack by one young man from each clan, so that the blame (and any blood feud) would be distributed across all the clans and the Banu Hashim would be unable to seek vengeance against them all.\n\nOn the appointed night, the assassins surrounded the Prophet's house. But Muhammad ﷺ had been warned through revelation. He asked Ali ibn Abi Talib to sleep in his bed, covered by his green cloak, as a decoy. The Prophet ﷺ then slipped out past the assassins undetected — tradition records that he recited the opening verses of Surah Ya Sin and cast dust in their direction, and they could not see him.\n\nMuhammad ﷺ and Abu Bakr met at the latter's house and set out south toward the Cave of Thawr — the opposite direction from Yathrib. They hid in the cave for three days while Quraysh search parties combed the area. According to famous tradition, a spider spun a web across the cave entrance and a dove nested there, convincing the searchers that no one had entered recently.\n\nAfter three days, guided by a hired Bedouin tracker named Abdullah ibn Urayqit (who was not a Muslim), they took an unconventional coastal route through the desert. The journey to Yathrib took approximately eight to thirteen days.\n\nThe Prophet ﷺ arrived first at Quba, on the outskirts of Yathrib, where he stayed for several days and built the first mosque of Islam — Masjid Quba. He then entered Yathrib proper, where the people thronged the streets to welcome him, young girls singing songs of welcome.\n\nHis she-camel wandered freely until it knelt at a spot belonging to two orphan boys. There, the Prophet ﷺ purchased the land and built his mosque and residence — what would become al-Masjid al-Nabawi (the Prophet's Mosque).\n\nYathrib was renamed Madinah al-Munawwarah — the Illuminated City — or simply Madinah.`,
          dateRange: "September 622 CE (1 AH)",
          location: "Makkah → Cave of Thawr → coastal route → Quba → Madinah",
          keyFigures: ["Abu Bakr", "Ali ibn Abi Talib", "Abdullah ibn Urayqit", "Asma bint Abi Bakr"],
          politicalContext: "The Hijrah was both a religious and political act — it transferred the centre of Islam from a hostile environment to one where Muhammad ﷺ was invited to govern.",
          socialContext: "The people of Yathrib (the Ansar) opened their homes, shared their wealth, and divided their properties with the incoming refugees (the Muhajirun) in an unprecedented act of communal solidarity.",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 3905" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
            { source: "Martin Lings", reference: "Muhammad: His Life Based on the Earliest Sources, Ch. 35-38" },
          ],
          whyItMatters: "The Hijrah marks the beginning of the Islamic calendar and represents the transition from a persecuted faith community to a functioning society. It is the single most transformative event in Islamic political history.",
          microEvents: [
            { title: "Asma bint Abi Bakr's role", detail: "Abu Bakr's daughter Asma secretly brought food to the cave, earning the title 'She of the Two Belts' for tearing her belt to tie the provisions." },
            { title: "Suraqah ibn Malik's pursuit", detail: "A Makkan bounty hunter, Suraqah, tracked them but his horse stumbled repeatedly. He eventually sought their forgiveness and was promised the bracelets of the Persian emperor — a promise fulfilled decades later." },
            { title: "Umm Ma'bad's encounter", detail: "The Prophet ﷺ stopped at the tent of Umm Ma'bad, who later gave one of the most detailed physical descriptions of him preserved in the Seerah." },
          ],
        },
        {
          id: "s-6-1-3",
          title: "Building a New Society",
          content: `Upon arriving in Madinah, the Prophet ﷺ immediately undertook three foundational actions that established the new community:\n\n**The Mosque**: The construction of al-Masjid al-Nabawi was a communal effort in which the Prophet ﷺ worked alongside his companions, carrying bricks and mortar. The mosque served not merely as a place of prayer but as a parliament, a court of justice, a school, a shelter for the poor, and a social centre. It was the heart of the new society.\n\n**The Brotherhood (Mu'akhah)**: The Prophet ﷺ established a formal brotherhood between each Muhajir (Makkan emigrant) and an Ansari (Madinan host). This was not merely symbolic — the Ansar shared their homes, wealth, and even offered to divorce a wife so that their Muhajir brother could marry. The Muhajirun, however, typically refused such extremes, preferring to be shown the marketplace so they could earn their own living. This system created bonds that transcended tribal and ethnic lines.\n\n**The Constitution of Madinah (al-Sahifah)**: The Prophet ﷺ drafted a written charter that established the rights and responsibilities of all residents of Madinah. This document — one of the earliest known written constitutions — defined the Muslim community (ummah) while recognising the rights of the Jewish tribes and other non-Muslim residents. Key provisions included:\n\n— Religious freedom for all communities\n— Mutual defence obligations against external attack\n— The Prophet ﷺ as the final arbiter of disputes\n— Prohibition of sheltering criminals\n— Collective responsibility for justice\n\nThis charter transformed Madinah from a city of feuding tribes into a unified civic body with shared obligations — a revolutionary concept in Arabian society.`,
          dateRange: "622–623 CE (1–2 AH)",
          location: "Madinah",
          keyFigures: ["The Muhajirun", "The Ansar"],
          confidenceLevel: "well-attested",
          narrationVariants: "The Constitution of Madinah is preserved in Ibn Hisham's Seerah. Some scholars debate whether it was a single document or compiled from multiple agreements made at different times. Its dating is generally placed in the first year of Hijrah.",
          citations: [
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 7" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Manaqib al-Ansar" },
          ],
          whyItMatters: "The three foundational acts — the mosque, the brotherhood, and the constitution — established a template for Islamic civilisation: a society centred on worship, mutual support, and the rule of law.",
        },
      ],
    },
  ],
};

const volumeVII: Volume = {
  id: "vol-7",
  number: "VII",
  title: "The Madinah Years",
  subtitle: "Building, defending, and expanding a new civilisation — year by year",
  chapters: [
    {
      id: "ch-7-1",
      title: "The Early Madinan Period (2–6 AH)",
      overview: "The years in Madinah saw the nascent community face existential military threats while simultaneously building the institutions of a new society.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-7-1-1",
          title: "The Battle of Badr (2 AH / 624 CE)",
          content: `The first major military confrontation between the Muslims and the Quraysh occurred in the month of Ramadan, 2 AH. The Prophet ﷺ set out with approximately 313 men, lightly armed and on a small number of horses and camels, to intercept a large Makkan trade caravan returning from Syria under the leadership of Abu Sufyan.\n\nThe caravan escaped by changing its route, but a Quraysh army of over 900 — well-armed and determined to crush the Muslims — marched out from Makkah to confront them. The two forces met at the wells of Badr, about 130 kilometres south-west of Madinah.\n\nBefore the battle, the Prophet ﷺ consulted his companions — a practice of shura (consultation) that was politically significant, as it demonstrated that military decisions were collective, not autocratic. The Ansar, who had pledged to protect him within Madinah, affirmed their willingness to fight beyond it. Sa'd ibn Mu'adh declared: "We believe in you and we have given you our pledge. Go where you wish — we are with you."\n\nThe battle began with single combat, as was Arabian custom, then escalated into a full engagement. Despite being outnumbered nearly three to one, the Muslims achieved a decisive victory. Seventy Quraysh were killed, including Abu Jahl (one of Islam's most determined opponents), and seventy were captured. Muslim losses were fourteen.\n\nThe treatment of prisoners was noteworthy: the Prophet ﷺ ordered humane treatment. Some were ransomed. Others who could not pay were freed if they taught ten Madinan children to read and write — a remarkable exchange that prioritised education over vengeance.\n\nBadr was a watershed. It validated the Madinan community politically and militarily, shook Quraysh confidence, and was interpreted by the Quran as divine confirmation of the Muslim cause.`,
          dateRange: "17 Ramadan, 2 AH (March 624 CE)",
          location: "Badr, approximately 130 km south-west of Madinah",
          keyFigures: ["Abu Jahl", "Abu Sufyan", "Sa'd ibn Mu'adh", "Hamza ibn Abd al-Muttalib"],
          politicalContext: "Badr transformed the Muslims from a refugee community into a legitimate political and military force in the region. It also intensified Quraysh determination to destroy the Muslim state.",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Quran", reference: "Surah al-Anfal (8:1-75)" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Military Expeditions" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 2" },
          ],
          whyItMatters: "Badr demonstrated that a small, principled force could prevail against a larger army, and established the precedent of humane treatment of prisoners that became a hallmark of Islamic military ethics.",
        },
        {
          id: "s-7-1-2",
          title: "The Battle of Uhud and Its Aftermath (3 AH / 625 CE)",
          content: `The Quraysh, burning for revenge after Badr, assembled an army of 3,000 under Abu Sufyan and marched on Madinah. The Prophet ﷺ, after consulting his companions, moved out to meet them at the foot of Mount Uhud, north of the city.\n\nHe positioned fifty archers on a strategic hill with explicit orders: "Do not leave this position, even if you see us being carried off by birds." The initial Muslim charge was successful, driving the Quraysh back. But when the majority of archers abandoned their positions to collect war spoils, believing the battle won, the Quraysh cavalry under Khalid ibn al-Walid (not yet a Muslim) exploited the gap and attacked from behind.\n\nThe resulting chaos was devastating. The Prophet ﷺ himself was wounded — struck in the face, with two rings of his helmet driven into his cheek and a tooth broken. A false rumour spread that he had been killed, causing panic among some Muslims. Mus'ab ibn Umayr, the standard-bearer, was killed, and Hamza ibn Abd al-Muttalib, the Prophet's uncle and one of Islam's greatest warriors, was slain and his body mutilated.\n\nDespite the reversal, the battle was not a complete defeat — the Quraysh withdrew without pressing their advantage. But the losses were severe: about seventy Muslims were killed. The Quran addressed the battle extensively in Surah Aal Imran, attributing the setback to disobedience and assuring the believers that trials are means of spiritual growth.\n\nThe Prophet's response to Uhud was characteristic: he did not blame or punish those who had disobeyed. Instead, the Quran directed him to consult them again in future matters — reinforcing, rather than withdrawing, the principle of shura even after a failure of discipline.`,
          dateRange: "7 Shawwal, 3 AH (March 625 CE)",
          location: "Mount Uhud, north of Madinah",
          keyFigures: ["Hamza ibn Abd al-Muttalib", "Khalid ibn al-Walid", "Mus'ab ibn Umayr"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Quran", reference: "Surah Aal Imran (3:121-179)" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Military Expeditions" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 3" },
          ],
          whyItMatters: "Uhud taught that discipline and adherence to leadership are essential, and that setbacks do not negate the validity of a cause — they test and refine it.",
        },
        {
          id: "s-7-1-3",
          title: "The Battle of the Trench and the Treaty of Hudaybiyyah",
          content: `**The Battle of the Trench (5 AH / 627 CE)**\n\nThe largest military threat to Muslim Madinah came in the form of a massive coalition — Quraysh, the Ghatafan confederacy, and other tribes — numbering approximately 10,000 warriors. They marched on Madinah with the intention of annihilating the Muslim community.\n\nSalman al-Farisi, a Persian companion, suggested digging a defensive trench across the northern approaches of Madinah — a tactic unknown in Arabian warfare. The Prophet ﷺ enthusiastically adopted the idea and worked alongside his companions in digging the trench, despite the harsh conditions and food scarcity.\n\nThe coalition army arrived and found themselves unable to cross the trench. After approximately two weeks of siege — marked by cold, wind, internal discord among the coalition, and the failure of a treasonous arrangement with the Banu Qurayza — the alliance collapsed. A violent storm scattered their camps, and they withdrew.\n\nThe Quran describes the event in Surah al-Ahzab, attributing the deliverance to divine intervention: "O you who have believed, remember the favour of Allah upon you when armies came to you and We sent upon them a wind and armies you did not see" (33:9).\n\n**The Treaty of Hudaybiyyah (6 AH / 628 CE)**\n\nIn 6 AH, the Prophet ﷺ set out for Makkah with approximately 1,400 Muslims in pilgrimage garments (ihram), unarmed, intending to perform Umrah. The Quraysh blocked their entry at Hudaybiyyah, on the outskirts of Makkah.\n\nAfter weeks of negotiation, a treaty was signed with terms that appeared unfavourable to the Muslims: they would return that year without performing pilgrimage, return the following year for only three days, and any Muslim who fled to Madinah must be returned, but the reverse did not apply.\n\nMany companions were distressed. Umar ibn al-Khattab questioned the wisdom of the agreement. But the Prophet ﷺ accepted the terms, and the Quran described it as a "clear victory" (fath mubin) — Surah al-Fath.\n\nThe wisdom became apparent rapidly: the peace allowed Islam to spread freely. In the two years following Hudaybiyyah, more people embraced Islam than in all the previous years combined. Among the notable converts of this period was Khalid ibn al-Walid and Amr ibn al-As — both future military commanders of extraordinary ability.`,
          dateRange: "5–6 AH (627–628 CE)",
          location: "Madinah; Hudaybiyyah",
          keyFigures: ["Salman al-Farisi", "Khalid ibn al-Walid"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Quran", reference: "Surah al-Ahzab (33:9-27); Surah al-Fath (48:1-29)" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 2731-2732" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 3" },
          ],
          whyItMatters: "Together, the Trench and Hudaybiyyah demonstrate two complementary principles: that creative defence can neutralise overwhelming force, and that strategic patience in diplomacy can achieve more than military victory.",
        },
      ],
    },
  ],
};

const volumeVIII: Volume = {
  id: "vol-8",
  number: "VIII",
  title: "Conquest and Final Years",
  subtitle: "Victory, mercy, and the completion of the prophetic mission",
  chapters: [
    {
      id: "ch-8-1",
      title: "The Conquest of Makkah and the Final Mission",
      overview: "The triumphant return to Makkah, the Farewell Pilgrimage, and the closing chapter of the prophetic life — marked by mercy, clarity, and completeness.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-8-1-1",
          title: "The Conquest of Makkah (8 AH / 630 CE)",
          content: `The Treaty of Hudaybiyyah was broken when the Banu Bakr, allies of the Quraysh, attacked the Banu Khuza'ah (allies of the Muslims) with the knowledge and material support of some Quraysh leaders. This violation nullified the treaty.\n\nThe Prophet ﷺ assembled 10,000 Muslims — the largest force yet gathered under his command — and marched on Makkah. The element of surprise was maintained. Abu Sufyan, who came out to scout, was brought to the Muslim camp, where he witnessed the scale of the force and converted to Islam.\n\nThe Prophet ﷺ entered Makkah on 20 Ramadan, 8 AH (January 630 CE), with his head bowed in humility upon his mount, reciting Surah al-Fath. He had instructed his forces: "Today is a day of mercy." Resistance was minimal — only a brief skirmish at one entrance where Khalid ibn al-Walid's contingent was opposed.\n\nUpon reaching the Ka'bah, the Prophet ﷺ circumambulated it, then entered and destroyed the 360 idols within, reciting: "Truth has come and falsehood has vanished. Indeed, falsehood is ever bound to vanish" (17:81).\n\nHe then addressed the people of Makkah — many of whom had persecuted, tortured, exiled, and fought wars against the Muslims for over twenty years. He asked: "O people of Quraysh, what do you expect from me today?" They replied: "Goodness. You are a noble brother and the son of a noble brother." He said: "Go, for you are free" (Idhhabu fa-antum al-tulaqa).\n\nThis mass amnesty — forgiving an entire city of former persecutors — stands as one of the most remarkable acts of mercy in recorded history. It won hearts that decades of conflict could not, and Makkah embraced Islam overwhelmingly.`,
          dateRange: "20 Ramadan, 8 AH (January 630 CE)",
          location: "Makkah",
          keyFigures: ["Abu Sufyan", "Khalid ibn al-Walid", "Bilal ibn Rabah"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Military Expeditions" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Jihad" },
            { source: "Quran", reference: "Surah al-Isra (17:81)" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 4" },
          ],
          whyItMatters: "The conquest of Makkah exemplified the Islamic ideal of mercy in victory. The general amnesty demonstrated that justice and forgiveness can coexist, transforming enemies into allies.",
          microEvents: [
            { title: "Bilal's adhan atop the Ka'bah", detail: "Bilal, the formerly enslaved man who had been tortured in Makkah's streets, climbed atop the Ka'bah itself to give the call to prayer — a moment of profound symbolic justice." },
            { title: "Hind bint Utbah's acceptance", detail: "Hind, who had mutilated Hamza's body at Uhud, came to the Prophet ﷺ in disguise. When she revealed herself, he forgave her, and she accepted Islam." },
          ],
        },
        {
          id: "s-8-1-2",
          title: "The Farewell Pilgrimage (10 AH / 632 CE)",
          content: `In Dhul Qi'dah of 10 AH, the Prophet ﷺ announced his intention to perform Hajj. Word spread throughout Arabia, and over 100,000 Muslims gathered for what would become his only complete Hajj and his final major public appearance.\n\nOn the 9th of Dhul Hijjah, standing on the plain of Arafat, the Prophet ﷺ delivered the Farewell Sermon (Khutbat al-Wada') — one of the most significant addresses in human history.\n\nKey declarations included:\n\n"O people! Your blood, your property, and your honour are sacred to one another, as sacred as this day, in this month, in this city."\n\n"All mankind is from Adam, and Adam is from dust. An Arab has no superiority over a non-Arab, nor does a non-Arab have superiority over an Arab; a white person has no superiority over a black person, nor does a black person have superiority over a white person — except by piety and good action."\n\n"O people! Fear Allah regarding women. You have rights over your wives and they have rights over you. Treat them with kindness, for they are your partners and committed helpers."\n\n"I have left among you that which, if you hold fast to it, you will never go astray: the Book of Allah."\n\n"Let those who are present convey to those who are absent, for the one to whom the message is conveyed may understand it better than the one who heard it."\n\nHe concluded by asking: "Have I conveyed the message?" The crowd roared: "Yes!" He said: "O Allah, bear witness."\n\nOn this day, the verse was revealed: "Today I have perfected for you your religion and completed My favour upon you and have approved for you Islam as religion" (5:3).`,
          dateRange: "9 Dhul Hijjah, 10 AH (March 632 CE)",
          location: "Plain of Arafat, near Makkah",
          confidenceLevel: "well-attested",
          citations: [
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Hajj" },
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Hajj" },
            { source: "Quran", reference: "Surah al-Ma'idah (5:3)" },
            { source: "Ahmad", reference: "Musnad Ahmad, Hadith 19774" },
          ],
          whyItMatters: "The Farewell Sermon is regarded as one of history's earliest and most comprehensive declarations of universal human rights, articulating principles of equality, justice, and dignity that remain foundational to Islamic ethics.",
        },
        {
          id: "s-8-1-3",
          title: "The Final Illness and Passing",
          content: `Shortly after returning to Madinah from the Farewell Pilgrimage, the Prophet ﷺ began to experience illness. He developed a severe headache and fever. For approximately two weeks, his condition fluctuated.\n\nDuring this period, he continued to attend prayers when he could. When he could no longer lead them, he instructed Abu Bakr to do so — a decision that many later saw as an indication of succession, though its interpretation is debated.\n\nIn his final days, the Prophet ﷺ freed his remaining slaves, gave away his last possessions, and settled all debts. He addressed the community from the mosque one final time, asking forgiveness of anyone he might have wronged and forgiving all who had wronged him.\n\nHe spent his last hours in the apartment of his wife Aisha. According to her account, he would dip his hand in a vessel of water and wipe his face, saying: "There is no god but Allah. Indeed, death has its agonies." His final words, as recorded in the most authentic narrations, were: "With the highest companionship" — choosing the company of the Divine over continued life.\n\nThe Prophet Muhammad ﷺ died on Monday, 12 Rabi' al-Awwal, 11 AH (June 8, 632 CE), at the age of sixty-three.\n\nUmar ibn al-Khattab, in shock, initially refused to accept the news. It was Abu Bakr who steadied the community. He entered the Prophet's apartment, kissed his forehead, and then emerged to address the people with one of the most famous speeches in Islamic history:\n\n"Whoever worshipped Muhammad, let him know that Muhammad has died. And whoever worshipped Allah, let him know that Allah is alive and will never die." He then recited the Quranic verse: "Muhammad is not but a messenger. Other messengers have passed on before him. So if he dies or is killed, would you turn back on your heels?" (3:144).\n\nThe community wept. The Prophet ﷺ was buried where he died — in Aisha's apartment — and his grave remains there to this day, within the Prophet's Mosque in Madinah.`,
          dateRange: "12 Rabi' al-Awwal, 11 AH (June 8, 632 CE)",
          location: "Madinah, apartment of Aisha",
          keyFigures: ["Aisha", "Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib"],
          confidenceLevel: "well-attested",
          narrationVariants: "The exact date of death is debated — most sources cite 12 Rabi' al-Awwal, but 1st and 2nd are also mentioned. Whether Abu Bakr's appointment to lead prayers was an explicit indication of succession is a matter of theological and historical interpretation.",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Hadith 1241-1242, 4452" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Fada'il" },
            { source: "Quran", reference: "Surah Aal Imran (3:144)" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 4" },
          ],
          whyItMatters: "The Prophet's death tested whether Islam was a personality cult or a principled community. Abu Bakr's words decisively affirmed the latter — the mission transcended any individual, and the message endured.",
        },
      ],
    },
  ],
};

const volumeIX: Volume = {
  id: "vol-9",
  number: "IX",
  title: "After His Death",
  subtitle: "The immediate aftermath and the preservation of his legacy",
  chapters: [
    {
      id: "ch-9-1",
      title: "The Aftermath",
      overview: "The days and weeks following the Prophet's death saw the community navigate grief, political crisis, and the monumental task of preserving what he had built.",
      readingTimeMinutes: 0,
      sections: [
        {
          id: "s-9-1-1",
          title: "Burial and Immediate Succession",
          content: `The Prophet ﷺ was buried on Tuesday night, the day after his death, in the very spot where he passed — the apartment of Aisha. Ali ibn Abi Talib, along with al-Abbas ibn Abd al-Muttalib (the Prophet's uncle), oversaw the washing and preparation of the body.\n\nMuslims came in groups to pray over him individually, as no single imam led a collective funeral prayer — a unique occurrence reflecting both the magnitude of the loss and the absence of precedent.\n\nEven before the burial was complete, the political crisis of succession had begun. The Ansar (Madinan Muslims) gathered at the Saqifah (covered porch) of Banu Sa'idah to discuss choosing a leader from among themselves. Sa'd ibn Ubadah, chief of the Khazraj, was proposed.\n\nWhen Abu Bakr, Umar, and Abu Ubaydah ibn al-Jarrah learned of this meeting, they rushed to the Saqifah. After intense deliberation — during which arguments were made for leadership from the Quraysh (based on the Prophet's tribal lineage and the broader acceptance it would command among the Arabs) — Abu Bakr was chosen as Khalifah (successor/caliph) by a process of public pledging (bay'ah).\n\nThe selection of Abu Bakr was not unanimous — it took days for full community acceptance, and some notable figures, including Ali ibn Abi Talib and Sa'd ibn Ubadah, initially withheld their pledge. The different perspectives on this process would later develop into major theological and political traditions within Islam.\n\nAbu Bakr's first address as caliph established key principles: "I have been appointed over you, though I am not the best among you. If I do well, support me. If I do wrong, correct me. Obey me as long as I obey Allah and His Messenger. If I disobey them, you owe me no obedience."`,
          dateRange: "12–13 Rabi' al-Awwal, 11 AH (June 632 CE)",
          location: "Madinah",
          keyFigures: ["Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Sa'd ibn Ubadah"],
          politicalContext: "The succession question was the first major political crisis of the Muslim community and remains theologically significant. Sunni and Shia traditions interpret the events at Saqifah differently.",
          confidenceLevel: "well-attested",
          narrationVariants: "The events at Saqifah are well-documented but interpreted differently. Sunni tradition sees Abu Bakr's election as legitimate and community-affirming. Shia tradition holds that Ali had been designated by the Prophet ﷺ at Ghadir Khumm. This difference in interpretation is one of the foundational theological divergences in Islamic history. Scholarly integrity requires acknowledging both traditions.",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of al-Ahkam" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 10" },
            { source: "Ibn Hisham", reference: "Al-Sirah al-Nabawiyyah, Vol. 4" },
          ],
          whyItMatters: "The succession process established that Islamic governance rests on community consent and accountability, not hereditary right or autocratic power — though the interpretation of this principle has been debated ever since.",
        },
        {
          id: "s-9-1-2",
          title: "Preserving the Legacy",
          content: `The death of the Prophet ﷺ created an urgent imperative to preserve his teachings. The Quran had been memorised by thousands of companions and written on various materials — palm leaves, flat bones, leather — during his lifetime. Its compilation into a single manuscript (mushaf) would begin under Abu Bakr and be completed under Uthman ibn Affan.\n\nThe hadith — the Prophet's sayings, actions, and approvals — were initially preserved through oral transmission, with formal written collections emerging over the following two centuries. This process involved rigorous chains of narration (isnad) and critical evaluation of narrator reliability ('ilm al-rijal) — a methodology unique in the ancient world.\n\nThe community also preserved the Prophet's practical example (sunnah) in worship, law, social conduct, and governance, which became the second foundational source of Islamic jurisprudence alongside the Quran.\n\nWithin Arabia, the immediate post-prophetic period saw the Ridda (apostasy/rebellion) movements — tribes that had pledged allegiance to the Prophet ﷺ personally and now sought to withdraw from the Muslim state, often refusing to pay zakat (alms-tax) while some followed false claimants to prophethood. Abu Bakr, in his brief two-year caliphate, undertook the Ridda campaigns to re-establish the unity of the community — a controversial but decisive action that preserved the integrity of the Islamic state.\n\nThe Prophet's legacy was not merely political. His example of personal conduct — his gentleness, his humour, his attention to the poor, his devotion in worship, his consultation in governance, his mercy in victory — became a living tradition transmitted through generations of Muslims who modelled their lives on his example.\n\nAs Aisha was reported to have said when asked about his character: "His character was the Quran."`,
          dateRange: "11 AH onward (632 CE onward)",
          location: "Madinah and across Arabia",
          keyFigures: ["Abu Bakr", "Umar", "Uthman ibn Affan"],
          confidenceLevel: "well-attested",
          citations: [
            { source: "Al-Bukhari", reference: "Sahih al-Bukhari, Book of Virtues of the Quran" },
            { source: "Muslim", reference: "Sahih Muslim, Kitab al-Fada'il" },
            { source: "Al-Tabari", reference: "Tarikh al-Rusul wa'l-Muluk, Vol. 10-11" },
          ],
          whyItMatters: "The meticulous preservation of the Quran and Sunnah ensured that the prophetic legacy was not lost to time or distortion, providing a stable foundation for Islamic civilisation across fourteen centuries.",
        },
      ],
    },
  ],
};

// Calculate reading times
function calcVolume(vol: Volume): Volume {
  vol.chapters.forEach((ch) => {
    const totalText = ch.overview + " " + ch.sections.map((s) => s.title + " " + s.content + " " + (s.politicalContext || "") + " " + (s.socialContext || "") + " " + (s.narrationVariants || "") + " " + (s.whyItMatters || "") + " " + (s.microEvents?.map(m => m.title + " " + m.detail).join(" ") || "")).join(" ");
    ch.readingTimeMinutes = estimateReadingTime(totalText);
  });
  return vol;
}

export const volumes: Volume[] = [
  calcVolume(volumeI),
  calcVolume(volumeII),
  calcVolume(volumeIII),
  calcVolume(volumeIV),
  calcVolume(volumeV),
  calcVolume(volumeVI),
  calcVolume(volumeVII),
  calcVolume(volumeVIII),
  calcVolume(volumeIX),
];

export const totalReadingTimeMinutes = volumes.reduce(
  (acc, v) => acc + v.chapters.reduce((a, ch) => a + ch.readingTimeMinutes, 0),
  0
);
