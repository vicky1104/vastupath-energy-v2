"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { BrandMark } from "./icons";

/**
 * Image with a graceful fallback: if the file is missing or blocked, the frame keeps its
 * olive + jaali background and shows the brand mark instead of a broken image.
 */
export function Img({ src, alt, className, eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed)
    return (
      <span className="ph-empty" role="img" aria-label={alt} style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "var(--gold-soft)" }}>
        <BrandMark style={{ width: "28%", maxWidth: 120, opacity: 0.6 }} />
      </span>
    );
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={asset(src)} alt={alt} className={className} loading={eager ? "eager" : "lazy"} decoding="async" onError={() => setFailed(true)} />
  );
}

/** Logo from /public/logo.png, with a typographic fallback until the file is added. */
export function Logo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  if (failed)
    return (
      <span className={`brand${light ? " light" : ""}`}>
        {!compact && <BrandMark className="bm" />}
        <b>Vastupath</b>
        <small>Energy</small>
      </span>
    );
  return (
    <span className={`brand${light ? " light" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={ref} src={asset("/logo.png")} alt="Vastupath Energy" onError={() => setFailed(true)} />
    </span>
  );
}
