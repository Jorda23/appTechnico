import { DataTypes } from "sequelize";
import sequelize from "../database/connection.js";
import { registerStudentModel } from "../models/registerStudent.model.js";

export const subjectModel = sequelize.define(
  "subject",
  {
    idSubject: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

subjectModel.hasMany(registerStudentModel, {
  foreignKey: "idSubject",
});

registerStudentModel.belongsTo(subjectModel, {
  foreignKey: "idSubject",
});
