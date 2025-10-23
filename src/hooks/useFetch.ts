import { MeetUp } from "../interfaces/Interfaces";

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
