"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function WaPill() {
  return (
    <motion.a
      className="wa-pill"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <span className="dot"><WhatsAppIcon /></span>
      <span className="txt">Enquire on WhatsApp</span>
    </motion.a>
  );
}
