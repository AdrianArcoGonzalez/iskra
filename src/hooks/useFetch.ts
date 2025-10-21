import { MeetUp } from "../interfaces/MeetUp";

export const useFetch = () => {
  const getData = async (url: string): Promise<MeetUp[]> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return {
    getData,
  };
};
