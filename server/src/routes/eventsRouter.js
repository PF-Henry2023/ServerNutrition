const { Router } = require("express");
const eventsRouter = Router();

const { createEventHandler } = require("../handlers/eventHandler");

eventsRouter.post("/", createEventHandler);

module.exports = eventsRouter;