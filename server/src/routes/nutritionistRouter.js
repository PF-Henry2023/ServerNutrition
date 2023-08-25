const { Router } = require("express");
//Handlers
const {
  getAllNutritionists,
  getOneNutritionist,
  updateNutritionist,
  deleteNutritionist,
  createNutritionist,
  restoreNutritionist,
} = require("../handlers/nutritionistHandler.js");
const nutritionistRouter = Router();

nutritionistRouter.post("/create", createNutritionist);
nutritionistRouter.get("/list", getAllNutritionists);
nutritionistRouter.get("/searchBy", getOneNutritionist);

//priori hoy
nutritionistRouter.delete("/delete/:id", deleteNutritionist);
nutritionistRouter.put("/update/:id", updateNutritionist);
nutritionistRouter.put("/restore/:id", restoreNutritionist);

module.exports = nutritionistRouter;
