import React from "react";

import Page from "../components/Page";

export default function Impressum() {
	return (
		<Page title="Impressum">
			<div className="mx-auto max-w-6xl">
				<h1 className="text-2xl font-semibold px-4 mt-12 mb-6">Impressum</h1>
				<h2 className="px-4 mb-4">
					Inhalt, fachliche & technische Gestaltung:
				</h2>
				<address className="px-4 mb-4">
					<p className="mb-4">
						synyx GmbH & Co. KG
						<br />
						Gartenstraße 67
						<br />
						D-76135 Karlsruhe
					</p>
					<p className="mb-4">
						Telefon: +49 721 203823-0
						<br />
						Fax: +49 721 203823-12
						<br />
						E-Mail: info@synyx.de
						<br />
						https://synyx.de
					</p>
					<p className="mb-4">
						Blog: http://blog.synyx.de
						<br />
						IRC: irc://irc.synyx.de #synyx
					</p>
				</address>
				<p className="px-4 mb-4">
					Sitz der Gesellschaft: Karlsruhe
					<br />
					Registergericht: Amtsgericht Mannheim
					<br />
					Handelsregisternummer: HRA 104793
					<br />
					USt-IdNr.: DE249264296
					<br />
					Komplementärin: synyx Verwaltung GmbH
					<br />
					Sitz der Gesellschaft: Karlsruhe
					<br />
					Geschäftsführer: Thomas Kraft, Markus Daniel, Joachim Arrasz
					<br />
					Handelsregisternummer: HRB 107250
				</p>
				<p className="px-4 mb-4">
					Webmaster: Thomas Kraft
					<br />
					Inhaltlich Verantwortlicher gemäß § 6 MDStV: Thomas Kraft
				</p>
				<p className="px-4">
					Die allgemeinen Geschäftsbedingungen (AGBs) der synyx GmbH & Co. KG
					können Sie hier einsehen{" "}
					<a
						href="https://synyx.de/assets/downloads/AGB_synyx_17.pdf"
						download
						className="text-blue underline"
					>
						(PDF-Dokument, 15 Seiten)
					</a>
				</p>
			</div>
		</Page>
	);
}
