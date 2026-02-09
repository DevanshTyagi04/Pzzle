'use client';

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection() {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            },
        )
        gsap.fromTo('.hero-text p',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            },
        )
        gsap.fromTo('.hero-btns',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            },
        )
    });
  return (
    <section
      className="
        relative 
        min-h-screen 
        w-full 
        bg-cover 
        bg-center 
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Content container */}
      <div className="hero-text mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center -translate-y-10 md:-translate-y-14">
        {/* Headline */}
        <h1 className="mx-auto max-w-4xl font-extrabold tracking-tight text-dark-900">
          <span className="block text-[clamp(2.8rem,6vw,4.2rem)] leading-tight">
            Everyday T-Shirts,
          </span>
          <span className="block text-[clamp(2.8rem,6vw,4.2rem)] leading-tight">
            Thoughtfully
          </span>
          <span className="block text-[clamp(2.8rem,6vw,4.2rem)] leading-tight">
            Designed
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-dark-600">
          Minimal graphic tees made for comfort, clarity, and
          <br />
          the thoughts you carry every day.
        </p>

        {/* CTAs */}
        <div className="hero-btns mt-6 flex gap-4">
          <Link
            href="/products"
            className="rounded-full bg-dark-900 px-7 py-3 text-lg font-medium text-light-100 transition hover:opacity-90"
          >
            Explore Collection
          </Link>

          <Link
            href="/products"
            className="rounded-full border border-dark-900 px-7 py-3 text-lg font-medium text-dark-900 transition hover:bg-dark-900 hover:text-light-100"
          >
            View Latest
          </Link>
        </div>
      </div>
    </section>
  );
}
