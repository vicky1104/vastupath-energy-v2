import {
  House, Building2, LandPlot, WandSparkles, Video, Hexagon, Flower2, Palette, Gem,
  Image as ImageIcon, Hash, Orbit, Users, Store, HardHat, type LucideIcon,
} from "lucide-react";
import type { ServiceKey } from "@/lib/site";

export const SERVICE_ICONS: Record<ServiceKey, LucideIcon> = {
  home: House,
  office: Building2,
  plot: LandPlot,
  remedies: WandSparkles,
  online: Video,
};

export const REMEDY_ICONS: Record<string, LucideIcon> = {
  yantra: Hexagon,
  murti: Flower2,
  colour: Palette,
  gems: Gem,
  images: ImageIcon,
  numerology: Hash,
  astrology: Orbit,
};

export const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  home: Users,
  biz: Store,
  builder: HardHat,
};

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.71C5.8.71.7 5.8.7 12.07c0 2 .52 3.95 1.52 5.67L.6 23.29l5.68-1.49a11.3 11.3 0 0 0 5.43 1.38h.01c6.26 0 11.35-5.1 11.36-11.36 0-3.03-1.18-5.89-3.33-8.03" />
    </svg>
  );
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Vastu Purusha mandala line art: 9x9 grid, lotus petals, eight directions, glowing centre. */
export function Mandala({ className, spin = true }: { className?: string; spin?: boolean }) {
  const c = 200;
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5);
  const grid = Array.from({ length: 10 }, (_, i) => 110 + i * 20);
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor" aria-hidden="true">
      <g className={spin ? "spin-rev" : undefined}>
        <circle cx={c} cy={c} r="196" strokeWidth="1" />
        <circle cx={c} cy={c} r="188" strokeWidth="0.6" strokeDasharray="2 5" />
        {ticks.map((a) => (
          <line key={a} x1={c} y1={c - 196} x2={c} y2={c - (a % 45 === 0 ? 176 : 188)} strokeWidth={a % 45 === 0 ? 1.6 : 0.6} transform={`rotate(${a} ${c} ${c})`} />
        ))}
      </g>
      <g className={spin ? "spin-slow" : undefined}>
        {petals.map((a) => (
          <path key={a} d={`M${c} ${c - 120} C ${c + 22} ${c - 140}, ${c + 16} ${c - 168}, ${c} ${c - 178} C ${c - 16} ${c - 168}, ${c - 22} ${c - 140}, ${c} ${c - 120} Z`} strokeWidth="0.9" transform={`rotate(${a} ${c} ${c})`} />
        ))}
        <circle cx={c} cy={c} r="120" strokeWidth="1" />
        <rect x={c - 84} y={c - 84} width="168" height="168" strokeWidth="1" transform={`rotate(45 ${c} ${c})`} />
      </g>
      <g strokeWidth="0.7">
        {grid.map((v, i) => (
          <g key={v} opacity={i === 0 || i === 9 ? 1 : 0.55}>
            <line x1={v} y1="110" x2={v} y2="290" />
            <line x1="110" y1={v} x2="290" y2={v} />
          </g>
        ))}
        <rect x="170" y="170" width="60" height="60" strokeWidth="1.4" />
        <circle cx={c} cy={c} r="14" fill="currentColor" fillOpacity="0.35" strokeWidth="1.2" />
      </g>
    </svg>
  );
}
