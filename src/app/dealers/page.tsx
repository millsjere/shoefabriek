import type { Metadata } from "next";
import Image from "next/image";
import { Check, Factory, ShieldCheck, Target, Truck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { profitStory, site, uniqueSellingPoints } from "@/lib/site";

const uspIcons = [ShieldCheck, Truck, Target, Factory];

export const metadata: Metadata = {
  title: "Dealers | Shoe Fabriek",
  description:
    "Partner with Shoe Fabriek. Join our network of dealers and bring quality Ghana-made shoes to your customers.",
};

const requirements = [
  "Have a registered business",
  "Provide a valid business registration certificate",
  "Have a physical store or an established online presence",
  "Demonstrate the ability to market and sell our products",
  "Commit to maintaining our brand standards",
];

const steps = [
  { number: "1", title: "Apply", description: "Fill out the dealer application form." },
  { number: "2", title: "Review", description: "We review your application." },
  {
    number: "3",
    title: "Approval",
    description: "Once approved, you'll receive dealer terms and benefits.",
  },
  {
    number: "4",
    title: "Start Selling",
    description: "Place your first order and start selling quality shoes.",
  },
];

export default function DealersPage() {
  return (
    <>
      <PageHero
        image="/images/categories/crafts.jpg"
        eyebrow="Dealers"
        title="Partner with Shoe Fabriek"
        description="Join our network and bring quality Ghana-made shoes to your customers."
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">
          Why Partner With Us?
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {uniqueSellingPoints.map((point, i) => {
            const Icon = uspIcons[i];
            return (
              <div key={point.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-xl tracking-wide text-ink">{point.title}</h3>
                <p className="mt-2 text-base text-ink-soft">{point.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`${site.whatsappHref}?text=${encodeURIComponent(
              "Hi, I'm interested in becoming a Shoe Fabriek dealer. Could you share more details?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
          >
            Become a Dealer
          </a>
        </div>
      </section>

      <section className="bg-wine text-cream">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-center sm:gap-4 sm:px-8">
          {profitStory.map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="hidden text-gold sm:inline">&bull;</span>}
              <span className="font-display text-lg sm:text-xl">{item}</span>
            </span>
          ))}
        </div>
      </section>

      {/* <section className="bg-cream-dim">
        <div className="grid lg:grid-cols-2">
          <div className="px-5 py-20 sm:px-8 lg:py-28 lg:pl-24">
            <h2 className="font-display text-3xl text-ink sm:text-3xl lg:text-4xl">Dealer Requirements</h2>
            <p className="mt-3 text-ink-soft">To qualify as a dealer, you must:</p>
            <ul className="mt-6 space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <a
              href={`${site.whatsappHref}?text=${encodeURIComponent(
                "Hi, I'm interested in becoming a Shoe Fabriek dealer. Could you share more details?",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
            >
              Become a Dealer
            </a>
          </div>
          <div className="relative h-80 w-full sm:h-96 lg:h-auto">
            <Image
              src="/images/categories/security-boots.jpeg"
              alt="Shoe Fabriek security boots"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">
          How to Become a Dealer
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-ink-soft">
          It&apos;s easy to get started.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold font-display text-lg text-ink">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-sm tracking-wide text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="relative flex h-[46vh] min-h-[360px] w-full items-center overflow-hidden">
        <Image
          src="/images/categories/school-institutional.png"
          alt="Shoe Fabriek partnership"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/55 to-ink/15" />
        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center sm:px-8">
          <h2 className="max-w-md font-display text-3xl leading-tight text-cream sm:text-4xl">
            Let&apos;s Grow Together
          </h2>
          <p className="mt-4 max-w-md text-cream/85">
            Be part of a growing brand that values quality, partnership and progress.
          </p>
          <a
            href={`${site.whatsappHref}?text=${encodeURIComponent(
              "Hi, I'm interested in becoming a Shoe Fabriek dealer. Could you share more details?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
}
