import { useRouter } from "next/router";

import classes from "./CountryDetail.module.scss";

import ListOne from "./List/ListOne";
import ListTwo from "./List/ListTwo";
import BorderList from "./List/BorderList";

import { BsGlobeAmericas } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const CountryDetail = function ({ data }) {
  const router = useRouter();

  const backHander = function () {
    router.back();
  };

  const flag = data.flags.svg;
  const country = data.translations.cym.common;
  const map = data.maps.googleMaps;

  const oneObj = {
    native: Object.values(data.name.nativeName)[0].common,
    population: data.population,
    region: data.region,
    subregion: data.subregion,
    capital: data.capital || "N/A",
  };

  const twoObj = {
    domain: data.tld || "N/A",
    currency: Object.values(data.currencies)[0].name,
    languages: Object.values(data.languages).join(", "),
  };

  return (
    <div className={classes.detail}>
      <button onClick={backHander} className={classes.detail__btn}>
        <BiArrowBack />
        Back
      </button>

      <div className={classes.detail__wrapper}>
        <div className={classes.detail__flag}>
          <img src={flag} alt="Flag" />
        </div>

        <div>
          <div className={classes.detail__title}>
            <h1>{country}</h1>
            <a href={map} target="_blank">
              Location <BsGlobeAmericas />
            </a>
          </div>

          <div className={classes["detail__list-wrapper"]}>
            <div className={classes.detail__contents}>
              <ListOne
                title={classes["detail__contents--title"]}
                data={oneObj}
              />
              <ListTwo
                title={classes["detail__contents--title"]}
                data={twoObj}
              />
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
