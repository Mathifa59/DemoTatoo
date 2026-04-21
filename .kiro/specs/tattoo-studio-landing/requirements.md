# Requirements Document

## Introduction

This document defines the requirements for a premium landing page / commercial demo for a professional tattoo studio called **YumeTattoo**. The website serves as a high-end commercial demonstration designed to showcase how a tattoo artist's brand could look online. The page must convey professionalism, exclusivity, artistic style, authority, and ease of booking. It is built with Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS, Framer Motion, and lucide-react. The primary goal is visitor-to-client conversion through premium visual design and seamless user experience.

## Glossary

- **Landing_Page**: The single-page Next.js application comprising all sections of the YumeTattoo website
- **Navbar**: The sticky top navigation bar containing the studio logo, section links, and a booking call-to-action button
- **Hero_Section**: The full-viewport introductory section with headline, subtitle, call-to-action buttons, and visual composition
- **Value_Section**: The section presenting the studio's competitive advantages and unique selling points
- **Portfolio_Section**: The visual gallery section displaying tattoo work samples organized by category
- **About_Section**: The section presenting the artist's story, experience, and artistic philosophy
- **Process_Section**: The section explaining the step-by-step booking and tattoo creation workflow
- **Booking_Form**: The contact/quote request form with client input fields and submission handling
- **Testimonials_Section**: The section displaying client reviews and social proof
- **FAQ_Section**: The section with expandable accordion items answering common client questions
- **Final_CTA_Section**: The closing conversion-oriented section with prominent action buttons
- **Footer**: The bottom section containing studio information, social links, and legal text
- **WhatsApp_Button**: The floating action button providing direct WhatsApp contact access
- **CTA**: Call-to-action — a UI element designed to prompt a user response (button or link)
- **Viewport**: The visible area of the browser window on the user's device
- **Scroll_Animation**: A Framer Motion animation triggered when a section enters the viewport
- **Smooth_Scroll**: Browser-native or JavaScript-driven animated scrolling between page sections
- **Mock_Data**: Placeholder content (text, images, testimonials) used for demonstration purposes
- **Responsive_Layout**: A layout that adapts fluidly to screen widths from 320px to 1920px and beyond
- **Form_Validation**: Client-side input verification ensuring required fields contain valid data before submission

## Requirements

### Requirement 1: Project Scaffolding and Technology Stack

**User Story:** As a developer, I want a well-structured Next.js 14+ project with App Router, React 18+, TypeScript, Tailwind CSS, Framer Motion, and lucide-react, so that the codebase is modern, maintainable, and ready to run locally.

#### Acceptance Criteria

1. THE Landing_Page SHALL use Next.js 14 or later with the App Router directory structure
2. THE Landing_Page SHALL use React 18 or later as the UI rendering library
3. THE Landing_Page SHALL use TypeScript for all source files
4. THE Landing_Page SHALL use Tailwind CSS for all styling
5. THE Landing_Page SHALL use Framer Motion for all animations
6. THE Landing_Page SHALL use lucide-react for all iconography
7. THE Landing_Page SHALL organize source code into app/, components/, data/, and public/ directories
8. WHEN a developer runs `npm install` followed by `npm run dev`, THE Landing_Page SHALL start a local development server without errors

### Requirement 2: Visual Design System and Color Palette

**User Story:** As a visitor, I want a premium dark visual aesthetic with carefully chosen colors and typography, so that the studio feels exclusive and high-end.

#### Acceptance Criteria

