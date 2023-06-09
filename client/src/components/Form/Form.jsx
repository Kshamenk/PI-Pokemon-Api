import { useState } from 'react';
import style from './Form.module.css'


export default function Form() {

  const [input, setInput] = useState({
    name: "",
    hp: ""
  })
  const handlerChange = (event) => {
    const property = event.target.name
    const value = event.target.value
    setInput({
      ...input,
      [property]: value
    })
  }

  return (
    <div className={style.container}>
      <form action="">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' value={input.name} onChange={handlerChange} />
        </div>
        <div>
          <label htmlFor="image">Imagen: </label>
          <input type="text" name='image' />
        </div>
        <div>
          <label htmlFor="height">Height:  </label>
          <input type="number" name='height' />
        </div>
        <div>
          <label htmlFor="hp">Hp </label>
          <input type="range" id="hp" name="hp" min="0" max="100" value={input.hp} onChange={handlerChange} ></input>
        </div>
        <label htmlFor="">Types</label>
        <select name="" id="">
          <option value="normal">Normal</option>
          <option value="bug">Bug</option>
        </select>
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