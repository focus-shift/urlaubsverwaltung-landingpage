import React from "react";
import Head from "next/head";
import Header from "./Header";

import "./style.tailwind.css";

export default function Page({ title, children }) {
	const pageTitle = ["Urlaubsverwaltung", title].filter(Boolean).join(" · ");
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<main className="container mx-auto">{children}</main>
		</>
	);
}
