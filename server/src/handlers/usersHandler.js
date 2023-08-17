/* handler usuarios */
const { createUserDB, deleteUser, updateUser, getAllUsers } = require("../controllers/usersController");

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

//ruta para eliminar un usuario:
const deleteUserHandler = async(req,res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        res.status(200).send(`Usuario con id: ${id} eliminado con éxito`);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//ruta para actualizar un usuario:
const updateUserHanlder = async(req,res) => {
    const { id } = req.params;
    try {
        await updateUser(id);
        res.status(200).send(`Usuario con id: ${id} actualizado con éxito`);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//ruta para obtener todos los usuarios:
const getAllUsersHandler = async(req,res) => {
    try {
        const response = await getAllUsers();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = {
    createUserHandler,
    deleteUserHandler,
    updateUserHanlder,
    getAllUsersHandler,
}