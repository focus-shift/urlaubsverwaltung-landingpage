import React from "react";

import Link from "./Link";

export default function Navigation() {
	return (
		<nav className="flex-1">
			<h3 className="visually-hidden">Navigation</h3>
			<ul className="list-reset flex justify-end">
				<li className="p-1">
					<Link href="/features">Features</Link>
				</li>
				<li className="p-1">
					<Link href="/demo">Demo</Link>
				</li>
				<li className="p-1">
					<Link href="/faq">Faq</Link>
				</li>
				<li className="p-1">
					<Link href="/newsletter">Newsletter</Link>
				</li>
				<li className="p-1">
					<Link href="/contact">Kontakt</Link>
				</li>
			</ul>
		</nav>
	);
}
