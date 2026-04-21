"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCard from "@/components/ui/AnimatedCard";
import StarRating from "@/components/ui/StarRating";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonios">
      {/* Ambient color glows */}
      <div className="absolute top-[10%] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(139,34,82,0.07)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(201,169,110,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10">
      <SectionLabel number="06" label="TESTIMONIOS" />
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-12 md:mb-16 mt-6">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {testimonials.map((testimonial, index) => (
          <AnimatedCard
            key={testimonial.id}
            delay={index * 0.15}
            hoverEffect={false}
          >
            <span className="font-heading text-6xl text-gold/30 leading-none mb-4 block">
              &ldquo;
            </span>
            <p className="font-heading text-lg md:text-xl text-text-primary italic leading-relaxed mb-6">
              {testimonial.text}
            </p>
            <div className="w-12 h-px bg-gold/40 mb-4" />
            <p className="text-text-secondary text-sm tracking-[0.1em] uppercase mb-2">
              {testimonial.name}
            </p>
            <StarRating rating={testimonial.rating} />
          </AnimatedCard>
        ))}
      </div>
      </div>
    </SectionWrapper>
  );
}
