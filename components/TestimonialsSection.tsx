"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCard from "@/components/ui/AnimatedCard";
import StarRating from "@/components/ui/StarRating";
import KanjiBackdrop from "@/components/ui/KanjiBackdrop";
import HankoStamp from "@/components/ui/HankoStamp";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonios">
      <KanjiBackdrop
        char="声"
        className="absolute -right-16 top-0 text-[28rem]"
        opacity={0.035}
      />

      <div className="absolute top-[10%] left-0 w-[500px] h-[500px] bg-blood/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-[5%] w-[450px] h-[450px] bg-kin/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-8">
          <SectionLabel number="06" label="Testimonios" kanji="声" />
        </div>

        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-washi mb-4 leading-tight">
          Voces en <span className="italic text-vermilion-light">la piel</span>
        </h2>
        <p className="text-washi/60 text-base md:text-lg mb-16 max-w-xl">
          Lo que nuestros clientes cuentan, más allá del diseño.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.id}
              delay={index * 0.12}
              hoverEffect={false}
              className="group relative texture-washi p-10 border border-kin/15 hover:border-vermilion/40 transition-all duration-500"
            >
              {/* Opening JP quote mark */}
              <span className="absolute top-4 left-6 font-jp text-6xl text-vermilion/25 leading-none select-none">
                「
              </span>

              <div className="pt-8">
                <p className="font-heading text-lg md:text-xl text-washi italic leading-relaxed mb-8">
                  {testimonial.text}
                </p>

                <div className="w-10 h-px bg-vermilion mb-5" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-washi text-sm tracking-[0.15em] uppercase mb-2">
                      {testimonial.name}
                    </p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <HankoStamp
                    char={index % 2 === 0 ? "心" : "愛"}
                    size={44}
                    rotate={index % 2 === 0 ? -7 : 5}
                  />
                </div>
              </div>

              {/* Closing JP quote mark */}
              <span className="absolute bottom-4 right-6 font-jp text-6xl text-vermilion/25 leading-none select-none">
                」
              </span>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
