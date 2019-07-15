/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NextLink from "next/link";

interface LinkProps {
	href: string;
	className?: string;
	children: any;
}

export default function Link({ className, href, children }: LinkProps) {
	const basePath = process.env.BASE_PATH || "";
	return (
		<NextLink href={href} as={basePath + href}>
			<a className={className}>{children}</a>
		</NextLink>
	);
}
