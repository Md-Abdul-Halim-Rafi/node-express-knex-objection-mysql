const CORE_BASE_URL = 
    process.env.NODE_ENV === "development" ? 
    "https://5e9d-103-216-56-196.ap.ngrok.io/v1" :
    // "http://host.docker.internal:8000/v1" :
    process.env.NODE_ENV === "staging" ? 
    "https://api-dev.hypescout.co/v1" : 
	"https://api.hypescout.co/v1";

const LOGS_BASE_URL = "https://justlogs.hypescout.co/v1/log";

const userRoles = {
    SYSTEM: -1,
    ARMY: 1,
    AGENT: 2,
    ADMIN: 3,
    WRITTER: 4
}

module.exports = {
	LOGS_BASE_URL,
	CORE_BASE_URL,
	userRoles
}