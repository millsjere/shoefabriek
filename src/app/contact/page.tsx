import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Shoe Fabriek",
  description:
    "Get in touch with Shoe Fabriek. We'd love to hear from you, whether you have a question, need support or want to partner with us.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/categories/security-uniform.png"
        eyebrow="Contact Us"
        title="We'd Love to Hear From You"
        description="Whether you have a question, need support or want to partner with us, we are here to help."
      />

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_2fr]">
        <div>
          <h2 className="font-display text-2xl text-ink">Get in Touch</h2>
          <dl className="mt-8 space-y-6">
            <InfoItem
              icon={<MapPin className="h-5 w-5" strokeWidth={1.8} />}
              label="Location"
              value={site.address}
            />
            <InfoItem
              icon={<Phone className="h-5 w-5" strokeWidth={1.8} />}
              label="Phone"
              value={
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phoneDisplay}
                </a>
              }
            />
            <InfoItem
              icon={<Mail className="h-5 w-5" strokeWidth={1.8} />}
              label="Email"
              value={
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              }
            />
            <InfoItem
              icon={<Clock className="h-5 w-5" strokeWidth={1.8} />}
              label="Hours"
              value={
                <ul className="space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.label}>
                      {h.label}: {h.value}
                    </li>
                  ))}
                </ul>
              }
            />
          </dl>
        </div>

        <div className="rounded-2xl bg-cream-dim p-6 sm:p-10">
          <h2 className="font-display text-2xl text-ink">Send Us a Message</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="h-120 w-full">
          <iframe
            title="Shoe Fabriek location"
            src="https://maps.google.com/maps?q=Shoe%20Fabriek%2C%20Akropong&z=16&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoItem({ icon, label, value }: { icon: ReactNode; label: string; value: ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-dim text-gold">
        {icon}
      </div>
      <div>
        <dt className="text-xs font-bold uppercase tracking-widest text-ink-soft">{label}</dt>
        <dd className="mt-1 text-ink">{value}</dd>
      </div>
    </div>
  );
}
