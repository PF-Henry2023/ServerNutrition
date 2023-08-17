const { DataTypes } = require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        nacimiento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(?=.*[A-Z])(?=.*\d).{6,8}$/
            }
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Masculino', 'Femenino', 'No binario']]
            }
        }
    },{ timestamps: false });
}