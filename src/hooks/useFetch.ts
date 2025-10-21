import { useState, useEffect } from "react";
import { MeetUp } from "../interfaces/MeetUp";

export const useFetch = (options: any) => {
  const [data, setData] = useState<null | MeetUp[]>(null);

  useEffect(() => {
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [options.url]);

  return {
    data,
  };
};
