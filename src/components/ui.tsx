import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { Arrow, Ball, Instagram, Phone, Plus } from "./Icons";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Compact hero used on inner pages: photo backdrop, breadcrumb, H1, intro. */
export function PageHero({
  crumb,
  title,
  intro,
  image = "/images/pickle-pointe-indoor-courts-cavite.jpg",
  children,
}: {
  crumb: string;
  title: ReactNode;
  intro: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hero-bg page-hero-bg" aria-hidden="true">
        <Image src={image} alt="" fill priority sizes="100vw" />
      </div>
      <div className="page-hero-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container page-hero-inner">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <h1 className="display-lg">{title}</h1>
        <p className="lede">{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Your court is waiting.",
  text = "Grab a slot, bring three friends, and play under the lights in Trece Martires.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-card" data-reveal>
          <svg className="cta-court" viewBox="0 0 440 200" aria-hidden="true" preserveAspectRatio="none">
            <rect x="1" y="1" width="438" height="198" />
            <line x1="220" y1="0" x2="220" y2="200" className="net" />
            <line x1="150" y1="0" x2="150" y2="200" />
            <line x1="290" y1="0" x2="290" y2="200" />
            <line x1="0" y1="100" x2="150" y2="100" />
            <line x1="290" y1="100" x2="440" y2="100" />
          </svg>
          <div className="cta-copy">
            <h2 id="cta-title" className="display-md">
              {title}
            </h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link href="/book" className="btn btn-lime btn-lg">
              Book a court <Arrow width={18} height={18} />
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Ask a question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq({ items, title = "Questions before your first serve" }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <JsonLd data={faqSchema(items)} />
      <div className="container faq-grid">
        <div className="faq-head" data-reveal>
          <h2 id="faq-title" className="display-md">
            {title}
          </h2>
          <p className="muted">
            Still unsure? <Link href="/contact" className="text-link">Send us a message</Link> and we&apos;ll get back to you.
          </p>
        </div>
        <div className="faq-list">
          {items.map((f, i) => (
            <details key={f.q} data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <summary>
                <span>{f.q}</span>
                <Plus width={20} height={20} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Two rows of pill tags sliding in opposite directions. */
export function PillRows({ rows }: { rows: string[][] }) {
  return (
    <div className="pill-rows">
      <p className="sr-only">{rows.flat().join(", ")}</p>
      {rows.map((row, r) => (
        <div key={r} className={`pill-row ${r % 2 ? "rev" : ""}`} aria-hidden="true">
          <div className="pill-track">
            {[...row, ...row].map((t, i) => (
              <span key={i} className={i % 3 === 0 ? "pill hot" : "pill"}>
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const igShots = [
  ["/images/indoor-pickleball-doubles-match.jpg", "Doubles rally at Pickle Pointe"],
  ["/images/pickleball-coaching-clinic.jpg", "Coaching clinic drills"],
  ["/images/indoor-pickleball-courts-nets.jpg", "Courts and nets"],
  ["/images/pickleball-players-ready-position.jpg", "Player in ready position"],
  ["/images/pickleball-open-play-session.jpg", "Open play session"],
];

export function InstagramStrip() {
  return (
    <section className="section ig" aria-labelledby="ig-title" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="ig-head" data-reveal>
          <h2 id="ig-title" className="display-md">
            Catch the rallies on <span className="hl">@{site.instagramHandle}</span>
          </h2>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost s-ig">
            <Instagram width={18} height={18} /> Follow on Instagram
          </a>
        </div>
        <ul className="ig-grid">
          {igShots.map(([src, alt], i) => (
            <li key={src} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${alt}, view on Instagram`}>
                <Image src={src} alt={alt} fill sizes="(min-width: 900px) 20vw, 45vw" />
                <span className="ig-over" aria-hidden="true">
                  <Instagram width={28} height={28} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Floating quick-contact button (bottom-right), like a chat launcher. */
export function QuickContact() {
  return (
    <div className="fab">
      <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="fab-btn s-ig" aria-label="Message Pickle Pointe on Instagram">
        <Instagram width={22} height={22} />
      </a>
      <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="fab-btn" aria-label="Call Pickle Pointe">
        <Phone width={20} height={20} />
      </a>
      <Link href="/book" className="fab-book">
        <Ball width={20} height={20} /> Book
      </Link>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = (
    <ul>
      {items.map((t) => (
        <li key={t}>
          {t}
          <span className="marquee-ball" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee">
      <p className="sr-only">{items.join(", ")}</p>
      <div className="marquee-track" aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}
