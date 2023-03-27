import classes from "./CountryDetail.module.scss";
import flag from "../../assets/USA.svg";

import ListOne from "./List/ListOne";
import ListTwo from "./List/ListTwo";
import BorderList from "./List/BorderList";

const CountryDetail = function () {
  return (
    <div className={classes.detail}>
      <div className={classes.detail__img}>
        <img src={flag} alt="Flag" />
      </div>

      <div className={classes.detail__content}>
        <h1>United States</h1>

        <div className={classes.detail__contents}>
          <ListOne title={classes["detail__contents--title"]} />
          <ListTwo title={classes["detail__contents--title"]} />
        </div>
      </div>

      <div className={classes.detail__borders}>
        <h2>Border Countries:</h2>
        <BorderList />
      </div>
    </div>
  );
};

export default CountryDetail;
