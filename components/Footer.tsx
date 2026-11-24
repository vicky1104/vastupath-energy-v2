import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import {
  NAV, SERVICES, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, TAGLINE,
} from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { LogoMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div className="brand">
            <span className="logo-box"><LogoMark /></span>
            <p className="tag">{TAGLINE}</p>
            <p>Vastu consultation for homes, offices and plots in Ahmedabad, and online for clients anywhere.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/#${s.slug}`}>{s.title}</Link></li>)}</ul>
          </div>
          <div>
            <h3>Get in touch</h3>
            <ul>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp {PHONE_DISPLAY}</a></li>
              <li><a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {INSTAGRAM_HANDLE}</a></li>
              <li><span style={{ display: "inline-flex", gap: 10 }}><MapPin style={{ width: 17, height: 17, color: "var(--saffron-2)", flex: "none", marginTop: 3 }} /> {LOCATION}</span></li>
            </ul>
          </div>
        </div>
        <div className="big-word" aria-hidden="true">Vastupath</div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} Vastupath Energy. All rights reserved.</span>
          <span>{TAGLINE}</span>
        </div>
      </div>
    </footer>
  );
}
