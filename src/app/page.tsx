import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Factory, ShieldCheck, Target, Truck } from "lucide-react";
import CollectionsGrid from "@/components/CollectionsGrid";
import HeroSlider, { type Slide } from "@/components/HeroSlider";
import { site, uniqueSellingPoints } from "@/lib/site";

function whatsappEnquiry(message: string) {
  return `${site.whatsappHref}?text=${encodeURIComponent(message)}`;
}

const uspIcons = [ShieldCheck, Truck, Target, Factory];

const title = "Shoe Fabriek | Quality Shoes, Proudly Made in Ghana";
const description =
  "Shoe Fabriek is a Ghanaian shoe manufacturing company delivering comfort, durability and style. Explore our School, Casual, Safety and Security collections, or become a dealer.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Shoe Fabriek",
    url: "/",
    title,
    description,
    images: [
      {
        url: "/images/categories/crafts.jpg",
        width: 2560,
        height: 1709,
        alt: "Shoe Fabriek craftsmanship — quality shoes made in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/categories/crafts.jpg"],
  },
};

const slides: Slide[] = [
  {
    image: "/images/categories/casual-lifestyle.png",
    eyebrow: "Shoe Fabriek",
    title: "Quality Shoes. Proudly Made",
    highlight: "in Ghana.",
    description:
      "Shoe Fabriek is a Ghanaian shoe manufacturing company delivering comfort, durability and style for every step of your journey.",
    ctaLabel: "Order Now",
    ctaHref: whatsappEnquiry("Hi, I'm interested in Shoe Fabriek's shoe collections."),
  },
  {
    image: "/images/categories/crafts.jpg",
    eyebrow: "Our Craft",
    title: "Every Pair Crafted",
    highlight: "With Precision.",
    description:
      "Genuine leather, durable soles and skilled hands — every Shoe Fabriek pair is built to last.",
    ctaLabel: "Order Now",
    ctaHref: whatsappEnquiry("Hi, I'd like to know more about Shoe Fabriek's craftsmanship."),
  },
  {
    image: "/images/categories/school-institutional.png",
    eyebrow: "School & Institutional",
    title: "Built for the",
    highlight: "School Run.",
    description:
      "Durable, comfortable footwear designed to keep students on their feet all day, every day.",
    ctaLabel: "Order Now",
    ctaHref: whatsappEnquiry(
      "Hi, I'm interested in your School & Institutional shoe collection.",
    ),
  },
  {
    image: "/images/categories/safety-industrial.png",
    eyebrow: "Safety & Industrial",
    title: "Protection That",
    highlight: "Works as Hard as You.",
    description:
      "Reinforced boots engineered for demanding worksites, without sacrificing comfort.",
    ctaLabel: "Order Now",
    ctaHref: whatsappEnquiry("Hi, I'm interested in your Safety & Industrial shoe collection."),
  },
  {
    image: "/images/categories/security-uniform.png",
    eyebrow: "Security & Uniform",
    title: "Discipline.",
    highlight: "Durability. Every Shift.",
    description: "Parade-ready boots built to stand up to long hours and hard duty.",
    ctaLabel: "View Uniform Boots",
    ctaHref: whatsappEnquiry("Hi, I'm interested in your Security & Uniform shoe collection."),
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} />

      <section id="collections" className="mx-auto max-w-[1600px] scroll-mt-24 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Our Collections
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
            Shoes for Every Walk of Life
          </h2>
        </div>

        <div className="mt-12">
          <CollectionsGrid />
        </div>
      </section>

      {/* <section className="bg-cream-dim">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <p className="font-display text-2xl leading-snug text-wine sm:text-3xl">
            &ldquo;{site.keyMessage}&rdquo;
          </p>
        </div>
      </section> */}

      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="px-5 py-20 sm:px-8 lg:py-28 lg:pl-8 xl:pl-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">Our Craft</p>
            <h2 className="mt-3 font-display text-5xl leading-tight sm:text-4xl lg:text-5xl">
              Built on Craftsmanship. <br />
              Driven by Passion.
            </h2>
            <p className="mt-5 max-w-lg text-cream/80">
              Every pair is expertly crafted using genuine leather and the finest materials to
              ensure lasting comfort and performance, made right here in Ghana.
            </p>
            <Link
              href="/dealers"
              className="mt-8 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
            >
              Become a Dealer
            </Link>
          </div>
          <div className="relative h-80 w-full sm:h-96 lg:h-auto">
            <Image
              src="/images/categories/crafts.jpg"
              alt="Shoe Fabriek craftsmanship"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
            {uniqueSellingPoints.map((point, i) => {
              const Icon = uspIcons[i];
              return (
                <div key={point.title}>
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-xl tracking-wide text-gold">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-base text-cream/70">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative flex h-[50vh] min-h-[380px] w-full items-center overflow-hidden bg-[url('/images/categories/casual-lifestyle.png')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
            Walk With Confidence. <br />We&apos;ve Got You Covered.
          </h2>
          <Link
            href="/dealers"
            className="mt-8 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
          >
            Become a Dealer
          </Link>
        </div>
      </section>
    </>
  );
}
