import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container-fluid grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-wide">THE LOUPEE</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            Fine jewelry and watches, hand-fabricated in our atelier. Every
            piece — signature or bespoke — is built around the person who
            will wear it.
          </p>
          <form className="mt-6 flex max-w-sm gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full border border-paper/30 bg-transparent px-4 py-3 text-sm placeholder:text-paper/50 focus:border-gold-light focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0 !bg-gold !text-ink hover:!bg-gold-light">
              Join
            </button>
          </form>
        </div>

        <div>
          <p className="text-xs uppercase tracking-label text-paper/50">Collections</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li><Link href="/collections/engagement-rings" className="hover:text-gold-light">Engagement Rings</Link></li>
            <li><Link href="/collections/wedding-bands" className="hover:text-gold-light">Wedding Bands</Link></li>
            <li><Link href="/collections/necklaces" className="hover:text-gold-light">Necklaces</Link></li>
            <li><Link href="/collections/watches" className="hover:text-gold-light">Watches</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-label text-paper/50">The House</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li><Link href="/about" className="hover:text-gold-light">Our Story</Link></li>
            <li><Link href="/bespoke" className="hover:text-gold-light">Bespoke Design</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light">Book a Consultation</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light">Visit the Atelier</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-fluid flex flex-col gap-2 border-t border-paper/10 py-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} The Loupee. All rights reserved.</p>
        <p>Private consultations by appointment.</p>
      </div>
    </footer>
  );
}
