import Link from "next/link";
import Reveal from "./Reveal";
import { PHONE_ALT, PHONE_PRIMARY, smsHref, telHref } from "@/lib/contact";

export default function PrivateClientSection() {
  return (
    <section className="section-space border-t border-line bg-charcoal text-paper">
      <div className="container-fluid max-w-2xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Private Client Services</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Let us help you find the right piece.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-paper/75">
            For availability, pricing, custom orders, or private viewings,
            contact our jewelry specialists directly.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={telHref(PHONE_PRIMARY)} className="btn-primary !bg-gold !text-ink !border-gold hover:!bg-paper hover:!text-ink">
              Call {PHONE_PRIMARY}
            </a>
            <a href={smsHref(PHONE_PRIMARY)} className="btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink">
              Text Us
            </a>
            <Link href="/contact" className="btn-outline !border-paper !text-paper hover:!bg-paper hover:!text-ink">
              Request a Private Appointment
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-paper/50">
            Alternative &mdash; {PHONE_ALT}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
