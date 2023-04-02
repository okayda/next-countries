const BorderList = function ({ borders }) {
  let renderBorder;

  if (borders)
    renderBorder = borders.map((border, i) => (
      <li key={i}>
        <a href={`${border[0].name.common}`}>{border[0].name.common}</a>
      </li>
    ));
  else
    renderBorder = (
      <li>
        <span>No Borders</span>
      </li>
    );

  return <ul>{renderBorder}</ul>;
};

export default BorderList;
