const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../db");
require("dotenv").config();

//Crea un usuario en la DB:

const createUserDB = async ({ name, lastName, email, birthDate, password, phone, address, gender }) => {
    
  
    const passwordHashed = await bcrypt.hash(password, 8);
    console.log(passwordHashed);
  
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        lastName,
        email,
        birthDate,
        password: passwordHashed,
        phone,
        
        address, 
        gender
      },
    });
    if (!created) throw new Error("User already exists");
  
    const token = jwt.sign({ id: user.id,email: email.email,user:name.name,lastName:user.lastName,birthDate:user.birthDate,phone:user.phone,adress:user.adress,gender:user.gender,password:user.password}, process.env.SECRET_KEY);
    return token;
  };

  //compropar token para la autenticacion:

  const authentication = async ({email,password}) => {
  
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Wrong user or password");
  
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword || user.email !== email)
      throw new Error("Wrong user or password");
  
    const token = jwt.sign({ id: user.id,email: email.email,name:user.name,lastName:user.lastName,birthDate:user.birthDate,phone:user.phone,adress:user.adress,gender:user.gender,password:user.password }, process.env.SECRET_KEY);
    return token;
  };
  
  //mostrar usuario verificado
  const getUser = async (token) => {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ where: { id } });
    return user;
  };





  //Actualizar un usuario:
  const updateUser = async (token, data) => {
    const allowedFields = ["name", "lastName", "email","password","phone","image","address"];
    const updateFields = Object.keys(data);
    const invalidFields = updateFields.filter(
      (field) => !allowedFields.includes(field)
    );
    if (invalidFields.length > 0) throw new Error("Invalid Fields");
  
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    await User.update(data, { where: { id } });
    return {
      status: "Updated successfully",
    };
  };
//Eliminar un usuario:

const deleteUser = async (token) => {
  const { id } = jwt.verify(token, process.env.SECRET_KEY);
  await User.destroy({ where: { id } });
  return {
    status: "Deleted successfully",
  };
};   




//Obtener todos los usuarios:
const getAllUsers = async () => {
  try {
    const usersDB = await User.findAll();
    if (usersDB.length === 0)
      throw Error("¡No hay usuarios en la base de datos!");
    return usersDB;
  } catch (error) {
    throw Error(`Error al obtener los usuarios: ${error.message}`);
  }
};

module.exports = {
  createUserDB,
  deleteUser,

    updateUser,
    getAllUsers, 
    authentication,
    getUser
  }
 




