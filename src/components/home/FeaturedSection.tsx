import { Card } from "@/components";
import { products } from "@/data/products";

export default function FeaturedSection() {
  const featured = products.filter((p) => p.badge?.label);

  if (featured.length === 0) return null;

  return (
    <section className="pb-16 mt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-heading-3 text-dark-900 font-semibold">
          Featured Picks
        </h2>
        <a
          href="/products"
          className="text-body-medium text-dark-700 hover:underline"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.slice(0, 3).map((p) => (
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
  );
}
