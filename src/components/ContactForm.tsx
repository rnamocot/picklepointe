"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Arrow, Mail } from "./Icons";

const topics = [
  ["general", "General question"],
  ["booking", "Booking help"],
  ["coaching", "Coaching & clinics"],
  ["event", "Private / corporate event"],
  ["partnership", "Partnership or sponsorship"],
] as const;

export function ContactForm() {
  const params = useSearchParams();
  const initial = params.get("topic");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(Array.from(fd.entries()).map(([k, v]) => [k, String(v).trim()]));
    const next: Record<string, string> = {};
    if ((body.name ?? "").length < 2) next.name = "Tell us your name.";
    if (!body.contact || body.contact.length < 6) next.contact = "Add a mobile number or email so we can reply.";
    if ((body.message ?? "").length < 5) next.message = "Write a short message.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`c-${Object.keys(next)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-success" role="status">
        <div className="play-icon">
          <Mail width={26} height={26} />
        </div>
        <h2>Message sent.</h2>
        <p>Thanks for reaching out. We usually reply within the day.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <div className="field-row cols-2">
        <div className="field">
          <label htmlFor="c-name">Full name</label>
          <input id="c-name" name="name" autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="c-contact">Mobile or email</label>
          <input id="c-contact" name="contact" autoComplete="email" aria-invalid={!!errors.contact} />
          {errors.contact && <span className="field-error">{errors.contact}</span>}
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="c-topic">Topic</label>
          <select id="c-topic" name="topic" defaultValue={topics.some(([v]) => v === initial) ? initial! : "general"}>
            {topics.map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" placeholder="Dates, headcount, skill level, whatever helps." aria-invalid={!!errors.message} />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>
      </div>
      <button type="submit" className="btn btn-lime btn-lg" style={{ marginTop: 24 }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <Arrow width={18} height={18} />
      </button>
      {status === "error" && (
        <p className="form-status-error" role="alert">
          Something went wrong. Please try again, or call us directly.
        </p>
      )}
    </form>
  );
}
