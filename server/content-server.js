const express = require("express");

const api = require("./api");

const PORT = process.env.PORT || 3000;

const server = express();

Object.entries(api).forEach(([route, handler]) => {
	server.get(`/api${route}`, errorCatcher(handler));
});

server.listen(PORT, err => {
	if (err) throw err;
	console.log(`server is listening on http://localhost:${PORT}`);
});

function errorCatcher(fn) {
	return (req, res, next) => {
		const result = fn(req, res, next);
		if (result.then) {
			result.then(null, error => {
				if (res.headersSent) {
					return next(error);
				}
				res.status(500);
				res.json({ status: 500, message: error.message });
			});
		}
	};
}
