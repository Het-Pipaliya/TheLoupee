"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_PRIMARY, telHref } from "@/lib/contact";

const links = [
  { href: "/collections/engagement-rings", label: "Engagement Rings" },
  { href: "/collections", label: "Jewelry" },
  { href: "/high-jewelry", label: "High Jewelry" },
  { href: "/bespoke", label: "Bespoke Design" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 ${transparent ? "text-paper" : "text-ink"}`}
      >
        <span className="h-px w-5 bg-current" />
        <span className="h-px w-5 bg-current" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-fluid flex h-20 items-center justify-between">
              <span className="font-sans font-light tracking-[0.35em] text-ink">LOUPE</span>
              <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="text-2xl leading-none text-ink">
                &times;
              </button>
            </div>
            <nav className="container-fluid mt-6 flex flex-1 flex-col gap-1 overflow-y-auto pb-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-5 font-display text-3xl text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-fluid flex flex-col gap-4 border-t border-line py-8">
              <a href={telHref(PHONE_PRIMARY)} className="btn-primary w-full">
                Call {PHONE_PRIMARY}
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-outline w-full">
                Private Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
