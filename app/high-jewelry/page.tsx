import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { PHONE_PRIMARY, telHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "High Jewelry | Loupe",
  description: "One-of-a-kind statement pieces, built by private appointment.",
};

export default function HighJewelryPage() {
  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label="High Jewelry" className="h-[80vh] min-h-[520px] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/80">High Jewelry</p>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-tight text-paper md:text-6xl">
              Singular pieces, built without limits.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-space container-fluid">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">By Private Appointment</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-charcoal/75">
              Our High Jewelry commissions sit outside the standard bespoke
              process — rare and important stones, unconventional materials,
              and construction techniques reserved for pieces with no
              production constraints. Each is priced individually and shown
              only by private appointment at the atelier.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">Price Upon Request</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Private Appointment
              </Link>
              <a href={telHref(PHONE_PRIMARY)} className="btn-outline">
                Call {PHONE_PRIMARY}
              </a>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-20 grid gap-12 border-t border-line pt-16 md:grid-cols-3" stagger={0.12}>
          {[
            {
              title: "Rare Stones",
              body: "Sourced individually — fancy-color diamonds, important colored gemstones, and stones with notable provenance.",
            },
            {
              title: "Unconventional Construction",
              body: "Hinged, articulated, and convertible pieces built without regard to standard production timelines or techniques.",
            },
            {
              title: "Full Documentation",
              body: "Every High Jewelry commission is delivered with full gemological documentation and a certificate of authenticity.",
            },
          ].map((item) => (
            <RevealItem key={item.title}>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
