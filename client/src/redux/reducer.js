import { GET_ALL_POKEMONS, GET_ALL_TYPES } from "./actions";

const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  pokemonTypes: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    default:
      return { ...state };
  }
}
