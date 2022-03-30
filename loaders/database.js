const Knex = require("knex");
const knexConfig = require("../knexfile");
const { Model } = require("objection");

const loadDatabase = () => {
    
    const knex = Knex(knexConfig[process.env.NODE_ENV]);
    Model.knex(knex);
}

module.exports = loadDatabase;