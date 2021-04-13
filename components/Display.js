import { useEffect, useContext } from "react";
import { PokemonContext } from "./DataProvider";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";

export default function Display() {
  const { availeblePokemons, setSelected } = useContext(PokemonContext);
  useEffect(() => {
    const stickyValue = window.localStorage.getItem("stored");
    if (stickyValue !== null) {
      setSelected(JSON.parse(stickyValue));
    }
  }, []);
  const filtered = Object.values(availeblePokemons).filter(
    (value) => value.selected === true
  );

  return (
    <StyledGrid>
      {filtered.map((pokemon) => (
        <PokemonItem
          url={pokemon.url}
          timeDate={pokemon.timeDate}
          key={pokemon.id}
        />
      ))}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
