import { GET_ALL_POKEMONS } from "./actions"

const initialState = {
    allPokemons : [],
    allPokemonsCopy : []

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons : action.payload,
                allPokemonsCopy : action.payload
            }
    
        default:
            return {...state}
    }
}