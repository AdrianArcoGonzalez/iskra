import { MeetUp } from "../../interfaces/MeetUp";
import { Action, AddMeetUpsAction } from "../types/actions";
import { actions } from "../types/actionTypes";

const meetUpsReducer = (
  previousData: MeetUp[],
  action: Action | { type: string; payload?: MeetUp[] }
) => {
  let meetUps = [];
  switch (action.type) {
    case actions.ADD_MEETUPS:
      meetUps = [...previousData, ...(action as AddMeetUpsAction).payload];
      break;

    default:
      meetUps = [...previousData];
  }

  return meetUps;
};

export default meetUpsReducer;
