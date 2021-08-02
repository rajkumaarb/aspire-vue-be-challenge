const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT || 3000;

function startServer() {
	try {
		app.listen(PORT, (err) => {
			err
				? console.log("Server Start Failed")
				: console.log("Server Started!!!");
		});
	} catch (err) {
		err ? console.log("DB connect failed") : null;
	}
}

startServer();
