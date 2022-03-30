const authService = require("../../services/AuthService");

const checkifTokenIsValid = async (req, res) => {

	const response = await authService.checkifTokenIsValid();
	return res.status(response.status).json(response);	
}

module.exports = {
	checkifTokenIsValid
};
