import { MeetUp } from "../../interfaces/Interfaces";
import { ActionType } from "./actionTypes";

export interface Action {
  type: ActionType;
}
export interface AddMeetUpsAction extends Action {
  payload: MeetUp[];
}
export interface ToogleFavAction extends Action {
  payload: string;
}
