import Link from "next/link";
import { Arrow, Check } from "@/components/Icons";
import { CtaBand, Faq, JsonLd, PageHero } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { peso, policies, rates, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Pickleball Court Rates & Booking Policies",
  description:
    "Court rental, open play and clinic rates at Pickle Pointe, Trece Martires City, Cavite. Off-peak and prime-time pricing with simple booking policies.",
  path: "/rates",
});

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `${site.name} rates`,
  itemListElement: rates.map((r) => ({
    "@type": "Offer",
    name: r.name,
    description: `${r.note}. ${r.features.join(", ")}.`,
    price: r.price,
    priceCurrency: "PHP",
    url: `${site.url}/book?type=${r.id}`,
  })),
};

export default function RatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Rates", path: "/rates" }])} />
      <JsonLd data={offerSchema} />
      <PageHero
        crumb="Rates"
        image="/images/pickleball-open-play-session.jpg"
        title={
          <>
            Simple rates. <span className="hl">No fine print.</span>
          </>
        }
        intro="Pay per court or per player. Split a court four ways and an hour of indoor pickleball costs less than your post-game merienda."
      />

      <section className="section" aria-labelledby="rates-title">
        <div className="container">
          <h2 id="rates-title" className="sr-only">
            Court and program rates
          </h2>
          <div className="rates-grid">
            {rates.map((r, i) => (
              <article key={r.id} className={`rate-card ${r.featured ? "featured" : ""}`} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                {r.featured && <span className="rate-badge">Most booked</span>}
                <div>
                  <h3>{r.name}</h3>
                  <p className="rate-note">{r.note}</p>
                </div>
                <p className="rate-price">
                  <strong>{peso(r.price)}</strong>
                  <span>{r.unit}</span>
                </p>
                <ul className="ticks">
                  {r.features.map((f) => (
                    <li key={f}>
                      <Check width={18} height={18} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/book?type=${r.id}`} className={`btn ${r.featured ? "btn-lime" : "btn-ghost"}`}>
                  Book this <Arrow width={16} height={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="policy-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="policy-title" className="display-md">
              House rules, kept short.
            </h2>
            <p className="lede">A few things that keep every court on schedule and every player happy.</p>
          </div>
          <ol className="policy-list">
            {policies.map((p, i) => (
              <li key={p} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={faqs} title="Good to know before you book" />
      <CtaBand />
    </>
  );
}
