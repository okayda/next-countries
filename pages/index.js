import dynamic from "next/dynamic";
import useStore from "../store";
import { REGIONS, ALL_REGION_API, SELECT_REGION_API } from "../config";

import Head from "next/head";
import CardHeader from "../components/CardHeader/CardHeader";

export default function Home({ countries }) {
  const GroupCard = dynamic(() => import("../components/Card/Group/GroupCard"));
  const currentRegion = useStore((state) => state.currentRegion);

  return (
    <>
      <Head>
        <title>NextJS Countries</title>
        <meta
          name="description"
          content="This is my solution for REST countries project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardHeader />
      <GroupCard countries={countries[currentRegion]} />
    </>
  );
}

const regionRequest = async function (API) {
  let response;
  if (API === "all") response = await fetch(ALL_REGION_API);
  else response = await fetch(SELECT_REGION_API(API));

  return await response.json();
};

const regionResponse = async function () {
  const regionPromises = REGIONS.map((region) => regionRequest(region));
  const results = await Promise.all(regionPromises);

  return Object.fromEntries(
    results.map((result, index) => [REGIONS[index], result])
  );
};

export async function getStaticProps() {
  return {
    props: {
      countries: await regionResponse(),
    },
    revalidate: 86400,
  };
}
