import React from "react";
import Head from "next/head";
import Header from "./Header";

import "../static/css/style.css";

export default function Page({ title, children }) {
	return (
		<>
			<Head>
				<title>Urlaubsverwaltung · {title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			{children}
		</>
	);
}
