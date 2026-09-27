import Link from "next/link";
import Logo from "./Logo";
import { NavMenu, SimpleMenu } from "./MegaMenu";
import { aboutMenu, engagementMenu, jewelryMenu } from "@/lib/nav";

const mobileLinks = [
  { href: "/collections/engagement-rings", label: "Engagement" },
  { href: "/collections", label: "Jewelry" },
  { href: "/about", label: "About" },
  { href: "/high-jewelry", label: "High Jewelry" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-fluid flex h-20 items-center justify-between">
        <Link href="/" className="text-ink">
          <Logo wordmarkClassName="text-2xl" />
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-label text-charcoal md:flex">
          <NavMenu label="Engagement" href="/collections/engagement-rings" columns={engagementMenu} />
          <NavMenu label="Jewelry" href="/collections" columns={jewelryMenu} />
          <SimpleMenu label="About" href="/about" links={aboutMenu} />
          <Link href="/high-jewelry" className="py-6 transition-colors hover:text-gold">
            High Jewelry
          </Link>
        </nav>
        <Link href="/contact" className="hidden text-xs uppercase tracking-label md:inline-flex btn-outline">
          Book a Consultation
        </Link>
      </div>
      <nav className="container-fluid flex items-center gap-6 overflow-x-auto pb-4 text-xs uppercase tracking-label text-charcoal md:hidden">
        {mobileLinks.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 transition-colors hover:text-gold">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
