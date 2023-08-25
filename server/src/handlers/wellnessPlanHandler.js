/* handler usuarios */

const { getAllWPs } = require("../controllers/wellnessPlanController");

//ruta para obtener todos los usuarios:
const getAllWellnessPlans = async (req, res) => {
  try {
    const response = await getAllWPs();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllWellnessPlans,
};
