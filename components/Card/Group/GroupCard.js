import classes from "./GroupCard.module.scss";
import Card from "../Single/Card";

const GroupCard = function ({ countries }) {
  console.log(countries);
  if (!countries) return;

  return (
    <div className={classes.group}>
      {countries.map((country) => (
        <Card key={country.name.common} data={country} />
      ))}
    </div>
  );
};

export default GroupCard;
