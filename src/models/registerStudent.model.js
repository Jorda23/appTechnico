import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";

export const registerStudentModel = sequelize.define(
  "registerStudent",
  {
    noRegister: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    registrationTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false,
  }
);
