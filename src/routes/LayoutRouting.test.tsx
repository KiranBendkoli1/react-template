import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import AppRouter from "./AppRouter";

describe("Layout with routing", () => {
  it("renders layout header and home by default", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /discover the power/i }),
    ).toBeInTheDocument();
  });

  it("navigates to About page using layout nav", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRouter />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByRole("link", { name: /about/i }));
    expect(
      await screen.findByRole("heading", { name: /about us/i }),
    ).toBeInTheDocument();
  });
});
