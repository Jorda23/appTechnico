import { body } from "express-validator";
import { subjectModel } from "../models/subject.model.js";
// Validation middleware for creating a permission
export const subjectValidationRules = [
  body("subjectName")
    .notEmpty()
    .withMessage("Subject name is required")
    .isString()
    .withMessage("Subject name must be a string")
    .custom(async (value) => {
      const subject = await subjectModel.findOne({
        where: { subjectName: value },
      });

      if (subject) {
        throw new Error("Subject name must be unique");
      }

      return true;
    }),
];
