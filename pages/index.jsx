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
			<div className="md:w-5/6 p-8 sm:p-12 md:p-16 lg:p-20">
				<h1 className="mb-4 text-white">Urlaubsverwaltung geht auch anders!</h1>
				<p className="mb-12 text-blue-lightest leading-normal">
					Direkt vom Strand aus den nächsten Urlaub beantragen und weiter die
					Sonne genießen? Dank des Urlaubären ist das gar kein Problem. Unsere
					Anwendung mit dem bärenstarken Maskottchen versetzt Dich schon beim
					Beantragen von Urlaub in Urlaubsstimmung. Übersichtlich, bequem und
					von überall Urlaubsanträge verwalten – So macht nicht nur der Urlaub
					Spaß, sondern schon die Urlaubsplanung. Probier's aus und überzeuge
					Dich selbst!
				</p>
				<form>
					<div className="flex justify-center">
						<div className="flex flex-row w-full md:w-3/5">
							<input
								placeholder="EMail"
								type="email"
								className="p-3 flex-grow"
							/>
							<button
								type="submit"
								className="p-3 text-white bg-orange-darkest"
							>
								Anmelden
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

function Benefits() {
	return (
		<article className="px-4">
			<h2 className="mb-6 text-center">
				Beim Urlaubär bist du in besten Pfoten!
			</h2>
			<p className="mx-auto mb-12 text-center max-w-md">
				Keine Lust mehr auf Papierchaos und scheußliche Excel-Tabellen? Du
				willst übersichtlich, bequem und von überall Urlaubsanträge verwalten?
				Dann probier's doch mal mit unserer bärenstarken Urlaubsverwaltung!
			</p>
			<BenefitList />
		</article>
	);
}
