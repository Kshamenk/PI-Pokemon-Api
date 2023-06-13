import style from "./Home.module.css";
import { Aside, CardsContainer, Footer, Paginate, SearchBar } from "../index";
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
          <Paginate />
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

//CardsContainer   es el padre de card. en card estan las props que recibe cada uno de las tarjetas(pokemones) que se van a mostrar
//Home es el body de esta pagina, aqui se deberia mostrar a la derecha el componente Aside, que sera lo que pasa al costado,
//alli podremos filtrar y ordenar nuestros pokemones segun opciones.

//FILTERS casi seguro de que se relaciona con aside, como que esto iria dentro de Aside.
//ORDERS mismo caso que Filters, seria otro input que nos permite interactuar con la forma qen la que se mostrara CardContainer (creo)

//Paginate sera el paginado, estoy casi seguro de que quiero que se muestre cuando se monte 'Home'. Deberia mostrarlo en algun otro lado?
//Footer es el pie de pagina, estoy seguro de que quiero que se muestre cuando se monte Home. Este si deberia aparecer en mas lugares.
