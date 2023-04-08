import useStore from "../../../store";

import classes from "./GroupCard.module.scss";
import Card from "../Single/Card";

const isContain = function (search, country) {
  return country.name.common.toLowerCase().includes(search.toLowerCase());
};

const GroupCard = function ({ countries, isReuse = false }) {
  if (!countries) return;

  const currentRegion = useStore((state) => state.currentRegion);
  const searchValue = useStore((state) => state.search);

  const filteredCountries = function () {
    // **Will activated**
    // if the search bar have a value
    // if not reuse(false) means not used in border countries as a component
    if (!isReuse && searchValue) {
      return countries.filter((country) => {
        if (searchValue === "") return country;
        if (isContain(searchValue, country)) return country;
      });
    }

    // **Will activated**
    // if there is no search value in the search bar
    // if reuse(true) means was used for border countries as a component
    return countries;
  };

  return (
    <div className={classes.group}>
      {filteredCountries().map((country) => (
        <Card key={country.name.common} data={country} />
      ))}
    </div>
  );
};

export default GroupCard;
