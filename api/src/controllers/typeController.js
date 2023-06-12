const axios = require("axios");
const { Type } = require("../db");

//Solo para traer. easy stuff
// const getTypeController = async () => {
//     const response = await axios.get("https://pokeapi.co/api/v2/type")
//     const results = response.data.results
//     const results2 = results.map((e) => e.name)

//     return results2
// }

const getTypeController = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");

  const types = response.data.results;

  types.map((e) => {
    Type.findOrCreate({
      where: { name: e.name },
    });
  });
  return await Type.findAll();
};

module.exports = {
  getTypeController,
};
