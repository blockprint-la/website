// Single source of truth for site copy. Tweak these and the whole page updates.

export const site = {
  name: "Blockprint",
  date: "Aug 22, 2026",
  dateShort: "AUG 22",
  city: "Venice, CA",
  venue: "Abbot Kinney Blvd",
  venueAddress: "Abbot Kinney Blvd, Venice, CA",
  mapsQuery: "Abbot Kinney Blvd, Venice, CA",
  agePolicy: "21+",
  // Tixr promoter link: /pr/<referralID>/<eventID> logs sales under the
  // referral ID in Tixr → Reports → Sales by Source (72h attribution).
  // "website" = the owned-site channel (vs email=laylo-onsale, sms=laylo-sms).
  // UTMs append after for GA4. Event 192184, group blockprint.
  ticketUrl: "https://www.tixr.com/pr/website/192184?utm_source=blockprint.la&utm_medium=website&utm_campaign=onsale",
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
  // Google Apps Script Web App endpoint for the post-event fan survey
  // (/survey-2026). Same pattern as partnersFormUrl: POSTs JSON as text/plain,
  // appends a row to "Website Submissions — 2026 Fan Survey" in the Stereo
  // Punks Drive at 26.08.22 - Blockprint Venice / 03. PLANNING + LOGISTICS.
  surveyFormUrl: "https://script.google.com/macros/s/AKfycbx-NX1x1Kvq6hCAWUq925EhT1Vg-y9klnSJ_OD_W9QiN1uozdS2-JNhqfjmJ7rtp7M/exec",
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
  photo?: string;                // film-strip B&W photo card (headliners)
  wordmark?: string;             // cream wordmark logo on transparent (headliners)
  wordmarkAspect?: number;       // trimmed wordmark width/height — used to size it next to the DJ SET tag

  spotify?: string;
  instagram?: string;
  website?: string;
};

// A–Z order, locked to poster. Variants control visual treatment.
// Links left empty for the new acts pending confirmation — wire later.
export const lineup: Artist[] = [
  { name: "Darius",      variant: "headline", photo: "/lineup/darius.png",      wordmark: "/lineup/darius-wordmark-trim.png",      wordmarkAspect: 3.898, spotify: "https://open.spotify.com/artist/5vfEaoOBcK0Lzr07WN8KaK", instagram: "" },
  { name: "Eli & Fur",   variant: "headline", photo: "/lineup/eli-fur.png",     wordmark: "/lineup/eli-fur-wordmark-trim.png",     wordmarkAspect: 4.780, spotify: "https://open.spotify.com/artist/5CkVLGKUJkIc1pmSk10QP4", instagram: "" },
  { name: "Franc Moody", variant: "headline", set: "DJ SET", photo: "/lineup/franc-moody.png", wordmark: "/lineup/franc-moody-wordmark-trim.png", wordmarkAspect: 8.109, spotify: "https://open.spotify.com/artist/10GT4yz8c6xjjnPGtGPI1l", instagram: "https://instagram.com/francmoody" },
  { name: "Luxxury",     variant: "tape",                    spotify: "https://open.spotify.com/artist/562q9ntuNSaVyt1bvPa77z", instagram: "" },
  { name: "Sosh & Mosh", variant: "tape",                    spotify: "https://open.spotify.com/artist/5eyJw0SeeTMFQKy9huXIHc", instagram: "" },
];

// No presenting sponsor (the "presented by Mudwatr" partnership was dropped).
// Leave `tier: "presenting"` supported for a future headline partner.
export const sponsors = [
  { name: "805",                tier: "supporting" },
  { name: "The Butcher's Daughter", tier: "supporting" },
  { name: "Stüssy",             tier: "supporting" },
];

export const pressQuotes: { quote: string; source: string }[] = [
  // Placeholder — fill these in as press lands
];

/**
 * FAQ entries. An answer can be expressed as any combination of:
 *   a       — a paragraph (or several, separated by blank lines)
 *   intro   — a lead line shown before a list
 *   list    — a simple bulleted list
 *   allow / prohibit — the two-column "what to bring" allowed / prohibited lists
 * Content mirrors the FAQ section of the master copy doc.
 */
