/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import express from "express";
import { addDepartmentSchema } from "../schemas/department";
import { AddDepartmentController, GetDepartmentsController } from "../controllers/department";
import SchemaValidator from "../middlewares/schema_validator";
import Authorization from "../middlewares/authorization";

/* Express router */
const router = express.Router();

/* Route for adding department */
router.post("/department", SchemaValidator(addDepartmentSchema), (req, res) => {
    AddDepartmentController(req, res, req.body);
});

/* Route for getting all departmetns */
router.get("/departments", (req, res) => {
    GetDepartmentsController(req, res);
});

export default router;
