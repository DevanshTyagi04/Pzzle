import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      "All T-Shirts",
      "New Arrivals",
      "Best Sellers",
      "Oversized Tees",
    ],
  },
  {
    title: "Collections",
    links: [
      "Everyday Essentials",
      "Minimal Series",
      "Statement Prints",
      "Limited Drops",
    ],
  },
  {
    title: "About Pzzle",
    links: [
      "Our Story",
      "Fabric & Quality",
      "Sustainability",
      "Reviews",
    ],
  },
  {
    title: "Support",
    links: [
      "Size Guide",
      "Shipping & Returns",
      "FAQs",
      "Contact Us",
    ],
  },
] as const;


export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="flex items-start md:col-span-3">
            <Image src="/brandLogo.png" alt="Pzzle" width={160} height={160} className="invert"/>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-heading-3">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-body text-light-400 hover:text-light-300"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex gap-4 md:col-span-2 md:justify-end">
            {[
              { src: "/x.svg", alt: "X" },
              { src: "/facebook.svg", alt: "Facebook" },
              { src: "/instagram.svg", alt: "Instagram" },
            ].map((s) => (
              <Link
                key={s.alt}
                href="https://www.instagram.com/pzzle.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label={s.alt}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-light-100"
              >
                <Image src={s.src} alt={s.alt} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-light-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-caption">
            <Image src="/globe.svg" alt="" width={16} height={16} />
            <span>India</span>
            <span>© 2026 Pzzle. All Rights Reserved</span>
          </div>
          <ul className="flex items-center gap-6 text-caption">
            {["Guides", "Terms of Sale", "Terms of Use", "Pzzle Privacy Policy"].map((t) => (
              <li key={t}>
                <Link href="#">{t}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
