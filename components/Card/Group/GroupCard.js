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
    // if not reuse(false) means not used in border countries as a component(GroupCard.js)
    if (!isReuse && searchValue) {
      return countries.filter((country) => {
        if (isContain(searchValue, country)) return country;
      });
    }

    // **Will activated**
    // if there is no search value in the search bar
    // if reuse(true) means was used for border countries as a component(GroupCard.js)
    return countries;
  };

  const data = filteredCountries().map((country) => (
    <Card key={country.name.common} data={country} />
  ));

  // Checking if the search input does not find any countries for a specific region.
  const displayCountryOrMessage = function () {
    // will be true if there is a country other wise search message
    if (data.length) return data;

    return (
      <div className={classes.group__message}>
        <p>
          No country found matching <strong>"{searchValue}"</strong> in{" "}
          <strong>{currentRegion}</strong> region.
        </p>
      </div>
    );
  };

  return <div className={classes.group}>{displayCountryOrMessage()}</div>;
};

export default GroupCard;
