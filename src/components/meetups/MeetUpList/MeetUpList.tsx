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

  const renderMeetUps = (meetUps: MeetUp[], isLoading: boolean) => {
    if (isLoading) {
      return <li className={classes.loading}>Loading...</li>;
    }
    if (meetUps.length > 0) {
      return meetUps.map((meetUp) => (
        <li className={classes.item} key={meetUp.id} data-test="meet-up-item">
          <MeetupItem meetUp={meetUp} />
        </li>
      ));
    }
    return <li className={classes.item}>{emptyMsg}</li>;
  };
  return <ul className={classes.list}>{renderMeetUps(meetUps, isLoading)}</ul>;
};

export default MeetUpList;
