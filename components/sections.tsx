"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Plus, X } from "lucide-react";
import { FAQS, PROJECTS, SERVICES, STEPS, TESTIMONIALS, whatsappLink, IMAGES } from "@/lib/site";
import { Img } from "./Media";
import { WhatsAppIcon } from "./icons";
import { MaskLines, Parallax, Reveal } from "./motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ───────── Services index with a cursor-following arch preview ───────── */
export function ServiceIndex() {
  const [hover, setHover] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26 });
  const sy = useSpring(y, { stiffness: 220, damping: 26 });

  return (
    <div className="svc-index" onMouseMove={(e) => { x.set(e.clientX + 30); y.set(e.clientY - 180); }} onMouseLeave={() => setHover(null)}>
      {SERVICES.map((s, i) => (
        <Reveal key={s.slug} delay={i * 0.06} y={20}>
          <Link href={`/services/#${s.slug}`} className="svc-row" onMouseEnter={() => setHover(i)}>
            <span className="n">0{i + 1}</span>
            <span className="thumb"><Img src={s.image} alt="" /></span>
            <span>
              <h3>{s.title}</h3>
              <span className="k">{s.kicker}</span>
            </span>
            <p>{s.summary}</p>
            <span className="go" aria-hidden="true"><ArrowRight /></span>
          </Link>
        </Reveal>
      ))}
      <AnimatePresence>
        {hover !== null && (
          <motion.div className="svc-float" style={{ x: sx, y: sy }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.35 }}>
            <AnimatePresence mode="popLayout">
              <motion.div key={hover} style={{ position: "absolute", inset: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Img src={SERVICES[hover].image} alt="" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────── Process steps with a gold rail that fills on scroll ───────── */
export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="steps" ref={ref}>
      <span className="rail"><motion.i style={{ scaleY }} /></span>
      {STEPS.map((s, i) => (
        <Reveal key={s.title} className="step" delay={0.05}>
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ───────── Projects mosaic + lightbox ───────── */
export function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % PROJECTS.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + PROJECTS.length) % PROJECTS.length));
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const alt = (p: (typeof PROJECTS)[number]) => `${p.type} site visit at ${p.title}${p.place ? `, ${p.place}` : ""}`;

  return (
    <>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <button className="proj" onClick={() => setOpen(i)} aria-label={`View photo: ${p.title}`}>
              <Img src={p.image} alt={alt(p)} />
              <span className="open-ic" aria-hidden="true"><Plus /></span>
              <span className="body">
                <span className="t">{p.type}{p.place ? ` · ${p.place}` : ""}</span>
                <h3>{p.title}</h3>
                <p>{p.detail}</p>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={PROJECTS[open].title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button className="x" aria-label="Close" onClick={() => setOpen(null)}><X /></button>
            <motion.figure initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease }} onClick={(e) => e.stopPropagation()}>
              <div className="frame"><Img src={PROJECTS[open].image} alt={alt(PROJECTS[open])} eager /></div>
              <figcaption>
                <b>{PROJECTS[open].title}</b>
                {PROJECTS[open].type}{PROJECTS[open].place ? ` · ${PROJECTS[open].place}` : ""}. {PROJECTS[open].detail}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ───────── Testimonials: one quote at a time ───────── */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const n = TESTIMONIALS.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(1), 7000);
    return () => clearTimeout(t);
  }, [i, paused, reduce, go]);
  const t = TESTIMONIALS[i];

  return (
    <div className="tst" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div>
        <div className="qmark" aria-hidden="true">&ldquo;</div>
        <Reveal><span className="label">Client words</span></Reveal>
        <Reveal delay={0.1}><h2 style={{ marginTop: 20 }}>What our <em>clients</em> say</h2></Reveal>
      </div>
      <div>
        <div className="tst-stage" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure key={i} style={{ margin: 0 }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease }}>
              <blockquote className="tst-quote" style={{ margin: 0 }}>{t.text}</blockquote>
              <figcaption className="tst-who">
                <span className="av">{t.name.charAt(0)}</span>
                <span><b>{t.name}</b>{t.meta && <small>{t.meta}</small>}</span>
                <span className="chip">{t.tag}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="tst-ctrl">
          <button onClick={() => go(-1)} aria-label="Previous review"><ArrowLeft size={20} /></button>
          <span className="count">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
          <button onClick={() => go(1)} aria-label="Next review"><ArrowRight size={20} /></button>
          <span className="bar" aria-hidden="true">
            <motion.i key={`${i}-${paused}`} initial={{ scaleX: 0 }} animate={{ scaleX: paused || reduce ? 0 : 1 }} transition={{ duration: 7, ease: "linear" }} />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────── FAQ ───────── */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {FAQS.map((f, i) => {
        const on = open === i;
        return (
          <div key={f.q} className={`faq-q${on ? " open" : ""}`}>
            <button aria-expanded={on} aria-controls={`fa-${i}`} id={`fq-${i}`} onClick={() => setOpen(on ? null : i)}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              {f.q}
              <span className="pm" aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div id={`fa-${i}`} role="region" aria-labelledby={`fq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} style={{ overflow: "hidden" }}>
                  <p className="a">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ───────── Full-bleed call to action ───────── */
export function CtaBanner({ title, text }: { title?: React.ReactNode; text?: string }) {
  return (
    <section className="cta-banner">
      <Parallax className="bg" amount={50}>
        <Img src={IMAGES.courtyard} alt="" />
      </Parallax>
      <div className="wrap">
        <Reveal><span className="label">Begin your consultation</span></Reveal>
        <Reveal delay={0.1}><h2>{title ?? <>Bring <em>harmony</em> to the spaces you live and work in</>}</h2></Reveal>
        <Reveal delay={0.2}><p>{text ?? "Message us on WhatsApp with details about your home, office, factory or plot, and we'll share a personalised quote."}</p></Reveal>
        <Reveal delay={0.3} className="btn-row">
          <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Get a quote on WhatsApp</a>
          <Link className="btn btn-ghost-light" href="/contact/">Send an enquiry <ArrowUpRight /></Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Inner page hero ───────── */
export function PageHero({ crumb, label, lines, lede, image, imageAlt, children }: { crumb: string; label: string; lines: React.ReactNode[]; lede: string; image: string; imageAlt: string; children?: React.ReactNode }) {
  return (
    <section className="phero">
      <div className="wrap phero-grid">
        <div className="txt">
          <Reveal>
            <div className="crumb"><Link href="/">Home</Link><ChevronRight /><span>{crumb}</span></div>
          </Reveal>
          <Reveal delay={0.05}><span className="label">{label}</span></Reveal>
          <MaskLines lines={lines} delay={0.1} />
          <Reveal delay={0.35}><p className="lede">{lede}</p></Reveal>
          {children && <Reveal delay={0.45}>{children}</Reveal>}
        </div>
        <motion.div className="pic" initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.4, delay: 0.2, ease }}>
          <Img src={image} alt={imageAlt} eager className="kenburns" />
        </motion.div>
      </div>
    </section>
  );
}
