import express from "express";
import { addCollegeSchema } from "../schemas/college";
import { AddCollegeController, GetAllCollegesController } from "../controllers/college";
import SchemaValidator from "../middlewares/schema_validator";
import Authorization from "../middlewares/authorization";

/* Express router */
const router = express.Router();

/* Route for adding college */
router.post("/college", SchemaValidator(addCollegeSchema), (req, res) => {
	AddCollegeController(req, res, req.body);
});

/* Route for getting all colleges */
router.get("/colleges", (req, res) => {
	GetAllCollegesController(req, res);
});

export default router;
