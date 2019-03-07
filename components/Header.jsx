import React from "react";
import Link from "./Link";

import SocialMedia from "./SocialMedia";
import bearImage from "./bear.png";

export default function Header() {
	return (
		<header className="flex flex-row items-center h-10 overflow-hidden p-2 container mx-auto">
			<div className="h-full">
				<Link href="/" className="block h-full flex items-center">
					<img
						className="h-full"
						src={bearImage}
						alt="der urlaubär"
						height="32px"
					/>
					<span className="whitespace-no-wrap">Der Urlaubär</span>
				</Link>
			</div>
			<Navigation />
			<SocialMedia />
		</header>
	);
}

function Navigation() {
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
