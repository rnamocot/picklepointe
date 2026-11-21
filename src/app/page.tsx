import Image from "next/image";
import Link from "next/link";
import { HeroCourt } from "@/components/HeroCourt";
import { Arrow, Ball, Bolt, Clock, Court, Paddle, Pin, Roof, Trophy, Users, Whistle } from "@/components/Icons";
import { CtaBand, Faq, InstagramStrip, Marquee, PillRows } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { mapsEmbedUrl, mapsLinkUrl, site } from "@/lib/site";

const ways = [
  {
    icon: Court,
    title: "Court rental",
    text: "Lock in a court by the hour for your doubles group, barkada or practice partner.",
    href: "/book",
    cta: "Reserve a court",
  },
  {
    icon: Users,
    title: "Open play",
    text: "Come solo, rotate in, meet players at your level. The fastest way to find a regular game.",
    href: "/programs#open-play",
    cta: "See sessions",
  },
  {
    icon: Whistle,
    title: "Clinics & coaching",
    text: "Learn the serve, the third-shot drop and the soft game at the kitchen with a coach.",
    href: "/programs#clinics",
    cta: "Start training",
  },
  {
    icon: Trophy,
    title: "Leagues & events",
    text: "Ladders, round robins, company team-building and private tournaments under one roof.",
    href: "/programs#events",
    cta: "Plan an event",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg">
          <Image
            src="/images/pickle-pointe-facility-exterior.jpg"
            alt="Pickle Pointe indoor pickleball facility building in Barangay Conchu, Trece Martires City, Cavite"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <HeroCourt />

        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 id="hero-title" className="display-xl rise">
              Indoor pickleball,
              <br />
              <span className="scribble">
                Cavite
                <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 14C40 5 110 2 197 9" pathLength={1} />
                </svg>
              </span>{" "}
              style.
            </h1>
            <p className="lede rise" style={{ ["--d" as string]: "120ms" }}>
              Pickle Pointe is a dedicated indoor pickleball facility in Barangay Conchu, Trece Martires City. LED-lit courts,
              rain-or-shine play, open play nights and coaching for first-timers and tournament grinders alike.
            </p>
            <div className="hero-actions rise" style={{ ["--d" as string]: "220ms" }}>
              <Link href="/book" className="btn btn-lime btn-lg">
                Book a court <Arrow width={18} height={18} />
              </Link>
              <Link href="/courts" className="btn btn-ghost btn-lg">
                Tour the courts
              </Link>
            </div>
            <ul className="hero-facts rise" style={{ ["--d" as string]: "320ms" }}>
              <li>
                <Roof width={18} height={18} /> Rain-or-shine indoor
              </li>
              <li>
                <Bolt width={18} height={18} /> LED-lit till late
              </li>
              <li>
                <Paddle width={18} height={18} /> Beginner friendly
              </li>
            </ul>
          </div>

          <div className="hero-visual rise" style={{ ["--d" as string]: "200ms" }}>
            <div className="score-chip">
              <div className="score-digits" aria-hidden="true">
                <span>0</span>
                <span>0</span>
                <span>2</span>
              </div>
              <p className="score-label">
                <strong>Zero, zero, two.</strong>
                Every game starts here.
              </p>
            </div>
            <p className="place-chip">
              <Pin width={16} height={16} /> Trece Martires, Cavite
            </p>
          </div>
        </div>

        <Marquee items={["Court rental", "Open play", "Clinics", "Leagues", "Private events", "Team building", "Rain or shine"]} />
      </section>

      {/* ================= INTRO / FACILITY ================= */}
      <section className="section" aria-labelledby="intro-title">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-copy" data-reveal>
              <h2 id="intro-title" className="display-md">
                A dedicated pickleball house, not a borrowed gym.
              </h2>
              <p className="lede">
                Every line, net and light here was set up for pickleball. No basketball keys bleeding through, no waiting for
                the volleyball crowd to clear out. Just true-sized courts with clean kitchen lines and room to move.
              </p>
              <p className="muted">
                Whether you&apos;re drilling dinks before work or running a Friday night round robin, the courts are ready when
                you are.
              </p>
            </div>
            <dl className="scoreboard" data-reveal style={{ ["--d" as string]: "120ms" }}>
              <div>
                <dt>Pickleball courts</dt>
                <dd>{String(site.courtCount).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Under one roof</dt>
                <dd>100%</dd>
              </div>
              <div>
                <dt>Court size (ft)</dt>
                <dd>20×44</dd>
              </div>
              <div>
                <dt>Days a week</dt>
                <dd>7</dd>
              </div>
            </dl>
          </div>

          <div className="bento">
            <figure data-reveal>
              <Image
                src="/images/pickle-pointe-indoor-courts-cavite.jpg"
                alt="Row of blue indoor pickleball courts under LED lights at Pickle Pointe"
                fill
                sizes="(min-width: 900px) 45vw, 100vw"
              />
              <figcaption>Pro-spec lines, fresh nets</figcaption>
            </figure>
            <figure data-reveal style={{ ["--d" as string]: "80ms" }}>
              <Image
                src="/images/pickleball-players-ready-position.jpg"
                alt="Smiling player in ready position during an open play game"
                fill
                sizes="(min-width: 900px) 27vw, 50vw"
              />
              <figcaption>Open play</figcaption>
            </figure>
            <figure data-reveal style={{ ["--d" as string]: "160ms" }}>
              <Image
                src="/images/indoor-pickleball-courts-nets.jpg"
                alt="Net-divided pickleball courts with blue playing surfaces"
                fill
                sizes="(min-width: 900px) 27vw, 50vw"
              />
              <figcaption>Netted court dividers</figcaption>
            </figure>
            <figure data-reveal style={{ ["--d" as string]: "240ms" }}>
              <Image
                src="/images/pickleball-open-play-session.jpg"
                alt="Players of all ages rallying during a busy session at Pickle Pointe"
                fill
                sizes="(min-width: 900px) 54vw, 100vw"
              />
              <figcaption>All ages, all levels</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ================= WAYS TO PLAY ================= */}
      <section className="section" aria-labelledby="ways-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="ways-title" className="display-md">
              Pick how you want to play.
            </h2>
            <p className="lede">Book the whole court, jump into a rotation, or learn the game properly. Four ways in, one set of lines.</p>
          </div>
          <div className="play-grid">
            {ways.map((w, i) => (
              <article key={w.title} className="play-card" data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <div className="play-top">
                  <div className="play-icon">
                    <w.icon width={26} height={26} />
                  </div>
                  <span className="play-num">
                    {String(i + 1).padStart(2, "0")} / {String(ways.length).padStart(2, "0")}
                  </span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
                <Link href={w.href} className="play-link">
                  {w.cta} <Arrow width={16} height={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHOTO BAND ================= */}
      <section className="photo-band" aria-label="Coaching at Pickle Pointe">
        <Image
          src="/images/pickleball-coaching-clinic.jpg"
          alt="Coach feeding balls to a player during a pickleball clinic at Pickle Pointe"
          fill
          sizes="100vw"
          style={{ objectPosition: "50% 30%" }}
        />
        <div className="container photo-band-copy" data-reveal>
          <p>
            Soft hands. Quick feet. <span>Loud rallies.</span>
          </p>
        </div>
      </section>

      {/* ================= HOW BOOKING WORKS ================= */}
      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="steps-title" className="display-md">
              From your phone to the baseline in three steps.
            </h2>
            <p className="lede">No group chats, no back-and-forth. Choose a slot, send the request and we&apos;ll confirm it.</p>
          </div>
          <div className="steps-wrap">
            <span className="steps-ball" aria-hidden="true" />
            <ol className="steps">
              {[
                ["Pick your slot", "Choose a date, start time and how long you want to play."],
                ["Lock it in", "Send your details. We confirm by text or Messenger and share payment options."],
                ["Show up & serve", "Arrive ten minutes early, warm up, and call the score: zero, zero, two."],
              ].map(([t, d], i) => (
                <li key={t} className="step" data-reveal style={{ ["--d" as string]: `${i * 120}ms` }}>
                  <span className="step-num">{i + 1}</span>
                  <div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div style={{ marginTop: 48 }} data-reveal>
            <Link href="/book" className="btn btn-lime btn-lg">
              Start a booking <Arrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className="section" aria-labelledby="loc-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="loc-title" className="display-md">
              Find us in Barangay Conchu, Trece Martires.
            </h2>
            <p className="lede">
              An easy drive from General Trias, Tanza, Indang and Dasmariñas. Look for the dark building with the big blue P.
            </p>
          </div>
          <div className="location-grid">
            <div className="map-frame" data-reveal>
              <iframe
                src={mapsEmbedUrl}
                title="Map showing Pickle Pointe in Barangay Conchu, Trece Martires City, Cavite"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="info-card" data-reveal style={{ ["--d" as string]: "120ms" }}>
              <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden" }}>
                <Image
                  src="/images/pickle-pointe-facility-exterior.jpg"
                  alt="Pickle Pointe building exterior with the logo sign above the entrance"
                  fill
                  sizes="(min-width: 900px) 40vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
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
                <li>
                  <span className="ico">
                    <Clock width={20} height={20} />
                  </span>
                  <span>
                    <small>Hours</small>
                    {site.hours.label}
                  </span>
                </li>
                <li>
                  <span className="ico">
                    <Ball width={20} height={20} />
                  </span>
                  <span>
                    <small>Bring</small>
                    Non-marking court shoes & water
                  </span>
                </li>
              </ul>
              <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Get directions <Arrow width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
        <PillRows
          rows={[
            ["Trece Martires", "General Trias", "Tanza", "Indang", "Dasmariñas", "Naic", "Amadeo", "Silang", "Imus"],
            ["Barkada games", "Company leagues", "Family weekends", "First-timers", "Tournament prep", "Night sessions", "Round robins"],
          ]}
        />
      </section>

      <InstagramStrip />

      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
