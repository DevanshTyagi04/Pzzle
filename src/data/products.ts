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
    name: "EST. THE COMEBACK ",
    subtitle: "Black Comeback 2027 Graphic Printed Oversized T-Shirt",
    description:
    "The T-shirt is for anyone who knows life doesn’t follow deadlines. With a light-hearted, relatable message, this tee keeps things real—because comeback 2026 mein thoda mushkil hai, 2027 mein dekhte hain.\nWear it for the vibe. Wear it for the honesty. The comeback can wait.",
    price: 999,
    images: [
      "/products/1/1.png",
      "/products/1/5.png",
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
    name: "Holding it Together ",
    subtitle: "Classic Grey I'm Fine Typography Oversized T-Shirt",
    description: "Clean Tee designed for those holding it together… kinda. The crossed-out “I’M FINE” says what we all feel, and the small “trying.” keeps it honest.",
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
    name: "03:17 AM",
    subtitle: "Unisex Sage Green Minimal Graphic Printed Oversized T-Shirt",
    description: "Inspired by late-night thoughts that refuse to log out. The clean front print marks the hour when overthinking peaks, while the subtle back text—“still thinking.”—says everything without trying too hard.\n",
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
    name: "Legacy in Progress",
    subtitle: "Washed Blue Cricket-Inspired Graphic Printed Oversized T-Shirt",
    description: " T-shirt is a quiet nod to one of cricket’s most unforgettable waits. Designed for those who followed every inning, every near-miss, and every moment of anticipation, this tee captures the patience, pressure, and belief behind the chase.\n",
    price: 1199,
    images: [
      "/products/4/1.png",
      "/products/4/2.png",
      "/products/4/3.png",
      "/products/4/4.png",
      "/products/4/5.png",
    ],
    badge: {
      label: "Hot!!",
      tone: "red",
    },
  },
  {
    id: "pzl-005",
    slug: "washed-grey-tee",
    name: "UNSPOKEN",
    subtitle: "Washed Black Hindi Typography Graphic Printed Oversized T-Shirt",
    description: "For thoughts that stay unsaid and stories that don’t need explaining. Rooted in everyday Indian humour and quiet confidence, this tee speaks volumes without saying too much.",
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
    name: "Private Thoughts",
    subtitle: "Washed Brown Thoughtful Typography Graphic Printed Oversized T-Shirt",
    description: "Made for overthinkers, quiet observers, and people who prefer processing internally. The bold front text captures what everyone feels but rarely voices, while the subtle back print—“Internal Processing Only”—adds a sharp, witty finish.",
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
    name: "Blurred",
    subtitle: "Unisex Midnight Blue Blurred Typography Oversized T-Shirt",
    description: 
  "Some days aren’t meant to be clear—and that’s okay.\n\nThe Unisex Blur Mode Printed Oversized T-shirt captures that in-between headspace where thoughts exist, but words don’t. With a subtle blurred typography on the front and the phrase “Sab Kuch Dhundla Hai” on the back, this tee reflects moments when life feels slightly out of focus.",
    price: 999,
    images: [
      "/products/7/1.png",
      "/products/7/2.png",
      "/products/7/3.png",
      "/products/7/4.png",
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