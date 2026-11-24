import type { Metadata } from "next";
import { MapPin, FileText, Camera, HelpCircle, Phone, Home } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PageHero, QuoteButton } from "@/components/Blocks";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { Item, Reveal, Stagger } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Message Vastupath Energy on WhatsApp for a Vastu consultation quote. +91 89800 39992 · Ahmedabad and online.",
};

const SHARE = [
  { icon: Home, t: "Type of space (home, office, plot)" },
  { icon: MapPin, t: "Your city or area" },
  { icon: FileText, t: "Floor plan or plot layout" },
  { icon: Camera, t: "A few photos" },
  { icon: HelpCircle, t: "What help you need" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact" title="Let's talk on WhatsApp" lead="WhatsApp is the quickest way to reach us. Tell us about your space and we'll share a personalised quote." />

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="wa-card">
            <h2><span className="wa"><WhatsAppIcon /></span> Message us on WhatsApp</h2>
            <p className="num">{PHONE_DISPLAY}</p>
            <p className="muted">To help us understand your space, please share:</p>
            <Stagger className="share-list" gap={0.06}>
              {SHARE.map(({ icon: I, t }) => (
                <Item key={t} className="si"><I /> {t}</Item>
              ))}
            </Stagger>
            <p className="muted" style={{ marginBottom: 24, display: "flex", gap: 8, alignItems: "center" }}><MapPin size={17} color="var(--saffron)" /> Site visits are available in Ahmedabad; everywhere else we consult online.</p>
            <div className="btn-row">
              <QuoteButton label="Start a WhatsApp chat" />
              <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}><Phone /> Call {PHONE_DISPLAY}</a>
            </div>
          </Reveal>

          <div className="side-cards">
            <Reveal delay={0.1}>
              <a className="info" href={`tel:${PHONE_TEL}`}>
                <span className="ic"><Phone /></span>
                <span><small>Call</small><b>{PHONE_DISPLAY}</b></span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a className="info" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <span className="ic"><InstagramIcon /></span>
                <span><small>Instagram</small><b>{INSTAGRAM_HANDLE}</b></span>
              </a>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="info dark-card">
                <span className="ic"><MapPin /></span>
                <span><small>Location</small><b>{LOCATION}</b></span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
