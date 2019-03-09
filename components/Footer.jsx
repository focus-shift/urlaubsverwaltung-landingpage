import React from "react";

import Link from "./Link";

export default function Footer() {
	return (
		<footer className="bg-grey-darkest text-center p-12">
			<Link href="/impressum" className="text-white">
				Impressum
			</Link>
		</footer>
	);
}
