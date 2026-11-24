"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, ChevronDown, MapPin, Quote, Star, X } from "lucide-react";
import { FAQS, PROJECTS, TESTIMONIALS, WHATSAPP_URL } from "@/lib/site";
import { Mandala, WhatsAppIcon } from "./Icons";
import { useImgFallback } from "./useImgFallback";
import { asset } from "@/lib/asset";
import { Item, Stagger } from "./Motion";

/* ---------- project photo with graceful fallback ---------- */
function Photo({ src, alt }: { src: string; alt: string }) {
  const { ref, failed, onError } = useImgFallback();
  if (failed) return <div className="ph-fallback"><Mandala /></div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={asset(src)} alt={alt} loading="lazy" onError={onError} />;
}

const altOf = (p: (typeof PROJECTS)[number]) =>
  `${p.type} site visit: ${p.title}${p.place ? `, ${p.place}` : ""} · ${p.detail}`;

export function ProjectGallery({ limit }: { limit?: number }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, items.length]);

  return (
    <>
      <Stagger className="grid g3" gap={0.12}>
        {items.map((p, i) => (
          <Item key={p.title} className="proj">
            <div className="ph"><Photo src={p.image} alt={altOf(p)} /></div>
            <div className="body">
              <span className="tag"><Building2 /> {p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.detail}</p>
              {p.place && <span className="place"><MapPin /> {p.place}</span>}
            </div>
            <button className="open" aria-label={`View photo: ${p.title}`} onClick={() => setOpen(i)} />
          </Item>
        ))}
      </Stagger>
      <AnimatePresence>
        {open !== null && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <button className="close" aria-label="Close" onClick={() => setOpen(null)}><X /></button>
            <motion.figure initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} onClick={(e) => e.stopPropagation()}>
              <div style={{ position: "relative", minHeight: 240, borderRadius: 16, overflow: "hidden" }}>
                <Photo src={items[open].image} alt={altOf(items[open])} />
              </div>
              <figcaption>
                <b>{items[open].title}</b>
                {items[open].type}{items[open].place ? ` · ${items[open].place}` : ""} · {items[open].detail}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- testimonials: endless marquee ---------- */
export function Testimonials() {
  const list = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="marquee">
      <div className="track">
        {list.map((t, i) => (
          <article className="quote" key={i} aria-hidden={i >= TESTIMONIALS.length}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="stars">{Array.from({ length: 5 }, (_, s) => <Star key={s} />)}</div>
              <Quote className="qmark" />
            </div>
            <p>{t.text}</p>
            <div className="who">
              <span className="av">{t.name.charAt(0)}</span>
              <span>
                <b>{t.name}</b>
                {t.meta && <small>{t.meta}</small>}
              </span>
              <span className="chip">{t.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/* ---------- FAQ accordion ---------- */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Stagger className="faq">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <Item key={f.q} className={`faq-item${isOpen ? " open" : ""}`}>
            <button aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
              {f.q}
              <span className="pm"><ChevronDown size={20} /></span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                  <p className="ans">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Item>
        );
      })}
    </Stagger>
  );
}

/* ---------- floating WhatsApp button ---------- */
export function WhatsAppFab() {
  return (
    <motion.a
      className="wa-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
    >
      <WhatsAppIcon />
      <span className="tip">Chat on WhatsApp</span>
    </motion.a>
  );
}
