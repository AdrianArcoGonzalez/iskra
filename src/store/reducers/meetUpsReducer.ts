import { MeetUp } from "../../interfaces/Interfaces";
import { Action, AddMeetUpAction, AddMeetUpsAction } from "../types/actions";
import { actions } from "../types/actionTypes";

const meetUpsReducer = (
  previousData: MeetUp[],
  action: Action | { type: string; payload?: MeetUp[] }
) => {
  let meetUps: MeetUp[] = [];
  switch (action.type) {
    case actions.ADD_MEETUPS:
      meetUps = (action as AddMeetUpsAction).payload.filter((meetUp) =>
        previousData.filter((prevMeetUp) => prevMeetUp.id !== meetUp.id)
      );

      break;

    case actions.TOOGLE_FAV:
      const meetUpId = (action as { type: string; payload: string }).payload;
      meetUps = previousData.map((meetUp) =>
        meetUp.id === meetUpId
          ? { ...meetUp, isFavorite: !meetUp.isFavorite }
          : meetUp
      );
      break;

    case actions.ADD_MEETUP:
      const newMeetUp = (action as AddMeetUpAction).payload;
      meetUps = [newMeetUp, ...previousData];
      break;

    default:
      meetUps = [...previousData];
  }

  return meetUps;
};

export default meetUpsReducer;
