import Link from "next/link";
import { PHONE_PRIMARY, smsHref, telHref } from "@/lib/contact";

export default function MobileContactBar({ productName }: { productName?: string }) {
  const inquiryHref = productName ? `/contact?piece=${encodeURIComponent(productName)}` : "/contact";

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-paper text-center text-[0.65rem] uppercase tracking-[0.14em] shadow-[0_-8px_24px_-16px_rgba(22,19,15,0.3)] md:hidden">
      <a href={telHref(PHONE_PRIMARY)} className="border-r border-line py-4">
        Call
      </a>
      <a href={smsHref(PHONE_PRIMARY)} className="border-r border-line py-4">
        Text
      </a>
      <Link href={inquiryHref} className="bg-ink py-4 text-paper">
        Inquire
      </Link>
    </div>
  );
}
