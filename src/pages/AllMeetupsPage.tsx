import pageTitles from "./data";

import MeetUpList from "../components/meetups/MeetUpList/MeetUpList";

export default function AllMeetupsPage() {
  return (
    <section>
      <h1>{pageTitles.home}</h1>
      <MeetUpList />
    </section>
  );
}
