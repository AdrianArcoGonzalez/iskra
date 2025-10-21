import { useReducer } from "react";
import MeetUpContext from "./MeetUpContext";
import meetUpsReducer from "../reducers/useReducer";

interface MeetUpContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const MeetUpContextProvider = ({
  children,
}: MeetUpContextProviderProps): JSX.Element => {
  const [meetUps, dispatch] = useReducer(meetUpsReducer, []);

  return (
    <MeetUpContext.Provider value={{ meetUps, dispatch }}>
      {children}
    </MeetUpContext.Provider>
  );
};

export default MeetUpContextProvider;
