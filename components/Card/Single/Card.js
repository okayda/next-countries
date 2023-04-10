import useStore from "../../../store";
import Link from "next/link";
import classes from "./Card.module.scss";

const Card = function ({ data }) {
  const theme = useStore((state) => state.theme);

  const flag = data.flags.svg;
  const country = data.name.common;
  const population = data.population.toLocaleString("en-US");
  const region = data.region;
  const capital = data.capital || "N/A";

  return (
    <Link href={`/${country}`} className="card-link">
      <article className={classes.card} id={theme ? "card-dark" : "card-light"}>
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
