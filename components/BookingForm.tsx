"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionLabel from "./ui/SectionLabel";
import { bookingOptions } from "@/data/booking-options";
import type { BookingFormData } from "@/types";

const initialFormData: BookingFormData = {
  name: "",
  whatsapp: "",
  tattooType: "",
  size: "",
  bodyArea: "",
  description: "",
  budget: "",
};

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof BookingFormData];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    for (const key of Object.keys(formData) as (keyof BookingFormData)[]) {
      if (formData[key].trim() === "") {
        newErrors[key] = "Este campo es obligatorio";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const inputClasses =
    "bg-transparent border-b border-white/15 focus:border-gold py-4 text-text-primary text-base placeholder:text-text-muted/50 transition-colors duration-300 outline-none w-full";

  const selectClasses =
    "bg-transparent border-b border-white/15 focus:border-gold py-4 text-text-primary appearance-none w-full outline-none";

  const labelClasses = "text-xs tracking-[0.15em] uppercase text-text-muted mb-2 block";

  if (status === "success") {
    return (
      <SectionWrapper id="booking">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center py-20"
          >
            <CheckCircle className="text-gold w-16 h-16 mb-6" />
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
              ¡Solicitud enviada!
            </h3>
            <p className="text-text-secondary max-w-md">
              Nos pondremos en contacto contigo por WhatsApp en las próximas 24 horas.
            </p>
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="booking">
      <SectionLabel number="05" label="RESERVAR" />
      <div className="mb-6" />

      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
        Solicita tu evaluación
      </h2>
      <p className="text-text-secondary text-lg mb-12">
        Cuéntanos tu idea y te contactamos en menos de 24 horas
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT COLUMN — Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-8">
            {/* Name + WhatsApp row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={inputClasses}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-error-red text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="whatsapp" className={labelClasses}>
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+52 55 1234 5678"
                  className={inputClasses}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.whatsapp}
                />
                {errors.whatsapp && (
                  <p className="text-error-red text-xs mt-1">{errors.whatsapp}</p>
                )}
              </div>
            </div>

            {/* Tattoo Type */}
            <div>
              <label htmlFor="tattooType" className={labelClasses}>
                Tipo de tatuaje
              </label>
              <select
                id="tattooType"
                name="tattooType"
                value={formData.tattooType}
                onChange={handleChange}
                className={selectClasses}
                required
                aria-required="true"
                aria-invalid={!!errors.tattooType}
              >
                <option value="">Selecciona un tipo</option>
                {bookingOptions.tattooTypes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.tattooType && (
                <p className="text-error-red text-xs mt-1">{errors.tattooType}</p>
              )}
            </div>

            {/* Size */}
            <div>
              <label htmlFor="size" className={labelClasses}>
                Tamaño aproximado
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className={selectClasses}
                required
                aria-required="true"
                aria-invalid={!!errors.size}
              >
                <option value="">Selecciona un tamaño</option>
                {bookingOptions.sizes.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.size && (
                <p className="text-error-red text-xs mt-1">{errors.size}</p>
              )}
            </div>

            {/* Body Area */}
            <div>
              <label htmlFor="bodyArea" className={labelClasses}>
                Zona del cuerpo
              </label>
              <input
                type="text"
                id="bodyArea"
                name="bodyArea"
                value={formData.bodyArea}
                onChange={handleChange}
                placeholder="Ej: antebrazo, espalda, costillas"
                className={inputClasses}
                required
                aria-required="true"
                aria-invalid={!!errors.bodyArea}
              />
              {errors.bodyArea && (
                <p className="text-error-red text-xs mt-1">{errors.bodyArea}</p>
              )}
            </div>

            {/* Description (textarea) */}
            <div>
              <label htmlFor="description" className={labelClasses}>
                Describe tu idea
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntanos los detalles de tu tatuaje ideal..."
                className="border border-white/10 rounded-lg p-4 bg-transparent text-text-primary placeholder:text-text-muted/50 focus:border-gold outline-none transition-colors duration-300 w-full resize-none"
                required
                aria-required="true"
                aria-invalid={!!errors.description}
              />
              {errors.description && (
                <p className="text-error-red text-xs mt-1">{errors.description}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className={labelClasses}>
                Presupuesto aproximado
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={selectClasses}
                required
                aria-required="true"
                aria-invalid={!!errors.budget}
              >
                <option value="">Selecciona un presupuesto</option>
                {bookingOptions.budgets.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-error-red text-xs mt-1">{errors.budget}</p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-gold text-black font-medium py-4 text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              "Solicitar evaluación"
            )}
          </button>
        </form>

        {/* RIGHT COLUMN — Visual panel (desktop only) */}
        <div className="hidden lg:block relative h-full min-h-[400px]">
          {/* Radial gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-wine-red/5 rounded-full blur-[120px]" />

          {/* Thin gold lines at angles */}
          <div className="absolute top-[15%] left-[10%] w-[200px] h-px bg-gold/15 rotate-[25deg]" />
          <div className="absolute bottom-[20%] right-[15%] w-[150px] h-px bg-gold/10 -rotate-[35deg]" />
          <div className="absolute top-[60%] left-[50%] w-[120px] h-px bg-gold/10 rotate-[60deg]" />

          {/* Pull quote */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[320px] text-center">
            <p className="font-heading text-3xl text-text-primary/20 italic leading-relaxed">
              &ldquo;Tu próximo tatuaje empieza con una conversación.&rdquo;
            </p>
          </div>

          {/* Decorative outlined circle */}
          <div className="w-[200px] h-[200px] border border-gold/10 rounded-full absolute top-[10%] right-[5%]" />
        </div>
      </div>
    </SectionWrapper>
  );
}
