import { MeetUp } from "../interfaces/Interfaces";

export const useFetch = () => {
  const getData = async (url: string): Promise<MeetUp[]> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const postData = async (url: string, meetUp: MeetUp): Promise<MeetUp> => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetUp),
    });
    const data = await response.json();
    return data;
  };
  return {
    getData,
    postData,
  };
};
