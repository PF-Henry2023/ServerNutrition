const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Nutritionist } = require("../db");
require("dotenv").config();

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
      throw new Error(`Nutritionist not found`);
    }
    return nutritionist;
  } catch (error) {
    throw new Error(`Error fetching nutritionist: ${error.message}`);
  }
};

// Actualizar un usuario
const updateN = async (id, data) => {
  try {
    const allowedFields = [
      "name",
      "lastName",
      "email",
      "image",
      "password",
      "license",
      "specialty",
    ];

    // Verificar que solo los campos permitidos sean modificados
    const updateFields = Object.keys(data);
    const invalidFields = updateFields.filter(
      (field) => !allowedFields.includes(field)
    );
    if (invalidFields.length > 0) {
      const invalidFieldNames = invalidFields.join(", ");
      throw new Error(`Fields not permitted for update: ${invalidFieldNames}`);
    }

    await Nutritionist.update(data, {
      where: { id },
    });
    const updatedNutritionist = await Nutritionist.findByPk(id);

    return updatedNutritionist;
  } catch (error) {
    throw new Error(`Error updating nutritionist: ${error.message}`);
  }
};

// Obtener todos los usuarios
const getAllN = async (isActive) => {
  try {
    let nutritionistsfromDB;

    switch (isActive) {
      case "true":
        nutritionistsfromDB = await Nutritionist.findAll({
          where: { isActive: true },
        });
        break;

      case "false":
        nutritionistsfromDB = await Nutritionist.findAll({
          where: { isActive: false },
        });
        break;

      default:
        nutritionistsfromDB = await Nutritionist.findAll();
        break;
    }

    if (nutritionistsfromDB.length === 0) {
      throw new Error("No users found in the database!");
    }

    return nutritionistsfromDB;
  } catch (error) {
    throw new Error(`Error fetching all nutritionists: ${error.message}`);
  }
};

// Eliminar usuario
const softdeleteN = async (id) => {
  try {
    if (!id) {
      throw new Error(`No ID provided for deletion.`);
    }

    const deletedNutritionist = await Nutritionist.findOne({
      where: { id, isActive: true },
    });

    if (!deletedNutritionist) {
      throw new Error(`Nutritionist with ID ${id} not found.`);
    }

    await Nutritionist.update({ isActive: false }, { where: { id } });

    return deletedNutritionist;
  } catch (error) {
    throw new Error(`Error deleting nutritionist: ${error.message}`);
  }
};

const restoreN = async (id) => {
  try {
    if (!id) {
      throw new Error(`No ID provided for restoration!`);
    }
    await Nutritionist.update({ isActive: true }, { where: { id } });

    const restoredNutritionist = await Nutritionist.findByPk(id);

    return restoredNutritionist;
  } catch (error) {
    throw new Error(`Error updating nutritionist: ${error.message}`);
  }
};

module.exports = {
  softdeleteN,
  updateN,
  getAllN,
  restoreN,
  getOneN,
  createN,
};