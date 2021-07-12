/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import GenerateUUID from "../utils/generate_uuid";
import { GenerateToken } from "../utils/tokenization";
import College from "../models/college";
import Sequelize from "sequelize";

/* Sequelize operate */
const Op = Sequelize.Op;

/* Controller for adding college
 */

const AddCollegeController = (req, res, data) => {
    /* Check schema status */

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

/* Controller for getting all colleges */

const GetAllCollegesController = (req, res) => {
    College.findAll({
        /* Exclude attributes from response */

        attributes: {
            exclude: ["created_at", "updated_at"],
        },
    }).then((colleges) => {
        res.status(200).json({
            data: colleges,
        });
    });
};

export { AddCollegeController, GetAllCollegesController };
