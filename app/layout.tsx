import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Archivo } from "next/font/google";
import "./globals.css";

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
  title: "Human Academy - A maior escola de IA para Profissionais Criativos",
  description: "Aprenda como a inteligência artificial pode impulsionar a sua criatividade. Com os cursos mais completos do mercado.",
  openGraph: {
    type: "website",
    title: "Human Academy - A maior escola de IA para Profissionais Criativos",
    description: "Aprenda como a inteligência artificial pode impulsionar a sua criatividade.",
    images: [{ url: "https://framerusercontent.com/assets/iKW6TscMiJKagBsJYM9Vi4WbxsM.webp" }],
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
      <body className="min-h-full flex flex-col bg-[#F1F1F1]">{children}</body>
    </html>
  );
}
