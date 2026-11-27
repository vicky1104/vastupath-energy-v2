import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { IMAGES, SERVICES, whatsappLink } from "@/lib/site";
import { Img } from "@/components/Media";
import { WhatsAppIcon } from "@/components/icons";
import { ArchReveal, Reveal } from "@/components/motion";
import { CtaBanner, Faq, PageHero, ProcessSteps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Vastu Services",
  description:
    "Residential, commercial and office, plot, and industrial Vastu; remedies without demolition; and online consultations. Site visits in Ahmedabad, quotes on WhatsApp.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        label="Services"
        lines={["Vastu guidance", <em key="a">for every space</em>]}
        lede="Site visits in Ahmedabad, online consultations for clients anywhere, and a personalised quote for every space, shared on WhatsApp."
        image={IMAGES.courtyard}
        imageAlt="An open courtyard in traditional Indian architecture"
      >
        <div className="btn-row">
          <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Get a quote</a>
          <Link className="btn btn-ghost-light" href="/contact/">Send an enquiry</Link>
        </div>
      </PageHero>

      <nav className="jump" aria-label="Services on this page">
        <div className="wrap">
          {SERVICES.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.title}</a>)}
        </div>
      </nav>

      <section className="bg-paper">
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <article key={s.slug} id={s.slug} className="sd">
              <div className="sd-art">
                <ArchReveal className="arch"><Img src={s.image} alt={s.title} /></ArchReveal>
                <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <Reveal><span className="k">{s.kicker}</span></Reveal>
                <Reveal delay={0.05}><h2 style={{ marginTop: 14 }}>{s.title}</h2></Reveal>
                <Reveal delay={0.1}><p className="lede">{s.description}</p></Reveal>
                <Reveal delay={0.15}>
                  <ul className="ticks">
                    {s.included.map((x) => <li key={x}><Check strokeWidth={1.5} /><span>{x}</span></li>)}
                  </ul>
                </Reveal>
                <Reveal delay={0.2} className="btn-row">
                  <a className="btn btn-olive" href={whatsappLink(`Hi Vastupath Energy, I would like a quote for ${s.title}.`)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> Get a quote for {s.title.split(" ")[0] === "Remedies" ? "remedies" : s.title}
                  </a>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sec bg-sage">
        <div className="wrap process">
          <div className="sticky">
            <Reveal><span className="label">Consultation process</span></Reveal>
            <Reveal delay={0.05}><h2>From first message <em>to remedies</em></h2></Reveal>
            <Reveal delay={0.1}><p className="lede">A simple, transparent process, whether we visit your site in Ahmedabad or review it online.</p></Reveal>
            <Reveal delay={0.2}><Link className="arrow-link" href="/contact/">Start your enquiry <ArrowRight /></Link></Reveal>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="sec">
        <div className="wrap faq-wrap">
          <div className="sticky">
            <Reveal><span className="label">FAQ</span></Reveal>
            <Reveal delay={0.05}><h2>Common <em>questions</em></h2></Reveal>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
