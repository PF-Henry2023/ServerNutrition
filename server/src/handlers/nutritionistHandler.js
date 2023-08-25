/* handler usuarios */

const {
  softdeleteN,
  updateN,
  getAllN,
  restoreN,
  getOneN,
  createN,
} = require("../controllers/nutritionistController");

const createNutritionist = async (req, res) => {
  try {
    const { password, ...nutritionistProperties } = req.body;
    const token = await createN(nutritionistProperties, password);
    res
      .status(200)
      .header("authorization", `Bearer ${token}`)
      .json({ token, ...nutritionistProperties, isActive: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ruta para obtener todos los usuarios:
const getAllNutritionists = async (req, res) => {
  const { isActive } = req.query;
  try {
    const response = await getAllN(isActive);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ruta para obtener usuarios por query:
const getOneNutritionist = async (req, res) => {
  try {
    const { id, name } = req.query;
    if (!id && !name) {
      return res.status(400).json({
        error: "Please provide either 'id' or 'name' query parameter",
      });
    }

    const response = await getOneN(Number(id) || name);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNutritionist = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await updateN(id, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNutritionist = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await softdeleteN(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreNutritionist = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await restoreN(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNutritionist,
  getAllNutritionists,
  getOneNutritionist,
  updateNutritionist,
  deleteNutritionist,
  restoreNutritionist,
};
