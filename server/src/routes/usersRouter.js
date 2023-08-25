// ruta usuarios
const { Router } = require("express");
const usersRouter = Router();

const {
  signup,
  destroy,
  updateUserHanlder,
  getAllUsersHandler,
  login,
  user,
  loginOauth,
  signupOauth,
  activate,
} = require("../handlers/usersHandler");
const { validateCreateUser } = require("../Utils/genericFunctions");
const { ensureToken, onlyAdmin } = require("../Utils/seguridad");

// endpoints: ruta de acceso a nuestro backend;
usersRouter.get(
  "/allUsers",
  ensureToken,
  onlyAdmin,
  validateCreateUser,
  getAllUsersHandler
);
usersRouter.get("/", ensureToken, user);
usersRouter.put("/update", ensureToken, updateUserHanlder);

/* usersRouter.delete("/", deleteUserHandler); */
usersRouter.delete("/delete", ensureToken, destroy);
usersRouter.delete("/activate", ensureToken, activate);
usersRouter.post("/signup", signup);
// logueo con terceros(Google)
usersRouter.post("/login", login);
usersRouter.post("/login/oauth2.0", loginOauth);
usersRouter.post("/signup/oauth2.0", signupOauth);

module.exports = usersRouter;
