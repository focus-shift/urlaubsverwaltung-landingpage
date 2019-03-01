/* eslint-disable jsx-a11y/anchor-is-valid */
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
					<Link href="/features">
						<a>Features</a>
					</Link>
				</li>
				<li>
					<Link href="/demo">
						<a>Demo</a>
					</Link>
				</li>
				<li>
					<Link href="/faq">
						<a>Faq</a>
					</Link>
				</li>
				<li>
					<Link href="/newsletter">
						<a>Newsletter</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Kontakt</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
