// import { useEffect, useState } from 'react'
// import style from './SearchBar.module.css'
// import { useDispatch } from 'react-redux'
// import { getPokemonByName } from '../../redux/actions'
// export default function SearchBar() {
//     const [input, setInput] = useState("")
//     const dispatch = useDispatch()

//     const handlerSubmit = (event) =>{
//         event.preventDefault()
//         dispatch(getPokemonByName(input))
//     }

//    useEffect( ()=>{
//     dispatch(getPokemonByName(input))
//    },[dispatch,input])

//     return (
//         <div className={style.container} >
//             <form onSubmit={handlerSubmit} >
//                 <input type="text"  onChange={(e)=>setInput(e.target.value)} />          
//                 <button>Buscar</button>
//             </form>
//         </div>
//     )
// }

import { useState } from 'react';
import style from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonByName } from '../../redux/actions';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons)

    const handlerImputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(input));
        setInput("")
    };

    const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())
    )

    if (!filteredPokemons) {
        return (
            <div>No hay pokemones pibe...</div>
        )
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handlerImputChange} />
                <button type="submit">Buscar</button>
            </form>
            {/* <ul>
                {filteredPokemons.map((pokemon)=> (
                    <li key={pokemon.id} >{pokemon.name}</li>
                ))}
            </ul> */}
        </div>
    );
}