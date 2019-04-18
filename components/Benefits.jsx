import React from "react";

import "./benefits.tailwind.css";

export default function Benefits() {
	return (
		<>
			{BenefitSvgDefinition}
			<dl title="Urlaubär Benefits" className="benefits-grid">
				<BenefitItem
					title="Papierlos"
					text="Nie wieder Papierkrieg und scheußliche Excel-Tabellen. Verwalte Urlaubsanträge ab sofort komplett papierlos – von der Antragsstellung bis zur Genehmigung."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Clever"
					text="Du brauchst Dir keine Gedanken mehr darum zu machen, wann welcher Feiertag ist oder den Taschenrechner zücken, um Urlaubstage zu berechnen. Unsere Anwendung weiß Bescheid und Du kannst Deinen Hirnschmalz sinnvoller einsetzen."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Übersichtlich"
					text="Mit unserer Anwendung hast Du immer alles im Blick. Wann sind Deine Kollegen im Urlaub? Wie viele Urlaubstage hast Du noch übrig? Welche Anträge müssen noch genehmigt werden?"
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Jederzeit"
					text="Selbstverständlich läuft unsere Anwendung auch problemlos auf Deinem Smartphone oder Tablet. Dadurch bist Du in der Lage, jederzeit und von überall Urlaubsanträge zu pflegen."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Anpassbar"
					text="Passe die Anwendung flexibel an Deine Bedürfnisse und Workflows an. Ob E-Mail-Benachrichtigungen oder Synchronisation mit dem Firmenkalender, schalte an oder aus, was Du brauchst oder auch nicht."
					image={BenefitSvg}
				/>
				<BenefitItem
					title="Vielseitig"
					text="Unsere bärenstarke Anwendung ist nicht nur Profi beim Thema Urlaub, sondern hat auch in Sachen Krankmeldungen und Überstunden ordentlich was auf dem Kasten."
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
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 425.9 450.3"
		width="128"
		height="128"
		className="benefit-image mx-auto"
	>
		<use xlinkHref="#benefit-icon-svg" />
	</svg>
);

const BenefitSvgDefinition = (
	<svg style={{ display: "none" }}>
		<defs>
			<linearGradient
				id="benefit-icon-svg-gradient"
				x1="213"
				x2="213"
				y1="450.3"
				y2="24.4"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#83ccd6" />
				<stop offset="1" stopColor="#c8e2c9" />
			</linearGradient>
		</defs>
		<defs>
			<g id="benefit-icon-svg">
				<circle
					cx="213"
					cy="237.3"
					r="213"
					fill="url(#benefit-icon-svg-gradient)"
				/>
				<path
					fill="#7e5635"
					d="M395.1 224.7c-7-22.4-13.5-42.5-19.2-59.3-17-50.7-34.3-149-162.3-149-130.8 0-145 98.3-162.2 149-5.7 16.8-12.3 36.9-19.4 59.3l-23 74a213 213 0 0 0 408.5-2c-8-25.8-15.4-50-22.4-72z"
				/>
				<path
					fill="#7e5635"
					d="M228.7 0a123 123 0 0 0-49.1 20.1H237s6.4-10 10.3-13.4a85.2 85.2 0 0 0-29.8 6.5c3.4-6.4 6.1-8.8 11-13.2z"
				/>
				<path
					fill="#f4c38e"
					d="M213.5 208.8c-63.4 0-63.4 26.9-63.4 60 0 33.2 15.5 66.7 63.4 66.7s63.4-33.5 63.4-66.6c0-33.2 0-60.1-63.4-60.1z"
				/>
				<path
					fill="#202020"
					d="M245.7 245.4a36 36 0 0 1-32.2 24 36 36 0 0 1-32.2-24c-2.8-10 5.6-16 10.5-17.3 10.5-2.8 33-3.2 43.4 0 4.8 1.4 13.3 7.4 10.5 17.3z"
				/>
				<path
					fill="none"
					stroke="#333"
					strokeLinecap="round"
					strokeMiterlimit="10"
					strokeWidth="7.5"
					d="M192 238.5a56.7 56.7 0 0 1 41.9 0"
				/>
				<circle cx="289.2" cy="186.9" r="16.9" fill="#202020" />
				<circle cx="292.3" cy="181.3" r="5.6" fill="#fbfbfb" />
				<circle cx="136.7" cy="186.9" r="16.9" fill="#202020" />
				<circle cx="139.8" cy="181.3" r="5.6" fill="#fbfbfb" />
				<circle cx="100.4" cy="57.8" r="42.3" fill="#7e5635" />
				<circle cx="100.4" cy="57.8" r="27.5" fill="#644023" />
				<circle cx="325.6" cy="57.8" r="42.3" fill="#7e5635" />
				<circle cx="325.6" cy="57.8" r="27.5" fill="#644023" />
			</g>
		</defs>
	</svg>
);
