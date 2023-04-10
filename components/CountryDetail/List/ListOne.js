import { ListOneDetails } from "./ListData";
import { SlideList } from "../../Animation/Transition";

const ListOne = function ({ title, data }) {
  const list = ListOneDetails(data);

  return (
    <ul>
      {list.map((list, i) => (
        <SlideList key={i} delay={i}>
          <span className={title}>{list.title} </span>
          <span>{list.value}</span>
        </SlideList>
      ))}
    </ul>
  );
};

export default ListOne;
