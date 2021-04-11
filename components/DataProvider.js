import { createContext, useReducer } from "react";
import Layout from "./Layout";

const actions = {
  SET_SELECTED: "SET_SELECTED",
  SET_UNSELECTED: "SET_UNSELECTED",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_SELECTED:
      return [...action.value];
    case actions.SET_UNSELECTED:
      return [...action.value];
    default:
      return state;
  }
}

export default function DataProvider({ pokemons }) {
  return (
    <Provider pokemons={pokemons}>
      <Layout />
    </Provider>
  );
}

export const PokemonContext = createContext();

function Provider({ pokemons, children }) {
  const [state, dispatch] = useReducer(reducer, pokemons);

  const value = {
    availeblePokemons: state,
    setSelected: (value) => {
      dispatch({ type: actions.SET_SELECTED, value });
    },
    setUnselected: (value) => {
      dispatch({ type: actions.SET_UNSELECTED, value });
    },
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
