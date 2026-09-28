"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ image }: { image: StaticImageData }) {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <Image
          src={image}
          alt="Model wearing layered diamond rings and earrings"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container-fluid">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="text-xs uppercase tracking-[0.32em] text-paper/85"
          >
            Fine Jewelry &amp; Watches
          </motion.p>

          <h1 className="mt-6 max-w-3xl overflow-hidden font-display text-5xl leading-[1.08] text-paper md:text-7xl">
            {["Jewelry built around", "the person who wears it."].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.9 + i * 0.15, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.5, ease }}
            className="mt-7 max-w-md text-paper/85"
          >
            Hand-fabricated engagement rings, fine jewelry, and curated
            watches — designed in dialogue with you, made in our atelier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.85, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/collections/engagement-rings" className="btn-primary">
              Shop Engagement Rings
            </Link>
            <Link href="/bespoke" className="btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink">
              Begin Your Commission
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.2, ease }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/70 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.28em]">Scroll</span>
        <span className="h-10 w-px bg-paper/50" />
      </motion.div>
    </section>
  );
}
