import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, MockedFunction } from "vitest";
import MeetupItem from "./MeetupItem";
import { useContext } from "react";
import { MeetUp } from "../../../interfaces/MeetUp";

const dataMock: MeetUp[] = [
  {
    id: "m1",
    image: "image",
    title: "First Meetup",
    address: "123 Main St, Cityville",
    description: "This is the first meetup.",
  },
];

// Mock del useContext de React
vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useContext: vi.fn(),
  };
});

const mockedUseContext = useContext as MockedFunction<typeof useContext>;

describe("<MeetupItem />", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders loading state", () => {
    mockedUseContext.mockReturnValue({
      meetUps: [],
      dispatch: vi.fn(),
    });

    const text = "Loading...";
    render(<MeetupItem />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("renders meetups after loading", () => {
    mockedUseContext.mockReturnValue({
      meetUps: dataMock,
      dispatch: vi.fn(),
    });

    render(<MeetupItem />);
    expect(screen.getByText("First Meetup")).toBeInTheDocument();
  });
});
