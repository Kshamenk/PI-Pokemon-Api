import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const {id,name,image,types} = props
    const typesPoke = types.map((type,index) => {
        return(
            <p key={index} >{type}</p>
        )
    })
    return (
        <div key={id} className={style.container} >
            <Link to ={`../detail/${id}`}>
            <h3>{name}</h3>
            </Link>
            <img src={image} alt="" />
            {typesPoke} 
        </div>
    )
}