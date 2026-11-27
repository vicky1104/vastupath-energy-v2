import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Brand mark: an Indian arch holding a bindu, standing on a plinth. */
export function BrandMark(p: P) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...line} {...p}>
      <path d="M10 42V22a14 14 0 0 1 28 0v20" />
      <path d="M15 42V23a9 9 0 0 1 18 0v19" />
      <path d="M24 26l4 4-4 4-4-4z" />
      <path d="M6 42h36" />
      <path d="M24 6v2" />
    </svg>
  );
}

export const RemedyIcons: Record<string, (p: P) => React.ReactElement> = {
  yantra: (p) => (
    <svg viewBox="0 0 56 56" aria-hidden="true" {...line} {...p}>
      <rect x="6" y="6" width="44" height="44" />
      <circle cx="28" cy="28" r="17" />
      <path d="M28 13 41 35H15Z" />
      <path d="M28 43 15 21h26Z" />
      <circle cx="28" cy="28" r="1.6" fill="currentColor" />
    </svg>
  ),
  murti: (p) => (
    <svg viewBox="0 0 56 56" aria-hidden="true" {...line} {...p}>
      <path d="M14 30a14 14 0 0 1 28 0" />
      <circle cx="28" cy="22" r="5" />
      <path d="M20 40c2-6 5-9 8-9s6 3 8 9" />
      <path d="M10 44c6 0 9-4 18-4s12 4 18 4" />
      <path d="M18 44c3-3 6-4 10-4s7 1 10 4" />
    </svg>
  ),
  colour: (p) => (
    <svg viewBox="0 0 56 56" aria-hidden="true" {...line} {...p}>
      <circle cx="28" cy="28" r="20" />
      <path d="M28 8v40M8 28h40M13.9 13.9l28.2 28.2M42.1 13.9 13.9 42.1" />
      <circle cx="28" cy="28" r="7" fill="var(--ivory, #f8f4ea)" />
    </svg>
  ),
  gems: (p) => (
    <svg viewBox="0 0 56 56" aria-hidden="true" {...line} {...p}>
      <path d="M16 12h24l9 12-21 22L7 24Z" />
      <path d="M7 24h42M22 12l-4 12 10 22 10-22-4-12" />
    </svg>
  ),
  crystals: (p) => (
    <svg viewBox="0 0 56 56" aria-hidden="true" {...line} {...p}>
      <path d="M22 46V18l6-10 6 10v28" />
      <path d="M12 46V28l5-8 5 8" />
      <path d="M34 28l5-7 5 7v18" />
      <path d="M8 46h40" />
    </svg>
  ),
  images: (p) => (
    <svg viewBox="0 0 56 56" aria-hidden="true" {...line} {...p}>
      <rect x="8" y="8" width="40" height="40" />
      <path d="M16 48V28a12 12 0 0 1 24 0v20" />
      <circle cx="28" cy="26" r="4" />
      <path d="M22 40h12" />
    </svg>
  ),
};

export function WhatsAppIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.71C5.8.71.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.29l5.68-1.49a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}

export function InstagramIcon(p: P) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Rotating seal text ring used beside the hero image. */
export function SealRing({ text }: { text: string }) {
  return (
    <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="seal-path" d="M60 60m-48 0a48 48 0 1 1 96 0a48 48 0 1 1-96 0" />
      </defs>
      <text fill="#3d4a2e" fontSize="10.2" letterSpacing="3.1" fontFamily="Jost Variable, Jost, sans-serif">
        <textPath href="#seal-path">{text}</textPath>
      </text>
    </svg>
  );
}
