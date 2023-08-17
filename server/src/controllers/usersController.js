/* logica de usuarios */
const { User } = require("../db");

//Crea un usuario en la DB:
const createUserDB = async (name, lastName, email, birthDate, password, phone, image, address, gender) => {

    const newUser = await User.create({name, lastName, email, birthDate, password, phone, image, address, gender});

    return newUser;
}

module.exports = {
    createUserDB,
}