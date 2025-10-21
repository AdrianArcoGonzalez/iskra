import classes from "./../components/meetups/MeetUpList/MeetupList.module.css";
import MeetupItem from "../components/meetups/MeetUpItem/MeetupItem";
import pageTitles from "./data";
import useMeetups from "../hooks/useMeetups";
import { useEffect } from "react";

export default function AllMeetupsPage() {
  const { getMeetups } = useMeetups();

  useEffect(() => {
    getMeetups();
  }, []);

  return (
    <section>
      <h1>{pageTitles.home}</h1>
      <ul className={classes.list}>
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
      </ul>
    </section>
  );
}
