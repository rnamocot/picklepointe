import Image from "next/image";
import Link from "next/link";
import { Arrow, Check, Court, Trophy, Users, Whistle } from "@/components/Icons";
import { CtaBand, JsonLd, PageHero } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Open Play, Clinics & Pickleball Lessons in Cavite",
  description:
    "Join open play, beginner clinics, private pickleball lessons, leagues and corporate events at Pickle Pointe, Trece Martires City, Cavite.",
  path: "/programs",
  image: "/images/pickleball-coaching-clinic.jpg",
});

const programs = [
  {
    id: "open-play",
    icon: Users,
    title: "Open play",
    text: "Show up, put your paddle in the queue and rotate through games with players at your level. It's the easiest way to meet the local pickleball crowd.",
    points: ["Solo players welcome", "Courts grouped by skill level", "Winners stay, everyone plays"],
    img: "/images/pickleball-players-ready-position.jpg",
    alt: "Players waiting in ready position during open play",
    cta: { href: "/contact", label: "Ask for this week's schedule" },
  },
  {
    id: "clinics",
    icon: Whistle,
    title: "Clinics & private lessons",
    text: "Structured sessions that take you from your first serve to confident kitchen battles. Pick a small-group clinic or book a coach one-on-one.",
    points: ["Beginner basics: serve, return, scoring", "Intermediate: third-shot drop, resets, stacking", "Private and semi-private coaching"],
    img: "/images/pickleball-coaching-clinic.jpg",
    alt: "Coach feeding balls during a pickleball clinic",
    cta: { href: "/book?type=clinic", label: "Book a clinic" },
  },
  {
    id: "rentals",
    icon: Court,
    title: "Court rentals",
    text: "Your court, your crew, your rules. Reserve by the hour for regular doubles, practice sessions or a weekend barkada showdown.",
    points: ["Hourly bookings", "Paddle rentals available", "Recurring weekly slots on request"],
    img: "/images/pickle-pointe-indoor-courts-cavite.jpg",
    alt: "Empty indoor pickleball courts ready for a booking",
    cta: { href: "/book", label: "Reserve a court" },
  },
  {
    id: "events",
    icon: Trophy,
    title: "Leagues, tournaments & private events",
    text: "Round robins, ladder leagues and full-facility buyouts for company team-building, birthdays and community fundraisers.",
    points: ["Corporate team-building packages", "Private tournaments with brackets", "Full or partial facility buyouts"],
    img: "/images/pickleball-open-play-session.jpg",
    alt: "Multiple pickleball games running at once during an event",
    cta: { href: "/contact?topic=event", label: "Plan your event" },
  },
];

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Programs", path: "/programs" }])} />
      <PageHero
        crumb="Programs"
        image="/images/pickleball-coaching-clinic.jpg"
        title={
          <>
            Play more. <span className="hl">Play better.</span>
          </>
        }
        intro="Open play, coaching, court rentals and events. Whatever brought you to pickleball, there's a way to get more of it at Pickle Pointe."
      />

      <section className="section" aria-label="Programs" style={{ paddingTop: 24 }}>
        <div className="container">
          {programs.map((p) => (
            <article key={p.id} id={p.id} className="program">
              <div className="program-media" data-reveal>
                <Image src={p.img} alt={p.alt} fill sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
              <div className="program-body" data-reveal style={{ ["--d" as string]: "120ms" }}>
                <div className="play-icon">
                  <p.icon width={26} height={26} />
                </div>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
                <ul className="ticks">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <Check width={18} height={18} /> {pt}
                    </li>
                  ))}
                </ul>
                <Link href={p.cta.href} className="btn btn-lime">
                  {p.cta.label} <Arrow width={16} height={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure where to start?" text="Tell us your level and schedule and we'll point you to the right session." />
    </>
  );
}
