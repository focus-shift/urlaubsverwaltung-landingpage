import React from "react";

import Link from "./Link";
import BearIcon from "./BearIcon";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";
import "./header.tailwind.css";

export default function Header() {
	return (
		<header className="bg-blue-900">
			<nav className="flex flex-wrap p-2 items-center">
				<Link
					href="/"
					className="flex flex-row items-center"
					aria-label="Urlaubsverwaltung Startseite"
				>
					<BearIcon id="header" width={32} height={32} ariaHidden />
					<span className="text-white pl-2 hidden sm:block">
						Urlaubsverwaltung
					</span>
				</Link>
				<input type="checkbox" id="mobile-menu-toggle" className="hidden" />
				<label
					htmlFor="mobile-menu-toggle"
					className="ml-auto sm:hidden text-white focus:shadow-outline"
					tabIndex={0}
				>
					Menü
				</label>
				<ul className="navigation-list">
					<li className="navigation-list-item">
						<Link href="/demo" className="text-white">
							Live Demo
						</Link>
					</li>
					<li className="navigation-list-item navigation-list-item-social-media">
						<a
							href="https://github.com/synyx/urlaubsverwaltung"
							aria-label="Github Projekt"
							className="text-blue inline-block"
						>
							<GithubIcon role="img" title="Unser Projekt auf Github" />
						</a>
					</li>
					<li className="navigation-list-item navigation-list-item-social-media">
						<a
							href="https://twitter.com/synyx_ka"
							aria-label="Twitter Profil"
							className="text-blue inline-block"
						>
							<TwitterIcon role="img" title="Folge uns auf Twitter" />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
