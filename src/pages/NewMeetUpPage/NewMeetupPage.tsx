import NewMeetUpForm from "../../components/meetups/MeetUpForm/NewMeetUpForm";
import pageTitles from "../data/data";
import classes from "./NewMeetupPage.module.css";

export default function NewMeetupsPage() {
  return (
    <section className={classes.page}>
      <h1>{pageTitles.newMeetup}</h1>
      <NewMeetUpForm />
    </section>
  );
}
