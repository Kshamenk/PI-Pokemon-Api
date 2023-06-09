import style from './Orders.module.css'

export default function Orders() {
    return(
        <div className={style.container} >
             <label htmlFor="">Orders</label>
             <select name="" id="">
                <option value="">a-z</option>
                <option value="">z-a</option>
             </select>
        </div>
    )
}