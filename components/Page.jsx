import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import "./style.tailwind.css";

export default function Page({ title, children }) {
	const pageTitle = ["Urlaubsverwaltung", title].filter(Boolean).join(" · ");
	return (
		<div className="min-h-screen flex flex-col">
			<Head>
				<title>{pageTitle}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/static/favicon.svg" type="image/svg" />
			</Head>
			<Header />
			<main className="flex-1 container mx-auto mb-12">{children}</main>
			<Footer />
		</div>
	);
}
