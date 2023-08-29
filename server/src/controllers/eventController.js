// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { Nutritionist } = require("../db");
// require("dotenv").config();

const getAllE = async () => {
  try {
    return "getAllE";
  } catch (error) {
    throw new Error(`Error fetching all wellnessPlans: ${error.message}`);
  }
};

const getOneE = async () => {
  try {
    return "getOneE";
  } catch (error) {
    throw new Error(`Error fetching all wellnessPlans: ${error.message}`);
  }
};

const createE = async () => {
  try {
    return "createE";
  } catch (error) {
    throw new Error(`Error fetching all wellnessPlans: ${error.message}`);
  }
};

const updateE = async () => {
  try {
    return "updateE";
  } catch (error) {
    throw new Error(`Error fetching all wellnessPlans: ${error.message}`);
  }
};

const destroyE = async () => {
  try {
    return "destroyE";
  } catch (error) {
    throw new Error(`Error fetching all wellnessPlans: ${error.message}`);
  }
};

module.exports = {
  getAllE,
  getOneE,
  createE,
  updateE,
  destroyE,
};
