import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Arrow, Clock, Facebook, Instagram, Mail, Phone, Pin } from "@/components/Icons";
import { JsonLd, PageHero } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { mapsEmbedUrl, mapsLinkUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact & Directions, Barangay Conchu, Trece Martires",
  description: `Message Pickle Pointe for bookings, coaching and events. Find us at ${site.address.full}. ${site.hours.label}.`,
  path: "/contact",
  image: "/images/pickle-pointe-facility-exterior.jpg",
});

export default function ContactPage() {
  const tel = site.phone.replace(/\s/g, "");
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        crumb="Contact"
        image="/images/pickle-pointe-facility-exterior.jpg"
        title={
          <>
            Got a question? <span className="hl">Serve it up.</span>
          </>
        }
        intro="Bookings, coaching, company events or just figuring out what a kitchen violation is. Send a message and we'll get back to you."
      />

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container contact-grid">
          <Suspense>
            <ContactForm />
          </Suspense>

          <aside className="info-card">
            <h2>Reach us directly</h2>
            <ul className="info-list">
              <li>
                <span className="ico">
                  <Phone width={20} height={20} />
                </span>
                <span>
                  <small>Call or text</small>
                  <a href={`tel:${tel}`}>{site.phone}</a>
                </span>
              </li>
              <li>
                <span className="ico">
                  <Mail width={20} height={20} />
                </span>
                <span>
                  <small>Email</small>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <span className="ico">
                  <Facebook width={20} height={20} />
                </span>
                <span>
                  <small>Messenger</small>
                  <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer">
                    Message us on Facebook
                  </a>
                </span>
              </li>
              <li>
                <span className="ico">
                  <Instagram width={20} height={20} />
                </span>
                <span>
                  <small>Instagram</small>
                  <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
                    Follow for schedules & highlights
                  </a>
                </span>
              </li>
              <li>
                <span className="ico">
                  <Clock width={20} height={20} />
                </span>
                <span>
                  <small>Hours</small>
                  {site.hours.label}
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="dir-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="dir-title" className="display-md">
              Getting here.
            </h2>
            <p className="lede">
              We&apos;re in {site.address.full}. Plug us into Google Maps or Waze and look for the dark building with the blue P
              sign.
            </p>
          </div>
          <div className="location-grid">
            <div className="map-frame" data-reveal style={{ minHeight: 440 }}>
              <iframe
                src={mapsEmbedUrl}
                title="Map showing Pickle Pointe in Barangay Conchu, Trece Martires City, Cavite"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="info-card" data-reveal style={{ ["--d" as string]: "120ms" }}>
              <h3>Coming from nearby</h3>
              <ul className="nearby">
                {["General Trias", "Tanza", "Indang", "Dasmariñas", "Naic", "Amadeo", "Silang"].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="info-list">
                <li>
                  <span className="ico">
                    <Pin width={20} height={20} />
                  </span>
                  <span>
                    <small>Address</small>
                    {site.address.full}
                  </span>
                </li>
              </ul>
              <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-lime">
                Open in Google Maps <Arrow width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
