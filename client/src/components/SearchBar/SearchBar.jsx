
import { useState } from 'react';
import style from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons, getPokemonByName } from '../../redux/actions';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const [flag, setFlag] = useState(true)
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons)


    const handlerInputChange = (e) => {
        setInput(e.target.value)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(input));
        setInput("")
        setFlag(false)
    };



    const handlerSubmitAll = (event) => {
        event.preventDefault()
        dispatch(getAllPokemons())
        setFlag(true)
    }

    const filteredPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())
    )

    if (!filteredPokemons.length) {
        return (
            <div>No hay pokemones pibe...</div>
        )
    }

    return (
        <div className={style.container}>
            <form >
                <input type="text" value={input} onChange={handlerInputChange} />
                {
                    flag ?
                        <button onClick={handleSubmit} type="submit">Buscar</button> :
                        <button onClick={handlerSubmitAll} >Traer todos!</button>
                }


            </form>
        </div>
    );
}