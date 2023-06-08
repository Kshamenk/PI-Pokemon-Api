import style from './LandingPage.module.css'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <div className={style.container}>
            <h1>LandingPage</h1>
            <Link to='/home'>
                <h2>Home</h2>
            </Link>
        </div>
    )
}