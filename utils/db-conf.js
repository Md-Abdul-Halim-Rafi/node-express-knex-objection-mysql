const dbConfig = {
    development: {
        host: "host.docker.internal",
        user: "root",
        password: "123456",
        db: "hype_auth_dev"
    },
    production: {
        host: "127.0.0.1",
        user: "root",
        password: "#hS2021iTup",
        db: "hype_auth_prod"
    },
    staging: {
        host: "127.0.0.1",
        user: "root",
        password: "123456",
        db: "hype_auth_dev"
    }
}

module.exports = dbConfig;