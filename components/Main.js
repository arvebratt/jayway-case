import styled from "styled-components";
import PokeGrid from "./PokeGrid";

export default function Main({ pokemons }) {
  return (
    <StyledContainer>
      <PokeGrid pokemons={pokemons} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
   {
    padding: 5vh 5vw 5vh 5vw;
    border-color: red;
    border-style: dotted;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
