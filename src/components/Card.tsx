import Image from "next/image";
import Link from "next/link";

export type BadgeTone = "red" | "green" | "orange";

export interface CardProps {
  title: string;
  description?: string;
  subtitle?: string;
  meta?: string | string[];
  imageSrc: string;
  imageAlt?: string;
  price?: string | number;
  href?: string;
  badge?: { label: string; tone?: BadgeTone };
  className?: string;
}

const toneToText: Record<BadgeTone, string> = {
  red: "text-red-600",
  green: "text-green-600",
  orange: "text-orange-600",
};

export default function Card({
  title,
  description,
  subtitle,
  imageSrc,
  imageAlt = title,
  price,
  href,
  badge,
  className = "",
}: CardProps) {
  const displayPrice =
    price === undefined
      ? undefined
      : typeof price === "number"
      ? `₹${price}`
      : price;

  const content = (
    <article
      className={`group overflow-hidden rounded-2xl bg-light-100 ring-1 ring-light-300 transition-all duration-300 hover:-translate-y-1 hover:ring-dark-400 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-light-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {badge && (
          <span
            className={`absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide ${
              badge.tone ? toneToText[badge.tone] : "text-dark-900"
            }`}
          >
            {badge.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-medium text-dark-900">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-dark-600">
            {subtitle}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          {displayPrice && (
            <span className="text-sm font-semibold text-dark-900">
              {displayPrice}
            </span>
          )}
        </div>

        {description && (
          <p className="mt-2 text-sm text-dark-600 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </article>
  );

  return href ? (
    <Link
      href={href}
      aria-label={title}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
    >
      {content}
    </Link>
  ) : (
    content
  );
}
