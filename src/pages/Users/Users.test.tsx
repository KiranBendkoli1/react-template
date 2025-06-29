import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import Users from "./Users";
import * as userQuery from "@apis/queries/login.query";
import { describe, expect, it, vi } from "vitest";

vi.mock("@apis/queries/login.query", () => ({
  useFetchUsers: vi.fn(),
}));

// custom render wrapper
const createTestClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithClient = (ui: React.ReactNode) => {
  const client = createTestClient();
  return render(
    <QueryClientProvider client={client}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>,
  );
};

describe("<Users>", () => {
  it("renders loading state", () => {
    (userQuery.useFetchUsers as any).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    });

    renderWithClient(<Users />);
    expect(screen.getByText(/Loading users.../i)).toBeInTheDocument();
  });

  it("renders users in table", async () => {
    const mockUsers = [
      {
        id: 1,
        name: "Leanne Graham",
        email: "leanne@example.com",
        username: "Bret",
        website: "leanne.dev",
        company: { name: "Romaguera-Crona" },
        address: { city: "Gwenborough" },
      },
    ];
    (userQuery.useFetchUsers as any).mockReturnValue({
      data: mockUsers,
      isLoading: false,
      error: null,
    });

    renderWithClient(<Users />);

    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("leanne@example.com")).toBeInTheDocument();
    expect(screen.getByText("Romaguera-Crona")).toBeInTheDocument();
  });
  it("renders error message", () => {
    (userQuery.useFetchUsers as any).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error("Failed to load"),
    });

    renderWithClient(<Users />);
    expect(screen.getByText(/Error fetching users/i)).toBeInTheDocument();
  });
});
