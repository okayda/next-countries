import { RiArrowDropUpLine } from "react-icons/ri";

import classes from "./DropDown.module.scss";

const DropDown = function () {
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
              <button>Africa</button>
            </li>
            <li>
              <button>America</button>
            </li>
            <li>
              <button>Asia</button>
            </li>
            <li>
              <button>Europe</button>
            </li>
            <li>
              <button>Oceania</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
