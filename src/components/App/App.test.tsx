import { screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import App from "./App";
import { renderWithRouter } from "../../utils/testUtils";

const dataMock = [
  {
    id: "m1",
    image: "image",
    title: "First Meetup",
    address: "123 Main St, Cityville",
    description: "This is the first meetup.",
  },
];

vi.mock("../../hooks/useFetch", () => ({
  useFetch: vi.fn(() => ({
    data: dataMock,
  })),
}));

describe("App Component", () => {
  test("renders App without crashing", () => {
    renderWithRouter(<App />);
    const app = screen.getByRole("main");

    expect(app).toBeInTheDocument();
  });

  test("renders the navigation component", () => {
    const title = "React Meetups";

    renderWithRouter(<App />);
    const text = screen.getByText(title);

    expect(text).toBeInTheDocument();
  });
});
