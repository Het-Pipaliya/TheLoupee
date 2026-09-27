import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Bespoke Design | The Loupee",
  description: "Design a one-of-a-kind piece with The Loupee's in-house designers and goldsmiths.",
};

const steps = [
  {
    number: "01",
    title: "Private Consultation",
    body: "We start with a conversation — in the atelier, by video, or over email — about how you live, what you love, and what the piece needs to hold.",
  },
  {
    number: "02",
    title: "Sketch & Stone Selection",
    body: "Your designer produces hand-rendered concepts and, where relevant, sources gemstone options for you to compare side by side.",
  },
  {
    number: "03",
    title: "3D Model & Approval",
    body: "Once a direction is set, we build a CAD model so you can see proportions, sightlines, and stone placement before fabrication begins.",
  },
  {
    number: "04",
    title: "Hand Fabrication",
    body: "Our goldsmiths build the piece by hand on the bench — cutting, soldering, and setting each stone individually.",
  },
  {
    number: "05",
    title: "Final Fitting & Delivery",
    body: "We deliver in person when possible, with a final polish, sizing check, and full documentation of your commission.",
  },
];

export default function BespokePage() {
  return (
    <div>
      <section className="relative">
        <PlaceholderImage ratio="wide" label="Bespoke atelier" className="h-[55vh] w-full" />
        <div className="absolute inset-0 flex items-center bg-ink/30">
          <div className="container-fluid">
            <p className="text-xs uppercase tracking-label text-paper/80">Bespoke Design</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl text-paper md:text-5xl">
              A piece that exists nowhere else, made entirely around you.
            </h1>
            <Link href="/contact" className="mt-8 inline-flex btn-primary">
              Book a Design Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container-fluid py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl">How Bespoke Works</h2>
          <p className="mt-3 text-charcoal/70">
            From first sketch to final polish, every bespoke commission
            moves through five stages. Most pieces are completed in
            6&ndash;10 weeks.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-line pt-6">
              <span className="font-display text-3xl text-gold">{step.number}</span>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-paper">
        <div className="container-fluid grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <PlaceholderImage ratio="landscape" tone="charcoal" label="Sketch to final piece" />
          <div>
            <p className="text-xs uppercase tracking-label text-gold-light">Common Commissions</p>
            <ul className="mt-4 space-y-3 text-paper/85">
              <li>Custom engagement rings built around a specific stone</li>
              <li>Redesigning inherited or vintage jewelry into new pieces</li>
              <li>Anniversary and push-present commissions</li>
              <li>Matching wedding band sets</li>
              <li>One-of-a-kind statement pieces for a special occasion</li>
            </ul>
            <Link href="/contact" className="mt-8 inline-flex btn-primary !bg-gold !text-ink hover:!bg-gold-light">
              Start Your Commission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
