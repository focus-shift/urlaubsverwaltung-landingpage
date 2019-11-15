import React from "react";

import Page from "../components/Page";
import Datenschutz from "../components/Datenschutz";
import "./datenschutz.tailwind.css";

export default function DatenschutzPage() {
	return (
		<Page title="Datenschutz">
			<div className="container justify-center xl:max-w-6xl mx-auto px-4 mb-12 text-black">
				<Datenschutz />
			</div>
		</Page>
	);
}
