import Filters from '../Filters/Filters'
import Orders from '../Orders/Orders'
import style from './Aside.module.css'

export default function Aside() {
    return(
        <div className={style.container} >
            <Filters/>
            <Orders/>
        </div>
    )
}