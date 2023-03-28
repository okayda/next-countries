import classes from "./CountryDetail.module.scss";
import flag from "../../assets/USA.svg";

import ListOne from "./List/ListOne";
import ListTwo from "./List/ListTwo";
import BorderList from "./List/BorderList";

import { BsGlobeAmericas } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const CountryDetail = function () {
  return (
    <div className={classes.detail}>
      <button className={classes.detail__btn}>
        <BiArrowBack />
        Back
      </button>

      <div className={classes.detail__wrapper}>
        <div className={classes.detail__flag}>
          <img src={flag} alt="Flag" />
        </div>

        <div>
          <div className={classes.detail__title}>
            <h1>United States</h1>
            <a href="#">
              Location <BsGlobeAmericas />
            </a>
          </div>

          <div className={classes["detail__list-wrapper"]}>
            <div className={classes.detail__contents}>
              <ListOne title={classes["detail__contents--title"]} />
              <ListTwo title={classes["detail__contents--title"]} />
            </div>

            <div className={classes.detail__borders}>
              <h2>Border Countries:</h2>
              <BorderList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
