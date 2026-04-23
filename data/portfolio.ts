import type { PortfolioItem } from "@/types";

/**
 * Imagery sourced from Unsplash (hotlinked). If an image fails to load,
 * the gradient + kanji overlay remains as a graceful fallback.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Dragón ascendente · manga completa",
    category: "Oriental",
    kanji: "龍",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(160deg, #0b0b10 0%, #2a0508 55%, #7a0a12 120%)",
  },
  {
    id: "p2",
    title: "Ola de Kanagawa · omóplato",
    category: "Oriental",
    kanji: "波",
    image:
      "https://images.unsplash.com/photo-1590246815107-4c79a84afb45?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(145deg, #0b0b10 0%, #121a2a 60%, #1a1f3a 100%)",
  },
  {
    id: "p3",
    title: "Hannya en muslo · tinta roja",
    category: "Oriental",
    kanji: "般",
    image:
      "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(180deg, #0b0b10 0%, #1a0408 50%, #7a0a12 120%)",
  },
  {
    id: "p4",
    title: "Geometría asanoha · antebrazo",
    category: "Blackwork",
    kanji: "麻",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(145deg, #05050a 0%, #16161d 50%, #1f1f28 100%)",
  },
  {
    id: "p5",
    title: "Tigre sumi-e · costillas",
    category: "Tinta oriental",
    kanji: "虎",
    image:
      "https://images.unsplash.com/photo-1590246815107-4c79a84afb45?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(160deg, #0b0b10 0%, #121218 50%, #0b0b10 100%)",
  },
  {
    id: "p6",
    title: "Grullas en vuelo · espalda",
    category: "Tinta oriental",
    kanji: "鶴",
    image:
      "https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(135deg, #0b0b10 0%, #1a1f3a 55%, #0e1226 100%)",
  },
  {
    id: "p7",
    title: "Flor de cerezo · clavícula",
    category: "Minimalista",
    kanji: "桜",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(180deg, #0b0b10 0%, #1a0a12 50%, #2a0a14 100%)",
  },
  {
    id: "p8",
    title: "Koi remontando la corriente",
    category: "Neo-tradicional",
    kanji: "鯉",
    image:
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=900&q=80&auto=format&fit=crop",
    gradient:
      "linear-gradient(145deg, #0b0b10 0%, #2a0508 60%, #a61b29 140%)",
  },
];
