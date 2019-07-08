import React from "react";

import BearIcon from "./BearIcon";
import SocialMedia from "./SocialMedia";

export default function Header() {
	return (
		<header className="bg-blue-900 flex flex-row items-center justify-end h-10 p-2">
			<a href="/" className="flex flex-row items-center">
				<BearIcon width={32} height={32} ariaHidden />
				<span className="text-white pl-2">Urlaubsverwaltung</span>
				<span className="visually-hidden">&nbsp;Startseite</span>
			</a>
			<div className="ml-auto">
				<SocialMedia />
			</div>
		</header>
	);
}
