const nodemailer = require("nodemailer");

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

//FUNCIÓN PARA ENVIAR NOTIFICACIONES VIA EMAIL:
const sendEmailNotification = async (email) => {

  //CODIGO PARA ENVIAR NOTIFICACION VIA EMAIL AL USUARIO QUE HA SIDO CREADO:
  const transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port: 465,
      secure: true,
      auth:{
          user:"pfhenry4@gmail.com", //email del servidor o dominio desde donde se envia el mensaje
          pass:"tndvsvitmutasmpv", // contraseña que se genero en gestionar contraseñas para aplicaciones en google
      },
  });

  const link = "http://localhost:5173/"

  await transporter.sendMail({
      from: '"NUTRITION WEB" <pfhenry4@gmail.com>', // aqui va el correo desde donde se envia el mensaje y titulo de origen
      to: email, // el email que recibe el mensaje
      subject:"PRUEBA DE MI PAGINA 1", // titulo del mensaje
      // text: "hola esto es una prueba", se puede enviar el mensaje como texto plano o como html
      html: `
          <b>Por favor de click en el siguiente link para verificar su cuenta</b>
          <a href="${link}">${link}</a>
      `// se le puede poner cualquier link que se desee en el cuerpo del mensaje para que cuando ingrese lo redirija puede ser a la plataforma
  });
  
};
module.exports = {
  validateCreateUser,
  sendEmailNotification,
};
