import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    icon: "MessageCircle",
    title: "Cuéntanos tu idea",
    description:
      "Escríbenos por WhatsApp o completa el formulario con tu idea, referencias visuales y la zona del cuerpo donde quieres tu tatuaje.",
  },
  {
    number: 2,
    icon: "Ruler",
    title: "Define estilo y tamaño",
    description:
      "Conversamos sobre el estilo que mejor se adapta a tu idea, definimos dimensiones y te damos una cotización sin compromiso.",
  },
  {
    number: 3,
    icon: "Calendar",
    title: "Propuesta y fecha",
    description:
      "Creamos un diseño personalizado para tu aprobación. Una vez que estés conforme, agendamos la sesión en el horario que prefieras.",
  },
  {
    number: 4,
    icon: "Sparkles",
    title: "Sesión de tatuaje",
    description:
      "Llega el día. Te recibimos en un ambiente cómodo y profesional. Al terminar, te entregamos una guía completa de cuidados.",
  },
];
