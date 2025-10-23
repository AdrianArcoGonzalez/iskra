import { MeetUp } from "../../../interfaces/Interfaces";
import {
  AddMeetUpAction,
  AddMeetUpsAction,
  ToogleFavAction,
} from "../../types/actions";

export const addMeetUpsActionCreator = (
  meetUps: MeetUp[]
): AddMeetUpsAction => {
  return {
    type: "ADD_MEETUPS",
    payload: meetUps,
  };
};

export const toggleFavActionCreator = (id: string): ToogleFavAction => {
  return {
    type: "TOOGLE_FAV",
    payload: id,
  };
};

export const addMeetUpActionCreator = (meetUp: MeetUp): AddMeetUpAction => {
  return {
    type: "ADD_MEETUP",
    payload: meetUp,
  };
};
