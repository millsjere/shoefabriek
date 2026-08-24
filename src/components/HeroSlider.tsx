"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = {
  image: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => {
      setIndex((i + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  return (
    <section className="relative h-[75vh] min-h-[480px] w-full overflow-hidden bg-ink text-cream sm:h-[85vh] lg:h-[100vh] lg:min-h-[600px]">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink/45 via-ink/25 to-transparent" />

          <div className="relative flex h-full w-full max-w-[1600px] items-center px-10 sm:px-16 lg:px-32">
            <div className="max-w-xl">
              {slide.eyebrow && (
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  {slide.eyebrow}
                </p>
              )}
              <h1 className="font-display text-4xl leading-none sm:text-6xl lg:text-7xl">
                {slide.title}{" "}
                {slide.highlight && <span className="text-gold">{slide.highlight}</span>}
              </h1>
              <p className="mt-5 text-base text-cream/85 sm:text-lg">{slide.description}</p>
              <a
                href={slide.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
              >
                {slide.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-2 bg-cream/50 hover:bg-cream/80"
              }`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-6 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-cream backdrop-blur transition-colors hover:bg-black/50 sm:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-6 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-cream backdrop-blur transition-colors hover:bg-black/50 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
