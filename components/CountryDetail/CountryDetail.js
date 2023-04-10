import useStore from "../../store";
import { useRouter } from "next/router";
import NavLink from "next/link";
import classes from "./CountryDetail.module.scss";

import { SlideImage } from "../Animation/Transition";

import ListOne from "./List/ListOne";
import ListTwo from "./List/ListTwo";
import BorderList from "./List/BorderList";

import { BsGlobeAmericas } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import GroupCard from "../Card/Group/GroupCard";

const CountryDetail = function ({ data, borders }) {
  const theme = useStore((state) => state.theme);

  const router = useRouter();
  const backHander = function () {
    router.back();
  };

  // borders only will have 2 value is either (null or border countries)
  let borderCountries = borders;
  if (borders) borderCountries = borders.map((country) => country[0]);

  const flag = data.flags.svg;
  const country = data.name.common;
  const map = data.maps.googleMaps;

  const oneObj = {
    native: Object.values(data.name.nativeName)[0].common,
    population: data.population.toLocaleString("en-US"),
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
    <div className={classes.detail} id={theme ? "detail-dark" : "detail-light"}>
      <div
        className={classes.detail__btn}
        id={theme ? "detailbtn-dark" : "detailbtn-light"}
      >
        <button onClick={backHander}>
          <BiArrowBack />
          Back
        </button>
        <NavLink href="/">Home</NavLink>
      </div>

      <div className={classes.detail__wrapper}>
        <div className={classes.detail__flag}>
          <SlideImage src={flag} alt="Flag" />
        </div>

        <div>
          <div
            className={classes.detail__title}
            id={theme ? "detailbtn-dark" : "detailbtn-light"}
          >
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

              <BorderList borders={borders} classes={classes} />
            </div>
          </div>
        </div>

        <div className={classes["detail__borders-wrapper"]}>
          <GroupCard countries={borderCountries} isReuse={true} />
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
