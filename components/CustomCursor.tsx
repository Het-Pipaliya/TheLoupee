"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return supportsHover && !reducedMotion;
  });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {label && (
        <motion.div
          className="pointer-events-none fixed z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-ink/85 text-[0.65rem] uppercase tracking-[0.15em] text-paper"
          style={{ left: pos.x - 32, top: pos.y - 32 }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
