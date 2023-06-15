const { getPokeNameController, getAllPokeController, getPokeIdController, createPokeController } = require("../controllers/pokemonController");



const allPokemonHandler = async (req, res) => {
    const { name } = req.query;
    console.log("Pidiendo todos los pokemones")
    try {
        const result = name ? await getPokeNameController(name) : await getAllPokeController()
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
const pokemonIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "dbb" : "api"
    try {
        const result = await getPokeIdController(id, source);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
const pokemonCreateHandler = async (req, res) => {
    //const { name, hp, attack, defense, speed, height, weight,types, image } = req.body;
    const dataBody = req.body;
    try {
        const result = await createPokeController(dataBody)
        res.status(201).json(result)
    } catch (error) {
        console.log(req.body)
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    allPokemonHandler, pokemonIdHandler, pokemonCreateHandler
}