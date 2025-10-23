import { createContext, Dispatch } from "react";
import { MeetUp } from "../../interfaces/Interfaces";
import { Action } from "../types/actions";

interface MeetUpContextStructure {
  meetUps: MeetUp[];
  dispatch: Dispatch<Action>;
}

const MeetUpContext = createContext<MeetUpContextStructure>({
  meetUps: [],
  dispatch: () => {},
});

export default MeetUpContext;
