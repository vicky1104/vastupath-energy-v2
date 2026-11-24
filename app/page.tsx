import Link from "next/link";
import { ArrowRight, MapPin, Globe, ShieldCheck, MessageCircle, Hash, Orbit } from "lucide-react";
import { AUDIENCES, REMEDIES, TAGLINE } from "@/lib/site";
import HeroVisual from "@/components/HeroVisual";
import { Cta, QuoteButton, SectionHead, ServiceCards, Steps } from "@/components/Blocks";
import { ProjectGallery, Testimonials } from "@/components/Interactive";
import { AUDIENCE_ICONS, Mandala, REMEDY_ICONS } from "@/components/Icons";
import { Item, Reveal, Stagger } from "@/components/Motion";

const FEATURES = [
  { icon: MapPin, t: "Site visits in Ahmedabad" },
  { icon: Globe, t: "Online consultations anywhere" },
  { icon: ShieldCheck, t: "Remedies without demolition" },
  { icon: MessageCircle, t: "Quote shared on WhatsApp" },
];

export default function HomePage() {
  const [first, ...rest] = TAGLINE.split(", ");
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <Reveal><span className="eyebrow">Vastu consultation · Ahmedabad</span></Reveal>
            <Reveal delay={0.1}>
              <h1>{first},<br /><em>{rest.join(", ")}</em></h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lead">Practical Vastu guidance for homes, offices and plots, with remedies that need no demolition.</p>
            </Reveal>
            <Reveal delay={0.3} className="btn-row">
              <QuoteButton />
              <Link href="/services/" className="btn btn-ghost">Explore services <ArrowRight /></Link>
            </Reveal>
            <Stagger className="feature-list" gap={0.1}>
              {FEATURES.map(({ icon: I, t }) => (
                <Item key={t} className="fi"><span className="ic"><I /></span>{t}</Item>
              ))}
            </Stagger>
          </div>
          <HeroVisual />
        </div>
        <div className="scroll-cue" aria-hidden="true"><i />Scroll</div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we offer" title="Vastu for every space" lead="Whether you're planning a new home, setting up an office or buying land, we help you get it right with Vastu Shastra." />
          <ServiceCards />
        </div>
      </section>

      {/* REMEDIES */}
      <section className="section dark">
        <div className="container remedy-wrap">
          <div>
            <SectionHead eyebrow="Our remedies" title="How we treat your space" lead="Every remedy is chosen for your space, and none of them needs demolition." />
            <Reveal className="remedy-visual"><Mandala /></Reveal>
          </div>
          <Stagger className="remedy-list" gap={0.07}>
            {REMEDIES.map((r) => {
              const I = REMEDY_ICONS[r.key];
              return (
                <Item key={r.key} className="remedy">
                  <span className="ic"><I /></span>
                  <div><h3>{r.title}</h3><p>{r.text}</p></div>
                </Item>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CUSTOMISED */}
      <section className="section sand">
        <div className="container custom">
          <div>
            <SectionHead eyebrow="Customised Vastu" title="Customised Vastu for your space and your stars" lead="Every consultation is tailored to your space, your needs and your goals, and can follow your numerology or astrology." />
            <Reveal><QuoteButton label="Ask for customised Vastu" variant="dark" /></Reveal>
          </div>
          <Stagger className="pair" gap={0.15}>
            <Item className="opt">
              <span className="num"><Hash size={40} /></span>
              <div><h3>Vastu by numerology</h3><p className="muted">Remedies matched to your personal numbers.</p></div>
            </Item>
            <Item className="opt">
              <span className="num"><Orbit size={40} /></span>
              <div><h3>Vastu by astrology</h3><p className="muted">Remedies planned around your birth chart.</p></div>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Who we help" title="For families, businesses and builders" />
          <Stagger className="grid g3">
            {AUDIENCES.map((a, i) => {
              const I = AUDIENCE_ICONS[a.key];
              return (
                <Item key={a.key} className="card aud">
                  <span className="big" aria-hidden="true">{["I", "II", "III"][i]}</span>
                  <span className="icon-tile"><I /></span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </Item>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section sand">
        <div className="container">
          <SectionHead center eyebrow="How it works" title="Simple steps to a balanced space" lead="It all starts with a WhatsApp message." />
          <Steps />
        </div>
      </section>

      {/* OUR WORK */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 20, flexWrap: "wrap" }}>
            <SectionHead eyebrow="Our work" title="Sites we have visited" />
            <Reveal><Link href="/projects/" className="btn btn-ghost" style={{ marginBottom: 56 }}>View all projects <ArrowRight /></Link></Reveal>
          </div>
          <ProjectGallery />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section sand" style={{ overflow: "hidden" }}>
        <div className="container">
          <SectionHead center eyebrow="Testimonials" title="What our clients say" />
        </div>
        <Testimonials />
      </section>

      <Cta />
    </>
  );
}
