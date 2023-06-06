const { getTypeController } = require("../controllers/typeController")


const getAllTypesHandler = async (req,res) => {
    try {
        const result = await getTypeController()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getAllTypesHandler
}