const axios = require("axios");
const { Pokemon } = require("../db");

// //   const allPokemon = (
// //     await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
// //   ).data;
// //   const allPokemon1 = (await allPokemon).results;

// //   const additionalData = allPokemon1.map((pokemon) => {

// //     const name = pokemon.name;
// //     const url = pokemon.url;
// //     return additionalData;
//   });

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

var pokeCache;
const getAllPokeController = async () => {
  if (pokeCache) return pokeCache;
  //traer desde dbb
  const pokemonDbb = await Pokemon.findAll();
  // traer desde la api
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=120"
  );
  const results = response.data.results;
  const result2 = results.map((e) => axios.get(e.url));
  const result3 = await Promise.all(result2);
  const result4 = result3.map((e) => e.data);
  const pokeAll = clearData(result4);
  pokeCache = [...pokemonDbb, ...pokeAll];
  return pokeCache;
};

const getPokeNameController = async (name) => {
  const pokeName = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  ).data;
  const pokeClear = clearData([pokeName]);
  return pokeClear;
};

const getPokeIdController = async (id, source) => {
  console.log(source);
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
const createPokeController = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
  image
) => {
  const newPoke = await Pokemon.create(
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
    image
  );
  return newPoke;
};

module.exports = {
  getAllPokeController,
  getPokeNameController,
  getPokeIdController,
  createPokeController,
};
