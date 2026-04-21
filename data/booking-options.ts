import type { BookingOptions } from "@/types";

export const bookingOptions: BookingOptions = {
  tattooTypes: [
    { value: "realismo", label: "Realismo" },
    { value: "blackwork", label: "Blackwork" },
    { value: "lettering", label: "Lettering" },
    { value: "minimalista", label: "Minimalista" },
    { value: "otro", label: "Otro estilo" },
  ],
  sizes: [
    { value: "pequeno", label: "Pequeño (< 5cm)" },
    { value: "mediano", label: "Mediano (5-15cm)" },
    { value: "grande", label: "Grande (15-30cm)" },
    { value: "muy-grande", label: "Muy grande (> 30cm)" },
  ],
  budgets: [
    { value: "50-100", label: "$50 - $100 USD" },
    { value: "100-250", label: "$100 - $250 USD" },
    { value: "250-500", label: "$250 - $500 USD" },
    { value: "500+", label: "$500+ USD" },
  ],
};
