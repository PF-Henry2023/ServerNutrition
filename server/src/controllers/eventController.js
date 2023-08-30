const { Event } = require("../db");

//Creación de una cita:
const createEvent = async (date, hour, purpose) => {
    const newEvent = await Event.create({ date, hour, purpose });
    
    return newEvent;
}

//Eliminar una cita:
const deleteEvent = async (id) => {
    await Event.destroy({ where: {id: id}});
    return `Cita con id: ${id} eliminada con éxito`
}

//Actualizar una cita:
const updateEvent = async (id, date, hour, purpose) => {
    const event = await Event.findByPk(id);
    if(!event) throw Error("Cita no encontrada")
    await event.update({date, hour, purpose});
    return `Cita modificada con éxito`
}

//Obtener cita por id:
const getEventById = async (id) => {
    const eventFound = await Event.findOne({ where: { id }});
    if(!eventFound) return { error: "No existe la cita asociada a ese ID"};
    return {
        id: eventFound.dataValues.id,
        fecha: eventFound.dataValues.date,
        hora: eventFound.dataValues.hour,
        motivo: eventFound.dataValues.purpose,
        IdNutricionista: eventFound.dataValues.NutritionistId,
    }
}

//obtener todas las citas:
const getAllEvents = async () => {
    const allEvents = await Event.findAll();
    if(allEvents.length === 0) throw Error("¡No hay citas creadas en la base de datos");
    return allEvents;
}
module.exports = {
    createEvent,
    deleteEvent,
    updateEvent,
    getEventById,
    getAllEvents,
}