"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { NavMenu, SimpleMenu } from "./MegaMenu";
import MobileNav from "./MobileNav";
import { aboutMenu, engagementMenu, jewelryMenu } from "@/lib/nav";
import { isOverlayPage } from "@/lib/overlay";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > 60);
  const transparent = isOverlayPage(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-[background-color,border-color,backdrop-filter] duration-500 ease-out ${
        transparent
          ? "border-b border-transparent bg-transparent text-paper"
          : "border-b border-line bg-paper/90 text-ink backdrop-blur-md"
      }`}
    >
      <div className="container-fluid flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="shrink-0">
          <Logo wordmarkClassName="text-xl md:text-2xl" />
        </Link>
        <nav className="hidden items-center gap-9 text-[0.7rem] uppercase tracking-[0.18em] md:flex">
          <NavMenu label="Engagement" href="/collections/engagement-rings" columns={engagementMenu} />
          <NavMenu label="Jewelry" href="/collections" columns={jewelryMenu} />
          <SimpleMenu label="About" href="/about" links={aboutMenu} />
          <Link href="/high-jewelry" className="nav-link flex items-center py-6">
            High Jewelry
          </Link>
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/contact"
            className={`text-[0.7rem] uppercase tracking-[0.18em] md:inline-flex ${
              transparent ? "btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink" : "btn-outline"
            }`}
          >
            Private Appointment
          </Link>
        </div>
        <MobileNav transparent={transparent} />
      </div>
    </header>
  );
}
