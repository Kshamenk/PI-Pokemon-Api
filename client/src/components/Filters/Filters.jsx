import { useState } from 'react';
import { getAllPokemons, getPokeCreated } from '../../redux/actions'
import style from './Filters.module.css'
import { useDispatch } from 'react-redux'
//created puede ser un parametro, if cF tirnr api ::: trae from api, else, traer los de la dbb   ()
export default function Filters() {
    //const allPokemons = useSelector((state)=> state.allPokemons)
    //console.log(allPokemons)
    const [filterType, setFilterType] = useState('');

    const dispatch = useDispatch()

    const handleFilterType = (event) => {
        setFilterType(event.target.value);
        if (event.target.value === '') {
          dispatch(getAllPokemons());
        } else {
          dispatch(getPokeCreated(event.target.value === 'dbb'));
        }
      };
    // const handlerSelect = (event) => {
    //     event.preventDefault()
    //     dispatch(getPokeCreated(true))
    // }


    return (
        <div className={style.container}>
          <label htmlFor="filterType">Filtros</label>
          <select name="filterType" id="filterType" value={filterType} onChange={handleFilterType}>
            <option value="">Todos</option>
            <option value="api">API</option>
            <option value="dbb">DBB</option>
          </select>
        </div>
      );
    }