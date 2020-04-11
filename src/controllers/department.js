import GenerateUUID from "../utils/generate_uuid";
import { GenerateToken } from "../utils/tokenization";
import Department from "../models/department";
import College from "../models/college";
import Sequelize from "sequelize";

/* Sequelize operate */
const Op = Sequelize.Op;

/* Relationship */

Department.belongsTo(College, {
	foreignKey: "college_ref_id",
});

/* Controller for adding department
 */

const AddDepartmentController = (req, res, data) => {
	let schema_status = req.schema_status;

	if (schema_status) {
		res.status(200).json({
			data: {
				message: req.schema_status_message,
			},
		});
	} else {
		res.status(201).json({
			data: data,
		});
	}
};

/* Controller for getting all departments */

const GetDepartmentsController = (req, res) => {
	Department.findAll({
		include: [
			{
				model: College,
				attributes: {
					exclude: ["created_at", "updated_at"],
				},
			},
		],

		/* exclude attributes from response */
		attributes: {
			exclude: ["created_at", "updated_at", "college_ref_id"],
		},
	}).then((departments) => {
		res.status(200).json({
			data: departments,
		});
	});
};

export { AddDepartmentController, GetDepartmentsController };
