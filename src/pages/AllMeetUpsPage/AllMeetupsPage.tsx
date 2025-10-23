import pageTitles from "../data/data";
import MeetUpList from "../../components/meetups/MeetUpList/MeetUpList";
import { useContext, useEffect } from "react";
import MeetUpContext from "../../store/context/MeetUpContext";
import useMeetups from "../../hooks/useMeetups";
import classes from "./AllMeetUps.module.css";
export default function AllMeetupsPage() {
  const { meetUps } = useContext(MeetUpContext);
  const { getMeetups } = useMeetups();

  useEffect(() => {
    if (!meetUps.length) getMeetups();
  }, [getMeetups, meetUps.length]);
  return (
    <section className={classes.page}>
      <h1>{pageTitles.home}</h1>
      <MeetUpList meetUps={meetUps} emptyMsg="There isn't any meetup" />
    </section>
  );
}
