const express = require("express");
const path = require("path");

const app = express();

const userAPIs = require("./apis/userAPI");
const loanAPIs = require("./apis/loanAPI");

/* Middlewares */
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization"
		);
		res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
		return res.status(200).json({});
	}
	next();
});
app.use(express.json());

/* APIs */
app.use("/api/user", userAPIs);
app.use("/api/loan", loanAPIs);


app.use(express.static(path.resolve(__dirname, "..", "client-app")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client-app", "index.html"));
});
app.use(function (err, req, res, next) {
	res.status(500).send({ errorMessage: "INTERNAL_SERVER_ERROR" });
});

module.exports = app;
