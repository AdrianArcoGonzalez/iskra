import { useContext } from "react";
import MeetUpContext from "../store/context/MeetUpContext";
import { useFetch } from "./useFetch";
import { APIURL } from "../utils/constants";
import { addMeetUpsActionCreator } from "../store/actions/meetUpActions/meetUpActions";

const useMeetups = () => {
  const { getData } = useFetch();
  const { dispatch } = useContext(MeetUpContext);

  const getMeetups = async () => {
    try {
      const data = await getData(APIURL);
      dispatch(addMeetUpsActionCreator(data));
    } catch (error) {
      console.error("Error fetching meetups:", error);
    }
  };

  return { getMeetups };
};

export default useMeetups;
