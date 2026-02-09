"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useToastStore } from "@/store/toast";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [email, setEmail] = useState("");

  const isEmpty = items.length === 0;
  const showToast = useToastStore((s) => s.show);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
      {/* Header */}
      <header className="py-6">
        <h1 className="text-heading-2 text-dark-900">My Cart</h1>
        <p className="mt-1 text-body text-dark-700">
          Review your items before checkout
        </p>
      </header>

      {isEmpty ? (
        /* Empty State */
        <div className="mt-12 rounded-xl border border-light-300 bg-light-100 p-10 text-center">
          <p className="text-body text-dark-700">
            Your cart is currently empty.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 transition hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          {/* Cart Items */}
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4 rounded-xl border border-light-300 bg-light-100 p-4"
              >
                {/* Image */}
                <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-light-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-body-medium text-dark-900 hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-caption text-dark-700">
                        Size: {item.size}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="rounded-full p-2 text-dark-700 transition hover:bg-light-200"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Quantity + Price */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            Math.max(1, item.quantity - 1),
                          )
                        }
                        className="rounded-full border border-light-300 p-1 text-dark-900 hover:border-dark-500"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span className="w-8 text-center text-body">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="rounded-full border border-light-300 p-1 text-dark-900 hover:border-dark-500"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-body-medium text-dark-900">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-xl border border-light-300 bg-light-100 p-6">
            <h2 className="text-heading-3 text-dark-900">Order Summary</h2>

            <div className="mt-4 flex items-center justify-between text-body text-dark-700">
              <span>Subtotal</span>
              <span>₹{totalPrice()}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-body text-dark-700">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-light-300 pt-4 text-body-medium text-dark-900">
              <span>Total</span>
              <span>₹{totalPrice()}</span>
            </div>
            <div className="mt-6">
              <label className="mb-1 block text-caption text-dark-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-light-300 px-4 py-3 text-body
      focus:border-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-500/20"
                required
              />
            </div>
              {/* <p className="mt-1 text-caption text-dark-500">
                We’ll notify you when checkout goes live.
              </p> */}
            <button
              disabled={isCheckingOut || !email }
              onClick={async () => {
                if (isCheckingOut) return;

                setIsCheckingOut(true);

                try {
                  await fetch("/api/preorder-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email,
                      items: items.map((i) => i.name).join(" | "),
                      sizes: items.map((i) => i.size).join(" | "),
                      quantities: items.map((i) => i.quantity).join(" | "),
                      totalPrice: totalPrice(),
                    }),
                  });

                  showToast(
                    <>
                      <p className="font-medium">We’re almost there 👕</p>
                      <p className="mt-1 text-light-300">
                        Checkout isn’t live yet, but your interest has been
                        recorded.
                      </p>
                      <p className="mt-2 text-light-300">
                        You’ll be the first to know when we launch.
                      </p>
                    </>,
                  );
                } catch (err) {
                  showToast(
                    <p className="font-medium">
                      Something went wrong. Please try again.
                    </p>,
                  );
                } finally {
                  // Small delay so the state change feels intentional
                  setTimeout(() => {
                    setIsCheckingOut(false);
                  }, 800);
                }
              }}
              className={`mt-6 w-full rounded-full px-6 py-4 text-body-medium transition
    ${
      isCheckingOut
        ? "cursor-not-allowed bg-light-300 text-dark-500"
        : "bg-dark-900 text-light-100 hover:opacity-90"
    }
  `}
            >
              {isCheckingOut ? "Checking out…" : "Checkout"}
            </button>

            <p className="mt-4 text-center text-caption text-dark-700">
              Taxes included. Free shipping across India.
            </p>
          </aside>
        </section>
      )}
    </main>
  );
}
