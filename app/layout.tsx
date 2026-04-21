import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YumeTattoo | Estudio de Tatuajes Premium",
  description:
    "Transformamos ideas en piezas que llevas para siempre. Diseño personalizado, atención profesional y una experiencia pensada desde el primer contacto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
