// ruta usuarios
const { Router } = require("express");
const usersRouter = Router();
const { signup, deleteUserHandler, updateUserHanlder, getAllUsersHandler,login,user,ensureToken } = require("../handlers/usersHandler");
const { validateCreateUser } = require ("../Utils/genericFunctions");

// endpoints: ruta de acceso a nuestro backend;
usersRouter.get("/allUsers", validateCreateUser, getAllUsersHandler);
usersRouter.get("/", ensureToken, user)
usersRouter.put("/update", updateUserHanlder);
usersRouter.delete("/:id", deleteUserHandler);
usersRouter.post("/signup", signup);
usersRouter.post("/login", login)

module.exports = usersRouter;
