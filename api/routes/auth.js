const { errors } = require("celebrate");
const { Router } = require("express");

const authControllers = require("../controllers/auth");

const createRateLimiter = require("../../utils/rate-limiter");
const rateLimitMiddleware = require("../middlewares/rate-limiter");

const router = Router();

const authRoutes = (app) => {
    
    router.get(
		"/validate", 
		rateLimitMiddleware(createRateLimiter("auth-fetch-limit", 1000, 60)),
		authControllers.checkifTokenIsValid
	);

    router.use(errors());

    app.use("/", router);
};

module.exports = authRoutes;
