import React, { useEffect } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import "./style.tailwind.css";

export default function Page({ title, children }) {
	const pageTitle = ["Urlaubsverwaltung", title].filter(Boolean).join(" · ");

	// prettier-ignore
	useEffect(() => {
		console.log("%c                 ", "font-size: 48px; background-color: #b4d455");
		console.log("%c  ʕ •ᴥ•ʔゝ☆     ", "font-size:52px; color: black; background-color: #b4d455");
		console.log("%c                                                                          ", "font-size:11px; color: black; background-color: #b4d455");
		console.log("%c  %c  Code With Attitude   %c         ", "background-color: #b4d455; font-size: 24px", "font-size:24px; color: #efefef; background-color: black", "background-color: #b4d455; font-size: 24px");
		console.log("%c                                                                          ", "font-size:11px; color: black; background-color: #b4d455");
		console.log("%c     %c  jobs@synyx.de       %c       ", "background-color: #b4d455; font-size: 24px", "font-size:24px; color: #efefef; background-color: black", "background-color: #b4d455; font-size: 24px");
		console.log("%c                 ", "font-size: 48px; background-color: #b4d455");
	});

	return (
		<div className="min-h-screen flex flex-col">
			<Head>
				{/* for static meta elements see pages/_document.jsx */}
				<title>{pageTitle}</title>
			</Head>
			<Header />
			<main className="flex-1 container mx-auto mb-12">{children}</main>
			<Footer />
		</div>
	);
}
