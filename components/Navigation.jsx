import React from "react";

import Link from "./Link";

export default function Navigation() {
	return (
		<nav className="flex-1">
			<h3 className="visually-hidden">Navigation</h3>
			<ul className="list-reset flex justify-end">
				{/*<li className="p-1">
					<Link href="/impressum">Impressum</Link>
				</li>*/}
			</ul>
		</nav>
	);
}
