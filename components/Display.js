import { useContext } from "react";
import { PokemonContext } from "./DataProvider";
import styled from "styled-components";
import PokemonItem from "./PokemonItem";

export default function Display() {
  const { availeblePokemons } = useContext(PokemonContext);
  const filtered = Object.values(availeblePokemons).filter(
    (value) => value.selected === true
  );

  return (
    <StyledGrid>
      {filtered.map((pokemon) => (
        <PokemonItem url={pokemon.url} key={pokemon.id} />
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