1. THE Landing_Page SHALL use a dark background palette consisting of black (#000000 to #0a0a0a), graphite gray (#1a1a1a to #2a2a2a), and off-white (#f5f0eb to #ffffff) for text
2. THE Landing_Page SHALL use accent colors limited to wine red (#8b2252 to #a0324e), aged gold (#c9a96e to #d4af37), or warm beige (#c4a882 to #d4c5a9) for highlights and interactive elements
3. THE Landing_Page SHALL use modern, strong typography with clear visual hierarchy across headings, subheadings, body text, and captions
4. THE Landing_Page SHALL maintain consistent spacing using a defined spacing scale throughout all sections
5. THE Landing_Page SHALL render all text with a minimum contrast ratio of 4.5:1 against its background

### Requirement 3: Responsive Layout

**User Story:** As a tattoo artist showing the demo from a mobile device (via Instagram or WhatsApp), I want the page to look excellent on all screen sizes, so that the demo impresses potential clients on any device.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL adapt fluidly to screen widths from 320px to 1920px
2. WHEN the viewport width is 768px or less, THE Landing_Page SHALL display a mobile-optimized layout with appropriately sized touch targets of at least 44px by 44px
3. WHEN the viewport width is between 769px and 1024px, THE Landing_Page SHALL display a tablet-optimized layout
4. WHEN the viewport width is 1025px or greater, THE Landing_Page SHALL display a desktop-optimized layout
5. THE Landing_Page SHALL use no horizontal scrollbar at any supported viewport width

### Requirement 4: Navbar

**User Story:** As a visitor, I want a sticky navigation bar with smooth links and a highlighted booking button, so that I can navigate the page easily and book an appointment at any time.

#### Acceptance Criteria

1. THE Navbar SHALL display the studio name "YumeTattoo" as a logo element on the left side
2. THE Navbar SHALL contain navigation links to each major section of the Landing_Page
3. THE Navbar SHALL contain a highlighted "Reservar cita" CTA button visually distinct from navigation links
4. WHEN the user scrolls down more than 50px from the top, THE Navbar SHALL become sticky with a translucent blur background effect
5. WHEN a navigation link is clicked, THE Landing_Page SHALL perform Smooth_Scroll to the corresponding section
6. WHEN the viewport width is 768px or less, THE Navbar SHALL collapse navigation links into a hamburger menu
7. WHEN the hamburger menu icon is tapped on mobile, THE Navbar SHALL display a full-screen or slide-in overlay menu with all navigation links

### Requirement 5: Hero Section

**User Story:** As a visitor, I want an impactful first impression with a powerful headline, subtitle, and clear calls to action, so that I immediately understand the studio's value and feel compelled to explore further.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy the full viewport height on initial page load
2. THE Hero_Section SHALL display the title "Tatuajes con identidad, precisión y carácter." as the primary heading
3. THE Hero_Section SHALL display the subtitle "Transformamos ideas en piezas que llevas para siempre. Diseño personalizado, atención profesional y una experiencia pensada desde el primer contacto." below the title
4. THE Hero_Section SHALL display two CTA buttons: "Reservar cita" linking to the Booking_Form section and "Ver portafolio" linking to the Portfolio_Section
5. THE Hero_Section SHALL include a visual background composition with a dark overlay to ensure text readability
6. WHEN the Hero_Section loads, THE Hero_Section SHALL animate the title, subtitle, and CTA buttons sequentially using Framer Motion with fade-in and upward motion effects within 1.5 seconds of page load
7. THE Hero_Section SHALL include subtle decorative design elements (lines, shapes, or textures) that reinforce the premium tattoo aesthetic


### Requirement 6: Value/Benefits Section

**User Story:** As a visitor, I want to understand why this studio stands out from others, so that I feel confident choosing YumeTattoo for my tattoo.

#### Acceptance Criteria

1. THE Value_Section SHALL present at least five distinct value propositions: custom design, hygiene and safety, prior consultation, defined artistic style, and process follow-up
2. THE Value_Section SHALL display each value proposition as a card or block containing a lucide-react icon, a title, and a descriptive paragraph
3. THE Value_Section SHALL arrange value propositions in a responsive grid layout: single column on mobile, two columns on tablet, and three or more columns on desktop
4. WHEN a value proposition card enters the viewport, THE Value_Section SHALL animate the card with a Framer Motion fade-in and upward slide effect
5. WHEN the user hovers over a value proposition card on desktop, THE Value_Section SHALL apply a subtle elevation or highlight transition within 200ms

### Requirement 7: Portfolio Section

**User Story:** As a visitor, I want to browse the studio's tattoo work in an organized, visually striking gallery, so that I can evaluate the quality and style of the artist's work.

#### Acceptance Criteria

1. THE Portfolio_Section SHALL display tattoo work samples in a responsive grid layout
2. THE Portfolio_Section SHALL organize work samples into at least four categories: Realismo, Blackwork, Lettering, and Minimalista
3. THE Portfolio_Section SHALL provide category filter buttons that allow the visitor to filter displayed work by category
4. WHEN a category filter is selected, THE Portfolio_Section SHALL display only work samples matching the selected category with a smooth Framer Motion transition
5. THE Portfolio_Section SHALL display each work sample as a card with a placeholder image, category label, and descriptive title
6. WHEN the user hovers over a portfolio card on desktop, THE Portfolio_Section SHALL display a zoom effect and an overlay with the work title and category within 300ms
7. THE Portfolio_Section SHALL display at least eight work sample cards using Mock_Data with visually distinct placeholder images (gradient-based or pattern-based, not empty boxes)

### Requirement 8: About the Artist/Studio Section

**User Story:** As a visitor, I want to learn about the artist's story and philosophy, so that I feel a personal connection and trust in the studio.

#### Acceptance Criteria

1. THE About_Section SHALL display a professional placeholder image or avatar representing the artist
2. THE About_Section SHALL present a brief artist biography including artistic focus, years of experience (simulated), and personal philosophy
3. THE About_Section SHALL use natural, authentic-sounding text that conveys trust, identity, and artistic style
4. THE About_Section SHALL use a two-column layout on desktop (image and text side by side) and a stacked layout on mobile
5. WHEN the About_Section enters the viewport, THE About_Section SHALL animate its content with Framer Motion fade-in effects

### Requirement 9: Booking Process Section

**User Story:** As a visitor, I want to understand the step-by-step booking process, so that I know what to expect and feel comfortable initiating contact.

#### Acceptance Criteria

1. THE Process_Section SHALL present exactly four steps: "Cuéntanos tu idea", "Define estilo y tamaño", "Propuesta y fecha", and "Sesión de tatuaje"
2. THE Process_Section SHALL display each step with a step number, title, descriptive text, and a lucide-react icon
3. THE Process_Section SHALL arrange steps in a timeline or sequential card layout that visually communicates progression
4. WHEN a process step enters the viewport, THE Process_Section SHALL animate the step with a staggered Framer Motion entrance effect
5. THE Process_Section SHALL visually connect steps using lines, connectors, or progressive indicators

### Requirement 10: Booking/Quote Form

**User Story:** As a visitor, I want to submit my tattoo idea and contact details through an elegant form, so that I can request a professional evaluation from the studio.

#### Acceptance Criteria

1. THE Booking_Form SHALL contain the following input fields: Name (text), WhatsApp (tel), Tattoo type (select), Approximate size (select), Body area (text), Idea description (textarea), and Approximate budget (select)
2. THE Booking_Form SHALL display a submit button labeled "Solicitar evaluación"
3. WHEN the user submits the Booking_Form with one or more empty required fields, THE Booking_Form SHALL display inline validation error messages for each empty required field without reloading the page
4. WHEN the user submits the Booking_Form with all required fields filled, THE Booking_Form SHALL display a loading/sending state on the submit button for 1.5 seconds
5. WHEN the simulated submission completes, THE Booking_Form SHALL display an elegant success message confirming the request was received
6. THE Booking_Form SHALL style all input fields with a premium dark theme consistent with the Landing_Page design system (no default browser-styled inputs)
7. WHEN the user focuses on a form input field, THE Booking_Form SHALL apply a visible focus indicator using the accent color

### Requirement 11: Testimonials Section

**User Story:** As a visitor, I want to read reviews from previous clients, so that I gain social proof and confidence in the studio's quality.

#### Acceptance Criteria

1. THE Testimonials_Section SHALL display between three and five client testimonials using Mock_Data
2. THE Testimonials_Section SHALL display each testimonial with a client name, a star rating (4 or 5 stars), and a review text
3. THE Testimonials_Section SHALL use credible, natural-sounding Spanish-language testimonial text that avoids generic phrasing
4. THE Testimonials_Section SHALL arrange testimonials in a responsive card layout: single column on mobile and multi-column on desktop
5. WHEN a testimonial card enters the viewport, THE Testimonials_Section SHALL animate the card with a Framer Motion fade-in effect

### Requirement 12: FAQ Section

**User Story:** As a visitor, I want to find answers to common questions about the tattoo process, so that I can make an informed decision without needing to contact the studio first.

#### Acceptance Criteria

1. THE FAQ_Section SHALL display at least six frequently asked questions with answers
2. THE FAQ_Section SHALL present questions in an accordion format where only one answer is expanded at a time
3. WHEN the user clicks a closed FAQ item, THE FAQ_Section SHALL expand the answer with a smooth Framer Motion height animation within 300ms
4. WHEN the user clicks an open FAQ item, THE FAQ_Section SHALL collapse the answer with a smooth Framer Motion height animation within 300ms
5. THE FAQ_Section SHALL display a visual indicator (chevron or plus/minus icon) showing the expanded or collapsed state of each item


### Requirement 13: Final CTA Section

**User Story:** As a visitor who has scrolled through the entire page, I want a final compelling prompt to take action, so that I am motivated to book an appointment or contact the studio.

#### Acceptance Criteria

1. THE Final_CTA_Section SHALL display a powerful conversion-oriented heading and supporting text
2. THE Final_CTA_Section SHALL contain two CTA buttons: a "Reservar cita" button linking to the Booking_Form and a "Contactar por WhatsApp" button linking to a WhatsApp URL
3. THE Final_CTA_Section SHALL use a visually distinct background treatment (gradient, texture, or accent color) to differentiate it from adjacent sections
4. WHEN the Final_CTA_Section enters the viewport, THE Final_CTA_Section SHALL animate its content with Framer Motion fade-in and scale effects

### Requirement 14: Footer

**User Story:** As a visitor, I want to find studio contact information, social links, and business details at the bottom of the page, so that I can reach the studio through my preferred channel.

#### Acceptance Criteria

1. THE Footer SHALL display the studio name "YumeTattoo"
2. THE Footer SHALL display a simulated physical address
3. THE Footer SHALL display simulated business hours
4. THE Footer SHALL contain a link to an Instagram profile (simulated URL)
5. THE Footer SHALL contain a link to a WhatsApp contact (simulated URL)
6. THE Footer SHALL display a copyright notice with the current year
7. THE Footer SHALL use a layout that separates information into logical groups on desktop and stacks vertically on mobile

### Requirement 15: Floating WhatsApp Button

**User Story:** As a visitor, I want a persistent WhatsApp contact button visible at all times, so that I can instantly reach the studio from any point on the page.

#### Acceptance Criteria

1. THE WhatsApp_Button SHALL be positioned fixed in the bottom-right corner of the viewport
2. THE WhatsApp_Button SHALL remain visible at all times while scrolling
3. WHEN the user clicks the WhatsApp_Button, THE WhatsApp_Button SHALL open a WhatsApp chat URL in a new browser tab
4. WHEN the user hovers over the WhatsApp_Button on desktop, THE WhatsApp_Button SHALL display a scale-up animation and a tooltip text within 200ms
5. THE WhatsApp_Button SHALL use a green color (#25D366) consistent with the WhatsApp brand

### Requirement 16: Scroll Animations and Microinteractions

**User Story:** As a visitor, I want smooth, fluid animations as I scroll through the page, so that the experience feels modern, polished, and engaging.

#### Acceptance Criteria

1. WHEN any major section enters the viewport during scrolling, THE Landing_Page SHALL trigger a Framer Motion entrance animation for that section's content
2. THE Landing_Page SHALL use Framer Motion's viewport detection (whileInView) to trigger Scroll_Animations only once per section
3. THE Landing_Page SHALL apply hover state transitions on all interactive elements (buttons, cards, links) within 200ms
4. THE Landing_Page SHALL implement Smooth_Scroll behavior for all internal anchor navigation
5. THE Landing_Page SHALL ensure all animations complete without visible frame drops or jank on mid-range mobile devices

### Requirement 17: Smooth Scroll Navigation

**User Story:** As a visitor, I want clicking navigation links to smoothly scroll to the target section, so that the browsing experience feels seamless and polished.

#### Acceptance Criteria

1. WHEN a Navbar link is clicked, THE Landing_Page SHALL scroll smoothly to the target section using CSS scroll-behavior or JavaScript-based smooth scrolling
2. WHEN a CTA button targeting an internal section is clicked, THE Landing_Page SHALL scroll smoothly to the target section
3. THE Landing_Page SHALL offset the scroll position to account for the sticky Navbar height so that section headings are not hidden behind the Navbar

### Requirement 18: Mock Data and Placeholder Content

**User Story:** As a developer or demo viewer, I want all sections populated with realistic placeholder content, so that the demo feels complete and professional without requiring real data.

#### Acceptance Criteria

1. THE Landing_Page SHALL use Mock_Data stored in dedicated data files within the data/ directory
2. THE Landing_Page SHALL populate the Portfolio_Section with at least eight work samples containing titles, categories, and visually distinct placeholder images (CSS gradients or SVG patterns)
3. THE Landing_Page SHALL populate the Testimonials_Section with three to five testimonials containing Spanish-language names, ratings, and review text
4. THE Landing_Page SHALL populate the FAQ_Section with at least six question-and-answer pairs relevant to a tattoo studio
5. THE Landing_Page SHALL populate the Booking_Form select fields with realistic option values for tattoo type, size, and budget

### Requirement 19: Componentized Architecture

**User Story:** As a developer, I want the UI broken into reusable, well-organized components, so that the codebase is maintainable and easy to extend.

#### Acceptance Criteria

1. THE Landing_Page SHALL implement each major section (Navbar, Hero_Section, Value_Section, Portfolio_Section, About_Section, Process_Section, Booking_Form, Testimonials_Section, FAQ_Section, Final_CTA_Section, Footer, WhatsApp_Button) as a separate React component
2. THE Landing_Page SHALL store all section components in the components/ directory
3. THE Landing_Page SHALL use TypeScript interfaces or types for all component props and data structures
4. THE Landing_Page SHALL avoid inline style objects, using Tailwind CSS utility classes for all styling

### Requirement 20: Performance and Accessibility Baseline

**User Story:** As a visitor on a mobile device, I want the page to load quickly and be usable with assistive technologies, so that the experience is inclusive and performant.

#### Acceptance Criteria

1. THE Landing_Page SHALL render meaningful content within 3 seconds on a simulated 4G connection
2. THE Landing_Page SHALL use semantic HTML elements (nav, main, section, article, footer, h1-h6) throughout all components
3. THE Landing_Page SHALL provide alt text for all images and decorative elements
4. THE Landing_Page SHALL ensure all interactive elements are reachable via keyboard navigation
5. THE Landing_Page SHALL use appropriate ARIA labels on the hamburger menu, accordion controls, and form inputs
