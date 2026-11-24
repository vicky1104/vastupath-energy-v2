import type { Metadata } from "next";
import { Hammer, HandHeart, Eye, Sparkles } from "lucide-react";
import { TAGLINE } from "@/lib/site";
import { Cta, PageHero, SectionHead } from "@/components/Blocks";
import { Mandala } from "@/components/Icons";
import { Item, Reveal, Stagger } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Harsh Shah, founder of Vastupath Energy, Ahmedabad. Practical, affordable Vastu for modern homes, offices and plots.",
};

const VALUES = [
  { icon: Hammer, title: "Practical", text: "Advice you can act on in real homes and offices, including remedies that need no demolition." },
  { icon: HandHeart, title: "Respectful", text: "We work around your space, your budget and your lifestyle." },
  { icon: Eye, title: "Clear", text: "Plain explanations and transparent quotes, shared directly on WhatsApp." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About us" title="The path to a harmonious space" lead="Vastupath Energy helps families and businesses create spaces that feel calm, balanced and full of positive energy." />

      <section className="section">
        <div className="container founder">
          <Reveal className="founder-art">
            <Mandala className="mandala" />
            <span className="mono">HS</span>
            <span className="cap">Harsh Shah<small>Founder, Vastupath Energy</small></span>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow">Meet the founder</span></Reveal>
            <Reveal delay={0.05}><h2>Harsh Shah</h2></Reveal>
            <div className="copy">
              <Reveal delay={0.1}>
                <p>Harsh founded Vastupath Energy in Ahmedabad with a simple belief: the spaces we live and work in shape how we feel, how we think and how we grow.</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>Vastu Shastra is India&apos;s traditional science of architecture, guiding direction, the five elements and the flow of energy. Harsh brings it to modern homes, offices and plots in a way that is practical and affordable.</p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>Whether you are building a new home or improving the one you have, Harsh visits your site in Ahmedabad or reviews it online, and suggests remedies that avoid structural changes.</p>
              </Reveal>
            </div>
            <Reveal delay={0.25} className="pull"><Sparkles /> {TAGLINE}</Reveal>
          </div>
        </div>
      </section>

      <section className="section sand">
        <div className="container">
          <SectionHead center eyebrow="Our approach" title="What guides our work" />
          <Stagger className="grid g3">
            {VALUES.map(({ icon: I, title, text }) => (
              <Item key={title} className="card">
                <span className="icon-tile"><I /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Cta />
    </>
  );
}
