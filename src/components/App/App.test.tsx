import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

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
    const testId = "app";
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const app = screen.getByTestId(testId);

    expect(app).toBeInTheDocument();
  });

  test("renders the navigation component", () => {
    const title = "React Meetups";

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const text = screen.getByText(title);

    expect(text).toBeInTheDocument();
  });

  test("renders the main layout", () => {
    const testId = "layout";
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const layoutContainer = screen.getByTestId(testId);

    expect(layoutContainer).toBeInTheDocument();
  });
});
