/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import GenerateUUID from "../utils/generate_uuid";
import { GenerateToken } from "../utils/tokenization";
import Student from "../models/student";
import Department from "../models/department";
import College from "../models/college";
import Sequelize from "sequelize";

/* Sequelize operate */
const Op = Sequelize.Op;

/* Controller for adding student
 */

/* Relationships */
Student.belongsTo(Department, {
    foreignKey: "department_ref_id",
});

Department.belongsTo(College, {
    foreignKey: "college_ref_id",
});

const AddStudentController = (req, res, data) => {
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

/* Controller for getting all students */

const GetAllStudentsController = (req, res) => {
    Student.findAll({
        include: [
            {
                model: Department,
                attributes: {
                    exclude: ["created_at", "updated_at", "college_ref_id"],
                },
                include: [
                    {
                        model: College,
                        attributes: {
                            exclude: ["created_at", "updated_at"],
                        },
                    },
                ],
            },
        ],
        /* Exclude attributes from response */
        attributes: {
            exclude: ["created_at", "updated_at", "department_ref_id"],
        },
    }).then((students) => {
        res.status(200).json({
            data: students,
        });
    });
};

export { AddStudentController, GetAllStudentsController };
