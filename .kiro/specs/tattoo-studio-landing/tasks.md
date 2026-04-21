# Implementation Plan: YumeTattoo Landing Page — Premium Creative Redesign

## Overview

Complete creative redesign of the YumeTattoo landing page from a generic template aesthetic to a $2000+ premium editorial studio project. The project is already scaffolded (Next.js 14+, TypeScript, Tailwind, Framer Motion, lucide-react). Data files and types are unchanged. This plan rewrites the design system, shared UI components, all 12 section components, and the page composition.

## Tasks

- [x] 1. Update design system foundation
  - [x] 1.1 Update tailwind.config.ts with extended design tokens
    - Add `fontSize` overrides for `8xl` and `9xl` with tight line-heights for dramatic typography
    - Add `spacing` tokens `128` (32rem) and `160` (40rem) for dramatic section spacing
    - Update `animation` to use cubic-bezier easing (`0.25, 0.1, 0.25, 1`) and add `pulse-slow` animation
    - Update `keyframes.fadeInUp` to use `translateY(30px)` instead of `20px`
    - _Requirements: 2.1, 2.3, 2.4_

  - [x] 1.2 Rewrite globals.css with grain overlay and premium utilities
    - Keep existing CSS variables and Tailwind directives
    - Add `body::after` grain/noise texture overlay using inline SVG feTurbulence filter at `opacity: 0.04`, `position: fixed`, `z-index: 100`, `pointer-events: none`
    - Add `.scrollbar-hide` utility class (hide webkit scrollbar + ms-overflow-style + scrollbar-width)
    - Update page scrollbar to 6px width with `#000000` track and `#2a2a2a` thumb
    - Add `::selection` styling with gold background (`rgba(201,169,110,0.3)`) and off-white text
    - _Requirements: 2.1, 2.2, 16.1_

  - [x] 1.3 Update layout.tsx with grain overlay support
    - Ensure `<html>` has `lang="es"` and both font variables
    - Ensure `<body>` uses `bg-bg-primary text-text-primary font-body` — the grain overlay is handled via CSS `body::after` so no component needed in layout
    - _Requirements: 1.1, 1.4, 2.1_

- [x] 2. Create new shared UI components
  - [x] 2.1 Create SectionLabel component (`components/ui/SectionLabel.tsx`)
    - Props: `number: string`, `label: string`
    - Renders `"01 — PORTAFOLIO"` pattern in `text-xs tracking-[0.3em] uppercase text-gold font-body`
    - Includes a thin horizontal gold line (`w-12 h-px bg-gold/40`) extending from the text
    - _Requirements: 2.3, 19.1, 19.4_

  - [x] 2.2 Create DecorativeLine component (`components/ui/DecorativeLine.tsx`)
    - Props: `orientation?: "horizontal" | "vertical"`, `className?: string`
    - Horizontal: `w-16 h-px bg-gold/30`, Vertical: `w-px h-16 bg-gold/30`
    - Supports additional className for positioning
    - _Requirements: 2.2, 19.1_

  - [x] 2.3 Rewrite SectionWrapper component (`components/ui/SectionWrapper.tsx`)
    - Props: `id?: string`, `children`, `className?: string`, `animate?: boolean` (default true), `fullWidth?: boolean`
    - Renders `<section>` with `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12` and dramatic padding `py-32 md:py-40`
    - When `fullWidth`: removes max-width constraint
    - Uses Framer Motion `motion.section` with `whileInView` fade-in + translateY(30→0), `once: true`, `viewport.amount: 0.15`
    - Transition: `duration: 0.8, ease: [0.25, 0.1, 0.25, 1]`
    - Respects `useReducedMotion()` — instant animations when preferred
    - _Requirements: 2.4, 16.1, 16.2, 20.2_

  - [x] 2.4 Rewrite AnimatedCard component (`components/ui/AnimatedCard.tsx`)
    - Props: `children`, `className?: string`, `delay?: number`, `hoverEffect?: boolean` (default true)
    - Uses `motion.div` with `whileInView` entrance (fade-in + slide-up, 0.7s)
    - Hover: `whileHover={{ y: -6 }}` with subtle gold border glow (`box-shadow: 0 0 30px rgba(201,169,110,0.08)`)
    - Respects `useReducedMotion()`
    - _Requirements: 16.1, 16.3, 19.1_

