import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { PokemonContext } from "./DataProvider";

export default function PokeItem({ url, timeDate }) {
  const [loaded, setLoaded] = useState();
  const { availeblePokemons, setUnselected, setLocalstorage } = useContext(
    PokemonContext
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLoaded(data));
  }, []);

  function removeCard() {
    const selectedPokemon = availeblePokemons.find(
      (value) => value.name === loaded.name
    );
    selectedPokemon.selected = false;
    selectedPokemon.timeDate = null;
    availeblePokemons[selectedPokemon.id] = selectedPokemon;
    setUnselected(availeblePokemons);
    setLocalstorage(availeblePokemons);
  }

  function toKG(value) {
    value = value.toString();
    if (value.length === 1) {
      return "0," + value;
    }
    return (
      value.slice(0, value.length - 1) + "," + value.slice(value.length - 1)
    );
  }

  if (loaded === undefined) {
    return (
      <StyledCard>
        <p>Loading...</p>
      </StyledCard>
    );
  }

  return (
    <StyledCard onClick={() => removeCard()}>
      <StyledNbr>No. {loaded.id}</StyledNbr>
      <StyledImg src={loaded.sprites.front_default} />
      <StyledName>{loaded.name}</StyledName>
      <StyledType>
        {loaded.types.map((type) => type.type.name).join(", ")}
      </StyledType>
      <StyledHtWt>
        HT: {loaded.height}0 CM WT: {toKG(loaded.weight)} kg
      </StyledHtWt>
      <StyledTimeDate>Collected {timeDate}</StyledTimeDate>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 10px;
  width: 200px;
  text-align: left;
  background-color: #d1d3dc;
  border: 1px solid #d1d3dc;
  border-radius: 5px;
  transition: color 0.15s ease, border-color 0.15s ease;
  &: hover {
    border-color: #b85b5a;
  }
`;

const StyledNbr = styled.p`
  text-align: left;
  margin: 0px;
  font-weight: 100;
  position: absolute;
`;

const StyledImg = styled.img`
  grid-area: img;
  width: 96px;
  height: 96px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const StyledName = styled.h1`
  text-align: center;
  margin-top: -10px;
  margin-bottom: 0px;
`;

const StyledType = styled.h3`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 100;
`;

const StyledHtWt = styled.p`
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 100;
`;

const StyledTimeDate = styled.p`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 0.8rem;
  font-weight: 100;
`;
