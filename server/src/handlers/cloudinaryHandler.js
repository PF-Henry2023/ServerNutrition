const { downloadCloudinary } = require("../controllers/cloudinaryController");

const cloudinaryHandler = async (req, res) => {
    try {
        const response = await downloadCloudinary();
        console.log(`esta es mi respuesta de cloudinary en handler: ${response}`);
        res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
    cloudinaryHandler,
}