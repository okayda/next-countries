import { ListTwoDetails } from "./ListData";
import { SlideList } from "../../Animation/Transition";

const ListTwo = function ({ title, data }) {
  const list = ListTwoDetails(data);

  return (
    <ul>
      {list.map((list, i) => (
        <SlideList delay={i + 5}>
          <span className={title}>{list.title}</span>
          <span>{list.value}</span>
        </SlideList>
      ))}
    </ul>
  );
};

export default ListTwo;
