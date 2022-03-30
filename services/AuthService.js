const axios = require("axios");
const handleErrorLogs = require("../utils/error-logs-handler");
const { CORE_BASE_URL } = require("../utils/consts");

const authService = {

	checkifTokenIsValid: async function(token) {

		try {

			const { data } = await axios.post(
				`${CORE_BASE_URL}/auth/token-check-auth-service`, 
				{ token }
			);
			
			return { status: 200, tokenData: data.data };
			
		} catch (err) {

			handleErrorLogs(
                err,
                {
                    err_source: "authServiceChat: checkifTokenIsValid",
                    type: "Auth Server"
                }
            );

            return { status: 500, msg: "Internal Server Error" };
		}
	}
}

module.exports = authService;