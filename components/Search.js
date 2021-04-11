import { useState, useContext } from "react";
import { PokemonContext } from "./DataProvider";
import AutoSuggest from "react-autosuggest";
import styled from "styled-components";

export default function Search() {
  const { availeblePokemons, setSelected } = useContext(PokemonContext); //using and modifying global state
  const [value, setValue] = useState(""); //state for whats being typed
  const [suggestions, setSuggestion] = useState([]); //state for whats being sugested

  // Teaching Autosuggest how to calculate suggestions for any given input value.
  function getSuggestions(input) {
    return Object.values(availeblePokemons).filter((value) =>
      value.name.startsWith(input.trim().toLowerCase())
    );
  }

  function selectInput(input) {
    const tempID = availeblePokemons.find((value) => value.name === input);
    tempID.selected = true;
    availeblePokemons[tempID.id] = tempID;
    setSelected(availeblePokemons);
  }

  return (
    <StyledWrapper>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestion([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestion(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) => {
          selectInput(suggestionValue);
          setValue("");
        }}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Search...",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  justify-content: center;
  display: flex;
  & .react-autosuggest__container {
    position: relative;
  }

  & .react-autosuggest__input {
    width: 250px;
    height: 30px;
    padding: 10px 20px;
    font-weight: 100;
    font-size: 16px;
    border: 1px solid #333333;
    border-radius: 4px;
  }
  & .react-autosuggest__input--focused {
    outline: none;
    border: 1px solid #b85b5a;
  }

  & .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & .react-autosuggest__suggestions-container {
    display: none;
  }

  & .react-autosuggest__suggestions-container--open {
    text-align: left;
    display: block;
    position: absolute;
    top: 51px;
    width: 290px;
    border: 1px solid #b85b5a;
    background-color: #f1f3f6;
    font-weight: 400;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
  }

  & .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  & .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  & .react-autosuggest__suggestion--highlighted {
    background-color: #d1d3dc;
  }
`;
