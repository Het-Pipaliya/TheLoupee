export type Product = {
  slug: string;
  name: string;
  price: string;
  metal: string;
  description: string;
  details: string[];
  style?: string;
  gender?: "women" | "men" | "unisex";
  bestSeller?: boolean;
  isNew?: boolean;
  readyToShip?: boolean;
  image?: string;
};

export const styleLabels: Record<string, string> = {
  solitaire: "Solitaire",
  bezel: "Bezel",
  halo: "Halo",
  "three-stone": "Three-Stone",
  "colored-pink": "Pink Diamond",
  "colored-yellow": "Yellow Diamond",
};

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
  products: Product[];
};

export const collections: Collection[] = [
  {
    slug: "engagement-rings",
    name: "Engagement Rings",
    tagline: "One-of-a-kind settings, hand-fabricated in our atelier.",
    description:
      "Each engagement ring begins as a sketch and ends as an heirloom. Choose from signature settings or work with our designers to create something entirely your own.",
    image: "/images/products/solstice-solitaire.png",
    products: [
      {
        slug: "solstice-solitaire",
        name: "Solstice Solitaire",
        price: "$6,800",
        metal: "18k Yellow Gold",
        description:
          "A tapered cathedral shank lifts a single round brilliant into the light, its lines polished to a mirror finish.",
        details: ["Center stone sold separately", "Available in 18k gold or platinum", "Hand-fabricated, not cast"],
        style: "solitaire",
        bestSeller: true,
        readyToShip: true,
        image: "/images/products/solstice-solitaire.png",
      },
      {
        slug: "aria-halo",
        name: "Aria Halo",
        price: "$8,200",
        metal: "Platinum",
        description:
          "A micro-pavé halo wraps the center stone in constant light, set on a knife-edge band for a weightless profile.",
        details: ["Pavé-set halo, 0.42ct total", "Platinum construction", "Comfort-fit interior"],
        style: "halo",
        bestSeller: true,
        image: "/images/products/aria-halo.png",
      },
      {
        slug: "meridian-three-stone",
        name: "Meridian Three-Stone",
        price: "$9,600",
        metal: "18k White Gold",
        description:
          "Two tapered baguettes flank the center stone in a composition built for movement and everyday light.",
        details: ["Side stones: 0.60ct total", "18k white gold", "Custom stone shapes available"],
        style: "three-stone",
        image: "/images/products/meridian-three-stone.png",
      },
      {
        slug: "urban-bezel-solitaire",
        name: "Urban Bezel Solitaire",
        price: "$5,600",
        metal: "18k Yellow Gold",
        description:
          "A flush bezel wraps the center stone in a continuous line of metal, built for daily wear without a prong in sight.",
        details: ["Center stone sold separately", "Available in 18k gold or platinum", "Hand-fabricated, not cast"],
        style: "bezel",
        readyToShip: true,
        isNew: true,
        image: "/images/products/urban-bezel-solitaire.png",
      },
      {
        slug: "blush-pink-halo",
        name: "Blush Pink Halo",
        price: "$11,200",
        metal: "18k Rose Gold",
        description:
          "A fancy pink diamond center stone sits inside a bright halo of white diamonds, warmed by a rose gold band.",
        details: ["0.75ct fancy pink center stone", "Independently graded and certified", "18k rose gold"],
        style: "colored-pink",
        isNew: true,
        image: "/images/products/blush-pink-halo.png",
      },
      {
        slug: "golden-canary-solitaire",
        name: "Golden Canary Solitaire",
        price: "$9,800",
        metal: "18k Yellow Gold",
        description:
          "A fancy yellow diamond is set high in a simple four-prong crown, letting its color carry the design.",
        details: ["1.00ct fancy yellow center stone", "Independently graded and certified", "18k yellow gold"],
        style: "colored-yellow",
        isNew: true,
        image: "/images/products/golden-canary-solitaire.png",
      },
    ],
  },
  {
    slug: "wedding-bands",
    name: "Wedding Bands",
    tagline: "Bands designed to sit flush with a lifetime of wear.",
    description:
      "Our bands are fitted to their partner ring and to the hand that will wear them — comfort-curved, hand-finished, and built to last generations.",
    image: "/images/products/low-profile-pave.jpg",
    products: [
      {
        slug: "low-profile-pave",
        name: "Low-Profile Pavé",
        price: "$2,400",
        metal: "18k Rose Gold",
        description: "A slim band set edge-to-edge with pavé diamonds, finished flush for everyday wear.",
        details: ["2mm width", "Pavé-set, 0.35ct total", "Comfort-fit interior"],
        gender: "women",
        image: "/images/products/low-profile-pave.jpg",
      },
      {
        slug: "classic-court",
        name: "Classic Court",
        price: "$1,150",
        metal: "Platinum",
        description: "A rounded, high-polish profile — the quiet counterpart to a statement engagement ring.",
        details: ["3mm width", "Platinum construction", "Sized to fit flush against any shank"],
        gender: "unisex",
        image: "/images/products/classic-court.jpg",
      },
      {
        slug: "brushed-satin-band",
        name: "Brushed Satin Band",
        price: "$1,650",
        metal: "18k Yellow Gold",
        gender: "men",
        description: "A matte, brushed finish with a polished edge for quiet contrast.",
        details: ["4mm width", "Hand-brushed finish", "Available in all metals"],
        image: "/images/products/brushed-satin-band.jpg",
      },
    ],
  },
  {
    slug: "necklaces",
    name: "Necklaces",
    tagline: "Layerable pieces built around a single, considered stone.",
    description:
      "From everyday pendants to statement pieces for evening, each necklace is designed to sit close to the collarbone and catch light with movement.",
    image: "/images/products/tension-bezel-pendant.jpg",
    products: [
      {
        slug: "tension-bezel-pendant",
        name: "Tension Bezel Pendant",
        price: "$3,100",
        metal: "18k White Gold",
        description: "A bezel-set diamond appears to float within its frame, suspended on a fine cable chain.",
        details: ["Adjustable 16\"–18\" chain", "0.30ct center stone", "Spring-ring clasp"],
        image: "/images/products/tension-bezel-pendant.jpg",
      },
      {
        slug: "linked-station-necklace",
        name: "Linked Station Necklace",
        price: "$4,450",
        metal: "18k Yellow Gold",
        description: "Five bezel-set stones punctuate a delicate chain for subtle, continuous sparkle.",
        details: ["18\" chain length", "Five 0.05ct stations", "Lobster clasp"],
        image: "/images/products/linked-station-necklace.jpg",
      },
      {
        slug: "collarbone-bar",
        name: "Collarbone Bar",
        price: "$2,650",
        metal: "Platinum",
        description: "A slim horizontal bar set with a graduated diamond line, designed to sit flat.",
        details: ["Adjustable length", "Graduated pavé, 0.28ct total", "Platinum construction"],
        image: "/images/products/collarbone-bar.png",
      },
    ],
  },
  {
    slug: "earrings",
    name: "Earrings",
    tagline: "From studs worn daily to drops made for evening.",
    description:
      "Our earrings are weighted and balanced by hand so that even the largest drop settles naturally against the ear.",
    image: "/images/products/signature-studs.png",
    products: [
      {
        slug: "signature-studs",
        name: "Signature Studs",
        price: "$3,400",
        metal: "Platinum",
        description: "Four-prong studs engineered for maximum light return with a secure, low-profile back.",
        details: ["0.50ct each, 1.00ct total", "Platinum posts and backs", "Screw-back option available"],
        image: "/images/products/signature-studs.png",
      },
      {
        slug: "cascade-drops",
        name: "Cascade Drops",
        price: "$5,900",
        metal: "18k White Gold",
        description: "A graduated line of bezel-set stones falls just below the earlobe for quiet movement.",
        details: ["1.5\" drop length", "Graduated diamonds, 0.65ct total", "Lever-back closure"],
        image: "/images/products/cascade-drops.png",
      },
      {
        slug: "huggie-hoops",
        name: "Pavé Huggie Hoops",
        price: "$1,900",
        metal: "18k Yellow Gold",
        description: "Close-fitting hoops set edge-to-edge with pavé for everyday wear.",
        details: ["12mm diameter", "Pavé-set, 0.40ct total", "Hinged closure"],
        image: "/images/products/huggie-hoops.jpg",
      },
    ],
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    tagline: "Structured cuffs and fine tennis lines, built to layer.",
    description:
      "Whether stacked or worn alone, each bracelet is fitted for a precise, comfortable drape on the wrist.",
    image: "/images/products/line-tennis-bracelet.jpg",
    products: [
      {
        slug: "line-tennis-bracelet",
        name: "Line Tennis Bracelet",
        price: "$7,200",
        metal: "18k White Gold",
        description: "A continuous line of matched round brilliants set in a flexible, articulated mount.",
        details: ["7\" length, extendable", "3.00ct total weight", "Box clasp with safety"],
        image: "/images/products/line-tennis-bracelet.jpg",
      },
      {
        slug: "sculpted-cuff",
        name: "Sculpted Cuff",
        price: "$4,800",
        metal: "18k Yellow Gold",
        description: "A hand-hammered open cuff with a tapered profile, cast from a hand-carved model.",
        details: ["One size, hand-adjustable", "Hand-hammered finish", "Solid 18k gold"],
        image: "/images/products/sculpted-cuff.jpg",
      },
    ],
  },
  {
    slug: "watches",
    name: "Watches",
    tagline: "Time pieces selected and serviced with the same care as our fine jewelry.",
    description:
      "A small, curated selection of fine watches — new and vintage — chosen for movement quality, provenance, and lasting design.",
    products: [
      {
        slug: "atelier-automatic-36",
        name: "Atelier Automatic 36",
        price: "$5,400",
        metal: "Stainless Steel",
        description: "A 36mm automatic dress watch with a hand-guilloché dial and sapphire crystal.",
        details: ["36mm case", "Automatic movement, 42hr power reserve", "Alligator strap included"],
      },
      {
        slug: "vintage-chronograph-1968",
        name: "Vintage Chronograph, 1968",
        price: "$12,500",
        metal: "18k Gold",
        description: "A fully restored manual-wind chronograph, serviced in-house with original parts where possible.",
        details: ["Serviced and warrantied", "Original dial and hands", "Includes archival documentation"],
      },
    ],
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProduct(collectionSlug: string, productSlug: string) {
  const collection = getCollection(collectionSlug);
  const product = collection?.products.find((p) => p.slug === productSlug);
  return { collection, product };
}

export function getFeaturedProducts(count: number) {
  return collections.flatMap((c) => c.products.map((p) => ({ ...p, collectionSlug: c.slug, collectionName: c.name }))).slice(0, count);
}

export type CollectionFilters = {
  style?: string;
  gender?: string;
  show?: "best-sellers" | "new" | "ready-to-ship";
};

export function filterProducts(products: Product[], filters: CollectionFilters) {
  return products.filter((p) => {
    if (filters.style && p.style !== filters.style) return false;
    if (filters.gender && p.gender !== filters.gender) return false;
    if (filters.show === "best-sellers" && !p.bestSeller) return false;
    if (filters.show === "new" && !p.isNew) return false;
    if (filters.show === "ready-to-ship" && !p.readyToShip) return false;
    return true;
  });
}

export function getAvailableStyles(products: Product[]) {
  const styles = Array.from(new Set(products.map((p) => p.style).filter(Boolean))) as string[];
  return styles.map((style) => ({ value: style, label: styleLabels[style] ?? style }));
}

export function getAvailableGenders(products: Product[]) {
  const genders = Array.from(new Set(products.map((p) => p.gender).filter(Boolean))) as string[];
  const labels: Record<string, string> = { women: "Women's", men: "Men's", unisex: "Unisex" };
  return genders.map((gender) => ({ value: gender, label: labels[gender] ?? gender }));
}
