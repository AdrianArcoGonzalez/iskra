import { useContext, useEffect } from "react";
import classes from "./MeetUpList.module.css";
import MeetUpContext from "../../../store/context/MeetUpContext";
import MeetupItem from "../MeetUpItem/MeetupItem";
import useMeetups from "../../../hooks/useMeetups";

const MeetUpList = () => {
  const { meetUps } = useContext(MeetUpContext);
  const { getMeetups, isLoading } = useMeetups();

  useEffect(() => {
    if (!meetUps.length) getMeetups();
  }, []);

  return (
    <ul className={classes.list}>
      {isLoading ? (
        <span>Loading...</span>
      ) : meetUps.length > 0 ? (
        meetUps.map((meetUp) => (
          <li className={classes.item} key={meetUp.id} data-test="meet-up-item">
            <MeetupItem meetUp={meetUp} />
          </li>
        ))
      ) : (
        <li>No meetups found.</li>
      )}
    </ul>
  );
};

export default MeetUpList;
