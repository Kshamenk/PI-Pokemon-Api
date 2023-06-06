const axios = require("axios");
const { Type } = require('../db')

//Solo para traer. easy stuff
// const getTypeController = async () => {
//     const response = await axios.get("https://pokeapi.co/api/v2/type")
//     const results = response.data.results
//     const results2 = results.map((e) => e.name)

//     return results2
// }

const getTypeController = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const types = response.data.results.map((e) => e.name);
  
      const createdTypes = await Type.bulkCreate(types.map((name) => ({ name }))); // Guarda los tipos en la base de datos
  
      return createdTypes.map((type) => type.name); // Devuelve los nombres de los tipos creados
    
  };

// const getTypeController = async () => {
//     const response = await axios.get("https://pokeapi.co/api/v2/type");
//     const types = response.data.results.map((e) => e.name);
    
//     const createdTypes = [];
  
//     for (const name of types) {
//       const createdType = await Type.create({ name });
//       createdTypes.push(createdType.name);
//     }
  
//     return createdTypes;
//   };

module.exports = {
    getTypeController
}