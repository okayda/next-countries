import classes from "./GroupCard.module.scss";
import Card from "./Card";

const GroupCard = function ({ countries }) {
  return (
    <div className={classes.group}>
      {countries.map((country) => (
        <Card key={country.name.common} data={country} />
      ))}
    </div>
  );
};

export default GroupCard;