export const faqs: {
  q: string;
  a?: string;
  intro?: string;
  list?: string[];
  allow?: string[];
  prohibit?: string[];
}[] = [
  {
    q: "What are the set times?",
    intro: `Doors open at 3:00 PM and the music starts right away. Curfew is 9:00 PM.`,
    list: [
      `3:00 – 4:15 Sosh & Mosh`,
      `4:15 – 5:15 Luxxury`,
      `5:15 – 6:30 Darius`,
      `6:30 – 7:45 Eli & Fur`,
      `7:45 – 9:00 Franc Moody (DJ set)`,
    ],
  },
  {
    q: "Is re-entry allowed?",
    a: `No ins and outs.`,
  },
  {
    q: "Can I attend if I'm under 21?",
    a: `No — Blockprint is 21+ only.`,
  },
  {
    q: "What kind of ID do I need?",
    intro: `Acceptable forms of ID:`,
    list: [
      `Any U.S. government-issued driver's license or ID card containing a photograph and date of birth`,
      `A U.S. or foreign government-issued passport containing a photograph and date of birth`,
    ],
  },
  {
    q: "How do I get to Blockprint?",
    a: `<strong>Ride share.</strong> The easy way in, and highly encouraged. Uber, Waymo, Lyft, whatever you use. Drop-off and pickup is at Abbot Kinney Blvd and Santa Clara Ave, a short walk from the front gates. Everyone leaves at 9:00 PM, so give it a minute after the last set.

<strong>Parking.</strong> If you have to. Public lots on Electric Avenue. There's no event lot, spots go early, and it's a longer walk in.

Please keep it off the surrounding residential streets. This is a neighborhood, and we all want to be invited back.`,
  },
  {
    q: "Is the event accessible?",
    a: `Yes. Accessible viewing is on the south side of Abbot Kinney Blvd, just outside the beer garden, and it will be signed on site.

If you have specific access needs, email <a href="mailto:info@blockprint.la">info@blockprint.la</a> before the event and we'll make sure someone is expecting you.`,
  },
  {
    q: "Are the bars cashless?",
    a: `Yes. Every bar on site is cashless, so bring a card or plan to tap.`,
  },
  {
    q: "What do I get with VIP?",
    intro: `Same block party, better seat. VIP includes:`,
    list: [
      `A private VIP bar, so you're not queuing behind the whole block`,
      `Air-conditioned restroom trailers`,
      `A private viewing area at the front of the stage`,
      `A special menu from Alisa Wine & Friends, right on the VIP footprint`,
      `Tables get stage access`,
      `Table check-in is at the box office, and we walk you over`,
    ],
  },
  {
    q: "Who should I contact for general event or ticketing info?",
    a: `For general questions and info, email <a href="mailto:info@blockprint.la">info@blockprint.la</a>. For ticketing help and information, email <a href="mailto:tickets@blockprint.la">tickets@blockprint.la</a>. We try to answer questions as quickly as possible — please allow 48 hours, Monday–Friday, for a response.`,
  },
  {
    q: "Will there be a lost & found?",
    a: `Yes. During the event, come to the box office. After the event, email <a href="mailto:lost@blockprint.la">lost@blockprint.la</a> to claim anything that was turned in.`,
  },
  {
    q: "What can I bring?",
    allow: [
      `Sunscreen`,
      `Deodorant`,
      `E-cigs / vapes`,
      `Non-professional flash / still cameras`,
      `Personal misting fan (bottle must be empty upon entry)`,
      `Unopened cigarettes`,
      `Lighters`,
      `Physician-prescribed medication that is not expired`,
      `Unopened chewing gum`,
      `Bags up to 12″ × 12″ × 6″. All bags are subject to search.`,
    ],
    prohibit: [
      `Aerosol products / cans`,
      `Costumes that resemble public safety uniforms (police, SWAT, fire, security, or medical)`,
      `Drones, remote-controlled aircraft, toys`,
      `Drugs or drug paraphernalia`,
      `Glass, cans, cups, or coolers`,
      `Illegal substances of any kind`,
      `Laser pointers and air horns`,
      `Outside food or beverages (including alcohol and candy)`,
      `Pets`,
      `Professional photo, video, or audio recording equipment`,
      `Large umbrellas, chairs, or blankets`,
      `Toy guns, water guns, slingshots`,
      `Weapons of any kind (including pocket knives, pepper spray, fireworks, tasers, etc.)`,
    ],
  },
  {
    q: "What are the Blockprint policies?",
    list: [
      `No re-entry`,
      `No refunds`,
      `No sitting on designated dancefloor areas`,
      `No moshing, crowd-surfing, or stage-diving`,
      `No unauthorized / unlicensed vendors`,
    ],
  },
  {
    q: "What's your zero-tolerance policy?",
    a: `Blockprint has a zero-tolerance policy for illegal activity, harassment, discrimination, racism, homophobia, or any other behavior that makes someone feel unsafe.

Anyone found in violation will be removed from the event immediately. If something happens to you or someone near you, tell a staff member or security immediately.

Event security and police officers will be working the event, and all laws will be strictly enforced. Be responsible, make smart choices, and look out for one another.`,
  },
  {
    q: "What if it rains?",
    a: `The event will take place rain or shine. Please keep up to date on weather reports and dress for the weather.`,
  },
  {
    q: "How do entry and security work?",
    a: `There is one main gate for the whole event and everyone comes in there. VIP has its own line at that gate for faster entry, but there is no separate entrance.

All persons and items are subject to search upon entry by security and law enforcement. Security personnel reserve the right to prohibit items deemed harmful, dangerous, or not in the best interest of the event and its patrons.

We reserve the right to refuse entry to anyone.`,
  },
];
