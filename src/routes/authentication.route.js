import { Router } from "express";
import {
  authToken
} from "../controllers/authentication.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.post("/auth/token", authToken);


export default route;
