import { ALL_REGION_API, SELECTED_COUNTRY_API } from "../../config";

import CountryDetail from "../../components/CountryDetail/CountryDetail";

const DetailPage = function ({ country }) {
  return (
    <>
      <CountryDetail data={country} />
    </>
  );
};

export default DetailPage;

export async function getStaticPaths() {
  const res = await fetch(ALL_REGION_API);
  const data = await res.json();

  return {
    fallback: "blocking",
    paths: data.map((country) => ({
      params: { countryId: country.translations.cym.common },
    })),
  };
}

export async function getStaticProps(context) {
  const countryId = context.params.countryId;

  const res = await fetch(SELECTED_COUNTRY_API(countryId));
  const [data] = await res.json();

  return {
    props: {
      country: data,
    },
  };
}
