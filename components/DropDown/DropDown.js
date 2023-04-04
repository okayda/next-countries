import useStore from "../../store";

import { useState } from "react";
import { REGIONS } from "../../config";
import { RiArrowDropUpLine } from "react-icons/ri";
import classes from "./DropDown.module.scss";

import { BsAsterisk } from "react-icons/bs";

const capitilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DropDown = function ({ currRegion, updateRegion }) {
  const isDrop = useStore((state) => state.isDropdown);
  const updateDrop = useStore((state) => state.updateDropdown);

  const [isOpen, setOpen] = useState(false);

  const regionHandler = function (region) {
    if (currRegion === region) return;
    updateRegion(region);
  };

  const btnHandler = function () {
    setOpen((prev) => !prev);
  };

  const list = (
    <ul className={classes.dropdown__list}>
      {REGIONS.map((region) => (
        <li key={region}>
          <button onClick={() => regionHandler(region)}>
            {capitilize(region)}
            {currRegion === region && <BsAsterisk />}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__wrapper}>
        <div className={classes.dropdown__contents}>
          <button className={classes.dropdown__btn} onClick={updateDrop}>
            Filters by Region
            <RiArrowDropUpLine />
          </button>

          {isDrop && list}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
