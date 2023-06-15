import { getPokeCreated } from '../../redux/actions'
import style from './Filters.module.css'
import { useDispatch, useSelector } from 'react-redux'
//created puede ser un parametro, if cF tirnr api ::: trae from api, else, traer los de la dbb   ()
export default function Filters() {
    const allPokemons = useSelector((state)=> state.allPokemons)
    
    const dispatch = useDispatch()


    const handlerSelect = (event) => {
        event.preventDefault()
        dispatch(getPokeCreated(true))
    }


    return(
        <div className={style.container} >
            <label htmlFor="">Filtros</label>
            <select name="" id="">
                <option value="">Api</option>  
                <option value="">Dbb</option>
            </select>
            <button onClick={handlerSelect}>Filtrar</button>
        </div>
    )
}