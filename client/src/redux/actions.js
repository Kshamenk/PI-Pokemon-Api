import axios from 'axios'

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_ALL_TYPES = "GET_ALL_TYPES"

export const getAllPokemons = () => {
    return async function (dispatch) {
        const pokemons = (await axios.get("http://localhost:3001/pokemons")).data
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemons })
    }
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
           //.data?
        dispatch({type: GET_POKEMON_BY_ID, payload: pokemon})
    }
}