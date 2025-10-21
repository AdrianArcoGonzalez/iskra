import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import MeetupItem from "./MeetupItem";
import { MeetUp } from "../../../interfaces/MeetUp";

const dataMock: MeetUp = {
  id: "m1",
  image: "image",
  title: "First Meetup",
  address: "123 Main St, Cityville",
  description: "This is the first meetup.",
};

describe("<MeetupItem />", () => {
  test("renders meetups ", () => {
    render(<MeetupItem meetUp={dataMock} />);
    expect(screen.getByText("First Meetup")).toBeInTheDocument();
  });
});
