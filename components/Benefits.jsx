import React from "react";

import "./benefits.tailwind.css";

export default function Benefits() {
	return (
		<dl title="Urlaubär Benefits" className="benefits-grid">
			<BenefitItem
				title="Papierlos"
				text="Nie wieder Papierkrieg und scheußliche Excel-Tabellen. Mit dem Urlaubär kannst du deine Urlaubsanträge komplett papierlos verwalten – von der Antragsstellung bis zur Genehmigung."
			/>
			<BenefitItem
				title="Clever"
				text="Du brauchst dir keine Gedanken darum zu machen, wann welcher Feiertag ist oder den Taschenrechner zücken, um zu berechnen, wie viele Urlaubstage du noch hast. Der Urlaubär weiß Bescheid und du kannst deinen Hirnschmalz sinnvoller einsetzen."
			/>
			<BenefitItem
				title="Transparent"
				text="Mit dem Urlaubär hast du immer alles im Blick. Wann sind deine Kollegen im Urlaub? Welche Anträge müssen noch genehmigt werden?"
			/>
			<BenefitItem
				title="Jederzeit"
				text="Du kannst den Urlaubär problemlos auf deinem Smartphone nutzen und dadurch jederzeit und von überall Urlaubsanträge verwalten."
			/>
			<BenefitItem
				title="Konfigurierbar"
				text="Eisbär, Pandabär oder Grizzly – passe den Urlaubär flexibel an deine Bedürfnisse an."
			/>
			<BenefitItem
				title="Vielseitig"
				text="Der Urlaubär ist nicht nur Spezialist beim Thema Urlaub, sondern hat auch in Sachen Krankmeldungen und Überstunden ordentlich was auf dem Kasten."
			/>
		</dl>
	);
}

function BenefitItem({ title, text }) {
	return (
		<>
			<dt className="benefit-title">{title}</dt>
			<dd className="flex flex-col items-center">
				<svg
					className="benefit-image mx-auto"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="128"
					height="128"
				>
					<circle cx="12" cy="12" r="12" fill="navy" />
				</svg>
				<p className="benefit-description">{text}</p>
			</dd>
		</>
	);
}
