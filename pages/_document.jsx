// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="de">
				<Head>
					<meta
						name="description"
						content="Der Urlaubär hilft dir deinen Urlaub zu planen und zu beantragen. Ganz einfach. Ohne Papierkram. Ohne Excellisten."
					/>
					<meta name="language" content="de" />
					<meta name="charset" content="utf8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link rel="icon" href="/static/favicon.svg" type="image/svg" />
					<script defer async src="/static/easteregg.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
