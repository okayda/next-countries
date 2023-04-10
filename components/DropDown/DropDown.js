import useStore from "../../store";
import { REGIONS } from "../../config";
import { RiArrowDropUpLine } from "react-icons/ri";

import classes from "./DropDown.module.scss";
import { BsAsterisk } from "react-icons/bs";
import { ListAnimate, FadeList } from "../Animation/Transition";

const capitilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DropDown = function () {
  const theme = useStore((state) => state.theme);

  const updateRegion = useStore((state) => state.updateRegion);
  const currentRegion = useStore((state) => state.currentRegion);

  const updateDrop = useStore((state) => state.updateDrop);
  const currentDrop = useStore((state) => state.currentDrop);

  const list = (
    <ListAnimate
      className={classes.dropdown__list}
      id={theme ? "listdrop-dark" : "listdrop-light"}
    >
      {REGIONS.map((region) => (
        <FadeList key={region}>
          <button
            onClick={() => updateRegion(region)}
            className={currentRegion === region ? classes.active : ""}
          >
            {capitilize(region)}
            {currentRegion === region && <BsAsterisk />}
          </button>
        </FadeList>
      ))}
    </ListAnimate>
  );

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__wrapper}>
        <div className={classes.dropdown__contents}>
          <button
            className={classes.dropdown__btn}
            id={theme ? "btndrop-dark" : "btndrop-light"}
            onClick={updateDrop}
          >
            Filters by Region
            <RiArrowDropUpLine />
          </button>

          {currentDrop && list}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
