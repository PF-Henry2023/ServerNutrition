// ruta usuarios
const { Router } = require("express");
const usersRouter = Router();
const { createUserHandler, deleteUserHandler, updateUserHanlder, getUserHandler, getAllUsersHandler } = require("../handlers/usersHandler");

// endpoints: ruta de acceso a nuestro backend;
usersRouter.post("/", createUserHandler);
// usersRouter.delete("/:id", deleteUserHandler);
// usersRouter.put("/:id", updateUserHanlder);
// usersRouter.get("/", getUserHandler);
// usersRouter.get("/", getAllUsersHandler);

module.exports = usersRouter;