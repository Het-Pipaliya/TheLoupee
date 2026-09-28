import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bespoke Design | Loupe",
  description: "Design a one-of-a-kind piece with Loupe's in-house designers and goldsmiths.",
};

const steps = [
  {
    number: "01",
    title: "Consultation",
    body: "We start with a conversation — in the atelier, by video, or over email — about how you live, what you love, and what the piece needs to hold.",
  },
  {
    number: "02",
    title: "Design",
    body: "Your designer produces hand-rendered concepts and, where relevant, sources gemstone options for you to compare side by side.",
  },
  {
    number: "03",
    title: "Stone Selection",
    body: "Once a direction is set, we source and present matched stone options, each independently graded before you decide.",
  },
  {
    number: "04",
    title: "Hand Fabrication",
    body: "Our goldsmiths build the piece by hand on the bench — cutting, soldering, and setting each stone individually.",
  },
  {
    number: "05",
    title: "Final Presentation",
    body: "We deliver in person when possible, with a final polish, sizing check, and full documentation of your commission.",
  },
];

export default function BespokePage() {
  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label="Bespoke atelier" className="h-[92vh] min-h-[560px] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-[0.3em] text-paper/80">The Bespoke Experience</p>
            <h1 className="mt-5 max-w-xl font-display text-5xl leading-tight text-paper md:text-6xl">
              A piece that exists nowhere else, made entirely around you.
            </h1>
            <Link href="/contact" className="mt-9 inline-flex btn-primary">
              Begin Your Commission
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-fluid">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl">How Bespoke Works</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-charcoal/70">
                From first sketch to final polish, every bespoke commission
                moves through five stages. Most pieces are completed in
                6&ndash;10 weeks.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
            {steps.map((step) => (
              <RevealItem key={step.number} className="border-t border-line pt-6">
                <span className="font-display text-3xl text-gold">{step.number}</span>
                <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section-space bg-charcoal text-paper">
        <div className="container-fluid grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <PlaceholderImage ratio="landscape" tone="charcoal" label="Sketch to final piece" />
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Common Commissions</p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-5 space-y-3 text-paper/85">
                <li>Custom engagement rings built around a specific stone</li>
                <li>Redesigning inherited or vintage jewelry into new pieces</li>
                <li>Anniversary and push-present commissions</li>
                <li>Matching wedding band sets</li>
                <li>One-of-a-kind statement pieces for a special occasion</li>
              </ul>
            </Reveal>
            <Reveal delay={0.3}>
              <Link href="/contact" className="mt-9 inline-flex btn-primary !bg-gold !text-ink !border-gold hover:!bg-paper">
                Begin Your Commission
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
