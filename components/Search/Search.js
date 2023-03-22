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
          <input
            type="submit"
            value="Find"
            className={classes.search__submit}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
