import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Our Story | Loupe",
  description: "The story, atelier, and values behind Loupe.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label="The atelier" className="h-[50vh] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-label text-paper/80">Our Story</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl text-paper md:text-5xl">
              Three generations of goldsmiths, one bench.
            </h1>
          </div>
        </div>
      </section>

      <section className="container-fluid grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl">A House Built on the Bench</h2>
          <p className="mt-4 leading-relaxed text-charcoal/75">
            Loupe began as a single goldsmith&apos;s bench and a
            conviction that fine jewelry should be made, not merely
            assembled. Today our designers, gemologists, and goldsmiths
            still work under one roof, so that every commission &mdash;
            signature or bespoke &mdash; passes through the same hands from
            first sketch to final polish.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/75">
            We take our name from the loupe: the small lens every goldsmith
            keeps close, used to check a setting, a facet, a seam &mdash;
            proof that the smallest details are the ones that last.
          </p>
        </div>
        <PlaceholderImage ratio="landscape" label="Founder at the bench" />
      </section>

      <section className="border-t border-line bg-ivory">
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-3">
          {[
            {
              title: "Provenance",
              body: "Every diamond and gemstone we set is independently graded and fully traceable to its source.",
            },
            {
              title: "Craft",
              body: "Our goldsmiths train for years on the bench before ever setting a stone for a client.",
            },
            {
              title: "Care",
              body: "Every piece we make includes lifetime inspection, cleaning, and complimentary resizing.",
            },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-fluid py-20">
        <h2 className="font-display text-3xl">Visit the Atelier</h2>
        <p className="mt-3 max-w-lg text-charcoal/70">
          Consultations are held by appointment in our atelier, or remotely
          for clients further afield. We&apos;ll walk you through materials,
          stone options, and past commissions before any design work begins.
        </p>
      </section>
    </div>
  );
}
