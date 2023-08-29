const { createEvent } = require("../controllers/eventController");

const createEventHandler = async (req,res) => {
    const { date, hour, purpose } = req.body;
    try {
        const response = await createEvent(date, hour, purpose);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: "Error creating event"})
    }
}

module.exports = {
    createEventHandler,
}
