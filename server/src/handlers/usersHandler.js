/* handler usuarios */
const { createUserDB, deleteUser } = require("../controllers/usersController");

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

const deleteUserHandler = async(req,res) => {
    const { id } = req.params;
    try {
        const response = await deleteUser(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
module.exports = {
    createUserHandler,
    deleteUserHandler,
}