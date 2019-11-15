import React from "react";

import Page from "../components/Page";
import Datenschutz from "../components/Datenschutz";
import "./datenschutz.tailwind.css";

export default function DatenschutzBetaPhasePage() {
	return (
		<Page title={"Datenschutzerklärung der Beta-Phase"}>
			<div className="container justify-center xl:max-w-6xl mx-auto px-4 mb-12 text-black">
				<Datenschutz />
			</div>
		</Page>
	);
}
