import Link from "next/link";

const navLinks = [
  { href: "/collections/engagement-rings", label: "Engagement" },
  { href: "/collections", label: "Collections" },
  { href: "/bespoke", label: "Bespoke" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-fluid flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide">
          THE LOUPEE
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-label text-charcoal md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden text-xs uppercase tracking-label md:inline-flex btn-outline">
          Book a Consultation
        </Link>
      </div>
      <nav className="container-fluid flex items-center gap-6 overflow-x-auto pb-4 text-xs uppercase tracking-label text-charcoal md:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 transition-colors hover:text-gold">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
