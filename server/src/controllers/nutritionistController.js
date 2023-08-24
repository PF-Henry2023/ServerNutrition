const jwt = require("jsonwebtoken");
const { Nutrionist } = require("../db");
require("dotenv").config();

// Mostrar usuario
const getOneN = async () => {
  try {
    // Code to fetch a nutritionist
    return "getOneN";
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
    // Code to fetch all nutritionists
    return "getAllN";
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
};
