export type NavLink = { label: string; href: string; badge?: string };
export type NavColumn = { heading: string; links: NavLink[]; subheading?: string; subLinks?: NavLink[] };

export const engagementMenu: NavColumn[] = [
  {
    heading: "Engagement Rings",
    links: [
      { label: "Best Sellers", href: "/collections/engagement-rings?show=best-sellers" },
      { label: "All Settings", href: "/collections/engagement-rings" },
      { label: "New Arrivals", href: "/collections/engagement-rings?show=new" },
      { label: "Solitaire", href: "/collections/engagement-rings?style=solitaire" },
      { label: "Bezel", href: "/collections/engagement-rings?style=bezel" },
      { label: "Halo", href: "/collections/engagement-rings?style=halo" },
      { label: "Three-Stone", href: "/collections/engagement-rings?style=three-stone" },
      { label: "Ready-to-Ship", href: "/collections/engagement-rings?show=ready-to-ship" },
    ],
    subheading: "Colored Diamonds",
    subLinks: [
      { label: "Pink Diamond Rings", href: "/collections/engagement-rings?style=colored-pink" },
      { label: "Yellow Diamond Rings", href: "/collections/engagement-rings?style=colored-yellow" },
      { label: "Free Ring Sizer", href: "/ring-sizer" },
    ],
  },
  {
    heading: "Wedding Bands",
    links: [
      { label: "Women's Wedding Bands", href: "/collections/wedding-bands?gender=women" },
      { label: "Men's Wedding Bands", href: "/collections/wedding-bands?gender=men" },
    ],
  },
  {
    heading: "Signature Settings",
    links: [
      { label: "Solstice", href: "/collections/engagement-rings/solstice-solitaire" },
      { label: "Aria", href: "/collections/engagement-rings/aria-halo" },
      { label: "Meridian", href: "/collections/engagement-rings/meridian-three-stone" },
      { label: "Urban", href: "/collections/engagement-rings/urban-bezel-solitaire", badge: "NEW" },
      { label: "Blush", href: "/collections/engagement-rings/blush-pink-halo", badge: "NEW" },
      { label: "Golden", href: "/collections/engagement-rings/golden-canary-solitaire", badge: "NEW" },
    ],
  },
];

export const jewelryMenu: NavColumn[] = [
  {
    heading: "Shop by Category",
    links: [
      { label: "Necklaces", href: "/collections/necklaces" },
      { label: "Earrings", href: "/collections/earrings" },
      { label: "Bracelets", href: "/collections/bracelets" },
      { label: "Watches", href: "/collections/watches" },
      { label: "All Jewelry", href: "/collections" },
    ],
  },
];

export const aboutMenu: NavLink[] = [
  { label: "Our Story", href: "/about" },
  { label: "Bespoke Design", href: "/bespoke" },
  { label: "Visit the Atelier", href: "/contact" },
];
