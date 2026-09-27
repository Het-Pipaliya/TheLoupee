# The Loupee

A fine jewelry & watches website, built with Next.js (App Router), TypeScript, and Tailwind CSS. Styled after modern luxury jewelry houses (e.g. Jean Dousset): minimal navigation, editorial full-bleed imagery, a serif display font paired with a clean sans body, and a warm ivory/gold/charcoal palette.

## What's here

- **Home** (`/`) — hero, collection grid, bespoke banner, featured pieces, brand values.
- **Collections** (`/collections`) — all collections (engagement rings, wedding bands, necklaces, earrings, bracelets, watches).
- **Collection detail** (`/collections/[slug]`) — products within a collection.
- **Product detail** (`/collections/[slug]/[product]`) — full product page with related items.
- **Bespoke** (`/bespoke`) — the custom design process, step by step.
- **Our Story** (`/about`) — brand story and values.
- **Contact** (`/contact`) — consultation request form and atelier info.

Product/collection data lives in `lib/products.ts` — replace with real inventory or wire up to a CMS/commerce backend when ready.

Product and hero imagery are currently rendered as elegant placeholder frames (`components/PlaceholderImage.tsx`) so the site runs with no external image dependencies. Swap these for real photography by replacing `PlaceholderImage` usages with `next/image`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint     # eslint
```

## Next steps

- Add real product photography and swap out `PlaceholderImage`.
- Connect a commerce backend (e.g. Shopify, Medusa, or a custom API) for cart/checkout, or keep the site as a lookbook that drives consultation requests.
- Wire the contact form (`components/ContactForm.tsx`) to an email/CRM service.
- Add a CMS (e.g. Sanity, Contentful) if collections/products need to be editable without code changes.
