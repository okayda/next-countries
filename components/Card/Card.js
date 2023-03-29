// import flag from "../../assets/USA.svg";
import Link from "next/link";
import classes from "./Card.module.scss";

const Card = function ({ data }) {
  const flag = data.flags.svg;
  const country = data.name.common;
  const population = data.population;
  const region = data.region;
  const capital = data.capital || "N/A";

  return (
    <Link href={`/${country}`}>
      <article className={classes.card}>
        <figure>
          <img src={flag} alt={`${country} flag`} />
        </figure>

        <section className={classes.card__content}>
          <h2>{country}</h2>
          <ul>
            <li>
              <span className={classes["card__content--title"]}>
                Population:{" "}
              </span>
              <span className={classes["card__content--value"]}>
                {population}
              </span>
            </li>
            <li>
              <span className={classes["card__content--title"]}>Region: </span>
              <span className={classes["card__content--value"]}>{region}</span>
            </li>
            <li>
              <span className={classes["card__content--title"]}>Capital: </span>
              <span className={classes["card__content--value"]}>{capital}</span>
            </li>
          </ul>
        </section>
      </article>
    </Link>
  );
};

export default Card;
