const {DataTypes}=require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define('Nutrionist', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 20]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 20]
            }
        },
        image:{
            type: Datatypes.STRING,
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
        password:{
            type:Datatypes.STRING,
            allowNull:false

        },
        colegiatura:{
            type:Datatypes.STRING,
            allowNull:false
        },
        especialidad:{
            type:Datatypes.STRING,
            allowNull:false
        }


    }, { timestamps: false });
    
}