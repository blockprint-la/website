// Blockprint — On the Block: weekly neighborhood event roundup.
// Update `week` and `events` each Tuesday before publishing.
// The page at /neighborhood pulls directly from this file — no CMS needed.

export const weeklyEdition = {
  // Human-readable week label shown in the page header + SMS link preview.
  week: "Jun 16 – Jun 22, 2026",
  // Short intro shown under the header. Keep it 1–2 sentences, voice = local insider.
  intro:
    "Your weekly guide to what's happening on Abbot Kinney and around Venice. Curated by the people throwing the parties.",
};

export type NeighborhoodCategory =
  | "Music"
  | "Food + Drink"
  | "Art"
  | "Pop-Up"
  | "Wellness"
  | "Market"
  | "Film"
  | "Community";

export type NeighborhoodEvent = {
  business: string;
  category: NeighborhoodCategory;
  what: string;      // one sentence description
  when: string;      // e.g. "Saturday, Jun 21 · 7 – 10pm"
  where: string;     // short address or landmark
  vibe: string;      // one punchy line — the hook
  link?: string;
  featured?: boolean; // top 3 picks get a featured badge
};

// Replace these with real picks each week. Aim for 5–10 events.
// featured: true → highlighted card (use for top 3 picks max).
export const events: NeighborhoodEvent[] = [
  {
    business: "The Butcher's Daughter",
    category: "Food + Drink",
    what: "Summer solstice plant-based dinner with a live acoustic set on the patio.",
    when: "Saturday, Jun 21 · 6 – 9pm",
    where: "1205 Abbot Kinney Blvd",
    vibe: "Garden party energy, zero guilt.",
    link: "https://thebutchersdaughter.com",
    featured: true,
  },
  {
    business: "Tortoise General Store",
    category: "Art",
    what: "Opening reception for a new ceramics show from three LA-based artists.",
    when: "Friday, Jun 20 · 7 – 10pm",
    where: "1208 Abbot Kinney Blvd",
    vibe: "Thoughtful objects, good people.",
    link: "https://tortoisegeneralstore.com",
    featured: true,
  },
  {
    business: "Gjusta",
    category: "Community",
    what: "Sunday morning coffee social — no agenda, just regulars and the good stuff.",
    when: "Sunday, Jun 22 · 8 – 11am",
    where: "320 Sunset Ave",
    vibe: "The Venice institution does it again.",
    link: "https://gjusta.com",
    featured: false,
  },
  {
    business: "Mystic Journey Bookstore",
    category: "Community",
    what: "Tarot workshop for beginners with Venice local and practicing reader Leo Marks.",
    when: "Saturday, Jun 21 · 2 – 4pm",
    where: "1319 Abbot Kinney Blvd",
    vibe: "Pull a card, find out.",
    link: "https://mysticjourneybooks.com",
    featured: false,
  },
  {
    business: "Townhouse",
    category: "Music",
    what: "Late-night DJ set from the Stones Throw crew, no cover before midnight.",
    when: "Friday, Jun 20 · 10pm – 2am",
    where: "52 Windward Ave",
    vibe: "Classic Venice dive, elevated.",
    link: "https://townhousevenice.com",
    featured: true,
  },
];
