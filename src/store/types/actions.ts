import { MeetUp } from "../../interfaces/MeetUp";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}
export interface AddMeetUpsAction extends Action {
  payload: MeetUp[];
}
