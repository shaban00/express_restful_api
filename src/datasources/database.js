/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import Sequelize from "sequelize";
import config from "../config/config";

const sequelize = new Sequelize(config.development);

export default sequelize;
