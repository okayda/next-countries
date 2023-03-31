import Search from "../Search/Search";
import DropDown from "../DropDown/DropDown";
import classes from "./CardHeader.module.scss";

const CardHeader = function ({ updateRegion }) {
  return (
    <div className={classes.wrapper}>
      <Search />
      <DropDown updateRegion={updateRegion} />
    </div>
  );
};

export default CardHeader;
