import Link from "next/link";
import { PHONE_ALT, PHONE_PRIMARY, telHref } from "@/lib/contact";

export default function InquiryCTA({ productName }: { productName?: string }) {
  const inquiryHref = productName ? `/contact?piece=${encodeURIComponent(productName)}` : "/contact";

  return (
    <div className="border-t border-line pt-8">
      <Link href={inquiryHref} className="btn-primary w-full sm:w-auto">
        Inquire About This Piece
      </Link>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-charcoal/70">
        <a href={telHref(PHONE_PRIMARY)} className="nav-link">Call or Text {PHONE_PRIMARY}</a>
        <span className="text-charcoal/40">Alternative {PHONE_ALT}</span>
      </div>
      <Link href="/contact" className="btn-text mt-6">
        Book a Private Viewing
        <span className="arrow">&rarr;</span>
      </Link>
    </div>
  );
}
