export const OVERLAY_PATTERNS = [/^\/$/, /^\/bespoke$/, /^\/about$/, /^\/high-jewelry$/, /^\/collections\/[^/]+$/];

export function isOverlayPage(pathname: string) {
  return OVERLAY_PATTERNS.some((pattern) => pattern.test(pathname));
}
