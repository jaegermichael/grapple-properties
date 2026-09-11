import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Grapple Properties | Zimbabwe Prime Real Estate",
    template: "%s | Grapple Properties",
  },
  description:
    "Grapple Properties (Pvt) Ltd — defining success and leading you home. Premier residential, commercial and investment real estate in Harare, Borrowdale, Highlands and across Zimbabwe.",
  keywords: [
    "Grapple Properties Zimbabwe",
    "Harare real estate",
    "Borrowdale property",
    "Highlands houses for sale",
    "Zimbabwe property investment",
    "commercial property Harare",
    "property valuation Zimbabwe",
    "Karigamombe Center Harare",
  ],
  authors: [{ name: "Grapple Properties (Pvt) Ltd" }],
  openGraph: {
    title: "Grapple Properties | Zimbabwe Prime Real Estate",
    description:
      "We Grapple Properties, define success and lead you home. Explore prime estates, commercial parks and land across Harare.",
    url: "https://grappleproperties.co.zw",
    siteName: "Grapple Properties",
    locale: "en_ZW",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3A2C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F8F5F0] text-[#18181A] antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
