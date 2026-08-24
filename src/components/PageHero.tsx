import Image from "next/image";

export default function PageHero({
  image,
  eyebrow,
  title,
  description,
}: {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative flex h-[42vh] min-h-[320px] w-full items-center overflow-hidden bg-ink text-cream">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/60 to-ink/20" />
      <div className="relative max-w-[1600px] px-5 sm:px-8 lg:px-28">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-0 max-w-lg text-cream/85">{description}</p>
      </div>
    </section>
  );
}
