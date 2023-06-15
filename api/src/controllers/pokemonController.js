const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

const clearData = (arr) =>
  arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      hp: e.stats[0].base_stat,
      attack: e.stats[1].base_stat,
      defense: e.stats[2].base_stat,
      speed: e.stats[5].base_stat,
      height: e.height,
      weight: e.weight,
      types: e.types.map((e) => e.type.name),
      image: e.sprites.other.dream_world.front_default,
      created: false,
    };
  });

var pokeAll = [];
var pokemonDbb = [];
const getAllPokeController = async () => {
  //traer desde dbb
  pokemonDbb = await Pokemon.findAll();
  if (pokeAll.length > 0) {
     return [...pokemonDbb, ...pokeAll];
   };
  // traer desde la api
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );
  const results = response.data.results;
  const result2 = results.map((e) => axios.get(e.url));
  const result3 = await Promise.all(result2);
  const result4 = result3.map((e) => e.data);
  pokeAll = clearData(result4);
  //aca concatenamos las dos 
  return [...pokemonDbb, ...pokeAll];
};


const getPokeNameController = async (name) => {
  const allPokemon = await getAllPokeController();
  const pokeName = allPokemon.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  return pokeName;
};

const getPokeIdController = async (id, source) => {

  if (source === "dbb") {
    const pokeDb = await Pokemon.findByPk(id);
    return pokeDb;
  } else {
    const pokeId = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
      .data;
    const pokeClear = clearData([pokeId]);
    return pokeClear;
  }
};

const createPokeController = async (dataBody) => {
  dataBody.hp = parseInt(dataBody.hp) || 40;
  dataBody.attack = parseInt(dataBody.attack) || 40;
  dataBody.defense = parseInt(dataBody.defense) || 40;
  dataBody.speed = parseInt(dataBody.speed) || 40;
  dataBody.weight = parseInt(dataBody.weight) || 40;
  dataBody.height = parseInt(dataBody.height) || 40;
  const { name, hp, attack, defense, speed, height, weight, types, image } = dataBody
  const newPoke = await Pokemon.create({ name, hp, attack, defense, speed, height, weight, types, image });
  const typesDbb = await Type.findAll({ where: { name: types } })
  newPoke.addType(typesDbb) //aca relacionamos la tabla intermedia PokemonTypes...
  return await newPoke;
};

module.exports = {
  getAllPokeController,
  getPokeNameController,
  getPokeIdController,
  createPokeController,
};

