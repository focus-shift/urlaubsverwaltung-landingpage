/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NextLink from "next/link";

interface LinkProps {
	href: string;
	className?: string;
	tabIndex?: -1 | 0;
	children: any;
}

export default function Link({
	className,
	href,
	tabIndex = 0,
	children,
}: LinkProps) {
	return (
		<NextLink href={href}>
			<a className={className} tabIndex={tabIndex}>
				{children}
			</a>
		</NextLink>
	);
}
