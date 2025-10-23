import { MeetUp } from "../../../interfaces/Interfaces";
import {
  addMeetUpActionCreator,
  addMeetUpsActionCreator,
  toggleFavActionCreator,
} from "./meetUpActions";

describe("addMeetUpsActionCreator", () => {
  test("should create an action to add meetups", () => {
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

  test("should create an action to add a single meetup", () => {
    const meetUp: MeetUp = {
      id: "2",
      title: "Meetup 2",
      description: "Description 2",
      image: "image2",
      address: "Address 2",
    };

    expect(addMeetUpActionCreator(meetUp)).toEqual({
      type: "ADD_MEETUP",
      payload: meetUp,
    });
  });
  test("should create an action to toggle favorite status", () => {
    const meetUpId = "3";

    expect(toggleFavActionCreator(meetUpId)).toEqual({
      type: "TOOGLE_FAV",
      payload: meetUpId,
    });
  });
});
