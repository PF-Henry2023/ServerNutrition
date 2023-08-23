//validacion para requerir todos los campos al momento de crear el usuario:
const validateCreateUser = (req, res, next) => {
  const {
    name,
    lastName,
    email,
    birthDate,
    password,
    phone,
    image,
    address,
    gender,
  } = req.body;
  if (!name) return res.status(400).json({ error: "Required name" });
  if (!lastName) return res.status(400).json({ error: "Required lastName" });
  if (!email) return res.status(400).json({ error: "Required email" });
  if (!birthDate) return res.status(400).json({ error: "Required birthDate" });
  if (!password) return res.status(400).json({ error: "Required password" });
  if (!phone) return res.status(400).json({ error: "Required phone" });
  if (!image) return res.status(400).json({ error: "Required image" });
  if (!address) return res.status(400).json({ error: "Required address" });
  if (!gender) return res.status(400).json({ error: "Required gender" });

  next(); // pasa al siguiente middleware
};

module.exports = {
  validateCreateUser,
};
