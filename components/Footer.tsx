import Link from "next/link";
import {
  NAV, SERVICES, PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, TAGLINE, whatsappLink, BRAND,
} from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Logo } from "./Media";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <h2>Begin with a <em>conversation.</em><br />We&apos;ll take it from there.</h2>
          <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Message on WhatsApp
          </a>
        </div>

        <div className="foot-cols">
          <div className="about-col">
            <span className="logo-chip"><Logo compact /></span>
            <p>Practical Vastu guidance for homes, offices, factories and plots. Site visits in {LOCATION.split(",")[0]}, online consultations anywhere.</p>
            <p className="serif-note" style={{ marginTop: 18 }}>{TAGLINE}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>{SERVICES.map((s) => <li key={s.slug}><Link href={`/services/#${s.slug}`}>{s.title}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE_DISPLAY}</a></li>
              <li><a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram {INSTAGRAM_HANDLE}</a></li>
              <li>{LOCATION}</li>
              <li>Online consultations worldwide</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
          <span>Photography: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a> contributors</span>
        </div>
      </div>
    </footer>
  );
}
