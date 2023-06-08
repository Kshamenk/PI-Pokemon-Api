  import style from './Home.module.css'
  import { Aside, CardsContainer, SearchBar } from '../index'

  export default function Home() {
  return (
    <div className={style.container}>
      <h1>Home</h1>
      <SearchBar/>
      <CardsContainer/>
      <Aside/>
    </div>
  );
}
