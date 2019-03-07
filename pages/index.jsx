import React from "react";
import Page from "../components/Page";
import Benefits from "../components/Benefits";

export default function IndexPage() {
	return (
		<Page>
			<div className="container mx-auto">
				<h1>Home</h1>
				<p className="container mx-auto">
					Waidmanns Heil! Der Jungfer jauchzen die hochnäsig Kleinod. Die
					piesacken Sülze jauchzen. Lümmeltüte und Kesselflicker stibitzen kess
					Drückeberger. Die Kokolores foppen der kess Absacker. Die piesacken
					Stelldichein. Das halsstarrig Panzerkampfwagen. Der dufte
					Springinsfeld auftakeln. Die Haudegen katzbuckeln das feist Dachshund.
					Abort und Quasselstrippe bohnern geflissentlich Rächer.
					Promenadenmischung und Wuchtbrumme stagnieren töricht Lametta. Der
					famos Kesselflicker frickeln. Heidewitzka!
				</p>
				<article>
					<h2>Warum Urlaubär?</h2>
					<p>Einfach, schnell überall benutzbar</p>
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
