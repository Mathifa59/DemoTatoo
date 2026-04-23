import type { Metadata } from "next";
import { Shippori_Mincho, Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "夢 YumeTattoo | Estudio de Tatuaje Oriental",
  description:
    "Irezumi contemporáneo. Piezas únicas que honran la tradición japonesa del tatuaje, ejecutadas con precisión y carácter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${shippori.variable} ${notoSerifJP.variable} ${inter.variable}`}
    >
      <body className="bg-ink-void text-washi font-body">{children}</body>
    </html>
  );
}
