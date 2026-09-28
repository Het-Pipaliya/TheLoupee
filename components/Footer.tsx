import Link from "next/link";
import Logo from "./Logo";
import { PHONE_ALT, PHONE_PRIMARY, smsHref, telHref } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-fluid grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <Logo wordmarkClassName="text-2xl" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
            Fine jewelry and watches, hand-fabricated in our atelier. Every
            piece — signature or bespoke — is built around the person who
            will wear it.
          </p>
          <form className="mt-8 max-w-xs">
            <label className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/50">Join the List</label>
            <div className="mt-3 flex items-end gap-3 border-b border-paper/30 pb-2 focus-within:border-gold-light">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm placeholder:text-paper/40 focus:outline-none"
              />
              <button type="submit" className="shrink-0 text-xs uppercase tracking-[0.2em] text-gold-light">
                Join
              </button>
            </div>
          </form>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/40">Collections</p>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li><Link href="/collections/engagement-rings" className="nav-link">Engagement Rings</Link></li>
            <li><Link href="/collections/wedding-bands" className="nav-link">Wedding Bands</Link></li>
            <li><Link href="/collections/necklaces" className="nav-link">Necklaces</Link></li>
            <li><Link href="/collections/watches" className="nav-link">Watches</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/40">The House</p>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li><Link href="/about" className="nav-link">Our Story</Link></li>
            <li><Link href="/bespoke" className="nav-link">Bespoke Design</Link></li>
            <li><Link href="/high-jewelry" className="nav-link">High Jewelry</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-paper/40">Client Services</p>
          <ul className="mt-5 space-y-3 text-sm text-paper/70">
            <li><a href={telHref(PHONE_PRIMARY)} className="nav-link">Call {PHONE_PRIMARY}</a></li>
            <li><a href={smsHref(PHONE_PRIMARY)} className="nav-link">Text {PHONE_PRIMARY}</a></li>
            <li><Link href="/contact" className="nav-link">Private Appointments</Link></li>
            <li><Link href="/ring-sizer" className="nav-link">Free Ring Sizer</Link></li>
          </ul>
          <p className="mt-6 text-xs text-paper/40">Alternative &mdash; {PHONE_ALT}</p>
        </div>
      </div>

      <div className="container-fluid border-t border-paper/10 py-10">
        <p className="font-display text-3xl text-paper/90 md:text-4xl">Objects of permanence.</p>
      </div>

      <div className="container-fluid flex flex-col gap-4 border-t border-paper/10 py-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Loupe. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="nav-link">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="nav-link">Pinterest</a>
        </div>
        <p>Private consultations by appointment.</p>
      </div>
    </footer>
  );
}
