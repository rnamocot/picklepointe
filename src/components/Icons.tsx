/**
 * Icon set: Phosphor (UI / sport icons) + Simple Icons (official social brand logos).
 * Export names are kept stable so pages don't need to change.
 */
import type { SVGProps } from "react";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";
import {
  ArrowRight,
  ArrowUpRight as PhArrowUpRight,
  CalendarCheck,
  ChalkboardTeacher,
  Check as PhCheck,
  Clock as PhClock,
  CourtBasketball,
  Envelope,
  Lightning,
  MapPin,
  Phone as PhPhone,
  PingPong,
  Plus as PhPlus,
  Sparkle as PhSparkle,
  TennisBall,
  Trophy as PhTrophy,
  UsersThree,
  Warehouse,
} from "@phosphor-icons/react/dist/ssr";
import { siFacebook, siInstagram, siTiktok } from "simple-icons";

type P = SVGProps<SVGSVGElement>;

function wrap(Ph: PhosphorIcon, weight: IconWeight = "duotone") {
  function I({ width = 24, height, className, style }: P) {
    return <Ph size={Number(width ?? height)} weight={weight} className={className} style={style} aria-hidden="true" />;
  }
  return I;
}

// Feature / sport icons (duotone reads well with the neon glow)
export const Paddle = wrap(PingPong);
export const Ball = wrap(TennisBall);
export const Court = wrap(CourtBasketball);
export const Users = wrap(UsersThree);
export const Whistle = wrap(ChalkboardTeacher);
export const Trophy = wrap(PhTrophy);
export const Calendar = wrap(CalendarCheck);
export const Clock = wrap(PhClock);
export const Pin = wrap(MapPin);
export const Phone = wrap(PhPhone);
export const Mail = wrap(Envelope);
export const Bolt = wrap(Lightning);
export const Roof = wrap(Warehouse);
export const Sparkle = wrap(PhSparkle);

// UI glyphs
export const Arrow = wrap(ArrowRight, "bold");
export const ArrowUpRight = wrap(PhArrowUpRight, "bold");
export const Check = wrap(PhCheck, "bold");
export const Plus = wrap(PhPlus, "bold");

// Official brand logos (Simple Icons). Brand colour exposed as --brand for hover states.
function brand(icon: { path: string; hex: string; title: string }) {
  function B({ width = 24, height, className, style }: P) {
    const size = Number(width ?? height);
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={`brand-icon ${className ?? ""}`}
        style={{ ["--brand" as string]: `#${icon.hex}`, ...style }}
      >
        <path d={icon.path} />
      </svg>
    );
  }
  return B;
}

export const Facebook = brand(siFacebook);
export const Instagram = brand(siInstagram);
export const TikTok = brand(siTiktok);
