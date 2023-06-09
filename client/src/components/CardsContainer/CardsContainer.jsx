import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import style from './CardsContainer.module.css'

export default function CardsContainer() {

    const allPokemons = useSelector(state => state.allPokemons)

    return (
        <div className={style.container} >
            {
                allPokemons.map(poke => {
                    return <Card
                        key={poke.id}
                        id={poke.id}
                        name={poke.name}
                        image={poke.image}
                        types={poke.types}
                    />
                })
            }
        </div>
    )
}