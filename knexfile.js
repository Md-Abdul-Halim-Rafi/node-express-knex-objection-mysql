require("dotenv").config({ path: "./.env" });
const dbConfig = require("./utils/db-conf");

module.exports = {
    [process.env.NODE_ENV]: {
        client: "mysql",
        connection: {
            host: dbConfig[process.env.NODE_ENV].host,
            user: dbConfig[process.env.NODE_ENV].user,
            password: dbConfig[process.env.NODE_ENV].password,
            database: dbConfig[process.env.NODE_ENV].db,
			charset: "utf8mb4"
        },
        debug: true,
        pool: { min: 5, max: 16 },
    },
};
