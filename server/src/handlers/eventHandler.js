const {
  createEvent,
  deleteEvent,
  updateEvent,
  getEventById,
  getAllEvents,
} = require("../controllers/eventController");

const createEventHandler = async (req, res) => {
  const { date, hour, purpose, NutritionistId, UserId } = req.body;
  try {
    const response = await createEvent(
      date,
      hour,
      purpose,
      NutritionistId,
      UserId
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: "Error creating event" });
  }
};

const deleteEventHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteEvent(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: "Error removing event" });
  }
};

const updateEventHandler = async (req, res) => {
  const { id } = req.params;
  const { date, hour, purpose, isActive } = req.body;
  try {
    // if(!id) throw Error("El id es obligatorio");
    const response = await updateEvent(id, date, hour, purpose, isActive);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: "Error updating event" });
  }
};

const getEventByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getEventById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: `Error getting event` });
  }
};

const getAllEventsHandler = async(req,res) => {
    try {
        const response = await getAllEvents();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: "error getting events"})
    }
}

module.exports = {
  createEventHandler,
  deleteEventHandler,
  updateEventHandler,
  getEventByIdHandler,
  getAllEventsHandler,
};
