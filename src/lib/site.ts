/**
 * Central business details for Pickle Pointe.
 * Everything marked `TODO(confirm)` is a placeholder; replace with the real
 * value before launch. All pages, metadata and structured data read from here.
 */

export const site = {
  name: "Pickle Pointe",
  legalName: "Pickle Pointe",
  // TODO(confirm): final production domain
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://picklepointe.ph").replace(/\/$/, ""),
  description:
    "Pickle Pointe is an indoor pickleball facility in Barangay Conchu, Trece Martires City, Cavite. Book a court, join open play, or train with a coach, rain or shine, under LED lights.",
  keywords: [
    "pickleball Cavite",
    "pickleball Trece Martires",
    "indoor pickleball court",
    "pickleball court rental Cavite",
    "pickleball open play Cavite",
    "pickleball lessons Cavite",
    "Pickle Pointe",
    "Barangay Conchu",
  ],
  address: {
    street: "Barangay Conchu",
    city: "Trece Martires City",
    province: "Cavite",
    postalCode: "4109",
    country: "PH",
    full: "Barangay Conchu, Trece Martires City, Cavite, Philippines",
  },
  mapsQuery: "Pickle Pointe, Barangay Conchu, Trece Martires City, Cavite",
  phone: "+63 900 000 0000", // TODO(confirm)
  email: "hello@picklepointe.ph", // TODO(confirm)
  instagramHandle: "picklepointe.ph",
  socials: {
    facebook: "https://www.facebook.com/", // TODO(confirm)
    instagram: "https://www.instagram.com/picklepointe.ph",
    tiktok: "https://www.tiktok.com/", // TODO(confirm)
  },
  // TODO(confirm): operating hours
  hours: {
    label: "Open daily, 6:00 AM to 11:00 PM",
    schema: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "06:00", closes: "23:00" }],
  },
  courtCount: 6, // TODO(confirm)
} as const;

export type Rate = {
  id: string;
  name: string;
  price: number;
  unit: string;
  note: string;
  features: string[];
  featured?: boolean;
};

// TODO(confirm): all prices below are sample figures.
export const rates: Rate[] = [
  {
    id: "off-peak",
    name: "Off-peak court",
    price: 400,
    unit: "per court / hour",
    note: "Weekdays, 6 AM to 4 PM",
    features: ["Up to 4 players", "Nets set & lines fresh", "Paddle rental available"],
  },
  {
    id: "prime",
    name: "Prime-time court",
    price: 550,
    unit: "per court / hour",
    note: "Weekdays after 4 PM, weekends & holidays",
    features: ["Up to 4 players", "Most requested slots", "Book up to 14 days ahead"],
    featured: true,
  },
  {
    id: "open-play",
    name: "Open play",
    price: 200,
    unit: "per player / session",
    note: "Scheduled sessions, rotating games",
    features: ["Walk in solo or with friends", "Skill-grouped courts", "Balls provided"],
  },
  {
    id: "clinic",
    name: "Group clinic",
    price: 800,
    unit: "per player / 90 min",
    note: "Beginner and intermediate groups",
    features: ["Coach-led drills", "Paddle & balls included", "Small group sizes"],
  },
];

export const policies = [
  // TODO(confirm): booking policies
  "Bookings are confirmed once payment or a deposit is received.",
  "Reschedule or cancel at least 24 hours before your slot for full credit.",
  "Please arrive 10 minutes early. Sessions end on the hour so the next group can start on time.",
  "Non-marking court shoes only. No running shoes with black soles.",
];

export const nav = [
  { href: "/courts", label: "Courts" },
  { href: "/programs", label: "Programs" },
  { href: "/rates", label: "Rates" },
  { href: "/contact", label: "Contact" },
] as const;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.address.full)}&output=embed`;
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;
