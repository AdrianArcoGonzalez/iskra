import classes from "./MeetupItem.module.css";
import { MeetUp } from "../../../interfaces/MeetUp";
import Image from "../../Image/Image";
import Card from "../../Card/Card";
import useMeetups from "../../../hooks/useMeetups";

interface MeetUpItemProps {
  meetUp: MeetUp;
}

export default function MeetupItem({ meetUp }: MeetUpItemProps) {
  const { togglefavMeetUp } = useMeetups();

  const handleFav = (id: string) => {
    togglefavMeetUp(id);
  };

  return (
    <Card>
      <div className={classes.image}>
        <Image src={meetUp.image} alt={meetUp.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetUp.title}</h3>
        <address>{meetUp.address}</address>
        <p>{meetUp.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={() => handleFav(meetUp.id)}>
          {meetUp.isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </div>
    </Card>
  );
}
