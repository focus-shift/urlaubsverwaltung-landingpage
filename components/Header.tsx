import React from "react";

import Link from "./Link";
import BearIcon from "./BearIcon";
import GithubIcon from "./GithubIcon";
import TwitterIcon from "./TwitterIcon";
import "./header.tailwind.css";

export default class Header extends React.Component {
	header?: HTMLElement;
	navigation?: HTMLElement;
	menuButton?: HTMLElement;
	menuToggle?: HTMLInputElement;
	cleanup: Function;

	state = {
		isMenuOpen: false,
	};

	componentDidMount() {
		const handleBodyClick = event => {
			const target = event.target as HTMLElement;
			const isMenuButton = target === this.menuButton;
			const isMenuToggle = target === this.menuToggle;
			if (
				target.tagName === "A" ||
				(!isMenuButton && !isMenuToggle && !this.isChildOfHeader(event.target))
			) {
				if (this.state.isMenuOpen) {
					this.setState({ isMenuOpen: false });
				}
			}
		};

		document.body.addEventListener("click", handleBodyClick);

		this.cleanup = () => {
			document.body.removeEventListener("click", handleBodyClick);
		};
	}

	componentWillUnmount() {
		this.cleanup();
	}

	isChildOfHeader(node: Node) {
		return isChildOf(this.header, node);
	}

	isChildOfNavigation(node: Node) {
		return isChildOf(this.navigation, node);
	}

	handleMenuButtonKeyPress(event) {
		if (event.key === "Enter" || event.key === " ") {
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
			event.preventDefault();
		}
	}

	handleElementBlur(event) {
		if (this.isChildOfNavigation(event.target)) {
			event.persist();
			// document.activeElement is <body> for a short slot while tabbing through elements
			// therefore stack the check whether navigation should be closed or not
			window.requestAnimationFrame(() => {
				if (!this.isChildOfNavigation(document.activeElement)) {
					this.setState({ isMenuOpen: false });
				}
			});
		}
	}

	render() {
		return (
			<header
				ref={node => (this.header = node)}
				className="bg-blue-900 relative"
				onBlur={event => this.handleElementBlur(event)}
			>
				<nav
					ref={node => (this.navigation = node)}
					className="flex flex-wrap p-2 items-center"
				>
					<Link
						href="/"
						className="flex flex-row items-center z-20"
						aria-label="Urlaubsverwaltung Startseite"
					>
						<BearIcon id="header" width={32} height={32} ariaHidden />
						<span className="text-white pl-2 hidden sm:block">
							Urlaubsverwaltung
						</span>
					</Link>
					<input
						ref={node => (this.menuToggle = node)}
						type="checkbox"
						id="mobile-menu-toggle"
						className="hidden"
						checked={this.state.isMenuOpen}
						onChange={event =>
							this.setState({ isMenuOpen: Boolean(event.target.checked) })
						}
					/>
					<label
						ref={node => (this.menuButton = node)}
						htmlFor="mobile-menu-toggle"
						className="ml-auto sm:hidden text-white z-20"
					>
						Menü
					</label>
					<ul className="navigation-list bg-blue-900 z-10 shadow-2xl sm:shadow-none">
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
								href="https://twitter.com/der_urlaubaer"
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
}

function isChildOf(ancestor: Node, node: Node): boolean {
	if (node.parentNode == null) {
		return false;
	}
	if (node === ancestor) {
		return true;
	}
	return isChildOf(ancestor, node.parentNode);
}
