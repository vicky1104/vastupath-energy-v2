import type { Metadata } from "next";
import { ArrowUpRight, Phone, MapPin, Globe2, FileText, Camera, Compass, Home as HomeIcon } from "lucide-react";
import { IMAGES, INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/sections";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Message Vastupath Energy on WhatsApp for a Vastu consultation quote: +91 89800 39992. Site visits in Ahmedabad, online consultations worldwide.",
};

const SHARE = [
  { icon: HomeIcon, t: "Type of space: home, office, factory or plot" },
  { icon: MapPin, t: "Your city or area" },
  { icon: FileText, t: "Floor plan or plot layout" },
  { icon: Camera, t: "A few photos of the space" },
  { icon: Compass, t: "Direction of the main entrance" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        label="Contact"
        lines={["Let's talk", <em key="c">on WhatsApp</em>]}
        lede="WhatsApp is the quickest way to reach us. Tell us about your space and we'll share a personalised quote."
        image={IMAGES.bedroom}
        imageAlt="A calm bedroom interior"
      >
        <div className="btn-row">
          <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat now</a>
        </div>
      </PageHero>

      <section className="sec bg-paper">
        <div className="wrap contact">
          <Reveal><EnquiryForm /></Reveal>

          <div>
            <Reveal><span className="label">Direct contact</span></Reveal>
            <div className="cards" style={{ marginTop: 24 }}>
              <Reveal delay={0.05}>
                <a className="ci" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <span className="ic"><WhatsAppIcon /></span>
                  <span><small>WhatsApp</small><b>{PHONE_DISPLAY}</b></span>
                  <ArrowUpRight className="go" />
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <a className="ci" href={`tel:${PHONE_TEL}`}>
                  <span className="ic"><Phone strokeWidth={1.4} /></span>
                  <span><small>Call</small><b>{PHONE_DISPLAY}</b></span>
                  <ArrowUpRight className="go" />
                </a>
              </Reveal>
              <Reveal delay={0.15}>
                <a className="ci" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <span className="ic"><InstagramIcon /></span>
                  <span><small>Instagram</small><b>{INSTAGRAM_HANDLE}</b></span>
                  <ArrowUpRight className="go" />
                </a>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="ci">
                  <span className="ic"><MapPin strokeWidth={1.4} /></span>
                  <span><small>Site visits</small><b>{LOCATION}</b></span>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="ci">
                  <span className="ic"><Globe2 strokeWidth={1.4} /></span>
                  <span><small>Online consultations</small><b>India &amp; abroad</b></span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3} className="share">
              <h3>What to share with us</h3>
              <ul>{SHARE.map(({ icon: I, t }) => <li key={t}><I strokeWidth={1.4} />{t}</li>)}</ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
