import flag from "../../assets/USA.svg";
import classes from "./Card.module.scss";

const Card = function () {
  return (
    <article className={classes.card}>
      <figure>
        <img src={flag} alt="usa" />
      </figure>

      <section className={classes.card__content}>
        <h2>United States of America</h2>
        <ul>
          <li>
            <span className={classes["card__content--title"]}>
              Population:{" "}
            </span>
            <span className={classes["card__content--value"]}>100,000,00</span>
          </li>
          <li>
            <span className={classes["card__content--title"]}>Region: </span>
            <span className={classes["card__content--value"]}>Americas</span>
          </li>
          <li>
            <span className={classes["card__content--title"]}>Capital: </span>
            <span className={classes["card__content--value"]}>
              Washington, D.C.
            </span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Card;
