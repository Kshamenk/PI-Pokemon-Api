


import pokemonImage from '../../Img/pokemon.jpg';
import React from 'react';
import style from './LandingPage.module.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className={style.container}>
      <img src={pokemonImage} alt="Pokemon" className={style.image} />
      <Link to="/home" className={style.button}>
        Vamos!
      </Link>
    </div>
  );
}