const axios = require("axios");

// //   const allPokemon = (
// //     await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
// //   ).data;
// //   const allPokemon1 = (await allPokemon).results;

// //   const additionalData = allPokemon1.map((pokemon) => {

// //     const name = pokemon.name;
// //     const url = pokemon.url;
// //     return additionalData;
//   });

const getAllPokeController = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    const results = response.data.results;
    //con promise all concateno la siguientes promises
    const pokeData = await Promise.all(
      results.map(async (pokemon) => {
        try {
          const name = pokemon.name; // array? Map.
          const url = pokemon.url;

          const pokemonResponse = await axios.get(url); //aca pido la url de respuesta, me permite ingreasr a los siguientes niveles
          const pokemonData = pokemonResponse.data;

          const weight = pokemonData.weight;

          return { name, weight };
        } catch (error) {
          console.error("Error al obtener datos del pokemon:", error);
          return null; // manejar el error de otra manera. Me lo robo.
        }
      })
    );
    return pokeData.filter((pokemon) => pokemon !== null);  //q me retorne esa data de aquel pokemon que exista, que no sea null
  } catch (error) {
    throw new Error("Error al obtener todos los pokemons desde la API");
  }
};

const getPokeNameController = async (name) => {
  return `Devuelve el pokemon con el name : ${name}`;
};
const getPokeIdController = async (id, source) => {
  if (source === "dbb") {
    return `Devuelve el pokemon con el name : ${id} desde dbb`;
  } else {
    return `Devuelve el pokemon con el name : ${id} desde api`;
  }
};
const createPokeController = async ({ name }) => {
  return `Crea un pokemon con el name : ${name}`;
};

module.exports = {
  getAllPokeController,
  getPokeNameController,
  getPokeIdController,
  createPokeController,
};
