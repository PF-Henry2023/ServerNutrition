//index todas las rutas
const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
/* const citaHandler=require("../handlers/usersHandler") */
const usersRouter = require("./usersRouter");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/usuarios", usuariosRouter);
/* router.use("/cita",citaHandler); */


module.exports = router;