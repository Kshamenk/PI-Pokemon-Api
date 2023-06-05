const axios = require('axios');

const getAllPokeController = async ()=>{
    const allPokemon = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")).data
    const allPokemon1 = (await allPokemon[results])  //saber acceder entre niveles de arreglos de URLS

    console.log(allPokemon1)
    //return allPokemon
}
const getPokeNameController = async (name)=>{
    return `Devuelve el pokemon con el name : ${name}`
}
const getPokeIdController = async (id,source)=>{
    if (source === "dbb") {
        return `Devuelve el pokemon con el name : ${id} desde dbb`
    } else {
        return `Devuelve el pokemon con el name : ${id} desde api`
    }
}
const createPokeController = async ({name})=>{
    return `Crea un pokemon con el name : ${name}`
}

module.exports = {
    getAllPokeController,getPokeNameController,getPokeIdController,createPokeController
}