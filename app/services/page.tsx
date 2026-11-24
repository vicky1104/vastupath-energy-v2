import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { Cta, PageHero, QuoteButton, SectionHead, Steps } from "@/components/Blocks";
import { Faq } from "@/components/Interactive";
import { Mandala, SERVICE_ICONS } from "@/components/Icons";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Services",
  description: "Home Vastu, Office Vastu, Plot Vastu, remedies without demolition, and online consultations. Site visits in Ahmedabad; quotes on WhatsApp.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" eyebrow="Services" title="Vastu guidance for every space" lead="Site visits in Ahmedabad, online consultations for clients anywhere, and a personalised quote for every space, shared on WhatsApp.">
        <div className="btn-row"><QuoteButton /></div>
      </PageHero>

      <nav className="svc-nav" aria-label="Services">
        <div className="container">
          {SERVICES.map((s) => {
            const I = SERVICE_ICONS[s.key];
            return <a key={s.slug} href={`#${s.slug}`}><I /> {s.title}</a>;
          })}
        </div>
      </nav>

      <section>
        <div className="container">
          {SERVICES.map((s, i) => {
            const I = SERVICE_ICONS[s.key];
            return (
              <article key={s.slug} id={s.slug} className={`svc${i % 2 ? " flip" : ""}`}>
                <Reveal className="svc-art">
                  <Mandala className="bg" />
                  <span className="n">0{i + 1}</span>
                  <span className="big-ic"><I /></span>
                </Reveal>
                <div>
                  <Reveal><span className="eyebrow">Service {i + 1} of {SERVICES.length}</span></Reveal>
                  <Reveal delay={0.05}><h2>{s.title}</h2></Reveal>
                  <Reveal delay={0.1}><p className="lead">{s.long}</p></Reveal>
                  <ul className="checks">
                    {s.included.map((x, j) => (
                      <Reveal as="li" key={x} delay={0.12 + j * 0.06}>
                        <span><Check /></span>{x}
                      </Reveal>
                    ))}
                  </ul>
                  <Reveal delay={0.3}><QuoteButton label="Get a quote" variant="dark" /></Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section sand">
        <div className="container">
          <SectionHead center eyebrow="Process" title="From first message to remedies" />
          <Steps />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="FAQ" title="Common questions" />
          <Faq />
        </div>
      </section>

      <Cta />
    </>
  );
}
