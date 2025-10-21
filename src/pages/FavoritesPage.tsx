import { useContext, useEffect } from "react";
import pageTitles from "./data/data";
import MeetUpContext from "../store/context/MeetUpContext";
import MeetUpList from "../components/meetups/MeetUpList/MeetUpList";
import useMeetups from "../hooks/useMeetups";

export default function FavoritesPage() {
  const { meetUps } = useContext(MeetUpContext);
  const { getMeetups } = useMeetups();

  useEffect(() => {
    if (!meetUps.length) getMeetups();
  }, []);
  return (
    <section>
      <h1>{pageTitles.favorites}</h1>
      <MeetUpList
        meetUps={meetUps.filter((meetUp) => meetUp.isFavorite)}
        emptyMsg="Haven't any favorite meetup yet."
      />
    </section>
  );
}
