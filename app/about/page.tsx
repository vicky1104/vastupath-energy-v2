import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hammer, HandHeart, Eye } from "lucide-react";
import { FOUNDER, IMAGES, TAGLINE } from "@/lib/site";
import { Img } from "@/components/Media";
import { ArchReveal, Reveal, Seq, SeqItem } from "@/components/motion";
import { CtaBanner, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Harsh Shah, founder of Vastupath Energy in Ahmedabad: practical, affordable Vastu for modern homes, offices, factories and plots.",
};

const VALUES = [
  { icon: Hammer, title: "Practical", text: "Advice you can act on in real homes and offices, including remedies that need no demolition." },
  { icon: HandHeart, title: "Respectful", text: "We work around your space, your budget and your lifestyle." },
  { icon: Eye, title: "Clear", text: "Plain explanations and transparent quotes, shared directly on WhatsApp." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        label="About us"
        lines={["The path to a", <em key="a">harmonious</em>, "space"]}
        lede="Vastupath Energy helps families and businesses create spaces that feel calm, balanced and full of positive energy."
        image={IMAGES.pillars}
        imageAlt="Carved palace pillar and window, Jodhpur"
      />

      <section className="sec bg-paper">
        <div className="wrap story">
          <div className="portrait">
            <ArchReveal className="arch">
              <Img src={IMAGES.courtyardAgra} alt="" />
              <span className="mono" style={{ background: "rgba(42,51,32,.55)" }}>HS</span>
            </ArchReveal>
            <Reveal className="cap" delay={0.2}>
              <b>{FOUNDER}</b>
              <small>Founder, Vastupath Energy · Ahmedabad</small>
            </Reveal>
          </div>
          <div className="copy">
            <Reveal><span className="label">Meet the founder</span></Reveal>
            <Reveal delay={0.05}><h2 style={{ color: "var(--olive)" }}>{FOUNDER}</h2></Reveal>
            <Reveal delay={0.1}>
              <p className="drop">
                Harsh founded Vastupath Energy in Ahmedabad with a simple belief: the spaces we live and work in shape how we feel, how we think and how we grow.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Vastu Shastra is India&apos;s traditional science of architecture, guiding direction, the five elements and the flow of energy. Harsh brings it to modern homes, offices, factories and plots in a way that is practical and affordable.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Whether you are building something new or improving the space you already have, Harsh visits your site in Ahmedabad or reviews it online, and suggests remedies that avoid structural changes.
              </p>
            </Reveal>
            <Reveal delay={0.25}><blockquote>{TAGLINE}.</blockquote></Reveal>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head split">
            <div style={{ display: "grid", gap: 22 }}>
              <Reveal><span className="label">Our approach</span></Reveal>
              <Reveal delay={0.05}><h2 style={{ color: "var(--olive)" }}>What guides <em>our work</em></h2></Reveal>
            </div>
            <Reveal delay={0.1}><Link className="arrow-link" href="/services/">See how we can help <ArrowRight /></Link></Reveal>
          </div>
          <Seq className="values" gap={0.12}>
            {VALUES.map(({ icon: I, title, text }) => (
              <SeqItem key={title} className="val">
                <I strokeWidth={1.1} />
                <h3>{title}</h3>
                <p>{text}</p>
              </SeqItem>
            ))}
          </Seq>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
