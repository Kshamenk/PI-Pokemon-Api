import axios from 'axios'

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"

export const getAllPokemons = () => {
    return async function (dispatch) {
        const pokemons = (await axios.get("http://localhost:3001/pokemons")).data
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemons })
    }
};