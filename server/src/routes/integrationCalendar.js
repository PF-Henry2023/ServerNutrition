const { Router } = require('express');
const { getAllEvents, authUser, authUserCallback, getUserInfo } = require('../handlers/calendarHandlers');
const calendarRoute = Router();

calendarRoute.get("/auth", authUser);
calendarRoute.get("/auth/callback", authUserCallback)
calendarRoute.get("/googleUserInfo", getUserInfo)
calendarRoute.get("/allEvents", getAllEvents);

module.exports = calendarRoute;