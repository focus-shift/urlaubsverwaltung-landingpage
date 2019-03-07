import React from "react";
import "./benefit-list.css";

export default function BenefitList() {
	return (
		<dl title="Urlaubär Benefits" className="benefit-list">
			<BenefitListItem
				title="Papierlos"
				text="Nie wieder Papierkrieg und scheußliche Excel-Tabellen. Mit dem Urlaubär kannst du deine Urlaubsanträge komplett papierlos verwalten – von der Antragsstellung bis zur Genehmigung."
			/>
			<BenefitListItem
				title="Clever"
				text="Du brauchst dir keine Gedanken darum zu machen, wann welcher Feiertag ist oder den Taschenrechner zücken, um zu berechnen, wie viele Urlaubstage du noch hast. Der Urlaubär weiß Bescheid und du kannst deinen Hirnschmalz sinnvoller einsetzen."
			/>
			<BenefitListItem
				title="Transparent"
				text="Mit dem Urlaubär hast du immer alles im Blick. Wann sind deine Kollegen im Urlaub? Welche Anträge müssen noch genehmigt werden?"
			/>
			<BenefitListItem
				title="Jederzeit"
				text="Du kannst den Urlaubär problemlos auf deinem Smartphone nutzen und dadurch jederzeit und von überall Urlaubsanträge verwalten."
			/>
			<BenefitListItem
				title="Konfigurierbar"
				text="Eisbär, Pandabär oder Grizzly – passe den Urlaubär flexibel an deine Bedürfnisse an."
			/>
			<BenefitListItem
				title="Vielseitig"
				text="Der Urlaubär ist nicht nur Spezialist beim Thema Urlaub, sondern hat auch in Sachen Krankmeldungen und Überstunden ordentlich was auf dem Kasten."
			/>
		</dl>
	);
}

function BenefitListItem({ title, text }) {
	return (
		<>
			<dt>{title}</dt>
			<dd>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="128"
					height="128"
				>
					<circle cx="12" cy="12" r="12" fill="navy" />
				</svg>
				<p>{text}</p>
			</dd>
		</>
	);
}
