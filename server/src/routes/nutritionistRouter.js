const { Router } = require("express");
//Handlers
const {
  getAllNutritionists,
  getOneNutritionist,
  updateNutritionist,
  deleteNutritionist,
  createNutritionist,
  restoreNutritionist,
  loginNutritionist,
  loginOauthNutritionist,
  signupOauthNutritionist,
  getSchedule,
  getMyDoctor,
  gethorariosCombinados,
} = require("../handlers/nutritionistHandler.js");
const nutritionistRouter = Router();
//post
nutritionistRouter.post("/create", createNutritionist);
//get
nutritionistRouter.get("/list", getAllNutritionists);
nutritionistRouter.get("/searchBy", getOneNutritionist);
nutritionistRouter.post("/myDoctor", getMyDoctor);
nutritionistRouter.get("/horariosCombinados", gethorariosCombinados);

//delte
nutritionistRouter.delete("/delete/:id", deleteNutritionist);
//put
nutritionistRouter.put("/update/:id", updateNutritionist);
nutritionistRouter.put("/restore/:id", restoreNutritionist);
//logeo con terceross
nutritionistRouter.post("/login", loginNutritionist);
nutritionistRouter.post("/login/oauth2.0", loginOauthNutritionist);
nutritionistRouter.post("/signup/oauth2.0", signupOauthNutritionist);
nutritionistRouter.get("/horariosCombinados", getSchedule);

module.exports = nutritionistRouter;
