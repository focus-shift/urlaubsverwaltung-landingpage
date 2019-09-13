import React from "react";
import Agb from "../md/agb-beta.mdx";
import Page from "../components/Page";
import "./agb.tailwind.css";

export default () => (
	<Page title={"AGB der Beta-Phase"}>
		<div className="container justify-center xl:max-w-6xl mx-auto px-4 text-black agb-container">
			<Agb />
		</div>
	</Page>
);
