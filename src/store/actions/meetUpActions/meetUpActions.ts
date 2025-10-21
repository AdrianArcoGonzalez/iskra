import { MeetUp } from "../../../interfaces/MeetUp";
import { AddMeetUpsAction } from "../../types/actions";

export const addMeetUpsActionCreator = (
  meetUps: MeetUp[]
): AddMeetUpsAction => {
  return {
    type: "ADD_MEETUPS",
    payload: meetUps,
  };
};
