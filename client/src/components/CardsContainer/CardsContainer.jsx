import Card from '../Card/Card'
import style from './CardsContainer.module.css'

export default function CardsContainer() {
    return(
        <div className={style.container} >
            <h1>Cards</h1>
            <Card/>
        </div>
    )
}