import style from './Card.module.css'


export default function Card(props) {
    const {id,name,image,types} = props
    const typesPoke = types.map((type,index) => {
        return(
            <p key={index} >{type}</p>
        )
    })
    return (
        <div key={id} className={style.container} >
            <h3>{name}</h3>
            <img src={image} alt="" />
            {typesPoke} 
        </div>
    )
}