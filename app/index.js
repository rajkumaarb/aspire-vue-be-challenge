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
// app.use(express.static(path.resolve(__dirname, "public")));

/* APIs */
app.use("/api/user", userAPIs);
app.use("/api/loan", loanAPIs);

//TODO:: Not to be removed
// if (process.env.NODE_ENV === 'production') {
// app.use(express.static('public'));

// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });
// }
// app.use(function (req, res, next) {
// 	res.status(404).json({ errorMessage: "Sorry can't find that!" });
// });

app.use(function (err, req, res, next) {
	res.status(500).send({ errorMessage: "INTERNAL_SERVER_ERROR" });
});

module.exports = app;
