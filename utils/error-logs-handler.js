require("dotenv").config();

const axios = require("axios");

const logger = require("../loaders/logger");

const { LOGS_BASE_URL } = require("./consts");

const handleErrorLogs = async (err, metadata, additionalData) => {

    try {
        
        let postData = null;

        if (!err) {
            return false;
        }

        if (process.env.NODE_ENV === "development") {

            logger.error(err);

            if (err.response) {
                logger.error(JSON.stringify(err.response.data));
            }

            return false;
        }
    
        if (err.response) {
    
            logger.error(JSON.stringify(err.response.data));

            postData = {
                type: metadata.type ? metadata.type : "general error",
                process_info: `${process.env.NAME}:${process.env.PORT}`,
                err_source: metadata.err_source,
                level: "error",
                response_data: 
					typeof err.response.data === "object" ? 
						err.response.data : 
					typeof err.response.data === "string" ?
						{ msg: err.response.data } : null,
                response_code: err.response.status,
                code: err.code ? err.code : err.name ? err.name : null,
                content: additionalData ? additionalData: null,
                stack_trace: err.stack ? err.stack : null
            };

        } else {

            logger.error(err);

            postData = {
                type: metadata.type ? metadata.type : "general error",
                process_info: `${process.env.NAME}:${process.env.PORT}`,
                err_source: metadata.err_source,
                level: "error",
                code: err.code ? err.code : err.name ? err.name : null,
                content: additionalData ? additionalData : null,
                message: err.message ? err.message : null,
                sql_message: err.sqlMessage ? err.sqlMessage : null,
                stack_trace: err.stack ? err.stack : null
            };
        }
    
        await axios.post(
            `${LOGS_BASE_URL}/index-error`, postData,
            { headers: { Authorization: `Bearer ${process.env.API_KEY_LOGS_ELASTIC}` } }
        );

        return true;

    } catch (err) {

        logger.error(err);

        if (err.response) {
            logger.error(JSON.stringify(err.response.data));
        }

        return false;
    }
}

module.exports = handleErrorLogs;