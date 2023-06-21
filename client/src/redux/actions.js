import axios from 'axios'

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const GET_POKE_CREATED = "GET_POKE_CREATED"
export const ORDER_POKE_BY_NAME = "ORDER_POKE_BY_NAME"



export const getAllPokemons = () => {
    return async function (dispatch) {
        const pokemons = (await axios.get("http://localhost:3001/pokemons")).data
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemons })
    }
};

//localecompare() metodo muy similar al que usamos, casi que usa la misma logica que el sort, compara en orden alfabetico

export const orderPokeByName = (orderName) => {
    return async function (dispatch, getState) {
      const allPokemons = [...getState().allPokemons]; // necesito hacer una copia de mi pokemon originales, la guardo en un array, luego se mapea
      let sortedPokemons;
      if (orderName === "a-z") {
        sortedPokemons = allPokemons.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderName === "z-a") {
        sortedPokemons = allPokemons.sort((a, b) => b.name.localeCompare(a.name));
      }
      dispatch({ type: ORDER_POKE_BY_NAME, payload: sortedPokemons });
    };
  };

export const getPokeCreated = (created) => {
    return async function (dispatch, getState) {
      const allPokemons = getState().allPokemonsCopy
      const createdPokemons = allPokemons.filter((poke) => poke.created === created);
      dispatch({ type: GET_POKE_CREATED, payload: createdPokemons });
    };
  };

export const getAllTpyes = () => {
    return async function (dispatch) {
        const types = (await axios.get('http://localhost:3001/types')).data
        dispatch({ type: GET_ALL_TYPES, payload: types })
    }
}

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const pokemon = (await axios.get(`http://localhost:3001/pokemons/${id}`)).data
        dispatch({ type: GET_POKEMON_BY_ID, payload: pokemon })
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const pokemon = (await axios.get(`http://localhost:3001/pokemons/?name=${name}`)).data
        dispatch({ type: GET_POKEMON_BY_NAME, payload: pokemon })
    }
}