- [x] 3. Checkpoint — Verify design system and shared components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Rewrite Navbar component
  - [x] 4.1 Rewrite Navbar (`components/Navbar.tsx`)
    - Minimal luxury style: fixed top, full width, z-50, 80px height
    - Default transparent, scrolled state (`>50px`): `bg-black/90 backdrop-blur-xl border-b border-white/5`
    - Logo: "YumeTattoo" in `font-heading text-lg tracking-[0.15em] uppercase`, gold on hover
    - Desktop nav links: `text-xs tracking-[0.2em] uppercase text-text-muted hover:text-text-primary`
    - CTA button: outlined style `border border-gold/50 text-gold hover:bg-gold/10 text-xs tracking-[0.15em] uppercase px-6 py-2.5`
    - Mobile hamburger menu: full-screen overlay with centered nav links in large `font-heading`, staggered entrance animation
    - Smooth scroll on link click with 80px navbar offset
    - Import `navLinks` from `data/navigation.ts`
    - ARIA labels on hamburger button, semantic `<nav>` element
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 17.1, 17.3, 20.2, 20.5_

- [x] 5. Rewrite HeroSection component
  - [x] 5.1 Rewrite HeroSection (`components/HeroSection.tsx`)
    - Asymmetric editorial layout: `min-h-screen`, text left (60%), decorative right (40%) on desktop
    - Title split line-by-line with staggered Framer Motion reveals (0.15s stagger): "Tatuajes con" / "identidad," (gold) / "precisión y carácter."
    - Typography: `text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold`
    - Subtitle: `text-lg md:text-xl text-text-secondary max-w-lg`, left-aligned
    - Two CTA buttons: "Reservar cita" (wine-red filled) and "Ver portafolio" (outlined)
    - Right side decorative elements: radial gradient glow (`bg-wine-red/8 blur-[150px]`), thin gold lines at angles, outlined circle/arc shape (`border border-gold/15 rounded-full`), subtle animated elements
    - Animation sequence within 1.5s: lines → subtitle → CTAs → decorative elements
    - Background: true `#000000` with subtle radial gradient from `wine-red/5`
    - Mobile: stacked layout, text first
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 16.1, 20.2_

