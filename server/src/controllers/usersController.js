/* logica de usuarios */
const { User } = require("../db");

//Crea un usuario en la DB:
const createUserDB = async (name, lastName, email, birthDate, password, phone, image, address, gender) => {

    const newUser = await User.create({name, lastName, email, birthDate, password, phone, image, address, gender});

    return newUser;
}

//Eliminar un usuario:
const deleteUser = async (id) => {
    await User.destroy({where: { id: id}});
}   

//Actualizar un usuario:
const updateUser = async (id, {name, lastName, email, birthDate, password, phone, image, address, gender}) => {
    const allUsers = await getAllUsers();
    const arrUsers = allUsers.map((el) => el.dataValues)
    const userId = +id
    const userData = {
        name, 
        lastName, 
        email, 
        birthDate, 
        password, 
        phone, 
        image, 
        address, 
        gender 
    }

    const userIndex = await arrUsers.findIndex((user) => user.id === userId);

    if(userIndex !== -1){
        arrUsers[userIndex] = {...arrUsers[userIndex], ...userData};
    }

    return arrUsers[userIndex];

}

//Obtener todos los usuarios:
const getAllUsers = async () => {
    const usersDB = await User.findAll();
    if(usersDB.length === 0) throw Error ("¡No hay usuarios en la base de datos!")
    return usersDB;
}


module.exports = {
    createUserDB,
    deleteUser,
    updateUser,
    getAllUsers, 
}