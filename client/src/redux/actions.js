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

export const orderPokeByName = (orderName) => {
    return async function (dispach, getState) {
        const allPokemons = await getState().allPokemonsCopy
        if (orderName === "a-z") {
            allPokemons.sort( function (a, b) {
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
            })
        } else {
            if(orderName === "z-a") {
                allPokemons.sort(function (a, b) {
                    if (a.name < b.name) {
                      return 1;
                    }
                    if (a.name > b.name) {
                      return -1;
                    }
                    return 0;
                  });
            }
            
        }
        dispach({ type: ORDER_POKE_BY_NAME, payload: allPokemons })
    }
}



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