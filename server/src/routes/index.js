//index todas las rutas
const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const usersRouter = require("./usersRouter");
const eventsRouter = require("./eventsRouter");
const calendarRoute = require("./integrationCalendar");
const paymentRouter = require("./paymentRouter");
const nutritionistRouter = require("./nutritionistRouter");
const wellnessPlanRouter = require("./wellnessPlanRouter");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/users", usersRouter);
router.use("/events", eventsRouter);
router.use("/wellnessPlans", wellnessPlanRouter);
router.use("/nutritionists", nutritionistRouter);
router.use("/calendarGoogle", calendarRoute);
router.use("/create-checkout-session", paymentRouter);

module.exports = router;
