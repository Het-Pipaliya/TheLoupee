"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const piece = searchParams.get("piece");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-ivory p-8 text-center">
        <p className="font-display text-2xl">Thank you.</p>
        <p className="mt-2 text-sm text-charcoal/70">
          A LOUPE jewelry specialist will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs uppercase tracking-label">
          Name
          <input
            required
            name="name"
            type="text"
            className="border border-line bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal focus:border-gold focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs uppercase tracking-label">
          Phone
          <input
            required
            name="phone"
            type="tel"
            className="border border-line bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal focus:border-gold focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-label">
        Email
        <input
          required
          name="email"
          type="email"
          className="border border-line bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal focus:border-gold focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-label">
        Preferred Contact Method
        <select
          name="preferredContact"
          className="border border-line bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal focus:border-gold focus:outline-none"
        >
          <option>Call</option>
          <option>Text</option>
          <option>Email</option>
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-label">
        Message
        <textarea
          name="message"
          rows={5}
          defaultValue={piece ? `I am interested in ${piece}.` : undefined}
          className="border border-line bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal focus:border-gold focus:outline-none"
        />
      </label>
      <button type="submit" className="btn-primary justify-self-start">
        Request Details
      </button>
    </form>
  );
}
