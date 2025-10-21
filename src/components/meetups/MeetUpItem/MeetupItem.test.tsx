import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import MeetupItem from "./MeetupItem";
import { useFetch } from "../../../hooks/useFetch";

const dataMock = [
  {
    id: "m1",
    image: "image",
    title: "First Meetup",
    address: "123 Main St, Cityville",
    description: "This is the first meetup.",
  },
];

vi.mock("../../../hooks/useFetch", () => ({
  useFetch: vi.fn(),
}));

describe("<MeetupItem />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders loading state", () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
    });

    render(<MeetupItem />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders meetups after loading", () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: dataMock,
      loading: false,
    });

    render(<MeetupItem />);
    expect(screen.getByText("First Meetup")).toBeInTheDocument();
  });
});
