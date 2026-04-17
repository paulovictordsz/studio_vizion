import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Archivo } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://site.studiovizion.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Studio Vizion — Identidade Visual, Sites e Sistemas Web",
    template: "%s | Studio Vizion",
  },
  description:
    "Studio de design especializado em branding, identidade visual, sites institucionais, landing pages e sistemas web. Do conceito à entrega com critério e consistência.",
  keywords: [
    "studio de design",
    "branding",
    "identidade visual",
    "design de logo",
    "site institucional",
    "landing page",
    "design system",
    "interface digital",
    "brand book",
  ],
  authors: [{ name: "Studio Vizion", url: siteUrl }],
  creator: "Studio Vizion",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Studio Vizion",
    locale: "pt_BR",
    title: "Studio Vizion — Identidade Visual, Sites e Sistemas Web",
    description:
      "Branding, sites e sistemas web criados com propósito. Do conceito à entrega, com critério e consistência.",
    images: [
      {
        url: "/images/bg_vizion.png",
        width: 1376,
        height: 768,
        alt: "Studio Vizion — Design com propósito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Vizion — Identidade Visual, Sites e Sistemas Web",
    description:
      "Branding, sites e sistemas web criados com propósito. Do conceito à entrega, com critério e consistência.",
    images: ["/images/bg_vizion.png"],
  },
  icons: {
    icon: [
      { url: "/favicon_vizion.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon_vizion.svg",
    apple: "/favicon_vizion.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bricolage.variable} ${archivo.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E8E8E8]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
