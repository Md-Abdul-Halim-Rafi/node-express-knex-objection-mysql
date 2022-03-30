const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./logger");

const loadRoutes = require("../api/index");

const expressLoader = (app) => {
    
    app.use(cors());
    app.use(morgan("combined", { stream: logger.stream }));
    
	app.use(bodyParser.json({ limit: "5mb" }));
	app.use(bodyParser.urlencoded({ extended: true }));

    app.enable("trust proxy");

	app.use((req, _, next) => {

        const token = req.headers["authorization"] ? req.header("authorization").split(" ")[1] : null;

        if (token) {
            req.isAuth = true;
        }

        return next();
    });

    app.get("/", (_, res) => {
        return res.json({ p_id: process.env.NODE_APP_INSTANCE });
    });

    app.use(process.env.API_PREFIX, loadRoutes());
};

module.exports = expressLoader;
