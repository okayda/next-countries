import Search from "../Search/Search";
import DropDown from "../DropDown/DropDown";
import classes from "./CardHeader.module.scss";

const CardHeader = function () {
  return (
    <div className={classes.wrapper}>
      <Search />
      <DropDown />
    </div>
  );
};

export default CardHeader;
