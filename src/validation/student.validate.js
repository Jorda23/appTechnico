import { body } from "express-validator";

export const studentValidationRules = [
  body("name").notEmpty().withMessage("The names is required."),
  body("lastName").notEmpty().withMessage("The lastname is required."),
  body("birthDay").notEmpty().withMessage("The id birthDay is required."),
];
