import NewMeetUpForm from "../components/meetups/MeetUpForm/NewMeetUpForm";
import pageTitles from "./data";

export default function NewMeetupsPage() {
  return (
    <section>
      <h1>{pageTitles.newMeetup}</h1>
      <NewMeetUpForm />
    </section>
  );
}
