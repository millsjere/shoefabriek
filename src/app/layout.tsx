import type { Metadata } from "next";
import { DM_Serif_Display, Rethink_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shoefabriek.com"),
  title: "Shoe Fabriek | Quality Shoes, Proudly Made in Ghana",
  description:
    "Shoe Fabriek is a Ghanaian shoe manufacturing company delivering comfort, durability and style. Explore our collections and become a dealer.",
  keywords: [
    "Shoe Fabriek",
    "shoes made in Ghana",
    "Ghana shoe manufacturer",
    "safety boots Ghana",
    "school shoes Ghana",
    "security boots Ghana",
    "leather shoes Ghana",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Shoe Fabriek",
    title: "Shoe Fabriek | Quality Shoes, Proudly Made in Ghana",
    description:
      "Shoe Fabriek is a Ghanaian shoe manufacturing company delivering comfort, durability and style. Explore our collections and become a dealer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoe Fabriek | Quality Shoes, Proudly Made in Ghana",
    description:
      "Shoe Fabriek is a Ghanaian shoe manufacturing company delivering comfort, durability and style. Explore our collections and become a dealer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${rethinkSans.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
