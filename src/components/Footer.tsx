import Image from "next/image";
import Link from "next/link";
import { collections, navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo/shoefabriek_logo.png"
              alt={site.name}
              width={938}
              height={505}
              className="h-20 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              Quality shoes proudly made in Ghana. Built on craftsmanship. Driven by passion.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Our Collections</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {collections.map((item) => (
                <li key={item.slug}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>{site.address}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All Rights Reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://upplauseconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Upplause Consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
