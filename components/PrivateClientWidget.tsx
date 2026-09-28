"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_ALT, PHONE_PRIMARY, smsHref, telHref } from "@/lib/contact";

export default function PrivateClientWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30 hidden md:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-64 border border-line bg-paper p-6 shadow-[0_24px_60px_-24px_rgba(22,19,15,0.3)]"
          >
            <p className="text-xs uppercase tracking-label text-charcoal/50">Private Client Services</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href={telHref(PHONE_PRIMARY)} className="btn-text justify-between">
                Call {PHONE_PRIMARY}
                <span className="arrow">&rarr;</span>
              </a>
              <a href={smsHref(PHONE_PRIMARY)} className="btn-text justify-between">
                Text Us
                <span className="arrow">&rarr;</span>
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-text justify-between">
                Request an Appointment
                <span className="arrow">&rarr;</span>
              </Link>
            </div>
            <p className="mt-4 border-t border-line pt-3 text-[0.65rem] text-charcoal/50">
              Alternative: {PHONE_ALT}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="btn-primary shadow-[0_16px_40px_-16px_rgba(22,19,15,0.4)]"
      >
        {open ? "Close" : "Private Client Services"}
      </button>
    </div>
  );
}
