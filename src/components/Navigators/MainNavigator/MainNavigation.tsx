import { useNavigate } from "react-router-dom";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "../../../utils/constants";
import { useContext, useEffect, useState } from "react";
import MeetUpContext from "../../../store/context/MeetUpContext";
import classes from "./MainNavigation.module.css";
import { Page } from "../../../interfaces/Interfaces";
import Menu from "../../Menu/Menu";

const pages: Page[] = [
  { name: "All Meetups", path: ALL_MEETUP_PAGE },
  { name: "Add New Meetup", path: NEW_MEETUP_PAGE },
  { name: "My Favorites", path: FAVORITES_PAGE, badge: true },
];

export default function MainNavigation() {
  const navigate = useNavigate();
  const { meetUps } = useContext(MeetUpContext);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    (async () => {
      handleResize();
    })();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={classes.header}>
      <span
        className={classes.logo}
        onClick={() => handleNavigate(ALL_MEETUP_PAGE)}
      >
        React Meetups
      </span>
      <nav>
        {isMobile ? (
          <Menu items={pages} />
        ) : (
          <ul>
            {pages.map((page) => (
              <li key={page.path}>
                <button onClick={() => handleNavigate(page.path)}>
                  <span>{page.name}</span>
                  {page.badge && (
                    <span className={classes.badge}>
                      {meetUps.filter((meetUp) => meetUp.isFavorite).length}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
