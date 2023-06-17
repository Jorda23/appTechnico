import { Router } from "express";
import {
  create,
  findAllStudent
} from "../controllers/student.controller.js";

import { studentValidationRules } from "../validation/student.validate.js";
const route = Router();

// Routes y validaciones correspondientes
route.get("/students", findAllStudent);
route.post("/student/create", studentValidationRules, create);

export default route;
