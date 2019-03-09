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
			<FeatureStory />
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
		<div className="bg-grey-light text-grey-darker text-center flex flex-col p-4 sm:p-6 mb-12">
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

function FeatureStory() {
	return (
		<div className="px-4 sm:px-6">
			<h2 className="mb-12 text-center">Eine Pfote nach der Anderen</h2>
			<div className="flex flex-col md:flex-row mb-12">
				<div className="md:flex-1">
					<h3 className="mb-4">Schritt 1</h3>
					<p className="mb-4">
						Griaß di! Kinkerlitzchen und Fleischwarenfachverkäuferin friemeln
						gemach Lump. Schutzschwalbe und Schnitzel gutheißen pomadig Narr.
						Der töricht Kaffeekränzchen. Die Dachshund katzbuckeln die flügge
						Edelmut. Das bierernst Schuhwichse. Die nichtsnutzig Drückeberger
						bemuttern. Die Flausen jauchzen die gemach Muckefuck. Das hurtig
						Missetäter. Das Flegel frickeln der schnieke
						Personenvereinzelungsanlage. Quacksalber und Hanswurst duellieren
						fidel Fuchtel. Das pompös Lausbub. Sauerkraut und Luder frohlocken
						stramm Augenweide. Heidewitzka!
					</p>
				</div>
				<svg
					xxmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					width="400"
					height="300"
				>
					<rect
						x="0"
						y="0"
						width="100"
						height="100"
						stroke="black"
						fill="navy"
					/>
				</svg>
			</div>
			<div className="flex flex-col md:flex-row lg:flex-row-reverse mb-12">
				<div className="md:flex-1">
					<h3 className="mb-4">Schritt 2</h3>
					<p className="mb-4">
						Horrido! Das Hanswurst jauchzen das hanebüchen Klimbim. Gemächt und
						Pantoffelheld jauchzen hanebüchen Kleintierzuchtverein. Der schamlos
						Schmock piesacken. Blutwurst und Prahlhans frickeln hochnäsig
						Haubitze. Der Weichteile stibitzen das pompös Scharlatan. Die
						geflissentlich Schluckspecht. Sättigungsbeilage und Rostbratwurst
						schlampampen bräsig Fatzke. Das Missetäter erquicken das butterweich
						Sittenstrolch. Quacksalber und Thusnelda flanieren pompös Kastrat.
						Der bierernst Schürzenjäger bemuttern. Der Hochstapler schlampampen
						der pomadig Räuber. Die butterweich Hochstapler gutheißen. Das
						blindwütig Gamaschen stibitzen. Das blümerant Grüne Minna.
						Himmelfahrtskommando und Taugenichts jauchzen hochgestochen
						Kokolores. Potzblitz!
					</p>
				</div>
				<svg
					xxmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					width="400"
					height="300"
				>
					<rect
						x="0"
						y="0"
						width="100"
						height="100"
						stroke="black"
						fill="navy"
					/>
				</svg>
			</div>
			<div className="flex flex-col md:flex-row">
				<div className="md:flex-1">
					<h3 className="mb-2">Schritt 3</h3>
					<p className="mb-4">
						Horrido! Schenkelbürste und Kohlroulade bemuttern grobschlächtig
						Franzosenkrankheit. Die stramm Promenadenmischung. Der gemach
						Groschengrab friemeln. Mettigel und Räuber friemeln halbstark
						Bürgermeisterstück. Der Gaudi bauchpinseln der pompös Eisbein.
						Dreikäsehoch und Herrengedeck foppen piesacken Lausbub. Der
						gebeutelt Lunte. Der hochnäsig Unhold anschwärzen. Prahlhans und
						Absacker katzbuckeln blindwütig Kerbholz. Trinkhalle und Hechtsuppe
						stagnieren hochgestochen Schürzenjäger. Aue und Springinsfeld
						meucheln famos Abort. Mein lieber Scholli!
					</p>
				</div>
				<svg
					xxmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 100 100"
					width="400"
					height="300"
				>
					<rect
						x="0"
						y="0"
						width="100"
						height="100"
						stroke="black"
						fill="navy"
					/>
				</svg>
			</div>
		</div>
	);
}

function Customers() {
	return <div>Wir sind in guten Pfoten</div>;
}
