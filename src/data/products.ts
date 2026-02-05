export type ProductBadgeTone = "red" | "green" | "orange";

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description?: string;
  price: number;
  images: string[];
  badge?: {
    label: string;
    tone?: ProductBadgeTone;
  };
}

export const products: Product[] = [
  {
    id: "pzl-001",
    slug: "classic-black-tee",
    name: "Classic Black Tee",
    subtitle: "Premium Cotton • Regular Fit",
    description: "Everyday essential made from ultra-soft, breathable cotton.",
    price: 999,
    images: [
      "/products/1/1.png",
      "/products/1/2.png",
      "/products/1/3.png",
      "/products/1/4.png",
    ],
    badge: {
      label: "New Drop",
      tone: "orange",
    },
  },

  {
    id: "pzl-002",
    slug: "classic-white-tee",
    name: "Classic White Tee",
    subtitle: "Premium Cotton • Regular Fit",
    description: "Clean, timeless white tee designed for all-day comfort.",
    price: 999,
    images: [
      "/products/2/1.png",
      "/products/2/2.png",
      "/products/2/3.png",
      "/products/2/4.png",
      "/products/2/5.png",
    ],
  },
  {
    id: "pzl-003",
    slug: "oversized-black-tee",
    name: "Oversized Black Tee",
    subtitle: "Heavyweight Cotton • Oversized Fit",
    description: "Relaxed silhouette with a premium heavyweight feel.",
    price: 1199,
    images: [
      "/products/3/1.png",
      "/products/3/2.png",
      "/products/3/3.png",
      "/products/3/4.png",
      "/products/3/5.png",
    ],
    badge: {
      label: "Bestseller",
      tone: "green",
    },
  },
  {
    id: "pzl-004",
    slug: "oversized-beige-tee",
    name: "Oversized Beige Tee",
    subtitle: "Heavyweight Cotton • Oversized Fit",
    description: "Neutral tone oversized tee with a modern streetwear vibe.",
    price: 1199,
    images: [
      "/products/4/1.png",
      "/products/4/2.png",
      "/products/4/3.png",
      "/products/4/4.png",
      "/products/4/5.png",
    ],
  },
  {
    id: "pzl-005",
    slug: "washed-grey-tee",
    name: "Washed Grey Tee",
    subtitle: "Vintage Wash • Regular Fit",
    description: "Garment-washed finish for a subtle vintage look.",
    price: 1099,
    images: [
      "/products/5/1.png",
      "/products/5/2.png",
      "/products/5/3.png",
      "/products/5/4.png",
      "/products/5/5.png",
    ],
  },
  {
    id: "pzl-006",
    slug: "olive-green-tee",
    name: "Olive Green Tee",
    subtitle: "Premium Cotton • Regular Fit",
    description: "Earthy olive tone that pairs effortlessly with any outfit.",
    price: 999,
    images: [
      "/products/6/1.png",
      "/products/6/2.png",
      "/products/6/3.png",
      "/products/6/4.png",
      "/products/6/5.png",
    ],
  },
  {
    id: "pzl-007",
    slug: "midnight-blue-tee",
    name: "Midnight Blue Tee",
    subtitle: "Premium Cotton • Regular Fit",
    description: "Deep blue shade with a soft hand feel.",
    price: 999,
    images: [
      "/products/7/1.png",
      "/products/7/2.png",
      "/products/7/3.png",
    ],
  },
  //   {
  //     id: "pzl-008",
  //     slug: "limited-edition-brown-tee",
  //     name: "Limited Edition Brown Tee",
  //     subtitle: "Heavyweight Cotton • Oversized Fit",
  //     description: "Limited-run colorway with a rich, premium finish.",
  //     price: 1299,
  //     image: "/products/limited-brown.jpg",
  //     badge: {
  //       label: "Limited",
  //       tone: "red",
  //     },
  //   },
];


export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: "S" | "M" | "L" | "XL";
  quantity: number;
}