import DataProvider from "../components/DataProvider";
import axios from "axios";
import Meta from "../components/Meta";

export default function Home({ pokemons }) {
  return (
    <div>
      <Meta />
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
