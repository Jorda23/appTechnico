import { Router } from "express";
import {
  create,
  findOneRegister,
  findAllRegister,
} from "../controllers/registerStudent.controller.js";
import { registerValidationRules } from "../validation/registerStudent.route.js";
const route = Router();

// Routes y validaciones correspondientes
route.get("/registers", findAllRegister);
route.post("/register/create", registerValidationRules, create);
route.get("/register/:noRegister", findOneRegister);

export default route;
