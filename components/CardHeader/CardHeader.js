import Search from "../Search/Search";
import DropDown from "../DropDown/DropDown";
import classes from "./CardHeader.module.scss";

const CardHeader = function ({ currRegion, updateRegion }) {
  return (
    <div className={classes.wrapper}>
      <Search />
      <DropDown currRegion={currRegion} updateRegion={updateRegion} />
    </div>
  );
};

export default CardHeader;
