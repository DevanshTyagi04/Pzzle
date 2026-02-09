"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { Card, CollapsibleSection, ProductGallery } from "@/components";
import SizePicker, { type Size } from "@/components/SizePicker";
import { useCartStore } from "@/store/cart";
import { products } from "@/data/products";
import { useToastStore } from "@/store/toast";

interface ProductDetailClientProps {
  product: {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    description?: string;
    price: number;
    images: string[];
    badge?: { label: string; tone?: string };
  };
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const addItem = useCartStore((s) => s.addItem);

  const showToast = useToastStore((s) => s.show);

  const [isAdding, setIsAdding] = useState(false);

  const recommended = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="py-4 text-caption text-dark-700">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/products" className="hover:underline">
          Products
        </Link>{" "}
        / <span className="text-dark-900">{product.name}</span>
      </nav>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_480px]">
        <ProductGallery images={product.images} />

        <div className="flex flex-col gap-6">
          <header>
            <h1 className="text-heading-2 text-dark-900">{product.name}</h1>
            <p className="text-body text-dark-700">{product.subtitle}</p>
          </header>

          <p className="text-lead text-dark-900">₹{product.price}</p>

          <SizePicker value={selectedSize} onChange={setSelectedSize} />

          <button
            disabled={!selectedSize}
            onClick={() => {
              if (!selectedSize) return;
              setIsAdding(true);
              addItem({
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.images[0],
                size: selectedSize,
                quantity: 1,
              });
              showToast("Added to bag");
              setTimeout(() => {
                setIsAdding(false);
              }, 900);
            }}
            className={`flex items-center justify-center gap-2 rounded-full px-6 py-4 text-body-medium transition
                    ${
                    selectedSize && !isAdding
                        ? "bg-dark-900 text-light-100 hover:opacity-90"
                        : "cursor-not-allowed bg-light-300 text-dark-500"
                    }
                `}
          >
            <ShoppingBag className="h-5 w-5" />
            {isAdding ? "Added ✓" : "Add to Bag"}
          </button>

          {/* <button className="flex items-center justify-center gap-2 rounded-full border border-light-300 px-6 py-4 text-body-medium text-dark-900">
            <Heart className="h-5 w-5" />
            Favorite
          </button> */}

          <CollapsibleSection title="Product Details" defaultOpen>
            <p>{product.description}</p>
          </CollapsibleSection>
        </div>
      </section>

      {recommended.length > 0 && (
        <section className="mt-16 pb-24">
          <h2 className="mb-6 text-heading-3 text-dark-900">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommended.map((p) => (
              <Card
                key={p.id}
                title={p.name}
                subtitle={p.subtitle}
                imageSrc={p.images[0]}
                price={`₹${p.price}`}
                href={`/products/${p.slug}`}
                badge={p.badge}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
