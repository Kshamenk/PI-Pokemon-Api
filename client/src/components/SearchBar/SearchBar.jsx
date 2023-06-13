import style from './SearchBar.module.css'
export default function SearchBar() {     //{handlerChange, handlerSubmit} ?
    return (
        <div className={style.container} >
            <form >
                <input type="text" />          
                <button>Buscar</button>
            </form>
        </div>
    )
}