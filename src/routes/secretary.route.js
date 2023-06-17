import { Router } from "express";
import {
  create,
  findAllStudent,
  deleteForId,
} from "../controllers/student.controller.js";

import { secretaryValidationRules } from "../validation/secretary.validate.js";
const route = Router();

// Routes y validaciones correspondientes
route.get("/recretaries", findAllStudent);
route.post("/secretary/create", secretaryValidationRules, create);
route.delete("/secretary/:idSecretary", deleteForId);

export default route;
