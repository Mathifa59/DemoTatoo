"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import SectionLabel from "./ui/SectionLabel";
import KanjiBackdrop from "./ui/KanjiBackdrop";
import HankoStamp from "./ui/HankoStamp";
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
    setTimeout(() => setStatus("success"), 1500);
  };

  const inputClasses =
    "bg-transparent border-b border-kin/25 focus:border-vermilion py-4 text-washi text-base placeholder:text-washi/30 transition-colors duration-300 outline-none w-full";
  const selectClasses =
    "bg-transparent border-b border-kin/25 focus:border-vermilion py-4 text-washi appearance-none w-full outline-none";
  const labelClasses =
    "text-[10px] tracking-[0.3em] uppercase text-kin mb-2 block";

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
            <HankoStamp char="了" size={90} rotate={-5} />
            <CheckCircle className="text-kin w-8 h-8 mt-6 mb-4" />
            <h3 className="font-heading text-3xl font-bold text-washi mb-3">
              Solicitud recibida
            </h3>
            <p className="text-washi/60 max-w-md">
              Te contactaremos por WhatsApp en las próximas 24 horas para
              comenzar la conversación.
            </p>
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="booking">
      <KanjiBackdrop
        char="予"
        className="absolute right-0 top-0 text-[30rem]"
        opacity={0.035}
      />

      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-blood/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8">
          <SectionLabel number="05" label="Reservar" kanji="予" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-washi mb-4 leading-tight">
          Comienza la <span className="italic text-vermilion-light">conversación</span>
        </h2>
        <p className="text-washi/60 text-base md:text-lg mb-14 max-w-xl">
          Cuéntanos tu idea. Respondemos personalmente en menos de 24 horas.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — 3 cols */}
          <form onSubmit={handleSubmit} noValidate className="lg:col-span-3">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    名前 · Nombre
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
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-error-red text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="whatsapp" className={labelClasses}>
                    電話 · WhatsApp
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
                    aria-invalid={!!errors.whatsapp}
                  />
                  {errors.whatsapp && (
                    <p className="text-error-red text-xs mt-1">{errors.whatsapp}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="tattooType" className={labelClasses}>
                  様式 · Estilo
                </label>
                <select
                  id="tattooType"
                  name="tattooType"
                  value={formData.tattooType}
                  onChange={handleChange}
                  className={selectClasses}
                  required
                  aria-invalid={!!errors.tattooType}
                >
                  <option value="" className="bg-ink-deep">
                    Selecciona un estilo
                  </option>
                  {bookingOptions.tattooTypes.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-ink-deep">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.tattooType && (
                  <p className="text-error-red text-xs mt-1">{errors.tattooType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="size" className={labelClasses}>
                    大きさ · Tamaño
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className={selectClasses}
                    required
                    aria-invalid={!!errors.size}
                  >
                    <option value="" className="bg-ink-deep">
                      Selecciona un tamaño
                    </option>
                    {bookingOptions.sizes.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-ink-deep">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.size && (
                    <p className="text-error-red text-xs mt-1">{errors.size}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="bodyArea" className={labelClasses}>
                    部位 · Zona
                  </label>
                  <input
                    type="text"
                    id="bodyArea"
                    name="bodyArea"
                    value={formData.bodyArea}
                    onChange={handleChange}
                    placeholder="Ej: antebrazo, espalda"
                    className={inputClasses}
                    required
                    aria-invalid={!!errors.bodyArea}
                  />
                  {errors.bodyArea && (
                    <p className="text-error-red text-xs mt-1">{errors.bodyArea}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClasses}>
                  物語 · Tu idea
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos qué historia quieres llevar en la piel..."
                  className="border border-kin/20 p-4 bg-ink-deep/40 text-washi placeholder:text-washi/30 focus:border-vermilion outline-none transition-colors duration-300 w-full resize-none"
                  required
                  aria-invalid={!!errors.description}
                />
                {errors.description && (
                  <p className="text-error-red text-xs mt-1">{errors.description}</p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className={labelClasses}>
                  予算 · Presupuesto
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={selectClasses}
                  required
                  aria-invalid={!!errors.budget}
                >
                  <option value="" className="bg-ink-deep">
                    Selecciona un rango
                  </option>
                  {bookingOptions.budgets.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-ink-deep">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-error-red text-xs mt-1">{errors.budget}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group relative w-full bg-vermilion hover:bg-vermilion-light text-washi py-5 text-[11px] tracking-[0.3em] uppercase transition-all duration-300 mt-10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="font-jp text-base">送</span>
                    Enviar solicitud
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-blood-deep translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </form>

          {/* Right — decorative panel (2 cols) */}
          <div className="hidden lg:block lg:col-span-2 relative">
            <div className="sticky top-32">
              <div className="aspect-[4/5] relative overflow-hidden border border-kin/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1552627019-947c3789ffb5?w=900&q=80&auto=format&fit=crop"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover grayscale contrast-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-void via-ink-void/30 to-transparent" />
                <div className="absolute inset-0 bg-blood/15 mix-blend-multiply" />

                <div className="absolute top-6 left-6 right-6">
                  <span className="font-jp text-vermilion-light text-sm tracking-[0.3em]">
                    一期一会
                  </span>
                  <p className="font-heading italic text-washi text-lg leading-relaxed mt-3">
                    &ldquo;Cada encuentro, único e irrepetible.&rdquo;
                  </p>
                </div>

                <div className="absolute bottom-6 right-6">
                  <HankoStamp char="信" size={56} rotate={-6} />
                </div>
              </div>

              <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-washi/50 text-center">
                信頼 · Confianza · Responsabilidad
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
