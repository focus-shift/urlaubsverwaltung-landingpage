import React from "react";

import Navigation from "./Navigation";
import Link from "./Link";
import SocialMedia from "./SocialMedia";
import bearImage from "./bear.png";

export default function Header() {
	return (
		<header className="bg-grey-light flex flex-row items-center h-10 overflow-hidden p-2 container">
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
