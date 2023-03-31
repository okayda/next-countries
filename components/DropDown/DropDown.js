import { REGIONS } from "../../config";
import { RiArrowDropUpLine } from "react-icons/ri";
import classes from "./DropDown.module.scss";

const capitilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DropDown = function ({ currRegion, updateRegion }) {
  const regionHandler = function (region) {
    if (currRegion === region) return;
    updateRegion(region);
  };

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__wrapper}>
        <div className={classes.dropdown__contents}>
          <button className={classes.dropdown__btn}>
            Filters by Region
            <RiArrowDropUpLine />
          </button>

          <ul className={classes.dropdown__list}>
            {REGIONS.map((region) => (
              <li key={region}>
                <button onClick={() => regionHandler(region)}>
                  {capitilize(region)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
