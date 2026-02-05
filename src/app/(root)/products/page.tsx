import { Card } from "@/components";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="py-6">
        <h1 className="text-heading-3 text-dark-900">
          All T-Shirts ({products.length})
        </h1>
      </header>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="rounded-lg border border-light-300 p-8 text-center">
          <p className="text-body text-dark-700">
            No products available right now.
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.name}
              subtitle={p.subtitle}
              description={p.description}
              imageSrc={p.images[0]}
              price={`₹${p.price}`}
              href={`/products/${p.slug}`}
              badge={p.badge}
            />
          ))}
        </section>
      )}
    </main>
  );
}
