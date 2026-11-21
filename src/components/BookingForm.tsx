"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { peso, rates } from "@/lib/site";
import { Arrow, Calendar } from "./Icons";

type Kind = "court" | "open-play" | "clinic";

const rate = (id: string) => rates.find((r) => r.id === id)!;
const HOURS = Array.from({ length: 17 }, (_, i) => i + 6); // 6 AM to 10 PM starts
const fmtHour = (h: number) => `${((h + 11) % 12) + 1}:00 ${h < 12 ? "AM" : "PM"}`;

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function isPrime(date: string, hour: number | null) {
  if (!date || hour === null) return false;
  const day = new Date(`${date}T00:00:00`).getDay();
  return day === 0 || day === 6 || hour >= 16;
}

export function BookingForm() {
  const params = useSearchParams();
  const initial = params.get("type");
  const [kind, setKind] = useState<Kind>(initial === "open-play" || initial === "clinic" ? initial : "court");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState<number | null>(null);
  const [duration, setDuration] = useState(1);
  const [players, setPlayers] = useState(4);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [ref, setRef] = useState("");

  const prime = isPrime(date, hour);
  const estimate = useMemo(() => {
    if (kind === "court") return rate(prime ? "prime" : "off-peak").price * duration;
    return rate(kind).price * players;
  }, [kind, prime, duration, players]);

  const kindLabel = kind === "court" ? (prime ? "Prime-time court" : "Off-peak court") : rate(kind).name;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const next: Record<string, string> = {};
    if (!date) next.date = "Pick a date.";
    if (hour === null) next.hour = "Pick a start time.";
    if (name.length < 2) next.name = "Tell us your name.";
    if (!/^[+\d][\d\s-]{6,}$/.test(phone)) next.phone = "Enter a valid mobile number.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`f-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          rate: kind === "court" ? (prime ? "prime" : "off-peak") : kind,
          date,
          hour,
          duration: kind === "court" ? duration : null,
          players,
          name,
          phone,
          email: String(fd.get("email") ?? "").trim(),
          notes: String(fd.get("notes") ?? "").trim(),
          estimate,
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setRef(data.reference ?? "");
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-success" role="status">
        <div className="play-icon">
          <Calendar width={26} height={26} />
        </div>
        <h2>Request received{ref ? ` (${ref})` : ""}.</h2>
        <p>
          We&apos;ve got your {kindLabel.toLowerCase()} request for {new Date(`${date}T00:00:00`).toLocaleDateString("en-PH", { weekday: "long", month: "long", day: "numeric" })} at{" "}
          {hour !== null && fmtHour(hour)}. We&apos;ll confirm availability and payment details by text shortly.
        </p>
        <Link href="/" className="btn btn-ghost">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form className="form-layout" onSubmit={onSubmit} noValidate>
      <div className="form-card">
        <fieldset>
          <legend>
            <span>1</span> What are you booking?
          </legend>
          <div className="chip-group" role="radiogroup" aria-label="Booking type">
            {(
              [
                ["court", "Court rental"],
                ["open-play", "Open play"],
                ["clinic", "Group clinic"],
              ] as const
            ).map(([v, l]) => (
              <label key={v}>
                <input type="radio" name="kind" value={v} checked={kind === v} onChange={() => setKind(v)} />
                <span>{l}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <span>2</span> When do you want to play?
          </legend>
          <div className="field">
            <label htmlFor="f-date">Date</label>
            <input
              id="f-date"
              type="date"
              name="date"
              min={todayISO()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "e-date" : undefined}
              required
            />
            {errors.date && (
              <span id="e-date" className="field-error">
                {errors.date}
              </span>
            )}
          </div>
          <div className="field" style={{ marginTop: 20 }}>
            <span className="label" id="l-hour">
              Start time
            </span>
            <div className="chip-group" role="radiogroup" aria-labelledby="l-hour">
              {HOURS.map((h, i) => (
                <label key={h}>
                  <input
                    id={i === 0 ? "f-hour" : undefined}
                    type="radio"
                    name="hour"
                    value={h}
                    checked={hour === h}
                    onChange={() => setHour(h)}
                  />
                  <span>{fmtHour(h)}</span>
                </label>
              ))}
            </div>
            {errors.hour && <span className="field-error">{errors.hour}</span>}
          </div>
          {kind === "court" && (
            <div className="field" style={{ marginTop: 20 }}>
              <span className="label" id="l-dur">
                How long?
              </span>
              <div className="chip-group" role="radiogroup" aria-labelledby="l-dur">
                {[1, 1.5, 2, 3].map((d) => (
                  <label key={d}>
                    <input type="radio" name="duration" value={d} checked={duration === d} onChange={() => setDuration(d)} />
                    <span>
                      {d} {d === 1 ? "hour" : "hours"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
          <div className="field" style={{ marginTop: 20 }}>
            <span className="label" id="l-players">
              Players
            </span>
            <div className="chip-group" role="radiogroup" aria-labelledby="l-players">
              {(kind === "court" ? [2, 3, 4] : [1, 2, 3, 4, 5, 6]).map((n) => (
                <label key={n}>
                  <input type="radio" name="players" value={n} checked={players === n} onChange={() => setPlayers(n)} />
                  <span>{n}</span>
                </label>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset style={{ marginBottom: 0 }}>
          <legend>
            <span>3</span> Who&apos;s booking?
          </legend>
          <div className="field-row cols-2">
            <div className="field">
              <label htmlFor="f-name">Full name</label>
              <input id="f-name" name="name" autoComplete="name" aria-invalid={!!errors.name} required />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="f-phone">Mobile number</label>
              <input
                id="f-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="09XX XXX XXXX"
                aria-invalid={!!errors.phone}
                required
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-email">Email (optional)</label>
              <input id="f-email" name="email" type="email" autoComplete="email" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-notes">Notes (optional)</label>
              <textarea id="f-notes" name="notes" placeholder="Paddle rentals, skill level, recurring weekly slot…" />
            </div>
          </div>
        </fieldset>
      </div>

      <aside className="form-aside">
        <div className="summary-card">
          <h2>Your booking</h2>
          <dl>
            <div>
              <dt>Type</dt>
              <dd>{kindLabel}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{date ? new Date(`${date}T00:00:00`).toLocaleDateString("en-PH", { weekday: "short", month: "short", day: "numeric" }) : "Not set"}</dd>
            </div>
            <div>
              <dt>Start</dt>
              <dd>{hour !== null ? fmtHour(hour) : "Not set"}</dd>
            </div>
            {kind === "court" && (
              <div>
                <dt>Duration</dt>
                <dd>{duration} hr</dd>
              </div>
            )}
            <div>
              <dt>Players</dt>
              <dd>{players}</dd>
            </div>
          </dl>
          <div className="summary-total">
            <span className="muted">Estimate</span>
            <strong>{peso(estimate)}</strong>
          </div>
          <button type="submit" className="btn btn-lime btn-lg" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send booking request"} <Arrow width={18} height={18} />
          </button>
          {status === "error" && (
            <p className="form-status-error" role="alert">
              Something went wrong. Please try again or <Link href="/contact" className="text-link">contact us</Link>.
            </p>
          )}
          <p className="summary-fine">Your slot is held once we confirm availability and payment. Final price may vary for holidays and add-ons.</p>
        </div>
      </aside>
    </form>
  );
}
