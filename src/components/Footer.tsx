import Link from "next/link";
import { mapsLinkUrl, nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ArrowUpRight, Clock, Facebook, Instagram, Mail, Phone, Pin, TikTok } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-court" aria-hidden="true" />
      <div className="container">
        <div className="footer-top">
          <p className="footer-shout">
            See you at the <span>kitchen line.</span>
          </p>
          <Link href="/book" className="btn btn-lime btn-lg">
            Book a court <ArrowUpRight width={18} height={18} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>Indoor pickleball courts in Trece Martires City, Cavite. Court rentals, open play, clinics and private events.</p>
            <ul className="socials" aria-label="Social media">
              <li>
                <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Pickle Pointe on Facebook" className="s-fb">
                  <Facebook width={18} height={18} />
                </a>
              </li>
              <li>
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Pickle Pointe on Instagram" className="s-ig">
                  <Instagram width={18} height={18} />
                </a>
              </li>
              <li>
                <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Pickle Pointe on TikTok" className="s-tt">
                  <TikTok width={18} height={18} />
                </a>
              </li>
            </ul>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li><Link href="/book">Book a court</Link></li>
            </ul>
          </nav>

          <div className="footer-col">
            <h2>Visit</h2>
            <address>
              <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="footer-line">
                <Pin width={18} height={18} />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.province}
                </span>
              </a>
              <span className="footer-line">
                <Clock width={18} height={18} />
                <span>{site.hours.label}</span>
              </span>
            </address>
          </div>

          <div className="footer-col">
            <h2>Reach us</h2>
            <ul>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="footer-line">
                  <Phone width={18} height={18} /> <span>{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="footer-line">
                  <Mail width={18} height={18} /> <span>{site.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="footer-ig s-ig">
          <Instagram width={20} height={20} /> @{site.instagramHandle}
        </a>

        <div className="footer-bottom">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Indoor pickleball · Trece Martires City, Cavite</p>
        </div>
      </div>
      <p className="footer-wordmark" aria-hidden="true">
        PICKLE POINTE
      </p>
    </footer>
  );
}
