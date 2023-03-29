const ListOne = function ({ title, data }) {
  return (
    <ul>
      <li>
        <span className={title}>Native Name: </span>
        <span>{data.native}</span>
      </li>
      <li>
        <span className={title}>Population: </span>
        <span>{data.population}</span>
      </li>
      <li>
        <span className={title}>Region: </span>
        <span>{data.region}</span>
      </li>
      <li>
        <span className={title}>Sub Region: </span>
        <span>{data.subregion}</span>
      </li>
      <li>
        <span className={title}>Capital: </span>
        <span>{data.capital}</span>
      </li>
    </ul>
  );
};

export default ListOne;
