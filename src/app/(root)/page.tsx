import HeroSection from "@/components/home/HeroSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import WhyPzzleSection from "@/components/home/WhyPzzleSection";
import { Card } from "@/components";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>
      {/* Full-width */}
      <HeroSection />

      {/* Constrained */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeaturedSection />
      </div>

      {/* Full-width */}
      <WhyPzzleSection />

      {/* Constrained */}
      <section
        aria-labelledby="latest"
        className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 mt-10"
      >
        <h2
          id="latest"
          className="mb-6 text-heading-3 text-dark-900 font-semibold"
        >
          Latest Drops
        </h2>

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
      </section>
    </main>
  );
}
