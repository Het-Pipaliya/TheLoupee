import { Suspense } from "react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PHONE_ALT, PHONE_PRIMARY, smsHref, telHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | Loupe",
  description: "Speak with a Loupe jewelry specialist or request a private appointment.",
};

export default function ContactPage() {
  return (
    <div className="section-space container-fluid">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-label text-gold">Private Client Services</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Speak With a Jewelry Specialist</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-md text-charcoal/70">
              For availability, pricing, custom orders, or private viewings,
              reach our specialists directly — or share a few details below
              and we&apos;ll follow up personally.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={telHref(PHONE_PRIMARY)} className="btn-primary">
                Call {PHONE_PRIMARY}
              </a>
              <a href={smsHref(PHONE_PRIMARY)} className="btn-outline">
                Text Us
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-charcoal/50">
              Alternative &mdash; {PHONE_ALT}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 border-t border-line pt-10">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <PlaceholderImage ratio="landscape" label="The atelier" />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-label text-charcoal/50">Atelier</p>
              <p className="mt-2 text-sm text-charcoal/75">
                21 Rue de la Paix<br />
                By appointment only
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-label text-charcoal/50">Hours</p>
              <p className="mt-2 text-sm text-charcoal/75">
                Tue&ndash;Sat, 10am&ndash;6pm<br />
                Closed Sun &amp; Mon
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-label text-charcoal/50">Call or Text</p>
              <p className="mt-2 text-sm text-charcoal/75">
                <a href={telHref(PHONE_PRIMARY)} className="nav-link">{PHONE_PRIMARY}</a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-label text-charcoal/50">Alternative</p>
              <p className="mt-2 text-sm text-charcoal/75">
                <a href={telHref(PHONE_ALT)} className="nav-link">{PHONE_ALT}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
