const { Router } = require("express");
//Handlers
const {
  getAllNutritionists,
  getOneNutritionist,
  updateNutritionist,
  deleteNutritionist,
  createNutritionist,
} = require("../handlers/nutritionistHandler.js");
const nutritionistRouter = Router();

// Routes
//mas priorizable
//createNutritionist
nutritionistRouter.post("/create", createNutritionist);

//priori2
nutritionistRouter.get("/allNutritionists", getAllNutritionists);
nutritionistRouter.get("/searchBy", getOneNutritionist);

//segundo en la lista
nutritionistRouter.put("/update/:id", updateNutritionist);
nutritionistRouter.delete("/delete/:id", deleteNutritionist);

module.exports = nutritionistRouter;
