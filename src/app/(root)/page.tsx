import React from "react";
import { Card } from "@/components";
import { products } from "@/data/products";

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Latest Drops
        </h2>

        {products.length === 0 ? (
          <div className="rounded-lg border border-light-300 p-8 text-center">
            <p className="text-body text-dark-700">
              No products available right now.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
