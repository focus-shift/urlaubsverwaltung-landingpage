/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NextLink from "next/link";

export default function Link({ className, href, children }) {
	const basePath = process.env.BASE_PATH || "";
	return (
		<NextLink href={basePath + href}>
			<a className={className}>{children}</a>
		</NextLink>
	);
}
