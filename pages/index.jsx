import React from "react";
import Page from "../components/Page";
import Benefits from "../components/Benefits";

import "./index.tailwind.css";

export default function IndexPage() {
	return (
		<Page>
			<Stage />
			<article>
				<h2>Warum Urlaubär?</h2>
				<p>Beim Urlaubär bist du in besten Pfoten!</p>
				<Benefits />
				<Customers />
			</article>
			<Integration />
		</Page>
	);
}

function Stage() {
	return (
		<div className="frontpage-stage flex justify-center">
			<div className="md:w-5/6 p-8 sm:p-12 md:p-16 lg:p-20">
				<h1 className="mb-4">Probier's mal mit Urlaub!</h1>
				<p>
					Direkt vom Strand aus den nächsten Urlaub beantragen und die Sonne
					weiter genießen? Mit dem Urlaubär kein Problem! Urlaubsplanung leicht
					gemacht - übersichtlich, bequem und überall nutzbar. So macht nicht
					nur der Urlaub Spaß, sondern auch die Urlaubsplanung. Echt bärenstark!
				</p>
			</div>
		</div>
	);
}

function Integration() {
	return (
		<div className="bg-grey-light text-grey-darker text-center flex flex-col p-4 sm:p-6">
			<h2 className="mb-2 sm:mb-4">Verzahnung</h2>
			<ul className="list-reset flex flex-row mx-auto">
				<li className="p-4">Foo</li>
				<li className="p-4">Bar</li>
				<li className="p-4">Baz</li>
				<li className="p-4">Bum</li>
			</ul>
		</div>
	);
}

function Customers() {
	return <div>Wir sind in guten Pfoten</div>;
}
