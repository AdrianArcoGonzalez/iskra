import { useCallback, useContext, useState } from "react";
import MeetUpContext from "../store/context/MeetUpContext";
import { useFetch } from "./useFetch";
import { APIURL } from "../utils/constants";
import {
  addMeetUpActionCreator,
  addMeetUpsActionCreator,
  toggleFavActionCreator,
} from "../store/actions/meetUpActions/meetUpActions";
import { MeetUp } from "../interfaces/Interfaces";

const useMeetups = () => {
  const { getData } = useFetch();
  const { dispatch } = useContext(MeetUpContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMeetups = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getData(APIURL);
      dispatch(addMeetUpsActionCreator(data));
      return data;
    } catch {
      return null;
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [dispatch, getData]);

  const togglefavMeetUp = (id: string) => {
    dispatch(toggleFavActionCreator(id));
  };

  const addMeetUp = async (meetUp: MeetUp) => {
    try {
      // await postData(APIURL, meetUp);

      dispatch(addMeetUpActionCreator(meetUp));
      return meetUp;
    } catch {
      return null;
    }
  };

  const createRandomId = () => {
    return "m" + Math.random().toString(36).substr(2, 9);
  };

  return { getMeetups, isLoading, togglefavMeetUp, addMeetUp, createRandomId };
};

export default useMeetups;
