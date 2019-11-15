import React from "react";
import Datenschutz from "../md/datenschutz-beta.mdx";
import Page from "../components/Page";
import "./datenschutz.tailwind.css";

export default () => (
	<Page title={"Datenschutzerklärung der Beta-Phase"}>
		<div className="container justify-center xl:max-w-6xl mx-auto px-4 mb-12 text-black datenschutz-container">
			<Datenschutz />
		</div>
	</Page>
);
