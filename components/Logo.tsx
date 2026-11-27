"use client";

import Link from "next/link";
import { useImgFallback } from "./useImgFallback";
import { asset } from "@/lib/asset";
import { Mandala } from "./Icons";

/**
 * Shows the brand logo from /public/logo.png.
 * If the file is missing it falls back to a mandala emblem + wordmark, so the layout never breaks.
 */
export default function Logo({ light = false, height }: { light?: boolean; height?: number }) {
  const { ref, failed, onError } = useImgFallback();
  return (
    <Link href="/" className={`logo${light ? " light" : ""}`} aria-label="Vastupath Energy, home">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={asset("/logo.png")} alt="Vastupath Energy" style={height ? { height } : undefined} onError={onError} />
      ) : (
        <>
          <span style={{ width: 44, height: 44, color: light ? "#d9c9a3" : "#2e2925", display: "inline-block" }}>
            <Mandala spin={false} />
          </span>
          <span className="word">
            <b>Vastupath Energy</b>
            <small>Vastu consultation</small>
          </span>
        </>
      )}
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  const { ref, failed, onError } = useImgFallback();
  if (failed)
    return (
      <span className={`fallback ${className ?? ""}`} style={{ color: "#2e2925", aspectRatio: "1", display: "grid" }}>
        <Mandala spin={false} />
      </span>
    );
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={asset("/logo.png")} alt="Vastupath Energy" className={className} onError={onError} />;
}
