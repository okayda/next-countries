import CountryDetail from "../../components/CountryDetail/CountryDetail";

const DetailPage = function ({ country }) {
  return (
    <>
      <CountryDetail data={country[0]} />
    </>
  );
};

export default DetailPage;

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all");
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

  const res = await fetch(`https://restcountries.com/v3.1/name/${countryId}`);
  const data = await res.json();

  return {
    props: {
      country: data,
    },
  };
}
