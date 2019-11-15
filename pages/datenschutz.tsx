import React from "react";

import Page from "../components/Page";
import Datenschutz from "../components/Datenschutz";
import "./datenschutz.tailwind.css";

export default function DatenschutzPage() {
	return (
		<Page title="Datenschutz">
			<div className="container xl:max-w-6xl mx-auto px-4 mb-12 text-base text-gray-900">
				<div className="xl:max-w-xl">
					<Datenschutz />
				</div>
			</div>
		</Page>
	);
}