- [x] 6. Rewrite ValueSection component
  - [x] 6.1 Rewrite ValueSection (`components/ValueSection.tsx`)
    - Section label: `<SectionLabel number="01" label="BENEFICIOS" />`
    - Heading: "¿Por qué elegirnos?" in `font-heading text-4xl md:text-5xl lg:text-6xl`, left-aligned
    - `<DecorativeLine />` below heading
    - Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10`
    - Editorial card design: top border `border-t border-gold/20 pt-8`, NO background fill
    - Icon: lucide-react in `text-gold w-8 h-8 mb-4` (bare icon, no circle)
    - Hover: border transitions to `border-gold/60`, card translates up `y: -4`
    - Staggered entrance: `index * 0.1s` delay per card
    - Import `values` from `data/values.ts`, map icon strings to lucide-react components with fallback
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 20.2_

  - [ ]* 6.2 Write property test for ValueSection data completeness
    - **Property 2: Value card data completeness**
    - Generate arbitrary `ValueItem` objects, render card, verify title + description present in output
    - **Validates: Requirements 6.2**

- [x] 7. Rewrite PortfolioSection component
  - [x] 7.1 Rewrite PortfolioSection (`components/PortfolioSection.tsx`)
    - Section label: `<SectionLabel number="02" label="PORTAFOLIO" />`
    - Heading: "Portafolio" + subheading "Cada pieza cuenta una historia"
    - Category filter buttons: `text-xs tracking-[0.2em] uppercase`, active = `text-gold border-b border-gold`, inactive = `text-text-muted hover:text-text-secondary`. No pill backgrounds.
    - Horizontal scroll carousel: `overflow-x-auto` with `scroll-snap-type: x mandatory`, Framer Motion `drag="x"` with `dragConstraints`
    - Large portrait cards: `min-w-[300px] md:min-w-[400px] lg:min-w-[450px]` with `aspect-[3/4]`
    - Card design: `rounded-2xl`, gradient background, bottom gradient overlay (always visible), hover: `scale: 1.05` + gold border
    - Title + category label at bottom-left of each card
    - `AnimatePresence mode="wait"` for category filter transitions
    - Hide scrollbar with `.scrollbar-hide` class, gradient fade on right edge
    - Import `portfolioItems` from `data/portfolio.ts`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 16.1, 16.3_

  - [ ]* 7.2 Write property test for portfolio category filter correctness
    - **Property 3: Portfolio category filter correctness**
    - Generate arbitrary `PortfolioItem[]` + category, verify filter returns only matching items; "Todos" returns all
    - **Validates: Requirements 7.4**

  - [ ]* 7.3 Write property test for portfolio card data completeness
    - **Property 4: Portfolio card data completeness**
    - Generate arbitrary `PortfolioItem` objects, render card, verify title + category present
    - **Validates: Requirements 7.5**

- [x] 8. Rewrite AboutSection component
  - [x] 8.1 Rewrite AboutSection (`components/AboutSection.tsx`)
    - Section label: `<SectionLabel number="03" label="EL ARTISTA" />`
    - Desktop: `grid grid-cols-1 lg:grid-cols-5 gap-16` — left 2/5 avatar, right 3/5 text
    - Avatar: `aspect-[3/4] rounded-2xl` with gradient placeholder, thin gold border, artist initials "AM" in `font-heading text-6xl text-gold/20`
    - Artist name: `font-heading text-3xl md:text-4xl`, title in `text-gold text-sm tracking-[0.2em] uppercase`
    - Bio paragraphs: `text-text-secondary leading-relaxed`
    - Pull quote (philosophy): `border-l-2 border-gold/40 pl-6`, `font-heading text-xl md:text-2xl italic`
    - Dramatic stat callout: years of experience in `text-gold text-5xl font-heading font-bold`
    - Framer Motion fade-in entrance
    - Import `artistBio` from `data/site.ts`
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 20.2, 20.3_

- [x] 9. Rewrite ProcessSection component
  - [x] 9.1 Rewrite ProcessSection (`components/ProcessSection.tsx`)
    - Section label: `<SectionLabel number="04" label="PROCESO" />`
    - Heading: "Nuestro proceso" in `font-heading text-4xl md:text-5xl lg:text-6xl`
    - Vertical editorial timeline: thin gold line (`w-px bg-gold/20`) running vertically
    - Desktop: center or left-aligned timeline; Mobile: left-side line with content to the right
    - Step number: `text-gold font-heading text-4xl md:text-5xl font-bold opacity-30` — large, decorative
    - Step content: title in `font-heading text-xl`, description in `text-text-secondary text-sm leading-relaxed`
    - Icon: lucide-react in `text-gold/60 w-6 h-6` next to title
    - Staggered entrance: `index * 0.2s` delay, sliding in from side
    - Visual connectors between steps
    - Import `processSteps` from `data/process.ts`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 20.2_

  - [ ]* 9.2 Write property test for process step data completeness
    - **Property 5: Process step data completeness**
    - Generate arbitrary `ProcessStep` objects, render step, verify number + title + description present
    - **Validates: Requirements 9.2**

- [x] 10. Rewrite BookingForm component
  - [x] 10.1 Rewrite BookingForm (`components/BookingForm.tsx`)
    - Section label: `<SectionLabel number="05" label="RESERVAR" />`
    - Heading: "Solicita tu evaluación" in `font-heading text-4xl md:text-5xl lg:text-6xl`
    - Desktop: `grid grid-cols-1 lg:grid-cols-2 gap-16` — form left, visual panel right
    - Form inputs: bottom-border-only style (`bg-transparent border-b border-white/15 focus:border-gold py-4`), floating labels in `text-xs tracking-[0.15em] uppercase text-text-muted`
    - Select elements: same bottom-border style with gold chevron
    - Textarea: `border border-white/10 rounded-lg p-4` for description field
    - All 7 fields: Name, WhatsApp, Tattoo type, Size, Body area, Description, Budget
    - Validation: inline error messages in `text-error-red text-xs` for empty required fields
    - Submit button: `w-full bg-gold text-black font-medium py-4 text-sm tracking-[0.15em] uppercase hover:bg-gold-light`
    - States: idle → submitting (1.5s simulated) → success with CheckCircle icon + "¡Solicitud enviada!"
    - Visual panel (desktop only): radial gradient glow, gold lines, pull quote "Tu próximo tatuaje empieza con una conversación." in semi-transparent decorative text
    - Focus indicators using accent color, ARIA labels on all inputs
    - Import `bookingOptions` from `data/booking-options.ts`
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 20.4, 20.5_

  - [ ]* 10.2 Write property test for booking form validation correctness
    - **Property 6: Booking form validation correctness**
    - Generate arbitrary `BookingFormData` with random empty/filled fields, verify validation errors match exactly the empty required fields
    - **Validates: Requirements 10.3**

- [x] 11. Checkpoint — Verify core sections render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 12. Rewrite TestimonialsSection component
  - [x] 12.1 Rewrite TestimonialsSection (`components/TestimonialsSection.tsx`)
    - Section label: `<SectionLabel number="06" label="TESTIMONIOS" />`
    - Heading: "Lo que dicen nuestros clientes" in `font-heading text-4xl md:text-5xl lg:text-6xl`
    - Editorial layout: `grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16` — text-forward, NOT boxed cards
    - Large opening quotation mark `"` in `font-heading text-6xl text-gold/30`
    - Review text: `font-heading text-lg md:text-xl text-text-primary italic leading-relaxed`
    - Thin gold line below quote, client name in `text-text-secondary text-sm tracking-[0.1em] uppercase`
    - StarRating component in gold below name
    - Staggered entrance animation per testimonial
    - Import `testimonials` from `data/testimonials.ts`
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 20.2_

  - [ ]* 12.2 Write property test for testimonial card data completeness
    - **Property 7: Testimonial card data completeness**
    - Generate arbitrary `Testimonial` objects, render card, verify name + text present and correct star count
    - **Validates: Requirements 11.2**

