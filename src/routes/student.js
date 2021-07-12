/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import express from "express";
import { addStudentSchema } from "../schemas/student";
import { AddStudentController, GetAllStudentsController } from "../controllers/student";
import SchemaValidator from "../middlewares/schema_validator";
import Authorization from "../middlewares/authorization";

/* Express router */
const router = express.Router();

/* Route for adding student */
router.post("/student", SchemaValidator(addStudentSchema), (req, res) => {
    AddStudentController(req, res, req.body);
});

/* Route for getting all students */
router.get("/students", (req, res) => {
    GetAllStudentsController(req, res);
});

export default router;
