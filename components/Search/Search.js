import useStore from "../../store";
import { FcSearch } from "react-icons/fc";

import classes from "./Search.module.scss";

const Search = function () {
  const theme = useStore((state) => state.theme);

  const { updateSearch, search } = useStore((state) => state);

  const filterCountry = function (str) {
    updateSearch(str);
  };

  return (
    <div className={classes.search}>
      <form
        className={classes.search__form}
        id={theme ? "search-dark" : "search-light"}
      >
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

          <span className={classes.search__submit}>
            <FcSearch />
          </span>
        </div>
      </form>
    </div>
  );
};

export default Search;
