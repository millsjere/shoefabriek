import Image from "next/image";
import { collections, site } from "@/lib/site";

const layout = [
  "md:col-start-1 md:row-start-1 md:row-span-2",
  "md:col-start-2 md:col-span-2 md:row-start-1",
  "md:col-start-2 md:row-start-2",
  "md:col-start-3 md:row-start-2",
];

export default function CollectionsGrid() {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:h-[600px] md:snap-none md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 md:overflow-visible md:pb-0">
      {collections.map((item, i) => {
        const featured = i === 0;
        return (
          <div
            key={item.slug}
            className={`group relative h-[420px] w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl md:h-full md:w-auto md:shrink ${layout[i]}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes={featured ? "(min-width: 768px) 40vw, 85vw" : "(min-width: 768px) 25vw, 85vw"}
              className="object-cover object-left transition-transform duration-500 group-hover:scale-105 md:object-center"
              priority={featured}
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />

            {featured ? (
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  Our Collections
                </p>
                <h3 className="mt-2 font-display text-3xl leading-none text-cream sm:text-4xl">
                  {item.title}
                </h3>
                <a
                  href={`${site.whatsappHref}?text=${encodeURIComponent(
                    `Hi, I'm interested in your ${item.title} collection.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
                >
                  Discover More
                </a>
              </div>
            ) : (
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-display text-2xl leading-tight text-cream">{item.title}</h3>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
