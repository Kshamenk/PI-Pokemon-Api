import { Link } from 'react-router-dom'
import style from './Nav.module.css'
export default function Nav() {


    return (
        <div className={style.container} >
            <Link to="/form" >
                <button>Form</button>
            </Link>

            <Link to="/home" >
                <button>Home</button>
            </Link>
        </div>
    )
}