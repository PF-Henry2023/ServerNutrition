const { Event } = require("../db");

//Creación de una cita:
const createEvent = async (date, hour, purpose) => {
    const newEvent = await Event.create({ date, hour, purpose });
    return newEvent;
}

module.exports = {
    createEvent,
}