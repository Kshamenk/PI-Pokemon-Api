import style from './SearchBar.module.css'
export default function SearchBar() {
    return (
        <div className={style.container} >
            <form action="">
                <input type="text" />
                <button>Buscar</button>
            </form>
        </div>
    )
}