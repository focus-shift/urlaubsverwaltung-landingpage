import React from "react";

import "./benefits.tailwind.css";

export default function Benefits() {
	return (
		<dl title="Urlaubär Benefits" className="benefits-grid">
			<BenefitItem
				title="Papierlos"
				text="Nie wieder Papierkrieg und scheußliche Excel-Tabellen. Verwalte Urlaubsanträge ab sofort komplett papierlos – von der Antragsstellung bis zur Genehmigung."
				image={PlaceHolderImage}
			/>
			<BenefitItem
				title="Clever"
				text="Du brauchst Dir keine Gedanken mehr darum zu machen, wann welcher Feiertag ist oder den Taschenrechner zücken, um Urlaubstage zu berechnen. Unsere Anwendung weiß Bescheid und Du kannst Deinen Hirnschmalz sinnvoller einsetzen."
				image={PlaceHolderImage}
			/>
			<BenefitItem
				title="Übersichtlich"
				text="Mit unserer Anwendung hast Du immer alles im Blick. Wann sind Deine Kollegen im Urlaub? Wie viele Urlaubstage hast Du noch übrig? Welche Anträge müssen noch genehmigt werden?"
				image={PlaceHolderImage}
			/>
			<BenefitItem
				title="Jederzeit"
				text="Selbstverständlich läuft unsere Anwendung auch problemlos auf Deinem Smartphone oder Tablet. Dadurch bist Du in der Lage, jederzeit und von überall Urlaubsanträge zu pflegen."
				image={PlaceHolderImage}
			/>
			<BenefitItem
				title="Anpassbar"
				text="Passe die Anwendung flexibel an Deine Bedürfnisse und Workflows an. Ob E-Mail-Benachrichtigungen oder Synchronisation mit dem Firmenkalender, schalte an oder aus, was Du brauchst oder auch nicht."
				image={PlaceHolderImage}
			/>
			<BenefitItem
				title="Vielseitig"
				text="Unsere bärenstarke Anwendung ist nicht nur Profi beim Thema Urlaub, sondern hat auch in Sachen Krankmeldungen und Überstunden ordentlich was auf dem Kasten."
				image={PlaceHolderImage}
			/>
		</dl>
	);
}

function BenefitItem({ title, text, image }) {
	return (
		<>
			<dt className="benefit-title">{title}</dt>
			<dd className="flex flex-col items-center">
				{image}
				<p className="benefit-description">{text}</p>
			</dd>
		</>
	);
}

const PlaceHolderImage = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 297.5 296"
		width="128"
		height="128"
		className="benefit-image mx-auto"
	>
		<path
			fill="#4f4f4f"
			d="M147.2 0C230.7-.3 297 64 297.5 146.3a147.5 147.5 0 0 1-149 149.7C66 296 .3 231.7 0 150.8-.3 65.4 63.2.3 147.2 0z"
		/>
		<path
			fill="#fff"
			d="M148.7 75.1c-65.2 0-65.2 32.6-65.2 73 0 40.2 29.2 72.8 65.2 72.8S214 188.3 214 148c0-40.3 0-72.9-65.3-72.9zm17 60.3a14.5 14.5 0 0 0-9.8 14.9l3.8 47.4a6 6 0 0 1-1.7 3.9 12.3 12.3 0 0 1-18.5 0 6 6 0 0 1-1.7-3.9l3.8-47.4c.5-6.6-3.5-12.8-9.8-15-12-4-20.4-12.4-20.4-22 0-13.8 16.7-24.9 37.3-24.9s37.4 11.1 37.4 24.8c0 9.7-8.3 18-20.4 22.2z"
		/>
	</svg>
);
