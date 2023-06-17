import { validationResult } from "express-validator";
import { registerStudentModel } from "../models/registerStudent.model.js";
import { verifyToken } from "../middleware/verifyToken.js";

export const findAllRegister = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    try {
      const user = await verifyToken(token);

      const { count, rows } = await registerStudentModel.findAndCountAll();
      res.json({
        count,
        rows
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const create = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const columns = req.body;

    const errors = validationResult(req);

    if (!token) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await verifyToken(token);
      // Crear el registro de asignaturas
      const registers = await registerStudentModel.create(columns);

      res.status(200).json({
        message: "¡Registro de asignaturas creado exitosamente!",
        registers,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export const findOneRegister = async (req, res) => {
  const { noRegister } = req.params;

  try {
    const registers = await registerStudentModel.findOne({
      where: { noRegister },
    });

    if (registers) res.status(200).json({ registers });
    else
      res
        .status(404)
        .json({ msg: `Register with Id "${noRegister} not found!"` });
  } catch (error) {
    console.log(error);
  }
};
