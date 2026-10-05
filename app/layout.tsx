import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  applicationName: seo.siteName,
  title: {
    default: "MS-rent | Půjčovna stavebních strojů Děčín",
    template: "%s | MS-rent"
  },
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    type: "website",
    locale: seo.locale,
    siteName: seo.siteName,
    title: "MS-rent | Půjčovna stavebních strojů Děčín",
    description: seo.description,
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "MS-rent – půjčovna stavebních strojů v Děčíně"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MS-rent | Půjčovna stavebních strojů Děčín",
    description: seo.description,
    images: ["/og-cover.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" }
  ],
  colorScheme: "light dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body>
        <StructuredData />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
