import { FcSearch } from "react-icons/fc";

import classes from "./Search.module.scss";

const Search = function () {
  return (
    <div className={classes.search}>
      <form action="" method="get" className={classes.search__form}>
        <div>
          <input
            type="search"
            name="search"
            autoComplete="off"
            placeholder="Search for a country..."
            className={classes.search__input}
          />
          {/* <input
            type="submit"
            value={BsSearch}
            className={classes.search__submit}
          /> */}
          <button className={classes.search__submit}>
            <FcSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
