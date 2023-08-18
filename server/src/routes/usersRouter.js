// ruta usuarios
const { Router } = require("express");
const usersRouter = Router();
const { createUserHandler, deleteUserHandler, updateUserHanlder, getAllUsersHandler } = require("../handlers/usersHandler");
const { validateCreateUser } = require ("../Utils/genericFunctions");

// endpoints: ruta de acceso a nuestro backend;
usersRouter.post("/", createUserHandler);
usersRouter.delete("/:id", deleteUserHandler);
usersRouter.put("/:id", updateUserHanlder);
usersRouter.get("/", validateCreateUser, getAllUsersHandler);

module.exports = usersRouter;