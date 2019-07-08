import React from "react";

import BearIcon, { Sunglasses } from "./BearIcon";
import "./benefits.tailwind.css";

export default function Benefits() {
	return (
		<>
			<dl title="Urlaubär Benefits" className="benefits-grid">
				<BenefitItem
					title="Papierlos"
					text="Nie wieder Papierkrieg und scheußliche Excel-Tabellen. Verwalte Urlaubsanträge ab sofort komplett papierlos – von der Antragsstellung bis zur Genehmigung."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Clever"
					text="Wann ist welcher Feiertag? Wie viele Urlaubstage sind noch übrig? Unsere Anwendung weiß Bescheid und Du kannst Deinen Hirnschmalz künftig sinnvoller einsetzen."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Übersichtlich"
					text="Wann sind Deine Kollegen im Urlaub? Welche Anträge müssen noch genehmigt werden? Mit unserer Anwendung hast Du immer alles im Blick."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Jederzeit"
					text="Selbstverständlich läuft unsere Anwendung auch auf Deinem Smartphone oder Tablet. Dadurch bist Du in der Lage, jederzeit und von überall Urlaubsanträge zu pflegen."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Anpassbar"
					text="Passe die Anwendung flexibel an Deine Bedürfnisse und Workflows an. Ob E-Mail-Benachrichtigungen oder Synchronisation mit dem Firmenkalender, entscheide selbst, was Du brauchst und was nicht."
					image={
						<BearIcon
							width={128}
							height={128}
							className="benefit-image mx-auto"
							title="Bärengesicht"
							description="illustrierted braunes Bärengesicht mit einer schwarzen Sonnenbrille auf."
						>
							<Sunglasses />
						</BearIcon>
					}
				/>
				<BenefitItem
					title="Vielseitig"
					text="Unsere Anwendung ist nicht nur Profi beim Thema Urlaub, sondern hat auch in Sachen Krankmeldungen und Überstunden ordentlich was auf dem Kasten."
					image={BenefitSvg}
				/>
			</dl>
		</>
	);
}

function BenefitItem({ title, text, image }) {
	return (
		<>
			<dt className="benefit-title">{title}</dt>
			<dd className="benefit-description ">
				{image}
				<p className="benefit-description-text">{text}</p>
			</dd>
		</>
	);
}

const BenefitSvg = (
	<BearIcon
		width={128}
		height={128}
		className="benefit-image mx-auto"
		title="Ein Bär"
	/>
);
