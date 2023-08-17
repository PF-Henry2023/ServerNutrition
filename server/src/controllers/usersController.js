/* logica de usuarios */
const { User } = require("../db");

//Crea un usuario en la DB:
const createUserDB = async (name, lastName, email, birthDate, password, phone, image, address, gender) => {

    const newUser = await User.create({name, lastName, email, birthDate, password, phone, image, address, gender});

    return newUser;
}

//Eliminar un usuario:
const deleteUser = async (id) => {
    await User.destroy({where: { id: id}})
    const allUsers = await User.findAll()
    return (allUsers);
}


module.exports = {
    createUserDB,
    deleteUser,
}