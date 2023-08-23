//index todas las rutas
const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter");
const calendarRoute = require('./integrationCalendar');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRouter);
/* router.use("/cita",citaHandler); */
router.use("/calendarGoogle", calendarRoute);


module.exports = router;
