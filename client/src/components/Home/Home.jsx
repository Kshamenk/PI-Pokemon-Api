import style from "./Home.module.css";
import { Aside, CardsContainer, Footer, SearchBar } from "../index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SearchBar />
      <div className={style.content}>
        <div className={style.cardsContainer}>
          <CardsContainer />
          <Footer />
        </div>
        <div className={style.aside}>
          <Aside />
        </div>
      </div>
    </div>
  );
}
