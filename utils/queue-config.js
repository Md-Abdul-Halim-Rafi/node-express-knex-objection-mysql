const queueConfig = {
    development: {
        connection: "amqp://turtles_q:123456@host.docker.internal:5672"
    },
    production: {
        connection: "amqp://mrscx:vegeta@127.0.0.1:5672"
    },
    staging: {
        connection: "amqp://admin:vegeta@127.0.0.1:5672"
    }
}

module.exports = queueConfig;