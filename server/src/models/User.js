
const { DataTypes } = require("sequelize")

module.exports=(sequelize)=>{
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
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
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,

        },
         role: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['admin', 'user'],
            defaultValue: 'user'

        }, 
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Masculino', 'Femenino', 'No binario']]
            }
        },  googleId: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
    
          },
          isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
          },


    },{timestamps: false});
}