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
const updateUser = async (id, infoUser) => {
    const user = await User.findByPk(id)
    if(!user) throw Error(`Usuario no existe en la base de datos`);
    const { name, lastName, email, birthDate, password, phone, image, address, gender } = infoUser;//desestructuro la info del usuario que me llega por body
    if(user){
        user.name = name
        user.lastName = lastName
        user.email = email
        user.birthDate = birthDate;
        user.password = password;
        user.phone = phone;
        user.image = image;
        user.address = address;
        user.gender = gender;
        await user.save();
    }
    return user
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