import { useNavigate } from "react-router-dom";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "../../../utils/constants";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import MeetUpContext from "../../../store/context/MeetUpContext";

export default function MainNavigation() {
  const navigate = useNavigate();
  const { meetUps } = useContext(MeetUpContext);
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigate(ALL_MEETUP_PAGE)}>
              <span>All Meetups</span>
            </button>
          </li>

          <li>
            <button onClick={() => handleNavigate(NEW_MEETUP_PAGE)}>
              <span>Add New Meetup</span>
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigate(FAVORITES_PAGE)}>
              <span>My Favorites</span>
              <span className={classes.badge}>
                {meetUps.filter((meetUp) => meetUp.isFavorite).length}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
