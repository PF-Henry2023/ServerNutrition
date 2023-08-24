const { Router } = require("express");
//Handlers
const {
  getAllNutritionists,
  getOneNutritionist,
  updateNutritionist,
  deleteNutritionist,
} = require("../handlers/nutritionistHandler.js");
const nutritionistRouter = Router();

// Routes

nutritionistRouter.get("/allNutritionists", getAllNutritionists);
nutritionistRouter.get("/oneNutritionist/:id", getOneNutritionist);
nutritionistRouter.put("/update/:id", updateNutritionist);
nutritionistRouter.delete("/delete/:id", deleteNutritionist);

module.exports = nutritionistRouter;
