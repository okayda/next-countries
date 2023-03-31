import { RiArrowDropUpLine } from "react-icons/ri";

import classes from "./DropDown.module.scss";

const DropDown = function ({ updateRegion }) {
  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__wrapper}>
        <div className={classes.dropdown__contents}>
          <button className={classes.dropdown__btn}>
            Filters by Region
            <RiArrowDropUpLine />
          </button>

          <ul className={classes.dropdown__list}>
            <li>
              <button onClick={updateRegion.bind(null, "all")}>All</button>
            </li>
            <li>
              <button onClick={updateRegion.bind(null, "africa")}>
                Africa
              </button>
            </li>
            <li>
              <button onClick={updateRegion.bind(null, "america")}>
                America
              </button>
            </li>
            <li>
              <button onClick={updateRegion.bind(null, "asia")}>Asia</button>
            </li>
            <li>
              <button onClick={updateRegion.bind(null, "europe")}>
                Europe
              </button>
            </li>
            <li>
              <button onClick={updateRegion.bind(null, "oceania")}>
                Oceania
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
