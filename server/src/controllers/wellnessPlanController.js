// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { Nutritionist } = require("../db");
// require("dotenv").config();

const getAllWPs = async () => {
  try {
    return "getAllWPs";
  } catch (error) {
    throw new Error(`Error fetching all wellnessPlans: ${error.message}`);
  }
};

module.exports = {
  getAllWPs,
};
