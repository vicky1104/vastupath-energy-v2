"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Soft fade + rise when scrolled into view. */
export function Reveal({ children, delay = 0, className, y = 34 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Headline lines slide up from behind a mask, one after another. */
export function MaskLines({ lines, delay = 0, as = "h1", className }: { lines: ReactNode[]; delay?: number; as?: "h1" | "h2"; className?: string }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {lines.map((l, i) => (
        <span className="line" key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            variants={{ hidden: reduce ? { y: 0 } : { y: "105%" }, show: { y: 0, transition: { duration: 1.1, delay: delay + i * 0.12, ease } } }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Image frame that "opens" upward like a curtain, then settles. */
export function ArchReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.4, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Moves its child slower than the page for a gentle depth effect. */
export function Parallax({ children, className, amount = 60 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-amount, amount]);
  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div style={{ y, height: "100%" }}>{children}</motion.div>
    </div>
  );
}

/** Children appear in sequence. Wrap each child in <Seq.Item>. */
export function Seq({ children, className, gap = 0.1 }: { children: ReactNode; className?: string; gap?: number }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}>
      {children}
    </motion.div>
  );
}
export function SeqItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={{ hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } } }}>
      {children}
    </motion.div>
  );
}
