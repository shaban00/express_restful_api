/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import dotenv from "dotenv";
dotenv.config();

export default {
    development: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        port: 5432,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
    production: {
        username: process.env.PRODUCTION_DATABASE_USERNAME,
        password: process.env.PRODUCTION_DATABASE_PASSWORD,
        database: process.env.PRODUCTION_DATABASE_NAME,
        host: process.env.PRODUCTION_DATABASE_HOST,
        port: process.env.PRODUCTION_DATABASE_PORT,
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
};
