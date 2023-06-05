const { getPokeNameController, getAllPokeController, getPokeIdController, createPokeController } = require("../controllers/pokemonController");



const allPokemonHandler = async (req,res) =>{
    const {name} = req.query;
    try {
        const result = name ? await getPokeNameController(name) : await getAllPokeController()
    res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
const pokemonIdHandler = async (req,res) =>{
 const {id} = req.params;
 const source = isNaN(id) ? "dbb" : "api"
 try {
    const result = await getPokeIdController(id, source);
    res.status(200).json(result);
 } catch (error) {
    res.status(404).json({error: error.message})
 }
}
const pokemonCreateHandler = async (req,res) =>{
    const {name} = req.body;
try {
    result = ( await createPokeController({name}))
    res.status(201).json(result)
} catch (error) {
    res.send('No se pudo crear el pokemon')
}
}

module.exports = {  
    allPokemonHandler, pokemonIdHandler, pokemonCreateHandler
}