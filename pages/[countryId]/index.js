import {
  ALL_REGION_API,
  SELECTED_COUNTRY_API,
  CODE_COUNTRY_API,
} from "../../config";

import Head from "next/head";
import CountryDetail from "../../components/CountryDetail/CountryDetail";

export default function DetailPage({ country, borders }) {
  return (
    <>
      <Head>
        <title>{`${country.name.common} country`}</title>
      </Head>
      <CountryDetail data={country} borders={borders} />
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(ALL_REGION_API);
  const countries = await response.json();

  const paths = countries.map((country) => ({
    params: { countryId: country.name.common },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const countryId = params.countryId;
  const country = await getSelectedCountry(countryId);
  const borders = await getBorderCountries(country);

  return {
    props: {
      country,
      borders,
    },
  };
}

const getSelectedCountry = async function (countryCode) {
  const response = await fetch(SELECTED_COUNTRY_API(countryCode));
  const [selectedCountry] = await response.json();

  return selectedCountry;
};

const getBorderCountries = async function (country) {
  if (!country.borders) return null;

  const borderCountryPromises = country.borders.map(async (border) => {
    const response = await fetch(CODE_COUNTRY_API(border));
    const data = await response.json();
    return data;
  });

  return Promise.all(borderCountryPromises);
};
