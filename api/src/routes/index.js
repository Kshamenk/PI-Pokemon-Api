const { Router } = require('express');
// Importar todos los routers;
 const pokeRouter = require('./pokemonRoutes');
 const typeRouter = require('./typesRoutes');



const router = Router();

// Configurar los routers
 router.use('/pokemons', pokeRouter);
 router.use('/types', typeRouter);


module.exports = router;
