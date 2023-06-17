import { permissionModel } from "../models/permission.model.js";
import { validationResult } from "express-validator";

export const findAllPermission = async (req, res) => {
  try {
    const { count, rows } = await permissionModel.findAndCountAll();
    res.json({
      count,
      rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const create = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const columns = req.body;

  try {
    const permission = await permissionModel.create(columns);

    res.status(200).json({
      msg: "Permission created successfully!",
      permission,
    });
  } catch (error) {
    console.log(error);
  }
};
