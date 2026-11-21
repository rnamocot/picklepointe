import Image from "next/image";
import { Ball, Bolt, Court, Paddle, Roof, Users } from "@/components/Icons";
import { CtaBand, JsonLd, PageHero } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Indoor Pickleball Courts in Trece Martires, Cavite",
  description: `Tour the ${site.courtCount} indoor pickleball courts at Pickle Pointe in Barangay Conchu, Trece Martires City: regulation 20×44 ft courts, LED lighting and rain-or-shine play.`,
  path: "/courts",
  image: "/images/pickle-pointe-indoor-courts-cavite.jpg",
});

const amenities = [
  { icon: Roof, title: "Fully indoor", text: "A covered steel hall keeps the sun, rain and wind off your game. No more cancelled sessions in habagat season." },
  { icon: Bolt, title: "LED court lighting", text: "Even, glare-reduced lighting across every court so you can track the ball from the baseline to the kitchen." },
  { icon: Court, title: "Regulation courts", text: "True 20 × 44 ft courts with crisp kitchen lines and textured surfaces made for quick lateral movement." },
  { icon: Users, title: "Netted dividers", text: "Barrier nets between courts keep stray balls out of your rally and give each game its own space." },
  { icon: Ball, title: "Ball machine & drills", text: "Coaching carts and feeding drills for players who want reps, not just games." },
  { icon: Paddle, title: "Paddle rentals", text: "Forgot your paddle or just trying the sport? Borrow one at the front desk and get on court." },
];

export default function CourtsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Courts", path: "/courts" }])} />
      <PageHero
        crumb="Courts"
        image="/images/indoor-pickleball-courts-nets.jpg"
        title={
          <>
            {site.courtCount} indoor courts. <span className="hl">Zero rain delays.</span>
          </>
        }
        intro="Pickle Pointe is purpose-built for pickleball: regulation courts, bright LED lighting and netted dividers under one roof in Trece Martires City, Cavite."
      />

      <section className="section" aria-labelledby="amenities-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="amenities-title" className="display-md">
              Everything a good rally needs.
            </h2>
            <p className="lede">We sweated the details so the only thing you need to think about is where to place your next drop shot.</p>
          </div>
          <div className="amenities">
            {amenities.map((a, i) => (
              <div key={a.title} className="amenity" data-reveal style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
                <a.icon width={30} height={30} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="spec-title" style={{ paddingTop: 0 }}>
        <div className="container spec-grid">
          <div className="spec-diagram" data-reveal>
            <svg viewBox="-30 -30 500 260" role="img" aria-labelledby="court-diagram-title">
              <title id="court-diagram-title">Pickleball court diagram: 20 by 44 feet with a 7-foot non-volley zone on each side of the net</title>
              <rect x="150" y="0" width="140" height="200" className="kitchen" />
              <rect x="0" y="0" width="440" height="200" className="l" />
              <line x1="150" y1="0" x2="150" y2="200" className="l" />
              <line x1="290" y1="0" x2="290" y2="200" className="l" />
              <line x1="0" y1="100" x2="150" y2="100" className="l" />
              <line x1="290" y1="100" x2="440" y2="100" className="l" />
              <line x1="220" y1="-12" x2="220" y2="212" className="net" />
              <text x="220" y="-18" textAnchor="middle">NET</text>
              <text x="220" y="104" textAnchor="middle" transform="rotate(-90 220 100)" style={{ fontSize: 9 }}>
                KITCHEN
              </text>
              <line x1="0" y1="226" x2="440" y2="226" className="dim" />
              <text x="220" y="244" textAnchor="middle">44 FT</text>
              <line x1="-14" y1="0" x2="-14" y2="200" className="dim" />
              <text x="-20" y="100" textAnchor="middle" transform="rotate(-90 -20 100)">20 FT</text>
              <text x="185" y="190" textAnchor="middle" style={{ fontSize: 9 }}>7 FT</text>
              <text x="255" y="190" textAnchor="middle" style={{ fontSize: 9 }}>7 FT</text>
            </svg>
          </div>
          <div data-reveal style={{ ["--d" as string]: "120ms" }}>
            <h2 id="spec-title" className="display-md">
              Built to regulation, line for line.
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Practise on the same dimensions you&apos;ll see in tournaments, so your footwork and shot depth carry over the moment
              you play anywhere else.
            </p>
            <dl className="spec-list">
              <div>
                <dt>Court dimensions</dt>
                <dd>20 × 44 ft</dd>
              </div>
              <div>
                <dt>Non-volley zone (kitchen)</dt>
                <dd>7 ft each side</dd>
              </div>
              <div>
                <dt>Net height</dt>
                <dd>36 in sides · 34 in center</dd>
              </div>
              <div>
                <dt>Setting</dt>
                <dd>Indoor, covered hall</dd>
              </div>
              <div>
                <dt>Number of courts</dt>
                <dd>{site.courtCount}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="gallery-title" className="display-md">
              Take a look around.
            </h2>
            <p className="lede">From the front door to the far baseline, this is where Cavite comes to play.</p>
          </div>
          <div className="gallery">
            <figure className="wide" data-reveal>
              <Image
                src="/images/pickle-pointe-facility-exterior.jpg"
                alt="Front of the Pickle Pointe building in Trece Martires with glass entrance and logo signage"
                fill
                sizes="100vw"
              />
            </figure>
            {[
              ["/images/pickle-pointe-indoor-courts-cavite.jpg", "Empty indoor courts ready for play under LED lights"],
              ["/images/indoor-pickleball-courts-nets.jpg", "Close-up of a pickleball net with courts and barrier nets beyond"],
              ["/images/indoor-pickleball-doubles-match.jpg", "Doubles players mid-rally on the blue courts"],
              ["/images/pickleball-players-ready-position.jpg", "Player smiling in ready position at the baseline"],
              ["/images/pickleball-open-play-session.jpg", "Busy open play session with multiple courts in use"],
              ["/images/pickleball-coaching-clinic.jpg", "Coach demonstrating a stroke during a clinic"],
            ].map(([src, alt], i) => (
              <figure key={src} data-reveal style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
                <Image src={src} alt={alt} fill sizes="(min-width: 900px) 33vw, 50vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Seen enough? Get on court." />
    </>
  );
}
