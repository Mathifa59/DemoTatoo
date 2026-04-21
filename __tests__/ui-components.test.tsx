import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionLabel from "../components/ui/SectionLabel";
import DecorativeLine from "../components/ui/DecorativeLine";

// Mock framer-motion for SectionWrapper and AnimatedCard
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    useReducedMotion: () => true, // force reduced motion so we get plain elements
  };
});

import SectionWrapper from "../components/ui/SectionWrapper";
import AnimatedCard from "../components/ui/AnimatedCard";

describe("SectionLabel", () => {
  it("renders number and label in correct pattern", () => {
    render(<SectionLabel number="01" label="PORTAFOLIO" />);
    expect(screen.getByText("01 — PORTAFOLIO")).toBeInTheDocument();
  });

  it("applies correct styling classes", () => {
    const { container } = render(<SectionLabel number="02" label="PROCESO" />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("flex");
    expect(wrapper.className).toContain("items-center");
    expect(wrapper.className).toContain("gap-4");
  });

  it("renders the decorative gold line", () => {
    const { container } = render(<SectionLabel number="01" label="TEST" />);
    const line = container.querySelector("span.w-12");
    expect(line).toBeInTheDocument();
  });
});

describe("DecorativeLine", () => {
  it("renders horizontal line by default", () => {
    const { container } = render(<DecorativeLine />);
    const line = container.firstElementChild as HTMLElement;
    expect(line.className).toContain("w-16");
    expect(line.className).toContain("h-px");
    expect(line.className).toContain("bg-gold/30");
  });

  it("renders vertical line when specified", () => {
    const { container } = render(<DecorativeLine orientation="vertical" />);
    const line = container.firstElementChild as HTMLElement;
    expect(line.className).toContain("w-px");
    expect(line.className).toContain("h-16");
  });

  it("supports additional className", () => {
    const { container } = render(<DecorativeLine className="mt-4 absolute" />);
    const line = container.firstElementChild as HTMLElement;
    expect(line.className).toContain("mt-4");
    expect(line.className).toContain("absolute");
  });
});

describe("SectionWrapper", () => {
  it("renders children inside a section element", () => {
    render(<SectionWrapper>Hello</SectionWrapper>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hello").closest("section")).toBeInTheDocument();
  });

  it("applies id when provided", () => {
    const { container } = render(<SectionWrapper id="test-section">Content</SectionWrapper>);
    expect(container.querySelector("#test-section")).toBeInTheDocument();
  });

  it("applies dramatic padding classes", () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    const section = container.querySelector("section") as HTMLElement;
    expect(section.className).toContain("py-32");
    expect(section.className).toContain("md:py-40");
  });

  it("applies max-w-7xl by default", () => {
    const { container } = render(<SectionWrapper>Content</SectionWrapper>);
    const section = container.querySelector("section") as HTMLElement;
    expect(section.className).toContain("max-w-7xl");
  });

  it("removes max-width when fullWidth is true", () => {
    const { container } = render(<SectionWrapper fullWidth>Content</SectionWrapper>);
    const section = container.querySelector("section") as HTMLElement;
    expect(section.className).not.toContain("max-w-7xl");
  });

  it("applies custom className", () => {
    const { container } = render(<SectionWrapper className="bg-red-500">Content</SectionWrapper>);
    const section = container.querySelector("section") as HTMLElement;
    expect(section.className).toContain("bg-red-500");
  });
});

describe("AnimatedCard", () => {
  it("renders children", () => {
    render(<AnimatedCard>Card content</AnimatedCard>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("renders as plain div when reduced motion is preferred", () => {
    const { container } = render(<AnimatedCard>Content</AnimatedCard>);
    const div = container.firstElementChild as HTMLElement;
    expect(div.tagName).toBe("DIV");
  });

  it("applies custom className", () => {
    const { container } = render(<AnimatedCard className="custom-class">Content</AnimatedCard>);
    const div = container.firstElementChild as HTMLElement;
    expect(div.className).toContain("custom-class");
  });
});
