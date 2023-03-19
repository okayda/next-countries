import Link from "next/link";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import classes from "./Header.module.scss";

const Header = function () {
  return (
    <header className={classes.header}>
      <Link href="/">Where in the world?</Link>

      <div className={classes.header__toggle}>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
          <BsFillMoonFill className={classes.moon} />
          <BsSunFill className={classes.sun} />
          <span className="ball"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
