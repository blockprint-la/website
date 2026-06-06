// Single source of truth for site copy. Tweak these and the whole page updates.

export const site = {
  name: "Blockprint",
  tagline: "Presented by Mudwatr",
  date: "Aug 22, 2026",
  dateShort: "AUG 22",
  city: "Venice, CA",
  venue: "Abbot Kinney Blvd",
  venueAddress: "Abbot Kinney Blvd, Venice, CA",
  mapsQuery: "Abbot Kinney Blvd, Venice, CA",
  agePolicy: "21+",
  ticketUrl: "https://www.tixr.com/",  // placeholder Tixr landing — swap to real event URL when live
  newsletterAction: "#newsletter",     // legacy; Newsletter form is now Hive SDK direct, no endpoint needed
  contactEmail: "info@blockprint.la",       // alias of hello@ (team box)
  accessibilityEmail: "info@blockprint.la", // no dedicated access@ alias yet — routes through team box
  pressEmail: "press@blockprint.la",        // Zoho Group → Jake + Evan
  partnershipsEmail: "partners@blockprint.la", // Zoho Group → Jake + Evan
  // Google Apps Script Web App endpoint for the Partners form. POSTs JSON
  // (Content-Type text/plain to dodge CORS preflight) and appends a row to
  // "Website Submissions — Partner Interest" in the Stereo Punks Drive at
  // 26.08.22 - Blockprint Venice / 03. PLANNING + LOGISTICS.
  partnersFormUrl: "https://script.google.com/macros/s/AKfycbyyJPa3T9Ou3AU1Mgau3kFtfxdgLwAsbtu-AyObxgF8osRxq90vU3NCVkIUF9HCN0k/exec",
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
  { name: "Franc Moody", variant: "headline", set: "DJ SET", spotify: "https://open.spotify.com/artist/2qcg8Bc5W08UfukuFEEIOj", instagram: "https://instagram.com/francmoody" },
  { name: "Nimino",      variant: "headline",                spotify: "https://open.spotify.com/artist/7zKGqJ6E1A24qH1NIiTl81", instagram: "https://instagram.com/nimino" },
  { name: "Vandelux",    variant: "headline", set: "DJ SET", spotify: "https://open.spotify.com/artist/6V8WQfvDP4U4qN8Z0cq4Qy", instagram: "https://instagram.com/vandelux" },
  { name: "Coco & Breezy", variant: "tape",                  spotify: "",                                                                  instagram: "https://instagram.com/cocoandbreezy" },
  { name: "Never Dull",    variant: "tape",                  spotify: "",                                                                  instagram: "https://instagram.com/neverdull" },
];

export const sponsors = [
  { name: "Mudwatr",            tier: "presenting" },
  { name: "805",                tier: "supporting" },
  { name: "The Butcher's Daughter", tier: "supporting" },
  { name: "Stüssy",             tier: "supporting" },
];

export const pressQuotes: { quote: string; source: string }[] = [
  // Placeholder — fill these in as press lands
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly is Blockprint?",
    a: `A one-day block party in Venice. We close down 3–4 blocks of Abbot Kinney Blvd between Brooks Ave and San Juan Ave for a single-stage festival on the street itself — electronic music, local food, art, and Venice culture all on one stretch.`,
  },
  {
    q: "When and where is Blockprint?",
    a: `Saturday, August 22, 2026 from 3 PM to 9 PM on Abbot Kinney Blvd in Venice, California. Doors and exact set times will be announced closer to the event.`,
  },
  {
    q: "How old do I have to be?",
    a: `Blockprint is a strictly 21+ event. Bring a valid government-issued photo ID with date of birth — U.S. driver's license, state ID card, or a U.S. or foreign passport. No exceptions at the gate.`,
  },
  {
    q: "What's the lineup?",
    a: `Franc Moody (DJ Set), Nimino, Vandelux (DJ Set), with support from Coco & Breezy and Never Dull. Set times TBA.`,
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
    q: "What can I bring?",
    a: `Sunscreen, deodorant, prescribed medications, non-professional cameras, e-cigarettes/vapes, lighters, unopened cigarettes, unopened gum, and empty reusable water bottles or personal misting fans (fill them inside). Bags must be clear and 12″ × 6″ × 12″ or smaller; small clutches under 6″ × 9″ are also fine.`,
  },
  {
    q: "What's not allowed?",
    a: `No outside food or drink, glass containers, aerosols, drones, professional recording equipment, laser pointers, large umbrellas, chairs, or blankets, toy weapons, weapons or anything dangerous, pets, or illegal substances. Costumes resembling law enforcement uniforms are not permitted.`,
  },
  {
    q: "Code of conduct?",
    a: `Blockprint is a zero-tolerance space for harassment, discrimination, illegal activity, or any behavior that makes others feel unsafe — violations mean immediate removal. The dancefloor is for dancing; no sitting on it. Look out for each other and we'll all have a good time.`,
  },
  {
    q: "Are tickets refundable?",
    a: `All sales are final. Tickets are transferable through Tixr if you can't make it.`,
  },
  {
    q: "Is the venue accessible?",
    a: `Yes. The site is on a flat outdoor stretch of Abbot Kinney with accessible viewing areas and restrooms. If you need a specific accommodation, email info@blockprint.la and we'll make it work.`,
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
    q: "How do I get in touch?",
    a: `General questions, accessibility, and ticket help go to info@blockprint.la — we respond Monday through Friday within 48 hours. For media, email press@blockprint.la. For sponsorships, vendors, and brand partnerships, email partners@blockprint.la.`,
  },
  {
    q: "I'm a vendor or brand — how do I get involved?",
    a: `Email partners@blockprint.la with your pitch and any links — the address routes to Jake and Evan directly. We're talking to local vendors, restaurants, and brand partners about activations and on-site presence. A formal application form will go up closer to the event.`,
  },
  {
    q: "Press / photo / media?",
    a: `Email press@blockprint.la with outlet, dates of coverage, and any specific requests.`,
  },
];
