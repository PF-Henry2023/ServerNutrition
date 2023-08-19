/* logica de usuarios */
const { User } = require("../db");

const createUserDB = async (
  name,
  lastName,
  email,
  birthDate,
  password,
  phone,
  image,
  address,
  gender
) => {
  try {
    const newUser = await User.create({
      name,
      lastName,
      email,
      birthDate,
      password,
      phone,
      image,
      address,
      gender,
    });
    return newUser;
  } catch (error) {
    throw new Error(`Error al crear usuario: ${error.message}`);
  }
};

const deleteUser = async (id) => {
  try {
    await User.destroy({ where: { id: id } });
  } catch (error) {
    throw new Error(`Error al eliminar usuario: ${error.message}`);
  }
};

const updateUser = async (id, infoUser) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`Usuario no existe en la base de datos`);
    }
    // Resto del código para actualizar el usuario
    return user;
  } catch (error) {
    throw new Error(`Error al actualizar usuario: ${error.message}`);
  }
};

//Obtener todos los usuarios:
const getAllUsers = async () => {
  try {
    const usersDB = await User.findAll();
    if (usersDB.length === 0)
      throw Error("¡No hay usuarios en la base de datos!");
    return usersDB;
  } catch (error) {
    throw Error(`Error al obtener los usuarios: ${error.message}`);
  }
};

module.exports = {
  createUserDB,
  deleteUser,
  updateUser,
  getAllUsers,
};
