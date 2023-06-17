import { body } from "express-validator";

export const registerValidationRules = [
  body("registrationTime")
    .notEmpty()
    .withMessage("The registrationTime is required."),
  body("noCarnet").notEmpty().withMessage("The id noCarnet is required."),
  body("idSubject").notEmpty().withMessage("The id subject is required.")
];
