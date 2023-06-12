import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Form.module.css';
import { getAllTpyes } from '../../redux/actions';
import axios from 'axios';


export default function Form() {
  const dispatch = useDispatch()
  const types = useSelector(state => state.pokemonTypes)

  useEffect(() => {
    dispatch(getAllTpyes())
  }, [dispatch])

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    height: "",
    weight: "",
    speed: "",
    image: "",
    types: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const handlerTypes = (event) => {
    setInput({
      ...input,
      types: [...input.types, event.target.value]
    })
  }

  const handlerDelete = (type, event) => {
    event.preventDefault()
    setInput({
      ...input,
      types: input.types.filter(e => e !== type)
    })
  }

  const handlerSubmit = (event) =>{
    //todos los submit necesitan un prevDefault
    event.preventDefault()
   axios.post("http://localhost:3001/pokemons", input)
    alert("Personaje creado")
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      height: "",
      weight: "",
      speed: "",
      image: "",
      types: []
    })
  }
//click A CAR, QUE ME MANDE A DETAIL ID CON EL ID DE ESA CARD... PRIMERO 
  return (
    <div className={style.container}>
      <form onSubmit={handlerSubmit} >
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={input.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input type="text" name="image" value={input.image} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input type="number" name="height" value={input.height} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="weight">Weight: </label>
          <input type="number" name="weight" value={input.weight} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="hp">Hp: </label>
          <input type="range" id="hp" name="hp" min="0" max="100" value={input.hp} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="attack">Attack: </label>
          <input type="range" id="attack" name="attack" value={input.attack} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="defense">Defense: </label>
          <input type="range" name="defense" value={input.defense} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="speed">Speed: </label>
          <input type="range" name="speed" value={input.speed} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="types">Types: </label>
          <select name="types" id="types" value={input.types} onChange={handlerTypes}>
            {
              types.map((type, index) => {
                return (
                  <option value={type.name} key={index} >{type.name}</option>
                )
              })
            }
          </select>
          {input.types.map((type) => {
            return (
              <div>
                <span>{type} </span>
                <button onClick={(event) => handlerDelete(type, event)}> x</button>
              </div>
            )
          })}
        </div>
        <button>Crear! </button>
      </form>
    </div>
  );
}

  //buscar todo lo que tengo que pasar   { attack, defense, speed, height, weight, types }
  //types del estado global. // Si debo crear una nueva accion... suscribirla al form

  //alltype.map(  type)  = opciones

  //primero que tome todos los estados

  //al clieckear esa opcion, tomo ese valor, lo guardo en input.types (si aprete bug, que se agregue )

  //checkpoint ayuda= tomar y ver valores. //no validar nada, pensar las cosas.

