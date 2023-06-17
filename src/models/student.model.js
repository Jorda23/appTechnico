import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { registerStudentModel } from "../models/registerStudent.model.js";

export const studentModel = sequelize.define(
  "student",
  {
    noCarnet: {
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
    birthDay: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
);

studentModel.hasMany(registerStudentModel, {
  foreignKey: "noCarnet",
});

registerStudentModel.belongsTo(studentModel, {
  foreignKey: "noCarnet",
});
