import { useDispatch } from 'react-redux'
import style from './Orders.module.css'
import { orderPokeByAttack, orderPokeByName } from '../../redux/actions'

export default function Orders() {

    const dispatch = useDispatch()

    const handleOrderChange = (orderName) => {
        dispatch(orderPokeByName(orderName))
    }

    const handleAttackChange = (orderAttack) => {
        dispatch(orderPokeByAttack(orderAttack))
    }


    return (
        <div className={style.container} >
            <label htmlFor="orderName">Name Orders</label>
            <select name="orderName" id="orderName" onChange={(e) => handleOrderChange(e.target.value)}>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
            </select>

            <label htmlFor="orderAttack">Stas Orders</label>
            <select name="" id="" onChange={(e)=> handleAttackChange(e.target.value)} >
                <option value="">---</option>
                <option value="mayor">Mas fuerza</option>
                <option value="menor">Menos fuerza</option>
            </select>
        </div>
    )
}