import useStore from "../../store";
import { FcSearch } from "react-icons/fc";

import classes from "./Search.module.scss";

const Search = function () {
  const { updateSearch, search } = useStore((state) => state);

  const filterCountry = function (str) {
    updateSearch(str);
  };

  return (
    <div className={classes.search}>
      <form action="" method="get" className={classes.search__form}>
        <div>
          <input
            type="search"
            name="search"
            autoComplete="off"
            placeholder="Search for a country..."
            value={search}
            className={classes.search__input}
            onChange={(e) => {
              filterCountry(e.target.value);
            }}
          />

          <button className={classes.search__submit}>
            <FcSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
