import { Router } from "express";
import {
  create,
findAllPermission
} from "../controllers/permission.controller.js";
import { validatePermissionRules } from "../validation/permission.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/permissions", findAllPermission);
route.post("/permission/create", validatePermissionRules, create);

export default route;
