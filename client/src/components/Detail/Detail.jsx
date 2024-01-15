import { useEffect } from "react";
import style from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonById = useSelector((state) => state.pokemonById);

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  if (!pokemonById) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={style.container}>
      {pokemonById.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>ID: {pokemon.id}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <h3>Type: {pokemon.types.join(",  ")}</h3>
          <h3>HP: {pokemon.hp}</h3>
          <h3>Height: {pokemon.height}</h3>
          <h3>Weight: {pokemon.weight}</h3>
          <h3>Speed: {pokemon.speed}</h3>
          <h3>Attack: {pokemon.attack}</h3>
          <h3>Defense: {pokemon.defense}</h3>
        </div>
      ))}
    </div>
  );
}
