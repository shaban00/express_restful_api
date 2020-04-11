import Sequelize from "sequelize";
import database from "../datasources/database";

const College = database.define(
	"colleges",
	{
		ref_id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			unique: true,
			autoIncrement: false,
		},
		college_name: {
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

export default College;
