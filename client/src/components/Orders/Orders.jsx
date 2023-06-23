import { useDispatch, useSelector } from "react-redux";
import style from "./Orders.module.css";
import {
  orderPokeByAttack,
  orderPokeByName,
  getAllTypes,
  orderPokeByType,
} from "../../redux/actions";
import { useEffect } from "react";

export default function Orders() {
  const dispatch = useDispatch();
  const pokemonTypes = useSelector((state) => state.pokemonTypes);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const handleOrderChange = (orderName) => {
    dispatch(orderPokeByName(orderName));
  };

  const handleAttackChange = (orderAttack) => {
    dispatch(orderPokeByAttack(orderAttack));
  };

  const handleTypeChange = (selectedType) => {
    dispatch(orderPokeByType(selectedType));
  };

  return (
    <div className={style.container}>
      <label htmlFor="orderName">Name Orders</label>
      <select
        name="orderName"
        id="orderName"
        onChange={(e) => handleOrderChange(e.target.value)}
      >
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>

      <label htmlFor="orderAttack">Stas Orders</label>
      <select
        name=""
        id=""
        onChange={(e) => handleAttackChange(e.target.value)}
      >
        <option value="mayor">Mas fuerza</option>
        <option value="menor">Menos fuerza</option>
      </select>



      <label htmlFor="orderType">Type Orders</label>
      <select
        name="orderType"
        id="orderType"
        
        onChange={(e) => handleTypeChange(e.target.value)}
      >
        <option value="All Types">All Types</option>
        {pokemonTypes.map((type, index) => (
          <option value={type.name} key={index}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}
