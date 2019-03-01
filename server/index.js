const next = require("next");
const express = require("express");

const api = require("./api");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const appRequestHandler = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	Object.entries(api).forEach(([route, handler]) => {
		server.get(`/api${route}`, errorCatcher(handler));
	});

	// Here we are handling our custom route, this
	// now work for server side rendering
	server.get("/posts", (req, res) => {
		app.render(req, res, "/blog");
	});

	server.get("*", (req, res) => appRequestHandler(req, res));

	server.listen(PORT, err => {
		if (err) throw err;
		console.log(`server is listening on http://localhost:${PORT}`);
	});
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
