import React from "react";

import Page from "../components/Page";

export default function Impressum() {
	return (
		<Page title="Impressum">
			<div className="mx-auto max-w-6xl">
				<h1 className="text-3xl mb-6 mt-6">Impressum</h1>
				<h2 className="text-2xl mb-4">Angaben gemäß § 5 TMG</h2>
				<p className="mb-2">
					synyx GmbH & Co. KG
					<br />
					Gartenstraße 67
					<br />
					76135 Karlsruhe
				</p>
				<p className="mb-2">
					Handelsregister: HRA 104793
					<br />
					Registergericht: Amtsgericht Mannheim
				</p>
				<p className="mb-2">
					<strong>Vertreten durch:</strong>
					<br />
					synyx Verwaltung GmbH
				</p>
				<p className="mb-2">
					Diese vertreten durch:
					<br />
					Thomas Kraft, Markus Daniel, Joachim Arrasz
				</p>
				<p className="mb-6">
					Handelsregister: HRA 107250
					<br />
					Registergericht: Amtsgericht Mannheim
				</p>
				<h2 className="text-2xl mb-4">Kontakt</h2>
				<p className="mb-2">
					Telefon: <a href="tel:+497212038230">+49 721 203823-0</a>
					<br />
					Telefax: +49 721 203823-12
					<br />
					E-Mail:{" "}
					<a href="mailto:info@synyx.de" className="underline">
						info@synyx.de
					</a>
				</p>
				<h2 className="text-2xl mb-4">Umsatzsteuer-ID</h2>
				<p className="mb-2">
					Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
					<br />
					DE249264296
				</p>
				<p className="mb-2">
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
					vor einer Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>
		</Page>
	);
}
