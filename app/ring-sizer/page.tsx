import Link from "next/link";
import type { Metadata } from "next";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { PHONE_PRIMARY, telHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Free Ring Sizer | Loupe",
  description: "Find your ring size at home, or book a fitting at our atelier.",
};

const steps = [
  {
    title: "Measure an existing ring",
    body: "Take a ring that already fits the intended finger. Measure its inner diameter in millimeters, or bring it to a local jeweler for a quick, free reading.",
  },
  {
    title: "Use a string or strip of paper",
    body: "Wrap it snugly around the base of the finger, mark where it overlaps, then measure that length against a millimeter ruler to get the circumference.",
  },
  {
    title: "Mind the time of day",
    body: "Fingers are typically smallest in the morning and largest in the evening or heat. Measure a few times across the day and use the middle reading.",
  },
  {
    title: "Confirm with us",
    body: "Send us your measurement before we begin fabrication — we'll confirm sizing and can send a printable sizer or arrange an in-atelier fitting.",
  },
];

export default function RingSizerPage() {
  return (
    <div className="section-space container-fluid">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-xs uppercase tracking-label text-gold">Free Ring Sizer</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">Find Your Ring Size</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-charcoal/70">
            Every ring we make is sized to the finger that will wear it. Use
            any of the methods below to get a working measurement, then
            confirm it with us before your order is fabricated — resizing
            within the first year is always complimentary.
          </p>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-10 sm:grid-cols-2" stagger={0.12}>
        {steps.map((step, i) => (
          <RevealItem key={step.title} className="border-t border-line pt-6">
            <span className="font-display text-2xl text-gold">0{i + 1}</span>
            <h2 className="mt-2 font-display text-xl">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-20 border-t border-line pt-12 text-center">
        <p className="font-display text-2xl">Not sure? We&apos;ll size it for you.</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-charcoal/70">
          Speak with a specialist and we&apos;ll take a precise, in-person
          measurement — no obligation to order.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Book a Fitting
          </Link>
          <a href={telHref(PHONE_PRIMARY)} className="btn-text">
            Call {PHONE_PRIMARY}
          </a>
        </div>
      </Reveal>
    </div>
  );
}
