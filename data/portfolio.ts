import type { PortfolioItem } from "@/types";

// Two confirmed-working Unsplash images, alternated across all items.
const IMG_A = "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=900&q=80&auto=format&fit=crop";
const IMG_B = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80&auto=format&fit=crop";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Dragón ascendente · manga completa",
    category: "Oriental",
    kanji: "龍",
    image: IMG_A,
    gradient: "linear-gradient(160deg, #0b0b10 0%, #2a0508 55%, #7a0a12 120%)",
  },
  {
    id: "p2",
    title: "Ola de Kanagawa · omóplato",
    category: "Oriental",
    kanji: "波",
    image: IMG_B,
    gradient: "linear-gradient(145deg, #0b0b10 0%, #121a2a 60%, #1a1f3a 100%)",
  },
  {
    id: "p3",
    title: "Hannya en muslo · tinta roja",
    category: "Oriental",
    kanji: "般",
    image: IMG_A,
    gradient: "linear-gradient(180deg, #0b0b10 0%, #1a0408 50%, #7a0a12 120%)",
  },
  {
    id: "p4",
    title: "Geometría asanoha · antebrazo",
    category: "Blackwork",
    kanji: "麻",
    image: IMG_B,
    gradient: "linear-gradient(145deg, #05050a 0%, #16161d 50%, #1f1f28 100%)",
  },
  {
    id: "p5",
    title: "Tigre en tinta · costillas",
    category: "Tinta oriental",
    kanji: "虎",
    image: IMG_A,
    gradient: "linear-gradient(160deg, #0b0b10 0%, #121218 50%, #0b0b10 100%)",
  },
  {
    id: "p6",
    title: "Grullas en vuelo · espalda",
    category: "Tinta oriental",
    kanji: "鶴",
    image: IMG_B,
    gradient: "linear-gradient(135deg, #0b0b10 0%, #1a1f3a 55%, #0e1226 100%)",
  },
  {
    id: "p7",
    title: "Flor de cerezo · clavícula",
    category: "Minimalista",
    kanji: "桜",
    image: IMG_A,
    gradient: "linear-gradient(180deg, #0b0b10 0%, #1a0a12 50%, #2a0a14 100%)",
  },
  {
    id: "p8",
    title: "Koi remontando la corriente",
    category: "Neo-tradicional",
    kanji: "鯉",
    image: IMG_B,
    gradient: "linear-gradient(145deg, #0b0b10 0%, #2a0508 60%, #a61b29 140%)",
  },
];
