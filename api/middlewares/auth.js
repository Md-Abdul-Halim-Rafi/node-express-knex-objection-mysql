const logger = require("../../loaders/logger");

const isAuth = (req, res, next) => {

    if (!req.isAuth) {
        logger.error(`[UNAUTHORIZED ACTION ${req.path}] ip: ${req.ip}`);
        return res.status(401).json({ unauthorized: true });
    }

    return next();
}

module.exports = {
    isAuth
}