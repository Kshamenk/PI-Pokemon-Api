import { useEffect } from 'react';
import style from './Detail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { getPokemonById } from '../../redux/actions';


export default function Detail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const pokemonById = useSelector(state => state.pokemonById)
  console.log(pokemonById)
  useEffect(()=>{
    dispatch(getPokemonById(id))
  },[dispatch,id])


  return (
    <div className={style.container}>
      <h2>{pokemonById.name}</h2>
      <h3>{pokemonById.types}</h3>
    </div>
  );
}