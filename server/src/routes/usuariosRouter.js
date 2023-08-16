// ruta usuarios
const {Router} = require("express");
const { getUsuarios } = require("../handlers/usersHandler");
const usuarioRouter = Router();

usuarioRouter
    .post("/", getUsuarios);

module.exports = usuarioRouter;