- [x] 13. Rewrite FAQSection component
  - [x] 13.1 Rewrite FAQSection (`components/FAQSection.tsx`)
    - Section label: `<SectionLabel number="07" label="FAQ" />`
    - Heading: "Preguntas frecuentes" in `font-heading text-4xl md:text-5xl lg:text-6xl`
    - Accordion: `max-w-3xl`, items separated by `border-b border-white/10`
    - Question: `text-text-primary text-base md:text-lg py-6 flex justify-between items-center cursor-pointer hover:text-gold transition-colors duration-200`
    - Chevron icon in `text-gold/60`, rotates 180° when open
    - Answer: Framer Motion `AnimatePresence` with height animation, `text-text-secondary text-sm leading-relaxed pb-6`
    - Single-open behavior: only one item expanded at a time, clicking open item collapses it
    - ARIA attributes on accordion controls
    - Import `faqItems` from `data/faq.ts`
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 20.2, 20.5_

  - [ ]* 13.2 Write property test for FAQ accordion single-open invariant
    - **Property 8: FAQ accordion single-open invariant**
    - Generate random sequences of FAQ item clicks, verify at most one item expanded after each click
    - **Validates: Requirements 12.2**

- [x] 14. Rewrite FinalCTASection component
  - [x] 14.1 Rewrite FinalCTASection (`components/FinalCTASection.tsx`)
    - Full-width section (no max-width constraint) with dramatic gradient mesh background
    - Background: overlapping radial gradients (`bg-wine-red/8` and `bg-gold/5`) with blur
    - Content centered: `max-w-3xl mx-auto text-center`
    - Heading: "Tu próximo tatuaje empieza aquí" in `font-heading text-4xl md:text-6xl lg:text-7xl`
    - Supporting text in `text-text-secondary text-lg md:text-xl`
    - Two CTA buttons: "Reservar cita" (gold bg, black text) and "Contactar por WhatsApp" (outlined green)
    - Entrance: fade-in + scale(0.95→1)
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 16.1, 20.2_

