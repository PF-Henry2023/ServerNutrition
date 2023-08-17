/* handler usuarios */
const { getAllusuarios } = require("../controllers/usersController");

const getUsuarios = async(req, res) => {
    try {
        res.send("soy la ruta de usuarios")
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getUsuarios
}