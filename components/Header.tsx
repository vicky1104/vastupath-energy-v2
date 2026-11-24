"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV, WHATSAPP_URL, PHONE_DISPLAY, LOCATION } from "@/lib/site";
import Logo from "./Logo";
import { Mandala, WhatsAppIcon } from "./Icons";

const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

export default function Header() {
  const pathname = norm(usePathname() || "/");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        className={`site-header${scrolled ? " scrolled" : ""}${!scrolled && pathname !== "/" ? " on-dark" : ""}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="container bar">
          <Logo light={!scrolled && pathname !== "/"} />
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => {
              const active = pathname === n.href;
              return (
                <Link key={n.href} href={n.href} className={`link${active ? " active" : ""}`}>
                  {active && <motion.span layoutId="nav-pill" className="pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                  {n.label}
                </Link>
              );
            })}
            <a className="btn btn-dark" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Get a quote
            </a>
          </nav>
          <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.55, ease: [0.7, 0, 0.2, 1] }}
          >
            <Mandala className="ghost-mandala" />
            <div className="top">
              <Logo light />
              <button className="menu-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <nav aria-label="Mobile">
              {NAV.map((n, i) => (
                <motion.div key={n.href} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.06 }}>
                  <Link href={n.href} className={pathname === n.href ? "active" : ""}>
                    {n.label} <ArrowUpRight size={26} />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="bottom">
              <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Get a quote on WhatsApp
              </a>
              <p style={{ fontSize: 14, opacity: 0.75 }}>{PHONE_DISPLAY} · {LOCATION}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
