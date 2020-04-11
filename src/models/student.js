import Sequelize from "sequelize";
import database from "../datasources/database";

const Student = database.define(
	"students",
	{
		ref_id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			unique: true,
			autoIncrement: false,
		},
		student_id: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		first_name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		last_name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		gender: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
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

export default Student;
