// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

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
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta
						name="msapplication-TileImage"
						content={`${assetPrefix}/static/favicons/ms-icon-144x144.png`}
					/>
					<meta name="theme-color" content="#ffffff" />

					<link rel="manifest" href={`${assetPrefix}/static/manifest.json`} />
					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href={`${assetPrefix}/static/favicons/apple-icon-57x57.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href={`${assetPrefix}/static/favicons/apple-icon-60x60.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href={`${assetPrefix}/static/favicons/apple-icon-72x72.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href={`${assetPrefix}/static/favicons/apple-icon-76x76.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href={`${assetPrefix}/static/favicons/apple-icon-114x114.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href={`${assetPrefix}/static/favicons/apple-icon-120x120.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href={`${assetPrefix}/static/favicons/apple-icon-144x144.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href={`${assetPrefix}/static/favicons/apple-icon-152x152.png`}
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href={`${assetPrefix}/static/favicons/apple-icon-180x180.png`}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href={`${assetPrefix}/static/favicons/android-icon-192x192.png`}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href={`${assetPrefix}/static/favicons/favicon-32x32.png`}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="96x96"
						href={`${assetPrefix}/static/favicons/favicon-96x96.png`}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href={`${assetPrefix}/static/favicons/favicon-16x16.png`}
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
