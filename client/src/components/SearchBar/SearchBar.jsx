import { useEffect, useState } from 'react'
import style from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getPokemonByName } from '../../redux/actions'
export default function SearchBar() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handlerSubmit = (event) =>{
        event.preventDefault()
        dispatch(getPokemonByName(input))
    }
   
   useEffect( ()=>{
    dispatch(getPokemonByName(input))
   },[dispatch,input])

    return (
        <div className={style.container} >
            <form onSubmit={handlerSubmit} >
                <input type="text"  onChange={(e)=>setInput(e.target.value)} />          
                <button>Buscar</button>
            </form>
        </div>
    )
}