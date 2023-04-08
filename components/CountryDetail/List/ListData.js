export const ListOneDetails = function (data) {
  return [
    {
      title: "Native Name:",
      value: data.native,
    },
    {
      title: "Population:",
      value: data.population,
    },
    {
      title: "Region:",
      value: data.region,
    },
    {
      title: "Sub Region:",
      value: data.subregion,
    },
    {
      title: "Capital:",
      value: data.capital,
    },
  ];
};

export const ListTwoDetails = function (data) {
  return [
    {
      title: "Top Level Domain:",
      value: data.domain,
    },
    {
      title: "Currencies:",
      value: data.currency,
    },
    {
      title: "Languages:",
      value: data.languages,
    },
  ];
};
