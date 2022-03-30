const express = require("express");

const loaders = require("./loaders/index");

const app = express();

const startServer = async () => {
	
    loaders(app);

    app.listen(process.env.PORT, err => {

        if (err) {
            process.exit(1);
        }

        console.log(`
            ####################################
            🛡️  Auth Service Started on Port: ${ process.env.PORT } 🛡️
            ####################################
        `);
    });
}

startServer();
