import axios from "axios";

export default async function useAllPokemon() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  var pokemons = [];
  res.data.results.map((item, index) =>
    pokemons.push({
      id: index,
      name: item.name,
      url: item.url,
      selected: false,
    })
  );
  return pokemons;
}
