const {Router} = require('express');
const { allPokemonHandler, pokemonIdHandler, pokemonCreateHandler } = require('../handlers/pokemonHandlers');

const pokeRouter = Router();

pokeRouter.get('/', allPokemonHandler)
pokeRouter.get('/:id', pokemonIdHandler)
pokeRouter.post('/', pokemonCreateHandler)

module.exports = pokeRouter;
