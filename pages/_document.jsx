// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const isProd = process.env.NODE_ENV === "production";

class HeadWithoutNextJs extends Head {
	render() {
		const res = super.render();

		function transform(node) {
			// remove all link preloads
			if (
				node &&
				node.type === "link" &&
				node.props &&
				node.props.rel === "preload"
			) {
				return null;
			}
			if (node && node.props && node.props.children) {
				return {
					...node,
					props: {
						...node.props,
						children: React.Children.map(node.props.children, transform),
					},
				};
			}
			if (Array.isArray(node)) {
				return node.map(transform);
			}

			return node;
		}

		return transform(res);
	}
}
export default class MyDocument extends Document {
	render() {
		const assetPrefix = process.env.ASSET_PREFIX || "";
		const MyHead = isProd ? HeadWithoutNextJs : Head;
		return (
			<Html lang="de">
				<MyHead>
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
				</MyHead>
				<body>
					<Main />
					{!isProd && <NextScript />}
				</body>
			</Html>
		);
	}
}
