import axios from 'axios'

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const GET_POKE_CREATED = "GET_POKE_CREATED"
//export const GET_POKE_SOURCE = "GET_POKE_SOURCE"



export const getAllPokemons = () => {
    return async function (dispatch) {
        const pokemons = (await axios.get("http://localhost:3001/pokemons")).data
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemons })
    }
};

//  export const getPokeCreated = (created) => {
//     return async function (dispatch) {
//         const pokemons = (await axios.get("http://localhost:3001/pokemons")).data
//         const pokeFilter = pokemons.filter((e) => e.created === created)
//         console.log(pokeFilter)
//         dispatch({ type: GET_POKE_CREATED, payload: pokeFilter })
//     }
// }

// export const getPokeSource = (source) => {
//     return async function (dispatch) {
//       let pokemons;
//       if (source === "api") {
//         pokemons = (await axios.get("http://localhost:3001/pokemons")).data;
//       } else if (source === "dbb") {
//         pokemons = (await axios.get("http://localhost:3001/pokemons/dbb")).data;
//       }
//       dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
//     };
//   };

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