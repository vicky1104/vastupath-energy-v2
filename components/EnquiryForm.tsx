"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SPACE_TYPES, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

/**
 * Enquiry form that composes a WhatsApp message from the visitor's answers.
 * No server is needed: pressing the button opens WhatsApp with the message ready to send.
 */
export default function EnquiryForm() {
  const [error, setError] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const city = String(f.get("city") || "").trim();
    if (!name || !city) {
      setError("Please add your name and city so we can prepare your quote.");
      return;
    }
    setError("");
    const lines = [
      "Hi Vastupath Energy, I would like a Vastu consultation quote.",
      "",
      `Name: ${name}`,
      f.get("phone") ? `Phone: ${f.get("phone")}` : "",
      `Type of space: ${f.get("space")}`,
      `City / area: ${city}`,
      `Preferred consultation: ${f.get("mode")}`,
      f.get("message") ? `Details: ${f.get("message")}` : "",
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="enquiry" onSubmit={submit} noValidate>
      <span className="label">Enquiry</span>
      <h2>Tell us about your space</h2>
      <p className="muted">Fill in a few details and press the button. WhatsApp opens with your message ready to send, and we&apos;ll reply with a personalised quote.</p>

      <div className="fields">
        <div className="field">
          <label htmlFor="f-name">Your name *</label>
          <input id="f-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone (optional)</label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </div>
        <div className="field">
          <label htmlFor="f-space">Type of space</label>
          <select id="f-space" name="space" defaultValue={SPACE_TYPES[0]}>
            {SPACE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-city">City / area *</label>
          <input id="f-city" name="city" autoComplete="address-level2" required />
        </div>
        <fieldset className="field full" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Preferred consultation</legend>
          <div className="seg">
            <label><input type="radio" name="mode" value="Site visit (Ahmedabad)" defaultChecked /> Site visit (Ahmedabad)</label>
            <label><input type="radio" name="mode" value="Online / video call" /> Online / video call</label>
          </div>
        </fieldset>
        <div className="field full">
          <label htmlFor="f-msg">What help do you need?</label>
          <textarea id="f-msg" name="message" placeholder="For example: new 3BHK flat, east-facing entrance, would like guidance before moving in." />
        </div>
      </div>

      {error && <p className="form-err" role="alert">{error}</p>}
      <div className="btn-row">
        <button type="submit" className="btn btn-olive"><WhatsAppIcon /> Send on WhatsApp <ArrowUpRight /></button>
      </div>
      <p className="form-note">Prefer to talk? Call or message us directly using the details alongside.</p>
    </form>
  );
}
