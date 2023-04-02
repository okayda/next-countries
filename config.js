export const REGIONS = [
  "all",
  "africa",
  "america",
  "asia",
  "europe",
  "oceania",
];

export const ALL_REGION_API = "https://restcountries.com/v3.1/all";

export const SELECT_REGION_API = (region) => {
  return `https://restcountries.com/v3.1/region/${region}`;
};

export const SELECTED_COUNTRY_API = (country) => {
  return `https://restcountries.com/v3.1/name/${country}?fullText=true`;
};

export const CODE_COUNTRY_API = (code) => {
  return `https://restcountries.com/v3.1/alpha/${code}`;
};
