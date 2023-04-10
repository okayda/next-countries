import { SlideBorder } from "../../Animation/Transition";

const BorderList = function ({ borders, classes }) {
  let renderBorder;

  if (borders)
    renderBorder = borders.map((border, i) => (
      <li key={i}>
        <span>{border[0].name.common}</span>
      </li>
    ));
  else
    renderBorder = (
      <li>
        <span className={classes["border-msg"]}>No Borders</span>
      </li>
    );

  return <SlideBorder>{renderBorder}</SlideBorder>;
};

export default BorderList;
