const Redis = require("ioredis");
const { RateLimiterRedis } = require("rate-limiter-flexible");

const redisConf = require("./redis-conf");

const redis = new Redis(redisConf[process.env.NODE_ENV]);

const createRateLimiter = (keyPrefix, points, duration) => {

	const rateLimiter = new RateLimiterRedis({
		storeClient: redis,
		keyPrefix,
		points,
		duration
	});

	return rateLimiter;
}

module.exports = createRateLimiter;