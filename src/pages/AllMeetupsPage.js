import classes from "./../components/meetups/MeetUpList/MeetupList.module.css";
import MeetupItem from "../components/meetups/MeetUpItem/MeetupItem";
export default function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
        <MeetupItem />
      </ul>
    </section>
  );
}
