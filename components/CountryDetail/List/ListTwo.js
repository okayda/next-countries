const ListTwo = function ({ title, data }) {
  return (
    <ul>
      <li>
        <span className={title}>Top Level Domain: </span>
        <span>{data.domain}</span>
      </li>
      <li>
        <span className={title}>Currencies: </span>
        <span>{data.currency}</span>
      </li>
      <li>
        <span className={title}>Languages: </span>
        <span>{data.languages}</span>
      </li>
    </ul>
  );
};

export default ListTwo;
