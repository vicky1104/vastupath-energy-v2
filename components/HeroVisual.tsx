"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Compass, ShieldCheck } from "lucide-react";
import { Mandala } from "./Icons";

const MandalaScene = dynamic(() => import("./MandalaScene"), {
  ssr: false,
  loading: () => <Mandala className="spin-slow" />,
});

const DIRS = [
  { l: "N", a: 0 }, { l: "NE", a: 45 }, { l: "E", a: 90 }, { l: "SE", a: 135 },
  { l: "S", a: 180 }, { l: "SW", a: 225 }, { l: "W", a: 270 }, { l: "NW", a: 315 },
];

export default function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* compass ring with the eight Vastu directions */}
      <svg className="ring" viewBox="0 0 400 400" aria-hidden="true">
        <g className="spin-rev">
          <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeOpacity=".25" />
          {Array.from({ length: 120 }, (_, i) => (
            <line key={i} x1="200" y1="4" x2="200" y2={i % 15 === 0 ? 16 : 10} stroke="currentColor" strokeOpacity={i % 15 === 0 ? 0.7 : 0.3} transform={`rotate(${i * 3} 200 200)`} />
          ))}
        </g>
        {DIRS.map((d) => {
          const r = 183, rad = ((d.a - 90) * Math.PI) / 180;
          return (
            <text key={d.l} x={200 + Math.cos(rad) * r} y={200 + Math.sin(rad) * r + 4} textAnchor="middle" fontSize={d.l.length > 1 ? 9 : 12} fontWeight="700" fill={d.l === "NE" ? "#e8891c" : "currentColor"} fontFamily="Manrope Variable, sans-serif">
              {d.l}
            </text>
          );
        })}
      </svg>
      <div className="canvas-wrap" style={{ color: "#e7cf96" }}>
        <MandalaScene />
      </div>
      <motion.div className="badge b1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
        <ShieldCheck /> <span>No demolition<small>Practical remedies</small></span>
      </motion.div>
      <motion.div className="badge b2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }}>
        <Compass /> <span>8 directions<small>One balanced space</small></span>
      </motion.div>
    </motion.div>
  );
}
