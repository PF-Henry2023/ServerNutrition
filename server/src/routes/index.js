//index todas las rutas
const { Router } = require('express');
const ususarioHandler=require("./usuariosRouter")
/* const citaHandler=require("../handlers/usersHandler") */


const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/usuarios",ususarioHandler);
/* router.use("/cita",citaHandler); */

module.exports = router;
