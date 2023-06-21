import { useDispatch } from 'react-redux'
import style from './Orders.module.css'
import { orderPokeByName } from '../../redux/actions'

export default function Orders() {

const dispatch = useDispatch()

    const handleOrderChange = (orderName) => {
        dispatch(orderPokeByName(orderName))
    }


    return(
        <div className={style.container} >
             <label htmlFor="orderName">Orders</label>
             <select name="orderName" id="orderName" onChange={(e)=>handleOrderChange(e.target.value)}>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
             </select>
        </div>
    )
}