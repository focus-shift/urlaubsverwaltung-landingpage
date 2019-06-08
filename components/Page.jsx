import React from "react";
import Head from "next/head";
import css from "styled-jsx/css";

import Header from "./Header";
import Footer from "./Footer";
import "./style.tailwind.css";

export default function Page({ title, children }) {
	const pageTitle = ["Urlaubsverwaltung", title].filter(Boolean).join(" · ");
	return (
		<React.Fragment>
			<Head>
				{/* for static meta elements see pages/_document.jsx */}
				<title>{pageTitle}</title>
			</Head>
			<style jsx global>
				{fonts}
			</style>
			<Header />
			<main className="flex-1 mb-12">{children}</main>
			<Footer />
		</React.Fragment>
	);
}

const assetPrefix = process.env.ASSET_PREFIX || "";

const fonts = css`
	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}${assetPrefix}/static/fonts/Open_Sans/OpenSans-Light.woff2") format("woff2"),
			url("${assetPrefix}${assetPrefix}/static/fonts/Open_Sans/OpenSans-Light.woff") format("woff"),
			url("${assetPrefix}${assetPrefix}/static/fonts/Open_Sans/OpenSans-Light.ttf") format("truetype");
		font-weight: 100;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}${assetPrefix}/static/fonts/Open_Sans/OpenSans-LightItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-LightItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-LightItalic.ttf") format("truetype");
		font-weight: 100;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Regular.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Regular.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
		font-weight: 400;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Italic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Italic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Italic.ttf") format("truetype");
		font-weight: 400;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBold.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBold.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
		font-weight: 600;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf") format("truetype");
		font-weight: 600;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Bold.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Bold.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Bold.ttf") format("truetype");
		font-weight: 700;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-BoldItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-BoldItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-BoldItalic.ttf") format("truetype");
		font-weight: 700;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBold.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBold.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBold.ttf") format("truetype");
		font-weight: 800;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf") format("truetype");
		font-weight: 800;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Light.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Light.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Light.ttf") format("truetype");
		font-weight: 100;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-LightItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-LightItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-LightItalic.ttf") format("truetype");
		font-weight: 100;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Regular.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Regular.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Regular.ttf") format("truetype");
		font-weight: 400;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Italic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Italic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Italic.ttf") format("truetype");
		font-weight: 400;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBold.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBold.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBold.ttf") format("truetype");
		font-weight: 600;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf") format("truetype");
		font-weight: 600;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Bold.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Bold.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-Bold.ttf") format("truetype");
		font-weight: 700;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-BoldItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-BoldItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-BoldItalic.ttf") format("truetype");
		font-weight: 700;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBold.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBold.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBold.ttf") format("truetype");
		font-weight: 800;
		font-style: normal;
		font-display: optional;
	}

	@font-face {
		font-family: "Open Sans";
		src: url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf") format("truetype");
		font-weight: 800;
		font-style: italic;
		font-display: optional;
	}

	@font-face {
		font-family: "Oswald";
		src: url("${assetPrefix}/static/fonts/Oswald/Oswald.woff2") format("woff2"),
			url("${assetPrefix}/static/fonts/Oswald/Oswald.woff") format("woff"),
			url("${assetPrefix}/static/fonts/Oswald/Oswald.ttf") format("truetype");
		font-display: optional;
	}
`;
