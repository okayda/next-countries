import Link from "next/link";
import useStore from "../../store";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import classes from "./Header.module.scss";

const Header = function () {
  const theme = useStore((state) => state.theme);
  const updateTheme = useStore((state) => state.updateTheme);

  return (
    <header
      className={classes.header}
      id={theme ? "header-dark" : "header-light"}
    >
      <div className={classes.header__wrapper}>
        <Link href="/">Where in the world?</Link>

        <div className={classes.header__toggle}>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={theme}
            onChange={updateTheme}
          />

          <label htmlFor="checkbox" className="checkbox-label">
            <BsFillMoonFill className={classes.sun} />

            <BsSunFill className={classes.moon} />

            <span className="ball"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
