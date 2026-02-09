const items = [
  {
    title: "Premium Fabric",
    description:
      "Heavyweight cotton that feels soft, durable, and built for everyday wear.",
  },
  {
    title: "Thoughtful Design",
    description:
      "Minimal typography and ideas inspired by real thoughts and moments.",
  },
  {
    title: "Comfort First",
    description:
      "Relaxed fits designed to move with you — never against you.",
  },
];

export default function WhyPzzleSection() {
  return (
    <section className="w-full bg-dark-900 py-16 sm:py-20">
      {/* Section header */}
      <div className="mb-12 text-center px-4">
        <p className="mb-3 text-caption uppercase tracking-widest text-light-400">
          Our Philosophy
        </p>
        <h2 className="text-heading-2 text-light-100">
          Why Pzzle
        </h2>
      </div>

      {/* Philosophy items */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-light-200 border border-white/10 px-6 py-8 text-center transition hover:border-white"
          >
            <h3 className="mb-3 text-xl font-semibold text-[#6B4F3F]">
              {item.title}
            </h3>
            <p className="text-body text-[#3A2F2A] font-medium">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
