import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import style from './CardsContainer.module.css'
import { useState } from 'react'
import Paginate from '../Paginate/Paginate'

export default function CardsContainer() {

    const allPokemons = useSelector(state => state.allPokemons)

    const [currentPage, setCurrentPage] = useState(1)  //pagina actual  (1)
    const pokePerPage = 12
    
    const indexLastPoke = currentPage * pokePerPage  //(12)
    const indexFirstPoke = indexLastPoke - pokePerPage  //(0)
    const pokeActuales = allPokemons.slice(indexFirstPoke, indexLastPoke)
    const pokeFinal = [ ...pokeActuales]
    
    return (
        <div className={style.container}>
          <div className={style.paginate}>
            <div className={style.buttons}>
              <Paginate
                pokePerPage={pokePerPage}
                pokeActuales={allPokemons.length}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
          {pokeFinal.map((poke) => {
            return (
              <Card
                key={poke.id}
                id={poke.id}
                name={poke.name}
                image={poke.image}
                types={poke.types}
              />
            );
          })}
        </div>
      );
}