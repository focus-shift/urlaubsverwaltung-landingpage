import React from "react";

import Link from "./Link";

export default function Footer() {
	return (
		<footer className="bg-gray-800 p-12 flex">
			<h2 className="visually-hidden">Navigation</h2>
			<ul className="flex flex-row mx-auto">
				<li className="visually-hidden">
					<Link href="/" className="text-white">
						Startseite
					</Link>
				</li>
				<li className="mx-2">
					<Link href="/impressum" className="text-white">
						Impressum
					</Link>
				</li>
				<li className="mx-2">
					<Link href="/datenschutz" className="text-white">
						Datenschutz
					</Link>
				</li>
				<li className="mx-2">
					<Link href="/agb-beta" className="text-white">
						AGB (Beta-Phase)
					</Link>
				</li>
			</ul>
		</footer>
	);
}
