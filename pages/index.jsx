import React from "react";
import Page from "../components/Page";
import BenefitList from "../components/Benefits";

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
				<div className="mx-auto md:w-2/3 bg-orange-300 p-4 md:p-8 shadow max-w-5xl">
					<p className="mb-6 text-gray-900 text-l text-center">
						Schluss mit Papierchaos und Bürokratie. Wir zeigen dir, dass
						Urlaubsverwaltung auch Spaß machen kann. Trage dich in unseren
						Newsletter ein und erfahre als Erstes von neuen Entwicklungen in
						unserer bärenstarken Anwendung.
					</p>
					<NewsletterSubscription />
				</div>
			</div>
		</div>
	);
}

function NewsletterSubscription() {
	return (
		<form
			action="https://synyx.us20.list-manage.com/subscribe/post?u=1fe1456f5c442625816e0ad3e&amp;id=ec02111d51"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			target="_blank"
			noValidate
		>
			<div className="flex justify-center">
				<div className="flex flex-row w-full">
					<label htmlFor="mce-EMAIL" className="visually-hidden">
						E-Mail-Adresse&nbsp;
					</label>
					<input
						type="email"
						name="EMAIL"
						id="mce-EMAIL"
						placeholder="E-Mail-Adresse"
						className="p-3 flex-grow"
					/>
					<button type="submit" className="p-3 text-white bg-orange-900">
						Eintragen
					</button>
				</div>
				<div
					style={{ position: "absolute", left: "-5000px" }}
					aria-hidden="true"
				>
					<input
						type="text"
						name="b_fccd0eb4b621b298a993066d1_efeb5dbd37"
						tabIndex="-1"
					/>
				</div>
			</div>
		</form>
	);
}

function Benefits() {
	return (
		<article className="px-4 mx-auto max-w-6xl">
			<h2 className="text-xl font-semibold mb-6 text-center">
				Beim Urlaubär bist du in besten Pfoten!
			</h2>
			<p className="mx-auto mb-12 text-center max-w-2xl">
				Keine Lust mehr auf Papierchaos und scheußliche Excel-Tabellen? Du
				willst übersichtlich, bequem und von überall Urlaubsanträge verwalten?
				Dann probier's doch mal mit unserer bärenstarken Urlaubsverwaltung!
			</p>
			<BenefitList />
		</article>
	);
}
