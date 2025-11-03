import { useContext, useEffect, useMemo } from "react";
import pageTitles from "../data/data";
import MeetUpContext from "../../store/context/MeetUpContext";
import MeetUpList from "../../components/meetups/MeetUpList/MeetUpList";
import useMeetups from "../../hooks/useMeetups";
import classes from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const { meetUps } = useContext(MeetUpContext);
  const { getMeetups } = useMeetups();

  const favs = useMemo(
    () => meetUps.filter((meetUp) => meetUp.isFavorite),
    [meetUps]
  );
  useEffect(() => {
    if (!meetUps.length) getMeetups();
  }, [getMeetups, meetUps.length]);

  return (
    <section className={classes.page}>
      <h1>{pageTitles.favorites}</h1>

      <MeetUpList meetUps={favs} emptyMsg="Haven't any favorite meetup yet." />
    </section>
  );
}
