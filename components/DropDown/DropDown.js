import Link from "next/link";

import { motion } from "framer-motion";
import Applied from "../Animation/Applied";
import { DropListStagger, DropLinkStagger } from "../Animation/Animation";

import useStore from "../../store";
import { REGIONS } from "../../config";
import { RiArrowDropUpLine } from "react-icons/ri";

import classes from "./DropDown.module.scss";
import { BsAsterisk } from "react-icons/bs";

const capitilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DropDown = function () {
  const updateRegion = useStore((state) => state.updateRegion);
  const currentRegion = useStore((state) => state.currentRegion);

  const updateDrop = useStore((state) => state.updateDrop);
  const currentDrop = useStore((state) => state.currentDrop);

  const list = (
    <motion.ul
      className={classes.dropdown__list}
      {...Applied(DropListStagger)}
      initial="closed"
      animate="open"
    >
      {REGIONS.map((region) => (
        <motion.li key={region} variants={DropLinkStagger}>
          <button
            onClick={() => updateRegion(region)}
            className={currentRegion === region ? classes.active : ""}
          >
            {capitilize(region)}
            {currentRegion === region && <BsAsterisk />}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdown__wrapper}>
        <div className={classes.dropdown__contents}>
          <button className={classes.dropdown__btn} onClick={updateDrop}>
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
