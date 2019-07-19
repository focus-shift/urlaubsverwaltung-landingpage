// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		const assetPrefix = process.env.ASSET_PREFIX || "";
		return (
			<Html lang="de">
				<Head>
					<meta name="twitter:card" content="summary"></meta>
					<meta name="twitter:site" content="@der_urlaubaer" />
					<meta property="og:locale" content="de_DE" />
					<meta
						property="og:url"
						content="https://www.urlaubsverwaltung.cloud"
					/>
					<meta property="og:site_name" content="Urlaubsverwaltung.cloud" />
					<meta
						property="og:description"
						content="Der Urlaubär hilft dir deinen Urlaub zu planen und zu beantragen. Ganz einfach. Ohne Papierkram. Ohne Excellisten."
					/>
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
					<link
						rel="icon"
						href={`${assetPrefix}/static/favicon.svg`}
						type="image/svg"
					/>
					<script defer async src={`${assetPrefix}/static/easteregg.js`} />
				</Head>
				<body className="font-body">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
