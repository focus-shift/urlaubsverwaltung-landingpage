import React from "react";
import Agb from "../md/agb.mdx";
import Page from "../components/Page";
import "./datenschutz.tailwind.css";

export default () => (
	<Page title={"AGB"}>
		<div className="container xl:max-w-6xl mx-auto px-4 text-black">
			<div className="xl:max-w-xl">
				<Agb />
			</div>
		</div>
	</Page>
);
