import DataProvider from "../components/DataProvider";
import Head from "next/head";
import axios from "axios";

export default function Home({ pokemons }) {
  return (
    <div>
      <Head>
        <title>My styled page</title>
        <link rel="icon" href="../public/favicon.ico" />
        <link href="/static/styles.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DataProvider pokemons={pokemons} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
  var pokemons = [];
  res.data.results.map((item, index) =>
    pokemons.push({
      id: index,
      name: item.name,
      url: item.url,
      selected: false,
    })
  );

  return {
    props: {
      pokemons,
    },
  };
};
