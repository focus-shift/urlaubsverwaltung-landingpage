import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import "./font.tailwind.css";
import "./style.tailwind.css";

export default function Page({ title, children }) {
	const pageTitle = ["Urlaubsverwaltung", title].filter(Boolean).join(" · ");
	return (
		<React.Fragment>
			<Head>
				{/* for static meta elements see pages/_document.jsx */}
				<title>{pageTitle}</title>
			</Head>
			<Header />
			<main className="flex-1 mb-12">{children}</main>
			<Footer />
		</React.Fragment>
	);
}
