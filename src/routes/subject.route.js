import { Router } from "express";
import {
  create,
  findAllSubject
} from "../controllers/subject.controller.js";
import { subjectValidationRules } from "../validation/subject.validate.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/subjects", findAllSubject);
route.post("/subject/create", subjectValidationRules, create);

export default route;
