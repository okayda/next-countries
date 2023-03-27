const ListOne = function ({ title }) {
  return (
    <ul>
      <li>
        <span className={title}>Native Name: </span>
        <span>Belgie</span>
      </li>
      <li>
        <span className={title}>Population: </span>
        <span>100,000,00</span>
      </li>
      <li>
        <span className={title}>Region: </span>
        <span>Europe</span>
      </li>
      <li>
        <span className={title}>Sub Region: </span>
        <span>Western Europe</span>
      </li>
      <li>
        <span className={title}>Capital: </span>
        <span>Brussels</span>
      </li>
    </ul>
  );
};

export default ListOne;
