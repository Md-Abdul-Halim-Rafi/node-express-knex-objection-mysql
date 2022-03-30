require("dotenv").config();
const Knex = require("knex");
const knexConfig = require("../knexfile");
const { Model } = require("objection");

let knex = null;

const loadPersistingDBConection = () => {

    if (!knex) {
        knex = Knex(knexConfig[process.env.NODE_ENV]);
    }

    Model.knex(knex);
    return knex;
}

module.exports = loadPersistingDBConection;