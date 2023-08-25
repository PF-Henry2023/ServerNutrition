const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Nutritionist } = require("../db");
require("dotenv").config();

// const verifyAndDecodeToken = (token, secretKey) => {
//   try {
//     const decodedToken = jwt.verify(token, secretKey);
//     return decodedToken;
//   } catch (error) {
//     throw new Error(`Token verification error: ${error.message}`);
//   }
// };

const createN = async (nutritionist, password) => {
  try {
    // Code to fetch a nutritionist
    const passwordHashed = await bcrypt.hash(password, 8);

    const [existingNutritionist, wasCreated] = await Nutritionist.findOrCreate({
      where: { email: nutritionist.email },
      defaults: { ...nutritionist, password: passwordHashed },
    });
    if (!wasCreated) throw new Error("nutritionist already exists!");

    const token = jwt.sign(
      existingNutritionist.dataValues,
      process.env.SECRET_KEY
    );

    // console.log(
    //   "atributos del token decodificado",
    //   verifyAndDecodeToken(token, process.env.SECRET_KEY)
    // );

    return token;
  } catch (error) {
    throw new Error(`Error fetching nutritionist: ${error.message}`);
  }
};

// Mostrar usuario
const getOneN = async (data) => {
  try {
    let nutritionist;

    if (typeof data === "number") {
      nutritionist = await Nutritionist.findByPk(data);
    } else {
      nutritionist = await Nutritionist.findOne({
        where: { name: data },
      });
    }

    if (!nutritionist) {
      throw new Error(`Error fetching nutritionist: Nutritionist not found`);
    }

    return nutritionist;
  } catch (error) {
    throw new Error(`Error fetching nutritionist: ${error.message}`);
  }
};

// Actualizar un usuario
const updateN = async () => {
  try {
    // Code to update a nutritionist
    return "updateN";
  } catch (error) {
    throw new Error(`Error updating nutritionist: ${error.message}`);
  }
};

// Obtener todos los usuarios
const getAllN = async () => {
  try {
    const nutritionistsfromDB = await Nutritionist.findAll();
    if (nutritionistsfromDB.length === 0)
      throw Error("¡No hay usuarios en la base de datos!");
    return nutritionistsfromDB;
  } catch (error) {
    throw new Error(`Error fetching all nutritionists: ${error.message}`);
  }
};

// Eliminar usuario
const deleteN = async () => {
  try {
    // Code to delete a nutritionist
    return "deleteN";
  } catch (error) {
    throw new Error(`Error deleting nutritionist: ${error.message}`);
  }
};

module.exports = {
  deleteN,
  updateN,
  getAllN,
  getOneN,
  createN,
};
