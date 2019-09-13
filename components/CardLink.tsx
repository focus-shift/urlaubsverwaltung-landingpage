import React from "react";
import Link from "./Link";

import "./cardLink.tailwind.css";

export default function CardLink({
	href,
	ariaLabel = "",
	className = "",
	children,
}) {
	return (
		<Link
			href={href}
			className={`card-link  ${className}`}
			aria-label={ariaLabel}
		>
			{children}
		</Link>
	);
}
