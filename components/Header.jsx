import React from "react";

import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

export default function Header() {
	return (
		<header className="bg-blue-900 flex flex-row items-center h-10 overflow-hidden p-2">
			<Navigation />
			<SocialMedia />
		</header>
	);
}
