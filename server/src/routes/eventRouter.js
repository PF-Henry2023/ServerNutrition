const { Router } = require("express");
//Handlers
const {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  destroyEvent,
} = require("../handlers/eventHandler.js");
const eventRouter = Router();

eventRouter.get("/list", getAllEvents);
eventRouter.get("/:id", getOneEvent);
eventRouter.post("/create", createEvent);
eventRouter.put("/update/:id", updateEvent);
eventRouter.delete("/destroy/:id", destroyEvent);

module.exports = eventRouter;
