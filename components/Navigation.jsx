import React from "react";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<style jsx>{`
				ul {
					list-style-type: none;
					margin: 1rem 0;
					padding: 0;
					display: flex;
					flex-direction: row;
				}
				li:not(:last-of-type) {
					margin-right: 1rem;
				}
			`}</style>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
