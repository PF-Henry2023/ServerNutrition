const { Router } = require('express');
const { getAllEvents, authUser, authUserCallback, getUserInfo, saveEvent, createCalendar, addAttendees } = require('../handlers/calendarHandlers');
const calendarRoute = Router();

calendarRoute.get("/auth", authUser);
calendarRoute.get("/auth/callback", authUserCallback);
calendarRoute.get("/googleUserInfo", getUserInfo);
calendarRoute.get("/allEvents", getAllEvents);
calendarRoute.post("/createEvent", saveEvent);
calendarRoute.post("/createCalendar", createCalendar);

module.exports = calendarRoute;