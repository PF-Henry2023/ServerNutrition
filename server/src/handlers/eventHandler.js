/* handler usuarios */

const {
  getAllE,
  getOneE,
  createE,
  updateE,
  destroyE,
} = require("../controllers/eventController");

const createEvent = async (req, res) => {
  try {
    const response = await createE();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const response = await getAllE();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneEvent = async (req, res) => {
  try {
    const response = await getOneE();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const response = await updateE();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const destroyEvent = async (req, res) => {
  try {
    const response = await destroyE();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  destroyEvent,
};
