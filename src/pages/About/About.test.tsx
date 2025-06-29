// src/pages/About.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "./About";

describe("<About />", () => {
  it("renders main heading", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about us/i }),
    ).toBeInTheDocument();
  });

  it("renders intro paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/we’re a small team of designers and developers/i),
    ).toBeInTheDocument();
  });

  it("renders project description paragraph", () => {
    render(<About />);
    expect(
      screen.getByText(/this project showcases a fully themable ui/i),
    ).toBeInTheDocument();
  });

  it("renders subheading for values", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /what we stand for/i }),
    ).toBeInTheDocument();
  });

  it("renders all value list items", () => {
    render(<About />);
    const items = [
      "Clean, semantic, and maintainable code",
      "Consistent design tokens and theming",
      "Focus on user experience and accessibility",
      "Easy integration into modern stacks",
    ];

    items.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders the final paragraph with invitation", () => {
    render(<About />);
    expect(
      screen.getByText(/we're always exploring ways to improve/i),
    ).toBeInTheDocument();
  });
});
