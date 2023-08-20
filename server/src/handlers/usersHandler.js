/* handler usuarios */
const { createUserDB, deleteUser, updateUser, getAllUsers,authentication,getUser } = require("../controllers/usersController");

//crea un usuario en la DB:

// ruta crear usuario y generar token.
const signup = async (req, res) => {
    const { name, lastName, email, birthDate, password, phone, image, address, gender } = req.body;
    try {
      const token = await createUserDB({ name, lastName, email, birthDate, password, phone, image, address, gender });
      res.status(200).header("authorization", `Bearer ${token}`).json({token});
    } catch (error) {
      res.status(400).json({error:error.message});
    }
  };
// ruta crear y verificar el token ingresado

const login = async (req, res) => {
    const{email,password}=req.body;
    console.log('login token:', req.body);
    try {
      const token = await authentication({email,password});
      res.status(200).header("authorization", `Bearer ${token}`).json({token});
    } catch (error) {
      res.status(404).json({error:error.message});
    }
  };

// traer el usuario creado o autorizado
const user = async(req, res) => {
    try {
        const userData = await getUser(req.user);
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const ensureToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.user = bearerToken;
      next();
    } else {
      res.status(403).json({ error: "Token not provided" });
    }
  };



//ruta para eliminar un usuario:
const deleteUserHandler = async(req,res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        res.status(200).send(`Usuario con id: ${id} eliminado con éxito`);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//ruta para actualizar un usuario:


const updateUserHanlder = async(req, res) => {
  try {
      const status = await updateUser(req.user, req.body);
      res.status(200).json(status);
  } catch (error) {
      res.status(400).json({error:error.message})
  }
}

//ruta para obtener todos los usuarios:
const getAllUsersHandler = async(req,res) => {
    try {
        const response = await getAllUsers();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = {
    signup,
    deleteUserHandler,
    updateUserHanlder,
    getAllUsersHandler,
    login,
    user,
    ensureToken
}


/* const updateUserHanlder = async (req,res) => {
    const { id } = req.params;
    const { name, lastName, email, birthDate, password, phone, image, address, gender } = req.body;
    try {
        await updateUser(id, {name, lastName, email, birthDate, password, phone, image, address, gender });
        res.status(200).json(`Usuario ${name} actualizado con éxito!`);
    } catch (error) {
        res.status(400).json(`Error al actualizar usuario: `, {error:error.message});
    }
} */