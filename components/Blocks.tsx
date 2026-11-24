import Link from "next/link";
import { ArrowRight, ChevronRight, MessageCircle, FileText, Compass, ClipboardCheck } from "lucide-react";
import { SERVICES, STEPS, WHATSAPP_URL } from "@/lib/site";
import { Mandala, SERVICE_ICONS, WhatsAppIcon } from "./Icons";
import { Item, Reveal, Stagger } from "./Motion";
import { LogoMark } from "./Logo";

export function SectionHead({ eyebrow, title, lead, center }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <Reveal className={`head${center ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lead, crumb, children }: { eyebrow: string; title: string; lead: string; crumb: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <Mandala className="mandala" />
      <div className="container">
        <Reveal>
          <div className="crumbs"><Link href="/">Home</Link><ChevronRight /> <span>{crumb}</span></div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function QuoteButton({ label = "Get a quote on WhatsApp", variant = "primary" }: { label?: string; variant?: "primary" | "dark" | "ghost" }) {
  return (
    <a className={`btn btn-${variant}`} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon /> {label}
    </a>
  );
}

export function Cta({ title = "Ready to bring harmony to your space?", text = "Message us on WhatsApp with details about your home, office or plot, and we'll share a quote." }: { title?: string; text?: string }) {
  return (
    <section className="section tight">
      <div className="container">
        <Reveal className="cta">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-row">
              <QuoteButton />
              <Link href="/services/" className="btn btn-ghost">Explore services <ArrowRight /></Link>
            </div>
          </div>
          <div className="emblem">
            <Mandala className="m" />
            <LogoMark />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <Stagger className="grid g3">
      {SERVICES.map((s, i) => {
        const Icon = SERVICE_ICONS[s.key];
        return (
          <Item key={s.slug} className={`card${i === 3 ? " feature" : ""}`}>
            <Link href={`/services/#${s.slug}`} style={{ display: "block" }}>
              <span className="icon-tile"><Icon /></span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="more">Learn more <ArrowRight /></span>
            </Link>
          </Item>
        );
      })}
      <Item className="card" >
        <div style={{ display: "grid", gap: 14, height: "100%", alignContent: "center", textAlign: "center", justifyItems: "center" }}>
          <span style={{ width: 90, color: "var(--gold)" }}><Mandala /></span>
          <p style={{ fontFamily: "var(--font-head)", fontSize: 22, color: "var(--maroon)" }}>Not sure which one you need?</p>
          <QuoteButton label="Ask on WhatsApp" variant="dark" />
        </div>
      </Item>
    </Stagger>
  );
}

const STEP_ICONS = [MessageCircle, FileText, Compass, ClipboardCheck];

export function Steps() {
  return (
    <div className="steps">
      <Reveal className="line"><span /></Reveal>
      {STEPS.map((s, i) => {
        const Icon = STEP_ICONS[i];
        return (
          <Reveal key={s.title} className="step" delay={i * 0.15}>
            <span className="dot"><Icon /><b>{i + 1}</b></span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
