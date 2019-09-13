import React from "react";
import Page from "../components/Page";
import BenefitList from "../components/Benefits";
import Link from "../components/Link";

import "./index.tailwind.css";

export default function IndexPage() {
	return (
		<Page>
			<Stage />
			<Benefits />
		</Page>
	);
}

function Stage() {
	return (
		<div className="frontpage-stage flex justify-center mb-10">
			<div className="overscan-frontpage-stage" />
			<div className="p-8 sm:p-12 md:p-16 lg:p-20">
				<h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 text-center">
					Urlaubsverwaltung geht auch anders!
				</h1>
				<div className="mx-auto md:w-2/3 p-4 md:p-8 max-w-5xl relative">
					<p className="mb-6 text-gray-900 text-xl">
						Schluss mit Papierchaos und langweiliger Software. Wir zeigen dir,
						dass Urlaubsverwaltung auch Spaß machen kann.
					</p>
					<div className="flex flex-col sm:flex-row sm:justify-around">
						<div className="frontpage-teaser-card mb-8 sm:mb-0 sm:mr-4">
							<div className="frontpage-teaser-button">
								<Link
									href="/demo"
									className="mx-auto"
									aria-label="Urlaubsverwaltung Live Demo"
								>
									Live-Demo
								</Link>
							</div>
							<div className="text-gray-900 text-center">
								Unser Demo-System ist nur einen Klick entfernt.
							</div>
						</div>
						<div className="frontpage-teaser-card">
							<div className="frontpage-teaser-button">
								<a
									href="https://registry.beta.urlaubsverwaltung.cloud/"
									className="mx-auto"
								>
									Beta-Phase
								</a>
							</div>
							<div className="text-gray-900 text-center">
								Anmeldung zur kostenlosen Beta-Phase deiner eigenen
								Urlaubsverwaltung.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function NewsletterSubscription() {
	return (
		<iframe
			title="Urlaubsverwaltung Newsletter Anmeldung"
			className="mj-w-res-iframe newsletter-iframe"
			frameBorder="0"
			scrolling="no"
			marginHeight={0}
			marginWidth={0}
			src="https://app.mailjet.com/widget/iframe/4cK4/i9U"
			width="100%"
			height="115px"
		></iframe>
	);
}

function Benefits() {
	return (
		<article className="px-4 mx-auto max-w-6xl">
			<h2 className="text-xl font-semibold mb-6 text-center">
				Beim Urlaubär bist du in besten Pfoten!
			</h2>
			<p className="mx-auto mb-12 text-center max-w-2xl">
				Keine Lust mehr auf Papierchaos, scheußliche Excel-Tabellen und gähnend
				langweilige Software? Du willst übersichtlich, bequem und von überall
				Urlaubsanträge verwalten? Dann probier's doch mal mit unserer
				bärenstarken Urlaubsverwaltung!
			</p>
			<BenefitList />
		</article>
	);
}
