import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image = "/images/pickle-pointe-indoor-courts-cavite.jpg" }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      locale: "en_PH",
      images: [{ url: image, width: 1080, height: 1350, alt: `${site.name}, indoor pickleball in Trece Martires, Cavite` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/pickle-pointe-logo.jpg`,
    image: [
      `${site.url}/images/pickle-pointe-facility-exterior.jpg`,
      `${site.url}/images/pickle-pointe-indoor-courts-cavite.jpg`,
      `${site.url}/images/indoor-pickleball-doubles-match.jpg`,
    ],
    telephone: site.phone,
    email: site.email,
    priceRange: "₱₱",
    sport: "Pickleball",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: ["Trece Martires City", "General Trias", "Tanza", "Indang", "Dasmariñas", "Cavite"],
    openingHoursSpecification: site.hours.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Indoor courts", value: true },
      { "@type": "LocationFeatureSpecification", name: "LED lighting", value: true },
      { "@type": "LocationFeatureSpecification", name: "Coaching", value: true },
    ],
    sameAs: Object.values(site.socials),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
