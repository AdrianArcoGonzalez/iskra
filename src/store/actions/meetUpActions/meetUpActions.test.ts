import { MeetUp } from "../../../interfaces/MeetUp";
import { addMeetUpsActionCreator } from "./meetUpActions";

describe("addMeetUpsActionCreator", () => {
  it("should create an action to add meetups", () => {
    const meetups: MeetUp[] = [
      {
        id: "1",
        title: "Meetup 1",
        description: "Description 1",
        image: "image1",
        address: "Address 1",
      },
    ];
    const expectedAction = {
      type: "ADD_MEETUPS",
      payload: meetups,
    };

    expect(addMeetUpsActionCreator(meetups)).toEqual(expectedAction);
  });
});
