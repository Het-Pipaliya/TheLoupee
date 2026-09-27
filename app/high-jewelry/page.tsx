import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "High Jewelry | Loupe",
  description: "One-of-a-kind statement pieces, built by private appointment.",
};

export default function HighJewelryPage() {
  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label="High Jewelry" className="h-[55vh] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-label text-paper/80">High Jewelry</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl text-paper md:text-5xl">
              Singular pieces, built without limits.
            </h1>
          </div>
        </div>
      </section>

      <section className="container-fluid py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl">By Private Appointment</h2>
          <p className="mt-4 leading-relaxed text-charcoal/75">
            Our High Jewelry commissions sit outside the standard bespoke
            process — rare and important stones, unconventional materials,
            and construction techniques reserved for pieces with no
            production constraints. Each is priced and designed individually,
            shown only by private appointment at the atelier.
          </p>
          <Link href="/contact" className="mt-8 inline-flex btn-primary">
            Request a Private Appointment
          </Link>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-16 md:grid-cols-3">
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
            <div key={item.title}>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
