import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Archivo } from "next/font/google";
import "./globals.css";
import "./responsive.css";

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

export const metadata: Metadata = {
  title: "Studio Vizion — Design de Identidade Visual, Sites e Sistemas Web",
  description: "Studio de design especializado em branding, sites institucionais, landing pages e sistemas web. Do conceito à entrega, com critério e consistência.",
  openGraph: {
    type: "website",
    title: "Studio Vizion — Design de Identidade Visual, Sites e Sistemas Web",
    description: "Studio de design especializado em branding, sites institucionais, landing pages e sistemas web.",
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
      <body className="min-h-full flex flex-col bg-[#E8E8E8]">{children}</body>
    </html>
  );
}
