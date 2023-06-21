import {
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMON_BY_ID,
  GET_POKEMON_BY_NAME,
  GET_POKE_CREATED,
 ORDER_POKE_BY_NAME
} from "./actions";

const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  pokemonTypes: [],
  pokemonById: [],
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
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case GET_POKE_CREATED:
      return {
        ...state,
        allPokemons: action.payload,
      };
      case ORDER_POKE_BY_NAME:
      return {
        ...state,
        allPokemons: action.payload,
      };
    default:
      return { ...state };
  }
}
