import classes from "./GroupCard.module.scss";
import Card from "./Card";

const GroupCard = function () {
  return (
    <div className={classes.group}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default GroupCard;
