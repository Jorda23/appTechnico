import { Router } from "express";
import studentRoute from "./student.route.js";
import subjectRoute from "./subject.route.js";
import registerSubject from "./registerStudent.route.js"
import permissionRoute from "./permission.route.js"
import authenticationRoute from "./authentication.route.js"
import userRoute from "./user.route.js";

const router = Router();

router.use(studentRoute);
router.use(subjectRoute);
router.use(registerSubject);
router.use(permissionRoute);
router.use(userRoute);
router.use(authenticationRoute);

export default router;
