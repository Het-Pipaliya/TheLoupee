import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | The Loupee",
  description: "Book a consultation or reach The Loupee's atelier.",
};

export default function ContactPage() {
  return (
    <div className="container-fluid grid gap-16 py-16 lg:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-label text-gold">Contact</p>
        <h1 className="mt-4 font-display text-4xl">Book a Consultation</h1>
        <p className="mt-4 max-w-md text-charcoal/70">
          Tell us what you&apos;re looking for and a member of our team will
          follow up to schedule a private consultation, in the atelier or
          remotely.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>

      <div>
        <PlaceholderImage ratio="landscape" label="The atelier" />
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
            <p className="text-xs uppercase tracking-label text-charcoal/50">Phone</p>
            <p className="mt-2 text-sm text-charcoal/75">(555) 010-1234</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-label text-charcoal/50">Email</p>
            <p className="mt-2 text-sm text-charcoal/75">atelier@theloupee.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
