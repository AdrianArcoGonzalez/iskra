import classes from "./MeetupList.module.css";
import MeetupItem from "../MeetUpItem/MeetupItem";
import useMeetups from "../../../hooks/useMeetups";
import { MeetUp } from "../../../interfaces/Interfaces";

interface MeetUpListProps {
  meetUps: MeetUp[];
  emptyMsg: string;
}
const MeetUpList = ({ meetUps, emptyMsg }: MeetUpListProps) => {
  const { isLoading } = useMeetups();

  return (
    <ul className={classes.list}>
      {isLoading ? (
        <span className={classes.loading}>Loading...</span>
      ) : meetUps.length > 0 ? (
        meetUps.map((meetUp) => (
          <li className={classes.item} key={meetUp.id} data-test="meet-up-item">
            <MeetupItem meetUp={meetUp} />
          </li>
        ))
      ) : (
        <li className={classes.item}>{emptyMsg}</li>
      )}
    </ul>
  );
};

export default MeetUpList;
