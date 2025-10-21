import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "../../../utils/constants";

import classes from "./MainNavigation.module.css";

interface MainNavigationProps {
  setPage: (page: number) => void;
}

export default function MainNavigation({ setPage }: MainNavigationProps) {
  const handleClick = (page: number) => {
    setPage(page);
  };

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleClick(ALL_MEETUP_PAGE)}>
              All Meetups
            </button>
          </li>

          <li>
            <button onClick={() => handleClick(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </button>
          </li>
          <li>
            <button onClick={() => handleClick(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
