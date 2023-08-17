/* handler usuarios */
const { createUserDB } = require("../controllers/usersController");

//crea un usuario en la DB:
const createUserHandler = async(req, res) => {
    const { name, lastName, email, birthDate, password, phone, image, address, gender } = req.body;
    try {
        const response = await createUserDB( name, lastName, email, birthDate, password, phone, image, address, gender );
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createUserHandler,
}