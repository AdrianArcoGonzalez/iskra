import { useContext, useState } from "react";
import MeetUpContext from "../store/context/MeetUpContext";
import { useFetch } from "./useFetch";
import { APIURL } from "../utils/constants";
import { addMeetUpsActionCreator } from "../store/actions/meetUpActions/meetUpActions";

const useMeetups = () => {
  const { getData } = useFetch();
  const { dispatch } = useContext(MeetUpContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getMeetups = async () => {
    try {
      setIsLoading(true);
      const data = await getData(APIURL);
      dispatch(addMeetUpsActionCreator(data));
    } catch (error) {
      console.error("Error fetching meetups:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return { getMeetups, isLoading };
};

export default useMeetups;
