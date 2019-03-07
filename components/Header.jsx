/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import SocialMedia from "./SocialMedia";

export default function Header() {
	return (
		<header className="flex flex-row items-center h-10 overflow-hidden p-2 container mx-auto">
			<div className="h-full">
				<Link href="/">
					<a className="block h-full flex items-center">
						<img
							className="h-full"
							src="/static/images/bear.png"
							alt="der urlaubär"
							height="32px"
						/>
						<span className="whitespace-no-wrap">Der Urlaubär</span>
					</a>
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
					<Link href="/features">
						<a>Features</a>
					</Link>
				</li>
				<li className="p-1">
					<Link href="/demo">
						<a>Demo</a>
					</Link>
				</li>
				<li className="p-1">
					<Link href="/faq">
						<a>Faq</a>
					</Link>
				</li>
				<li className="p-1">
					<Link href="/newsletter">
						<a>Newsletter</a>
					</Link>
				</li>
				<li className="p-1">
					<Link href="/contact">
						<a>Kontakt</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
