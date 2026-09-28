"use client";

import { usePathname } from "next/navigation";
import { isOverlayPage } from "@/lib/overlay";

export default function HeaderSpacer() {
  const pathname = usePathname();
  if (isOverlayPage(pathname)) return null;
  return <div className="h-20 md:h-24" />;
}
