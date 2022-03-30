module.exports = {
	apps: [
		{
			script: "./server.js",
			name: "auth-service-1",
			env: {
				NAME: "auth-service-1",
				PORT: 7060
			}
		},
		{
			script: "./server.js",
			name: "auth-service-2",
			env: {
				NAME: "auth-service-2",
				PORT: 7061
			}
		},
		{
			script: "./server.js",
			name: "auth-service-3",
			env: {
				NAME: "auth-service-3",
				PORT: 7062
			}
		},
		{
			script: "./server.js",
			name: "auth-service-4",
			env: {
				NAME: "auth-service-4",
				PORT: 7063
			}
		}
	],
};
