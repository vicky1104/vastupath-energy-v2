import Link from "next/link";
import { ArrowRight, MapPin, Globe2, ShieldCheck, MessageCircle, Hash, Orbit } from "lucide-react";
import { ALIGNMENTS, AUDIENCES, FOUNDER, IMAGES, REMEDIES, whatsappLink } from "@/lib/site";
import { Img } from "@/components/Media";
import { RemedyIcons, SealRing, BrandMark, WhatsAppIcon } from "@/components/icons";
import { ArchReveal, MaskLines, Parallax, Reveal, Seq, SeqItem } from "@/components/motion";
import { CtaBanner, Faq, ProcessSteps, Projects, ServiceIndex, Testimonials } from "@/components/sections";

const FACTS = [
  { icon: MapPin, b: "Site visits", t: "In person across Ahmedabad" },
  { icon: Globe2, b: "Online", t: "Video consultations worldwide" },
  { icon: ShieldCheck, b: "No demolition", t: "Practical, structure-safe remedies" },
  { icon: MessageCircle, b: "WhatsApp quote", t: "Personalised for your space" },
];
const ALIGN_ICONS = { numerology: Hash, astrology: Orbit } as const;

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <Reveal><span className="label">Vastu consultation · Ahmedabad &amp; online</span></Reveal>
            <MaskLines lines={["Vastu today,", <em key="h">harmony</em>, "tomorrow."]} delay={0.15} className="" />
            <Reveal delay={0.55}>
              <p className="lede">
                Practical Vastu Shastra guidance for homes, offices, factories and plots, with thoughtful remedies that never need demolition.
              </p>
            </Reveal>
            <Reveal delay={0.7} className="btn-row">
              <a className="btn btn-olive" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Get a quote on WhatsApp</a>
              <Link className="btn btn-line" href="/services/">Explore services <ArrowRight /></Link>
            </Reveal>
            <Seq className="hero-facts" gap={0.08}>
              {FACTS.map(({ icon: I, b, t }) => (
                <SeqItem key={b}><I strokeWidth={1.3} /><span><b>{b}</b>{t}</span></SeqItem>
              ))}
            </Seq>
          </div>

          <div className="hero-art">
            <ArchReveal className="arch framed main" delay={0.2}>
              <Img src={IMAGES.haveli} alt="Mubarak Mahal, a haveli in the City Palace courtyard, Jaipur" eager className="kenburns" />
            </ArchReveal>
            <ArchReveal className="arch mini" delay={0.7}>
              <Img src={IMAGES.pillars} alt="Carved palace pillar and window, Jodhpur" eager />
            </ArchReveal>
            <Reveal className="seal" delay={1}>
              <SealRing text="VASTUPATH ENERGY • AHMEDABAD • ONLINE • " />
              <BrandMark className="core" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Intro / philosophy ── */}
      <section className="sec bg-paper">
        <div className="wrap intro">
          <div className="intro-art">
            <ArchReveal className="arch a1"><Img src={IMAGES.courtyardAgra} alt="A courtyard in Agra with a monument beyond" /></ArchReveal>
            <ArchReveal className="arch a2" delay={0.2}><Img src={IMAGES.livingRoom} alt="A calm, modern Indian living room" /></ArchReveal>
            <Reveal className="tag" delay={0.4}>Ancient wisdom, modern spaces</Reveal>
          </div>
          <div className="copy">
            <Reveal><span className="label">The Vastupath approach</span></Reveal>
            <Reveal delay={0.05}><h2>Vastu Shastra, made <em>practical</em></h2></Reveal>
            <Reveal delay={0.1}>
              <p className="big">The spaces we live and work in shape how we feel, how we think and how we grow.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Vastu Shastra is India&apos;s traditional science of architecture, guiding direction, the five elements and the flow of energy.
                Vastupath Energy brings it to modern homes, offices, factories and plots in a way that is practical and affordable, with
                remedies that work with your existing structure.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="sign">
              <span className="av">HS</span>
              <span><b>{FOUNDER}</b><small>Founder, Vastupath Energy · Ahmedabad</small></span>
            </Reveal>
            <Reveal delay={0.25}><Link className="arrow-link" href="/about/">Read our story <ArrowRight /></Link></Reveal>
          </div>
        </div>
      </section>

      {/* ── Services index ── */}
      <section className="sec bg-olive">
        <div className="wrap">
          <div className="sec-head split">
            <div style={{ display: "grid", gap: 22 }}>
              <Reveal><span className="label">Our services</span></Reveal>
              <MaskLines as="h2" lines={["Vastu for every", <em key="s">kind of space</em>]} />
            </div>
            <Reveal delay={0.2}>
              <p className="lede">Whether you are planning a new home, setting up an office, running a factory or buying land, we help you get it right with Vastu Shastra.</p>
            </Reveal>
          </div>
          <ServiceIndex />
          <Reveal delay={0.1}><div style={{ marginTop: 44 }}><Link className="arrow-link" href="/services/">View all service details <ArrowRight /></Link></div></Reveal>
        </div>
      </section>

      {/* ── Remedies ── */}
      <section className="sec">
        <div className="wrap rem-wrap">
          <div className="sticky">
            <Reveal><span className="label">Vastu remedies</span></Reveal>
            <MaskLines as="h2" lines={["Subtle remedies,", <em key="r">lasting balance</em>]} />
            <Reveal delay={0.2}><p className="lede">Every remedy is chosen for your space and placed with care, and none of them needs demolition.</p></Reveal>
            <Reveal delay={0.3}><Link className="arrow-link" href="/services/#remedies-without-demolition">Remedies without demolition <ArrowRight /></Link></Reveal>
          </div>
          <Seq className="rem-grid" gap={0.08}>
            {REMEDIES.map((r, i) => {
              const Icon = RemedyIcons[r.key];
              return (
                <SeqItem key={r.key} className="rem">
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ic"><Icon /></span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </SeqItem>
              );
            })}
          </Seq>
        </div>
      </section>

      {/* ── Numerology & astrology ── */}
      <section className="align">
        <Parallax className="pic" amount={40}>
          <Img src={IMAGES.floorPlan} alt="Architectural floor plan drawing" />
        </Parallax>
        <div className="panel">
          <Reveal><span className="label">Personalised Vastu</span></Reveal>
          <Reveal delay={0.05}><h2>For your space, <em>and your stars</em></h2></Reveal>
          <Reveal delay={0.1}><p className="lede">Every consultation is tailored to your space, your needs and your goals, and can be combined with numerology or astrology.</p></Reveal>
          {ALIGNMENTS.map((a, i) => {
            const I = ALIGN_ICONS[a.key as keyof typeof ALIGN_ICONS];
            return (
              <Reveal key={a.key} className="item" delay={0.15 + i * 0.1}>
                <span className="ic"><I strokeWidth={1.3} /></span>
                <div><h3>{a.title}</h3><p>{a.text}</p></div>
              </Reveal>
            );
          })}
          <Reveal delay={0.4}>
            <a className="btn btn-olive" href={whatsappLink("Hi Vastupath Energy, I would like a personalised Vastu consultation with numerology / astrology.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Ask for personalised Vastu</a>
          </Reveal>
        </div>
      </section>

      {/* ── Who we help ── */}
      <section className="sec bg-ivory2">
        <div className="wrap">
          <div className="sec-head center">
            <Reveal><span className="label">Who we help</span></Reveal>
            <MaskLines as="h2" lines={["For families, businesses", <em key="w">and builders</em>]} />
          </div>
          <div className="aud-grid">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} className="aud" delay={i * 0.12}>
                <div className="arch"><Img src={a.image} alt="" /></div>
                <div className="meta">
                  <span className="n">0{i + 1}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sec bg-sage">
        <div className="wrap process">
          <div className="sticky">
            <Reveal><span className="label">How it works</span></Reveal>
            <MaskLines as="h2" lines={["From one message", <em key="p">to a balanced space</em>]} />
            <Reveal delay={0.2}><p className="lede">It all starts with a WhatsApp message. Site visits are in Ahmedabad; everywhere else, we consult online.</p></Reveal>
            <Reveal delay={0.3}><a className="btn btn-olive" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Start on WhatsApp</a></Reveal>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head split">
            <div style={{ display: "grid", gap: 22 }}>
              <Reveal><span className="label">Our work</span></Reveal>
              <MaskLines as="h2" lines={["Sites we have", <em key="o">visited</em>]} />
            </div>
            <Reveal delay={0.2}><Link className="arrow-link" href="/projects/">All projects &amp; stories <ArrowRight /></Link></Reveal>
          </div>
          <Projects />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="sec bg-olive">
        <div className="wrap"><Testimonials /></div>
      </section>

      {/* ── FAQ ── */}
      <section className="sec bg-paper">
        <div className="wrap faq-wrap">
          <div className="sticky">
            <Reveal><span className="label">Questions</span></Reveal>
            <MaskLines as="h2" lines={["Common", <em key="q">questions</em>]} />
            <Reveal delay={0.2}><p className="lede">Can&apos;t find your answer? Message us on WhatsApp and we&apos;ll help.</p></Reveal>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
