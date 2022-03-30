const dotenv = require("dotenv");
const expressLoader = require("./express");
const loadDatabase = require("./database");

const loader = (app) => {

    dotenv.config();
    loadDatabase();
    expressLoader(app);
}

module.exports = loader;