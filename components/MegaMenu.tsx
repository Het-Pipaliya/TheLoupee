"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavColumn, NavLink } from "@/lib/nav";

const panelMotion = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
};

function MenuItem({ link }: { link: NavLink }) {
  return (
    <Link href={link.href} className="flex items-center gap-2 py-1 text-sm normal-case tracking-normal text-charcoal/75 transition-colors hover:text-ink">
      {link.label}
      {link.badge ? (
        <span className="text-[0.6rem] font-medium uppercase tracking-label text-gold">{link.badge}</span>
      ) : null}
    </Link>
  );
}

export function NavMenu({
  label,
  href,
  columns,
}: {
  label: string;
  href: string;
  columns: NavColumn[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={href} className="nav-link flex items-center py-6" aria-expanded={open}>
        {label}
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full z-50 w-[min(90vw,760px)] -translate-x-1/2 border border-line bg-paper text-ink shadow-[0_24px_60px_-24px_rgba(22,19,15,0.25)]"
            {...panelMotion}
          >
            <div className="grid grid-cols-3 gap-10 p-8">
              {columns.map((column) => (
                <div key={column.heading}>
                  <p className="text-xs uppercase tracking-label text-ink/60">{column.heading}</p>
                  <div className="mt-4 flex flex-col gap-1">
                    {column.links.map((link) => (
                      <MenuItem key={link.label} link={link} />
                    ))}
                  </div>
                  {column.subheading && column.subLinks ? (
                    <>
                      <p className="mt-5 text-xs uppercase tracking-label text-ink/60">{column.subheading}</p>
                      <div className="mt-4 flex flex-col gap-1">
                        {column.subLinks.map((link) => (
                          <MenuItem key={link.label} link={link} />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SimpleMenu({ label, href, links }: { label: string; href: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={href} className="nav-link flex items-center py-6" aria-expanded={open}>
        {label}
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 border border-line bg-paper text-ink shadow-[0_24px_60px_-24px_rgba(22,19,15,0.25)]"
            {...panelMotion}
          >
            <div className="flex flex-col gap-1 p-6">
              {links.map((link) => (
                <MenuItem key={link.label} link={link} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
