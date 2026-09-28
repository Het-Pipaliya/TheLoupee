import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { PHONE_PRIMARY, telHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Our Story | Loupe",
  description: "The story, atelier, and values behind Loupe.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label="The atelier" className="h-[80vh] min-h-[520px] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/80">Our Story</p>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-tight text-paper md:text-6xl">
              Three generations of goldsmiths, one bench.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-space container-fluid grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">A House Built on the Bench</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-charcoal/75">
              Loupe began as a single goldsmith&apos;s bench and a
              conviction that fine jewelry should be made, not merely
              assembled. Today our designers, gemologists, and goldsmiths
              still work under one roof, so that every commission &mdash;
              signature or bespoke &mdash; passes through the same hands from
              first sketch to final polish.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 leading-relaxed text-charcoal/75">
              We take our name from the loupe: the small lens every goldsmith
              keeps close, used to check a setting, a facet, a seam &mdash;
              proof that the smallest details are the ones that last.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <PlaceholderImage ratio="landscape" label="Founder at the bench" />
        </Reveal>
      </section>

      <section className="section-space border-t border-line bg-ivory">
        <div className="container-fluid">
          <RevealGroup className="grid gap-14 md:grid-cols-3" stagger={0.12}>
            {[
              {
                title: "Hand-Fabricated",
                body: "Made individually in our atelier — cut, soldered, and set by hand, not cast from a mold.",
              },
              {
                title: "Traceable Stones",
                body: "Every diamond and gemstone is independently graded and selected for provenance and quality.",
              },
              {
                title: "Lifetime Care",
                body: "Cleaning, inspection, and complimentary resizing for the life of your piece.",
              },
            ].map((v) => (
              <RevealItem key={v.title} className="border-t border-line pt-6">
                <h3 className="text-sm uppercase tracking-[0.2em]">{v.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-charcoal/70">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-space container-fluid">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">Visit the Atelier</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-lg text-charcoal/70">
            Consultations are held by appointment in our atelier, or remotely
            for clients further afield. We&apos;ll walk you through materials,
            stone options, and past commissions before any design work begins.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={telHref(PHONE_PRIMARY)} className="btn-primary">
              Call {PHONE_PRIMARY}
            </a>
            <Link href="/contact" className="btn-outline">
              Schedule a Private Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
