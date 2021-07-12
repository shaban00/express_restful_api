/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import Sequelize from "sequelize";
import database from "../datasources/database";

const Department = database.define(
    "departments",
    {
        ref_id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: false,
        },
        department_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        college_ref_id: {
            type: Sequelize.UUID,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default Department;
