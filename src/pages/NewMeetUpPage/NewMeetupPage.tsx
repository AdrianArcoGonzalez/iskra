import NewMeetUpForm from "../../components/meetups/MeetUpForm/NewMeetUpForm";
import pageTitles from "../data/data";
import classes from "./NewMeetUpPage.module.css";

export default function NewMeetUpsPage() {
  return (
    <section className={classes.page}>
      <h1 className={classes.title}>{pageTitles.newMeetup}</h1>
      <NewMeetUpForm />
    </section>
  );
}
