/* handler usuarios */

const {
  deleteN,
  updateN,
  getAllN,
  getOneN,
} = require("../controllers/nutritionistController");

const updateNutritionist = async (req, res) => {
  try {
    const status = await updateN();
    res.status(200).json(status);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ruta para obtener todos los usuarios:
const getAllNutritionists = async (req, res) => {
  try {
    const response = await getAllN();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneNutritionist = async (req, res) => {
  try {
    const response = await getOneN();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNutritionist = async (req, res) => {
  try {
    const status = await deleteN();
    res.status(200).json(status);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllNutritionists,
  getOneNutritionist,
  updateNutritionist,
  deleteNutritionist,
};
