import React from "react";

import Link from "./Link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 text-center p-12">
			<Link href="/impressum" className="text-white">
				Impressum
			</Link>
		</footer>
	);
}
