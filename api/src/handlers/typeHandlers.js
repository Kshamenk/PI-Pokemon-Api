const { getTypeController } = require("../controllers/typeController")


const getAllTypesHandler = async (req,res) => {
    try {
        const result = await getTypeController()
        res.status(200).json(result)
    } catch (error) {
        res.send('No se pudieron traer todos los types')
    }
}

module.exports = {
    getAllTypesHandler
}