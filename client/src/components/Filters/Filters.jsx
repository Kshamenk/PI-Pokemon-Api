import { useState } from 'react'
//import { getPokeCreated } from '../../redux/actions'
import style from './Filters.module.css'
import { useDispatch, useSelector } from 'react-redux'
//import { getPokeSource } from '../../redux/actions'
//created puede ser un parametro, if cF tirnr api ::: trae from api, else, traer los de la dbb   ()
export default function Filters() {
    const [source, setSource] = useState("api")
    const allPokemons = useSelector((state)=> state.allPokemons)
    
    const dispatch = useDispatch()


    // const handlerSelect = (event) => {
    //     event.preventDefault()
    //     dispatch(getPokeCreated(true))
    // }


    return(
        <div className={style.container} >
            <label htmlFor="">Filtros</label>
            <select value={source} onChange={(e)=> setSource(e.target.value)} >
                <option value="api">Api</option>  
                <option value="dbb">Dbb</option>
            </select>
            {/* <button onClick={()=> dispatch(getPokeSource(source))}>Filtrar</button> */}
        </div>
    )
}