- [x] 15. Rewrite Footer component
  - [x] 15.1 Rewrite Footer (`components/Footer.tsx`)
    - `bg-black border-t border-white/5 py-20`
    - Three-column grid on desktop, stacked on mobile
    - Column 1: "YumeTattoo" in `font-heading text-xl tracking-[0.15em] uppercase` + tagline
    - Column 2: Address + hours in `text-text-muted text-sm`
    - Column 3: Social links (Instagram, WhatsApp) with lucide-react icons, `text-text-muted hover:text-gold`
    - Bottom: copyright with dynamic year, separated by `border-t border-white/5 mt-12 pt-6`
    - All text in `text-xs tracking-[0.1em] uppercase text-text-muted`
    - Semantic `<footer>` element
    - Import `siteInfo` from `data/site.ts`
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 20.2_

- [x] 16. Rewrite WhatsAppButton component
  - [x] 16.1 Rewrite WhatsAppButton (`components/WhatsAppButton.tsx`)
    - Fixed: `bottom-8 right-8 z-50`
    - Green circle: `bg-whatsapp-green w-14 h-14 rounded-full` with `shadow-lg shadow-whatsapp-green/20`
    - Icon: `MessageCircle` from lucide-react in white, `w-6 h-6`
    - Hover: `scale(1.1)` + tooltip "¿Hablamos?" as small pill to the left with fade-in (`bg-black/90 text-text-primary text-xs px-3 py-1.5 rounded-full`)
    - Click: opens `wa.me` URL in new tab
    - Touch target: 56×56px (exceeds 44px minimum)
    - Uses `motion.a` for smooth hover animation
    - Import `siteInfo` from `data/site.ts` for WhatsApp URL
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5, 3.2_

- [x] 17. Update page.tsx composition and final wiring
  - [x] 17.1 Update page.tsx
    - Ensure all 12 section components are imported and composed in correct order: Navbar → main(HeroSection, ValueSection, PortfolioSection, AboutSection, ProcessSection, BookingForm, TestimonialsSection, FAQSection, FinalCTASection) → Footer → WhatsAppButton
    - Verify semantic structure: `<main>` wrapping content sections
    - _Requirements: 19.1, 19.2, 20.2_

- [ ]* 18. Write property test for design system contrast compliance
  - **Property 1: Design system contrast compliance**
  - Generate all text/bg color pairs from design tokens, verify WCAG 2.1 contrast ratio ≥ 4.5:1
  - **Validates: Requirements 2.5**

- [x] 19. Final checkpoint — Verify complete redesign
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Data files (`data/*.ts`) and types (`types/index.ts`) are unchanged — no tasks needed for them
- The project is already scaffolded with all dependencies installed
- Each component rewrite is a complete replacement, not an incremental edit
- Property tests use fast-check library with minimum 100 iterations per property
- All components use `"use client"` directive for Framer Motion compatibility
- All animations respect `useReducedMotion()` for accessibility
