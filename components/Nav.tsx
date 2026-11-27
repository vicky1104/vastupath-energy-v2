"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_HANDLE, INSTAGRAM_URL, whatsappLink, SERVICE_AREA } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./Media";

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

export default function Nav() {
  const path = norm(usePathname() || "/");
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setStuck(window.scrollY > 50);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  const left = NAV.slice(0, 3);
  const right = NAV.slice(3);
  const link = (n: (typeof NAV)[number]) => (
    <Link key={n.href} href={n.href} className={`nl${path === n.href ? " on" : ""}`} aria-current={path === n.href ? "page" : undefined}>
      {n.label}
    </Link>
  );

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div className="group">
            <span className="hide-sm"><MapPin /> {SERVICE_AREA}</span>
          </div>
          <div className="group">
            <a href={`tel:${PHONE_TEL}`}><Phone /> {PHONE_DISPLAY}</a>
            <a className="hide-sm" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><InstagramIcon /> {INSTAGRAM_HANDLE}</a>
          </div>
        </div>
      </div>

      <header className={`nav${stuck ? " stuck" : ""}`}>
        <div className="wrap">
          <nav className="nav-links" aria-label="Primary">{left.map(link)}</nav>
          <Link href="/" aria-label="Vastupath Energy, home"><Logo /></Link>
          <nav className="nav-links right" aria-label="Secondary">
            {right.map(link)}
            <a className="btn btn-olive" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Book a consultation
            </a>
          </nav>
          <button className="menu-toggle" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="site-drawer">
            <Menu /> Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="drawer-veil" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside
              id="site-drawer"
              className="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dtop">
                <Logo light compact />
                <button className="close" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
              </div>
              <nav aria-label="Mobile">
                {NAV.map((n, i) => (
                  <motion.div key={n.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.06 }}>
                    <Link href={n.href} className={path === n.href ? "on" : ""}>
                      <small>0{i + 1}</small>{n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="dfoot">
                <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Book a consultation <ArrowUpRight />
                </a>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                <span>{SERVICE_AREA}</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
