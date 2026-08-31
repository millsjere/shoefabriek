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
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1DGjEngWi5/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.2 4.32 15.2 4.24 14 4.24c-2.44 0-4.11 1.49-4.11 4.22V10.5H7.4v3h2.49V21h3.61Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shoefabriekofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M12 2c-2.717 0-3.056.012-4.123.06-1.065.049-1.79.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.637-.416 1.362-.465 2.427C2.012 8.944 2 9.283 2 12s.012 3.056.06 4.123c.049 1.065.218 1.79.465 2.427a4.9 4.9 0 0 0 1.153 1.772 4.9 4.9 0 0 0 1.772 1.153c.637.247 1.362.416 2.427.465C8.944 21.988 9.283 22 12 22s3.056-.012 4.123-.06c1.065-.049 1.79-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.247-.637.416-1.362.465-2.427.048-1.067.06-1.406.06-4.123s-.012-3.056-.06-4.123c-.049-1.065-.218-1.79-.465-2.427a4.9 4.9 0 0 0-1.153-1.772A4.9 4.9 0 0 0 18.55 2.525c-.637-.247-1.362-.416-2.427-.465C15.056 2.012 14.717 2 12 2Zm0 1.802c2.67 0 2.987.01 4.042.058.975.045 1.504.207 1.856.344.466.181.8.398 1.15.748.35.35.566.683.747 1.15.137.352.3.881.344 1.856.048 1.055.058 1.372.058 4.042s-.01 2.987-.058 4.042c-.045.975-.207 1.504-.344 1.856a3.1 3.1 0 0 1-.747 1.15 3.1 3.1 0 0 1-1.15.747c-.352.137-.881.3-1.856.344-1.054.048-1.371.058-4.042.058s-2.987-.01-4.042-.058c-.975-.045-1.504-.207-1.856-.344a3.1 3.1 0 0 1-1.15-.747 3.1 3.1 0 0 1-.747-1.15c-.137-.352-.3-.881-.344-1.856-.048-1.055-.058-1.372-.058-4.042s.01-2.987.058-4.042c.045-.975.207-1.504.344-1.856.181-.467.398-.8.747-1.15.35-.35.684-.567 1.15-.748.352-.137.881-.3 1.856-.344C9.013 3.812 9.33 3.802 12 3.802Zm0 3.064a5.134 5.134 0 1 0 0 10.268 5.134 5.134 0 0 0 0-10.268Zm0 8.468a3.334 3.334 0 1 1 0-6.668 3.334 3.334 0 0 1 0 6.668Zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@shoefabriek?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
                </svg>
              </a>
              <a
                href="https://www.threads.com/@shoefabriekofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Threads"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-gold hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
                  <path d="M17.687 10.242c-.088-.043-.178-.085-.269-.126-.158-2.94-1.75-4.62-4.428-4.637h-.036c-1.6 0-2.93.683-3.749 1.925l1.46.998c.612-.93 1.572-1.127 2.29-1.127h.024c.895.006 1.57.266 2.007.774.318.37.53.882.635 1.53-.793-.135-1.65-.176-2.567-.123-2.584.15-4.246 1.657-4.134 3.75.057 1.062.582 1.975 1.478 2.573.758.505 1.734.752 2.748.696 1.34-.074 2.392-.585 3.129-1.52.559-.71.912-1.63 1.066-2.79.639.386 1.113.894 1.372 1.508.44 1.04.466 2.75-.941 4.156-1.234 1.234-2.716 1.767-4.959 1.783-2.485-.018-4.362-.816-5.581-2.373-1.14-1.457-1.729-3.558-1.751-6.244.022-2.686.611-4.787 1.751-6.244 1.219-1.557 3.096-2.355 5.581-2.373 2.503.018 4.413.82 5.677 2.383.62.767 1.087 1.732 1.393 2.86l1.688-.45c-.372-1.373-.955-2.556-1.744-3.536C15.78 1.02 13.38.02 10.373 0h-.012C7.36.02 4.987 1.024 3.293 2.995 1.786 4.746 1.008 7.178.983 10.221v.016c.025 3.043.803 5.475 2.31 7.226 1.694 1.97 4.067 2.975 7.056 2.995h.012c2.72-.019 4.635-.73 6.21-2.304 2.061-2.06 2-4.639 1.32-6.226-.487-1.146-1.414-2.077-2.204-2.686Zm-4.663 4.446c-1.123.063-2.29-.44-2.347-1.52-.043-.8.573-1.694 2.417-1.8.212-.013.42-.019.625-.019.674 0 1.303.068 1.874.198-.213 2.665-1.466 3.079-2.569 3.14Z" />
                </svg>
              </a>
            </div>
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
