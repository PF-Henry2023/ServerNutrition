const { Router } = require("express");
//Handlers
const { getAllWellnessPlans } = require("../handlers/wellnessPlanHandler.js");
const wellnessPlanRouter = Router();

wellnessPlanRouter.get("/list", getAllWellnessPlans);

module.exports = wellnessPlanRouter;
