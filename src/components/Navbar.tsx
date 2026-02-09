"use client";

import { useCartStore } from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-light-200">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/brandLogo.png"
            alt="Pzzle"
            width={175}
            height={175}
            priority
            className="mt-2"
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* ✅ Cart – mobile (icon only) */}
          <Link
            href="/cart"
            className="relative md:hidden"
            aria-label="Cart"
          >
            <ShoppingCart className="h-6 w-6 text-dark-900" />
            {mounted && totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-dark-900 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Cart – desktop (text) */}
          <Link
            href="/cart"
            className="hidden md:block text-body font-semibold text-dark-900 transition-colors hover:text-dark-700"
          >
            My Cart ({totalItems})
          </Link>

          {/* Hamburger */}
          {/* <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="mb-1 block h-0.5 w-6 bg-dark-900"></span>
            <span className="mb-1 block h-0.5 w-6 bg-dark-900"></span>
            <span className="block h-0.5 w-6 bg-dark-900"></span>
          </button> */}
        </div>
      </nav>

      {/* Mobile menu (if you enable later) */}
      <div
        id="mobile-menu"
        className={`border-t border-light-300 md:hidden ${
          open ? "block" : "hidden"
        }`}
      />
    </header>
  );
}
