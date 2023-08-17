const { DataTypes }=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define('Nutrionist', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 20]
            }
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 20]
            }
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull:false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        contraseña:{
            type:DataTypes.STRING,
            allowNull:false

        },
        colegiatura:{
            type:DataTypes.STRING,
            allowNull:false
        },
        especialidad:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }, {timestamps: false});
    
}