require("dotenv").config();

const isDevelopment = () => process.env.NODE_ENV === "development";
const isStaging = () => process.env.NODE_ENV === "staging";
const isProduction = () => process.env.NODE_ENV === "production";

const isArrayAndHasContent = (arr) => {
	return Array.isArray(arr) && arr.length > 0;
}

module.exports = {
	isArrayAndHasContent,
	isDevelopment,
	isProduction,
	isStaging
}