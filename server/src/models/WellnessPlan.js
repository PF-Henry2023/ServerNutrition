const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "WellnessPlan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      dailyMeals: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      groceryList: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      suggestedFoods: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      workoutPlan: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      goals: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
