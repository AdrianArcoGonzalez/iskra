import { useNavigate } from "react-router-dom";
import { Page } from "../../interfaces/Interfaces";
import { useContext, useMemo, useState } from "react";
import classes from "./Menu.module.css";
import MeetUpContext from "../../store/context/MeetUpContext";
interface MenuProps {
  items: Page[];
}

const Menu = ({ items }: MenuProps) => {
  const navigate = useNavigate();
  const { meetUps } = useContext(MeetUpContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const favs = useMemo(
    () => meetUps.filter((meetUp) => meetUp.isFavorite),
    [meetUps]
  );
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.menu}>
      <button onClick={toggleMenu} className={classes.menuButton}>
        Menu
      </button>
      {isOpen && (
        <div className={classes.backdrop} onClick={toggleMenu}>
          <ul className={classes.list} onClick={toggleMenu}>
            {items.map((item) => (
              <li key={item.path} className={classes.listItem}>
                <button
                  onClick={() => handleNavigate(item.path)}
                  className={classes.listItemButton}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className={classes.badge}>{favs.length}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
