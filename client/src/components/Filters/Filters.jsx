import style from './Filters.module.css'

export default function Filters() {
    return(
        <div className={style.container} >
            <label htmlFor="">Filtros</label>
            <select name="" id="">
                <option value="">Api</option>
                <option value="">Dbb</option>
            </select>
        </div>
    )
}