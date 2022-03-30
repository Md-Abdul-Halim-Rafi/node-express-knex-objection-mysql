const { Router } = require("express");

const authRoutes = require("./routes/auth");

const loadRoutes = () => {

    const router = Router();

    authRoutes(router);

    return router;
}

module.exports = loadRoutes;
