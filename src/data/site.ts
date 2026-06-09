// Single source of truth for site copy. Tweak these and the whole page updates.

export const site = {
  name: "Blockprint",
  tagline: "", // no presenting sponsor (the Mudwatr partnership was dropped)
  date: "Aug 22, 2026",
  dateShort: "AUG 22",
  city: "Venice, CA",
  venue: "Abbot Kinney Blvd",
  venueAddress: "Abbot Kinney Blvd, Venice, CA",
  mapsQuery: "Abbot Kinney Blvd, Venice, CA",
  agePolicy: "21+",
  ticketUrl: "#tickets",        // swap to Tixr URL when ready
  newsletterAction: "#newsletter", // swap to Hive endpoint when ready
  contactEmail: "info@blockprint.la",
  accessibilityEmail: "info@blockprint.la",
  pressEmail: "press@blockprint.la",
  partnershipsEmail: "partners@blockprint.la",
  domain: "blockprint.la",
  // Google Analytics 4 measurement ID. Public by design (visible in the
  // browser request to googletagmanager.com), so not a secret — kept in
  // config rather than env for ease of swap and dev/staging clarity.
  ga4MeasurementId: "G-PVDNP9V4C8",
  // Meta (Facebook) Pixel ID. Also public — visible in every request to
  // facebook.com/tr. Used for ad retargeting + conversion tracking.
  metaPixelId: "842607348915291",
  social: {
    instagram: "https://instagram.com/blockprint.la",
    tiktok: "https://www.tiktok.com/@blockprint_la",
    spotify: "",
  },
};

export type Artist = {
  name: string;
  variant?: "headline" | "tape"; // headline = stamped lineup, tape = supporting acts
  set?: string;                  // e.g. "DJ SET"
  spotify?: string;
  instagram?: string;
  website?: string;
};

// A–Z order, locked to poster. Variants control visual treatment.
export const lineup: Artist[] = [
  { name: "Darius",      variant: "headline",                spotify: "https://open.spotify.com/artist/5vfEaoOBcK0Lzr07WN8KaK" },
  { name: "Eli & Fur",   variant: "headline",                spotify: "https://open.spotify.com/artist/5CkVLGKUJkIc1pmSk10QP4" },
  { name: "Franc Moody", variant: "headline", set: "DJ SET", spotify: "https://open.spotify.com/artist/10GT4yz8c6xjjnPGtGPI1l", instagram: "https://instagram.com/francmoody" },
  { name: "Luxxury",     variant: "tape",                    spotify: "https://open.spotify.com/artist/562q9ntuNSaVyt1bvPa77z" },
  { name: "Sosh & Mosh", variant: "tape",                    spotify: "https://open.spotify.com/artist/5eyJw0SeeTMFQKy9huXIHc" },
];

// No announced sponsors yet (the initial Mudwatr/805/etc. list was placeholder).
export const sponsors: { name: string; tier: string }[] = [];

export const pressQuotes: { quote: string; source: string }[] = [
  // Placeholder — fill these in as press lands
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly is Blockprint?",
    a: `A one-day block party in Venice. We close down 3–4 blocks of Abbot Kinney Blvd between Brooks Ave and San Juan Ave for a single-stage festival on the street itself.`,
  },
  {
    q: "When and where is Blockprint?",
    a: `Saturday, August 22, 2026 on Abbot Kinney Blvd in Venice, California. Doors and exact set times will be announced closer to the event.`,
  },
  {
    q: "How old do I have to be?",
    a: `Blockprint is a strictly 21+ event. Valid government-issued ID is required at entry — no exceptions.`,
  },
  {
    q: "What's the lineup?",
    a: `Darius, Eli & Fur, Franc Moody (DJ Set), with support from Luxxury and Sosh & Mosh. Set times TBA.`,
  },
  {
    q: "How do I get there?",
    a: `Walking, biking, and ride share are the way to go — Abbot Kinney is closed to vehicles during the festival, so plan to be dropped off a few blocks away. Bike parking will be available near entry. Public transit details and rideshare drop-off zones will be announced closer to the event.`,
  },
  {
    q: "Is there food and drink?",
    a: `Yes. Food and drink stations will be set up across the festival footprint, and many of the bars and restaurants along the stretch will be serving. Final vendor lineup announced closer to the event.`,
  },
  {
    q: "Are tickets refundable?",
    a: `All sales are final. Tickets are transferable through Tixr if you can't make it.`,
  },
  {
    q: "Is the venue accessible?",
    a: `Yes. The site is on a flat outdoor stretch of Abbot Kinney with accessible viewing areas and restrooms. If you need a specific accommodation, email ${"info@blockprint.la"} and we'll make it work.`,
  },
  {
    q: "Re-entry?",
    a: `No re-entry once you've left the festival footprint, so plan accordingly.`,
  },
  {
    q: "What if it rains?",
    a: `Rain or shine. Refunds are not issued due to weather.`,
  },
  {
    q: "I'm a vendor or brand — how do I get involved?",
    a: `Email partners@blockprint.la with your pitch and any links. We're talking to local vendors, restaurants, and brand partners about activations and on-site presence. A formal application form will go up closer to the event.`,
  },
  {
    q: "Press / photo / media?",
    a: `Email press@blockprint.la with outlet, dates of coverage, and any specific requests.`,
  },
];
