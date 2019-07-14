import React from "react";

import Link from "./Link";
import BearIcon from "./BearIcon";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";

export default function Header() {
	return (
		<header className="bg-blue-900 flex flex-row items-center justify-end h-10 p-2">
			<Link href="/" className="flex flex-row items-center">
				<BearIcon id="header" width={32} height={32} ariaHidden />
				<span className="text-white pl-2">Urlaubsverwaltung</span>
				<span className="visually-hidden">&nbsp;Startseite</span>
			</Link>
			<nav className="ml-auto">
				<Navigation />
			</nav>
		</header>
	);
}

function Navigation() {
	return (
		<ul className="flex flex-row items-center justify-center">
			<li className="pr-2">
				<Link href="/demo" className="text-white">
					Demo
				</Link>
			</li>
			<li className="p-1">
				<a
					href="https://github.com/synyx/urlaubsverwaltung"
					aria-label="github project"
					className="text-blue block"
				>
					<GithubIcon role="img" title="Unser Projekt auf Github" />
				</a>
			</li>
			<li className="p-1">
				<a
					href="https://twitter.com/synyx_ka"
					aria-label="twitter account"
					className="text-blue block"
				>
					<TwitterIcon role="img" title="Folge uns auf Twitter" />
				</a>
			</li>
		</ul>
	);
}
