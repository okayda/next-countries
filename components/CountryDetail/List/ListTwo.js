const ListTwo = function ({ title }) {
  return (
    <ul>
      <li>
        <span className={title}>Top Level Domain: </span>
        <span>.be</span>
      </li>
      <li>
        <span className={title}>Currencies: </span>
        <span>Euro</span>
      </li>
      <li>
        <span className={title}>Languages: </span>
        <span>Dutch, French, German</span>
      </li>
    </ul>
  );
};

export default ListTwo;
