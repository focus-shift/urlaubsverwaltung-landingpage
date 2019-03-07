import React from "react";
import Page from "../components/Page";
import Benefits from "../components/Benefits";

export default function IndexPage() {
	return (
		<Page>
			<div className="container mx-auto">
				<h1>Probier's mal mit Urlaub!</h1>
				<p className="container mx-auto">
					Direkt vom Strand aus den nächsten Urlaub beantragen und die Sonne
					weiter genießen? Mit dem Urlaubär kein Problem!
					Urlaubsplanung leicht gemacht - übersichtlich, bequem und überall
					nutzbar. So macht nicht nur der Urlaub Spaß, sondern auch die
					Urlaubsplanung. Echt bärenstark!
				</p>
				<article>
					<h2>Warum Urlaubär?</h2>
					<p>Beim Urlaubär bist du in besten Pfoten!</p>
					<Benefits />
					<Customers />
				</article>
			</div>
		</Page>
	);
}

function Customers() {
	return <div>Wir sind in guten Pfoten</div>;
}
